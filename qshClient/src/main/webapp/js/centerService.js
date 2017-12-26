function step_tp(){
   popup({type:'info',text:'您的银行卡信息还在审核中，请等待客服审核后通知您'});
}
define(['config'],function(_config){
   
   function CenterService(){

   }	

   CenterService.prototype = {
   		/*
		* module  对应的模块名称
		* options 参数列表
   		*/
   		getInterested : function(module, options ){ 
   			avalon.ajax({
   				url : _config.apiBaseUrl + '/profile/profileCenter.do',
   				data : {},
   				type: "post",
   				dataType:'json',
   				success:function( response){
                  if(response.code == 1) {
                        module.vip = response.data.vipInfo;
                        for( var attr in module.redeemFlag.$model ) {
                           if( response[attr] ) {
                              module.redeemFlag[attr] = response[attr];
                           }
                        }                           
                        var interest = response.data.interestedData['data'];
                        //interest.principal.formatMoney();
                        interest.principal = parseFloat(interest.principal).formatMoney();;
                        interest.balance = parseFloat(interest.balance).formatMoney();;
                        interest.freezeAmount = parseFloat(interest.freezeAmount).formatMoney();;
                        interest.proInvest = parseFloat(interest.proInvest).formatMoney();;
                        interest.hfAmount = parseFloat(interest.hfAmount).formatMoney();;
                        interest.interested = parseFloat(interest.interested).formatMoney();;
                        interest.totalInterest = parseFloat(interest.totalInterest).formatMoney();;
                        module.interested = interest;
                        module.securityData = response.data.securityData['data'];
						      module.colourHouseProducts = response.data.colourHouseProducts ?response.data.colourHouseProducts:[];
                        module.isLandProductDataVisable = response.data.isLandProductDataVisable ? response.data.isLandProductDataVisable : 0;
                        module.colourHouseFanPiaoCompanyVisable = response.data.colourHouseFanPiaoCompanyVisable ? response.data.colourHouseFanPiaoCompanyVisable : 0;
                        for( var i = 0; item = interest.interestedList[i++];) {
                           if(item.product_name.indexOf('新手计划') > -1 ) {

                              module.productShow.plan = true
                           } else if(item.product_name.indexOf('好运') > -1 ) {
                              module.productShow.hyb = true;
                           }
                        }

                        var landProductData = response.data['landProductData'];
                        if(  landProductData ) {
                           module.proJXB = landProductData['data'][0];
                           //module.proAdb = landProductData['data'][1];
                        }

         				   var billList = response.data.billingData['data'];

                        var verifyList = response.data.securityData['data'];
                        
                        var arr = [{
                           name : "pwd",
                           status : 1
                        },{
                           name : "mobilePhone",
                           status : 1
                        }],list = [];


                        //如果企业用户就增加企业认证
                        if( response.data.prise ) { 

                           module.prise = response.data.prise;
                           var c  = response.data.prise.auditStatus == 3 ? 1 : 0;
                           arr.push({
                              name : "prise",
                              step : response.data.prise.auditStep,
                              status : c
                           });

                           var auditStep = response.data.prise.auditStep;
                           var h = '';

                           if( auditStep == 1) {
                              h = '企业实名认证：未认证<a href="https://www.qianshenghua.com/account/toEnterpriseAuth.do?authStep=9" class="cmoney_linked">点击去完善</a>';
                           } else if( auditStep == 2 ) {
                              h = '企业实名认证：未提交资质照片<a href="https://www.qianshenghua.com/account/toEnterpriseAuth.do" class="cmoney_linked">点击去完善</a>';
                           } else if( auditStep == 3 ) {
                              h = '企业实名认证：未绑定银行卡<a href="https://www.qianshenghua.com/account/toEnterpriseAuth.do" class="cmoney_linked">点击去完善</a>';
                           } else if( auditStep == 4 ) {
                              h = '企业实名认证：待汇入对公银行账户资金';
                           } else if( auditStep == 5 ) {
                              h = "企业实名认证：待客服审核";
                           } else if( auditStep == 6 ) {
                              h = '企业实名认证：未验证绑卡金额<a href="https://www.qianshenghua.com/account/toEnterpriseAuth.do" class="cmoney_linked">点击去完善</a>';
                           } else if( auditStep==7 ) {
                              h = '您的企业认证信息因'+response.data.prise.comment+'审核不通过，请重新认证<a href="https://www.qianshenghua.com/account/toEnterpriseAuth.do?authStep=7" class="cmoney_linked">点击去完善</a>';
                           }
                           module.noticeStr = h;
                        }
                        
         					billList.forEach(function( el ){
         						if( el.type == 1 ) {
         							el.typeName = "充值";
         						} else if( el.type == 2 ) {
                              el.typeName = "提现";
                           }  
                           //格式化mark
                           if( el.remark == 'hf' ) {
                              el.remark = "汇付";
                           }
         					});

         					
                        module.billList = billList;

         					for( attr in verifyList ) {
         						if( attr == 'phone' || attr == 'avatar' || attr=='mobilePhone') {
         							continue;
         						}
                           if( CONFIG.accountType == 2  ) {
                              if( attr == 'idNo' ) continue;
                           }

                           if( attr == 'bankCard' ) {
                              var s = verifyList[attr] == 3 ? 1 : 0;
                              arr.push({
                                 name : attr,
                                 status : s,
                                 bankStatus : verifyList[attr]
                              })  
                           } else {
                              arr.push({
                                 name : attr,
                                 status : verifyList[attr]
                              })                             
                           }

         					}
                        //console.log( arr );
         					arr.sort(function(x, y){
      					    return x.status < y.status ? 1:-1;
      					   });
                        
                        //console.log( CONFIG.accountType);

         					arr.forEach(function( el ){
         						var className = '';
         						if( el.name == 'idNo' ) {
         							className = el.status ? 'icon icon-cname-done' : 'icon icon-cname';
                              var event = !el.status ? 'var onclick="HHN.dialog.realNameCert();"' : "";
         							list.push('<a href="javascript:;" '+event+' title="实名认证" class="'+className+'"></a>');
         						} else if( el.name == "payPassword" ){
         							className = el.status ? "icon icon-cpsw-done" : "icon icon-cpsw";
                              var event = el.status ? 'onclick="HHN.dialog.updateTradePsw();"' : 'onclick="HHN.dialog.setTradePsw(\''+_mobilePhone+'\')"';
         							list.push('<a href="javascript:;" '+event+' title="交易密码" class="'+className+'"></a>');
         						} else if( el.name == 'mobilePhone' ) {
         							className = el.status ? "icon icon-cphone-done" : "icon icon-cphone";
                              var href = el.status ? "https://www.qianshenghua.com/view/center-index.jsp#!/safe" : "javascript:;" ;
         							list.push('<a href="'+href+'" title="手机认证" class="'+className+'"></a>');
         						} else if( el.name == "prise") {
                              className = el.status ? "icon icon-ctrade-done" : "icon icon-ctrade";
                              var href = "javascript:;"
                              var event = '';
                              if( el.step ==  4  ||  el.step == 5 ) {
                                  event = 'onclick="step_tp();"';
                              } else if( el.step == 7 ) {
                                 href= "https://www.qianshenghua.com/account/toEnterpriseAuth.do?authStep=7";
                              } else if ( response.data.prise.auditStep == 0 && response.data.prise.auditStatus==3 ){
                                 href = "javascript:;"
                              } else {
                                 href ="https://www.qianshenghua.com/account/toEnterpriseAuth.do";
                              }
                              list.push('<a href="'+href+'"  '+event+' title="企业认证" class="'+className+'"></a>');
                           } else if (el.name == 'bankCard' ) {
                              if( CONFIG.accountType == 0 ) {
            							className = el.bankStatus && el.bankStatus==3 ? "icon icon-cbank-done" : "icon icon-cbank";
                                 //绑卡的事件
                                 if( el.bankStatus && el.bankStatus == 2 ) {
                                    event = 'onclick="continueMoneyVerify();"';
                                 } else {
                                    event = 'onclick="recharge(2);"'
                                 } 
            							list.push('<a href="javascript:;" '+event+' title="银行卡号" class="'+className+'"></a>');
                              } else if( CONFIG.accountType == 2 ) {
                                 className = response.data.prise.auditStatus==3 ? "icon icon-cbank-done" : "icon icon-cbank";
                                 var href = "javascript:;"
                                 var event = '';
                                 if( response.data.prise.auditStep ==  4  ||  response.data.prise.auditStep == 5 ) {
                                     event = 'onclick="step_tp();"';
                                 } else if( response.data.prise.auditStep == 7 ) {
                                    href= "https://www.qianshenghua.com/account/toEnterpriseAuth.do?authStep=7";
                                 } else if( response.data.prise.auditStep == 0 && response.data.prise.auditStatus==3 ){
                                    href = "javascript:;"
                                 } else {
                                    href ="https://www.qianshenghua.com/account/toEnterpriseAuth.do";
                                 } 
                                 list.push('<a href="'+href+'"  '+event+' title="银行卡号" class="'+className+'"></a>');                                
                              }
         						} else if( el.name == 'email' ) {
         							className = el.status ? "icon icon-cmail-done" : "icon icon-cmail";
                              var event = !el.status ? 'onclick="HHN.dialog.certEmail()"' : "";
         							list.push('<a href="javascript:;" '+event+' title="电子邮箱" class="'+className+'"></a>');
         						} else if (el.name == 'pwd') {
         							className = el.status ? "icon icon-cpsw-done" : "icon icon-cpsw";
         							list.push('<a href="javascript:;" title="登录密码" onclick="HHN.dialog.updateLoginPsw();" class="'+className+'"></a>');   							
         						}
         					});

         					module.verifyList = list.join('');	
                        module.done = 1;
         				} else if( response.code == -10000 || response.code == -1){
                           location.href = "https://www.qianshenghua.com/login/index.do";
                     }     
               },
   				error:function(){
   					//显示错误信息
   				}
   			})
   		}
   };


   var ins = new CenterService;
   return ins;


});