/*
* 定义个人中心的主controller
*/

define(['base','centerService'],function(base,centerService){

   var _avatar = window._avatar || '';
   var _mobilePhone=window._mobilePhone||'';
   var _username = window._username || '';
   var CONFIG   = window.CONFIG || {};
   var usrCustId = window.usrCustId || '';

	//定义公用的控制器
	avalon.filters.parseNum = function(str, args){
    	args = args || 2;
    	return !isNaN(str) ? parseFloat(str).toFixed(args) : '';     
    }

    //替换手机号显示 
    avalon.filters.replaceStr = function(str, start, offset){
    	if( str.length < start + offset ) {
    		return str;
    	}
	    start = start || 3;
		offset = offset || 4;
		var ret = [],arr = [];	

		arr = str.split('');
		ret = arr.slice(0,start);

		var repeat = '';
		for( var  i = 0; i < offset; i++ ) {
			repeat +="*";
		}

		ret.push(repeat);
		ret.push( arr.slice(start+1,offset+offset).join('') );
		return ret.join('');
    }

    var vmodel = avalon.define('root',function(vm){
        vm.interested = {};
        vm.prise = {};
        vm.noticeStr = '';
        vm.verifyList = "";
        vm.billList = [];
        vm.securityData = {};
        vm.colourHouseData = {};
        vm.colourHouseProducts = [];
        vm.isLandProductDataVisable = 0;
        vm.colourHouseFanPiaoCompanyVisable = 0;
        vm.avatar = _avatar;
        vm.phone = _mobilePhone;
        vm.username = _username;
        vm.usrCustId = usrCustId;
        vm.vip = {};
        vm.source = window._source || ''; 
        vm.done = 0;  
        vm.incomeTipStyle = -1;
        vm.headerTplUrl = "https://www.qianshenghua.com/view/html/header.html?v=20170627"; //要引入的公共头部
        vm.sideBarTplUrl = "https://www.qianshenghua.com/view/html/sideBar.html?v=201702241526";  
        vm.footerTplUrl = "https://www.qianshenghua.com/view/html/footer.html?v=201702241526";
        vm.redeemFlag = {
           adbFlag : 0,
           jxbFlag : 0,
           rlbFlag : 0,
           ylbFlag : 0 
        };
        vm.productShow = {
            hyb : false,
            plan : false
        },
		vm.cur = 0;
		vm.headerTop = '0px';
		vm.totalMoney = '';
		vm.proJXB = {};

		vm.proAdb = { //默认小钱库
                period:1,
                product_rate_id:50,
                rate:.05,
                product_name:'月利宝',
                coefficient:100,
                channel:0,
                sub_channel:2
            };

        vm.nav = 1;
        vm.navIndex = window.navIndex||-1;
        if(location.href.indexOf('center-index.jsp')>-1)vm.navIndex = 7;
        vm.subnav = '';
        vm.isHuiFu = 0;
		vm.accountType = CONFIG.accountType;
		
		vm.navToggle = function( index ){
	        if ($(this).parent().hasClass('on')) {
                vm.nav = '';
	        } else {
                vm.nav = index;
	        }

            if( index == 1 ) {
                location.href = "https://www.qianshenghua.com/view/center-index.jsp";
            }
		};
        vm.incomeTip = function(type){
            vm.incomeTipStyle = type;
        }

		vm.popQrcode = function(){
			dialog({
	    	    quickClose: true,
	    	    content: '<img src="https://static.hehenian.com/p/images/qrcode_258x258_wx.jpg">'
	    	}).showModal();			
		};

		vm.proSel = function(val){
            for(var key in val){
                try {
                    vm.proAdb[key] = val[key];
                }
                catch(e){console.log(e)}
            }
            $('#expectedReturn').text(0);
            if( val.product_rate_id ==  57 ) {
                $("#argLink").html("《养老宝服务协议》");  
            } else {
                $("#argLink").html("《月利宝服务协议》");  
            }
           
		}

        vm.bankMangerLink = function(){
            if(avalon.vmodels.bankCtrl){
                avalon.vmodels.bankCtrl.data.code=-2
                avalon.vmodels.bankCtrl.getData();
            }
        }


		vm.getExpectedReturn = function (){
            var money = $('#money').val();
            if(isNaN(money)){
                $('#expectedReturn').text(0);
                return;
            }
            if(money == ""){
                $('#expectedReturn').text(0);
                return;
            }

            $(".inputBox").css("border","1px solid #00ccff");
            $(".notice").css("opacity","1");
            $(".excessError").css("display","none");
            var Rate = vm.proAdb.rate;
            var mounth = $('#mounth').val();
            var expectedReturn = money*Rate*mounth/12;
            if(expectedReturn>10000){
                expectedReturn = floor((expectedReturn/10000),2)+'万';
                $('#expectedReturn').text(expectedReturn);
            }else{
                $('#expectedReturn').text(floor(expectedReturn,2));
            }			
		}

		//设置头像
		if( _avatar.indexOf("default") > -1 ) {
			vm.avatar = "https://static.hehenian.com/p/images/avators.png";
		}

        vm.setLogin = function(){
            var loginName = decodeURIComponent(HHN.getCookie('loginName'));
            if(loginName&&location.pathname.indexOf('.html')>-1){
                //loginName = loginName.replace(/(\d{3})(\d{4})(\d{4})/,function($0,$1,$2,$3){return $1+'****'+$3});
                vm.phone = loginName;
            }
                // $('.login_bar').removeClass('login_bar').addClass('login_in');
                // $('.login_app').siblings('p').remove();
                // $('.login_app').before('<div class="login_info"><a href="https://www.qianshenghua.com/view/center-index.jsp"> <i class="top_icon top_icon_info"></i> '+loginName+' </a> <a href="https://www.qianshenghua.com/login/loginout.do" class="login_out"> 退出 </a></div>'); }
                $('.login_out').mousedown(function(){
                    HHN.setCookie('loginName','');
                })
        }

    });



	base.topNavFixed(vmodel);
	if(window._avatar!==undefined&&window._mobilePhone!==undefined&&window._username!==undefined)centerService.getInterested(vmodel, {}); 
    
    return avalon.controller(function($ctrl) {
        $ctrl.$vmodels = [vmodel]
        // 加载数据
        $ctrl.$onEnter = function(param, rs, rj) {
           
        }

        // 初始化
        $ctrl.$onRendered = function() {
        	new buy({
		        $money: $('#money'), //投资金额
		        $balanceSpan: $('#balanceSpan'), //用户余额
		        $expectedReturn: $('#expectedReturn'), //预期收益
				$interestDate: $('#interestDate'), //计息日期
				$checkbox: $('#checkbox'),//是否同意协议
				$month: $('#mounth'),//所选产品期次
				$rate: $('#rate'), //所选产品年利率
		        $rateId: $('#rateId'), //所选产品产品id
				$productName: $('#productName'), //所选产品产品名称
				$coefficient: $('#coefficient'), //起投金额
				$channel: $('#channel'), //渠道
				$sub_channel: $('#sub_channel'),	//子渠道
		        $buyBtn: $("#buyBtn"), //购买按钮
                $isSendSms : false
		     });
        }

    })


});

