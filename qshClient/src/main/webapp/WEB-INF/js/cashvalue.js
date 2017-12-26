function Cashvalue(opts) {
    $.extend(this, {
		$bankId: null,
	    $money: null,
	    $vericode: null,
        $submit: null,
		$getcode: null,
		$form: null,
		$error: null,
		$pchannel: null,
		$token: null,
		$externalRefNumber: null
    }, opts || {});
}
Cashvalue.prototype = {
		
		countdown: function (){
			this.$getcode.addClass('disabled').html('60秒后可重新获取');
        	//elem.addClass('disabled').html('60秒后可重新获取');
        	var step = 60,
        	that = this,
        	interval = setInterval(function(){
        		if(!--step){
        			clearInterval(interval);
        			that.$getcode.html('重新获取').removeClass('disabled');
//        			that.$getcode.html('重新获取').attr('disabled',null);
        			return;
        		}
        		that.$getcode.html(step+'秒后可重新获取');
        	}, 1000);
        },
        countdown4quickpay: function(){
        	this.$getcode.addClass('disabled').html('120秒');
        	window.STEP = 120,
        	that = this,
        	interval = setInterval(function(){
        		if(--STEP<0){
        			clearInterval(interval);
        			that.$getcode.html('重新获取').removeClass('disabled');
        			
        			that.$money.attr('disabled', null);
        			return;
        		}
        		that.$getcode.html(STEP+'秒');
        	}, 1000);
        },
//	checkAgreement: function() {
//        return this.$checkbox.attr('checked');
//    },
    rechargeEvents: function() {
        var that = this;
        
        this.$form.delegate('input[type="text"]', 'focus', function(){
        	that.$error.hide();
    	});
		this.$money.on('input', function() {
			var self = $(this),
            val = self.val().replace(/[^\d]/g, '');
            self.val(val);
			
//			if(that.$pchannelTxt.val()=='LLPAY' ){
//				if (that.$money.val() && that.checkAgreement()) {
//				   that.$submit.attr('disabled', null);
//				} else {
//				   that.$submit.attr('disabled', 'disabled');
//				}
//			}
//			else{
				if (that.$money.val() && that.$vericode.val()) {
					that.$submit.removeClass('disabled').html('确认');
//				   that.$submit.attr('disabled', null);
				} 
//				else {
//				   that.$submit.attr('disabled', 'disabled');
//				}
//			}
        });
		this.$vericode.on('input', function() {
            if (that.$money.val() && that.$vericode.val()) {
            	that.$submit.removeClass('disabled').html('确认');
//                that.$submit.attr('disabled', null);
            }
//            else {
//                that.$submit.attr('disabled', 'disabled');
//            }
        });
//		this.$checkbox.on('click', function() {
//			if(that.$pchannelTxt.val()=='LLPAY' ){
//				if (that.$money.val() && that.checkAgreement()) {
//					that.$submit.attr('disabled', null);
//				} else {
//					that.$submit.attr('disabled', 'disabled');
//				}
//				if (!that.checkAgreement()) {
//					that.popup('同意协议才能充值', 'warning');
//				}
//			}else{
//				if (that.$money.val() && that.$vericode.val() && that.checkAgreement()) {
//					that.$submit.attr('disabled', null);
//				} else {
//					that.$submit.attr('disabled', 'disabled');
//				}
//				if (!that.checkAgreement()) {
//					that.popup('同意协议才能充值', 'warning');
//				}
//			}
//        });
		
		 this.$submit.on('click', function(){
	            //if(this.$submit.hasClass('disabled'))return;
//			 that.$submit.attr('disabled', 'disabled').html('提交中...');
	            var reg = /^[1-9]{1}[0-9]{0,19}$/;
				if(!reg.test(that.$money.val())){
					that.$error.show().html('输入金额有误');
//					that.popup('输入金额有误');
					return;
				}
				if(that.$money.val()<10){
					that.$error.show().html('经银行调整最低交易金额至10元');
					return;
				}
				if(that.$vericode.val().length < 4){
	            	that.$error.show().html('验证码错误');
	                return;
	            }
//				if(that.$submit.hasClass('disabled'))return;
//				that.$submit.addClass('disabled').html('提交中...');
				if(that.$pchannel=='QUICKPAY'){
					that.subby4Quickpay();
				}else{
					that.inputTradePsw(function(){
						that.$submit.removeClass('disabled').html('确认');
		            });
				}
				//HHN.dialog.inputTradePsw(); 
	        })	
		
		this.$getcode.on('click', function(){
			if(that.$pchannel=='TLPAY'){
			if(that.$getcode.hasClass('disabled'))return;
			that.$getcode.addClass('disabled');
			$.ajax({
                url: 'https://www.qianshenghua.com/common/sendPhoneVirifyCode.do',
				type:"POST",
                data: {checkPhone:false,bizType:'recharge'},
                dataType: 'json',
                success: function(data) {
					if(data.ret==1){
						popup({text:'发送验证码失败',type:'danger'});
					}else if(data.ret==2){
						popup({text:'手机号码不存在',type:'danger'});
					}else if(data.ret==3){
						popup({text:'手机号码已存在',type:'danger'});
					}else{
						that.countdown();
					}
				}
		    });
			}else if(that.$pchannel=='QUICKPAY'){
				var money =  that.$money.val();
				if(money==null || $.trim(money)==''){
					popup({text:'请输入充值金额',type:'danger'});
					return;
				}
				var bankId = that.$bankId.val();
				var amount = $.trim(that.$money.val());
				//20151222 jiangwmf modified
				if(that.$getcode.hasClass('disabled'))return;
				that.countdown4quickpay();
				
				$.ajax({
	                url: 'https://www.qianshenghua.com/getQuickDynCode.do',
					type:"POST",
	                data: {bank_card_id:bankId,amount:amount},
	                dataType: 'json',
	                success: function(data) {
						if(data.returnCode==0){
							$('#token').val(data.data.token);
							$('#externalRefNumber').val(data.data.externalRefNumber);
							//popup({text:'短信验证码已经发送至您的'+data.data.bankName+'预存的手机'+data.data.phoneNo+'，如未收到请联系客服人员',type:'success'});
						}else if(data.returnCode==1){
							that.$error.show().html('获取验证码失败：'+data.messageInfo);
							that.$submit.removeClass('disabled').html('确认');
							window.STEP = 0;
							that.$token.val("");
							that.$externalRefNumber.val("");
							that.$vericode.val("");
						}
					}
			    });
				
				that.$money.attr('disabled', 'disabled');
			}
        });
    },
  //输入交易密码
    inputTradePsw: function(callback){
    	var that = this;
    	_dialog = HHN.dialog.dialog({
            // title: '请输入交易密码',
            padding:"0px",
            content: HHN.dialog.template.inputTradePsw,
    //         ok: function(){
    //         	if($(this.node).find('.ui-dialog-autofocus').hasClass('disabled')){
    //         		return false;
    //         	}
    //             var node = $(this.node),
    //                 error = node.find('#error'),
    //                 value = $.trim(node.find('.j-psw').val());
    //             if(value.length == 0){
    //                 error.show().html('交易密码不能为空');
    //                 return false;
    //             }
    //             if(value.length < 8){
    //                 error.show().html('交易密码不能少于8位');
    //                 return false;
    //             }
    //             $(this.node).find('.ui-dialog-autofocus').addClass('disabled').html('提交中');
    //             $.ajax({
				// 	url: 'https://www.qianshenghua.com/profile/checkPayPwd.do',
    //                 data: {pwd:value},
    //                 type: 'post',
    //                 dataType: 'json',
    //                 success: function(data) {
				// 		if (data.returnCode == 1) {
				// 			popup({text:data.messageInfo,type:'danger'});
				// 			//error.show().html(data.messageInfo);
    //     					node.find('.j-psw').val("");
    //     					node.find('.ui-dialog-autofocus').removeClass('disabled').html('确认');
    //     				}else {
    //     					that.subby();
    //     					_dialog.remove();
    //     				}
    //                 }
				// });return false;
    //         },
            onshow: function(){
                var node = $(this.node),
                    error = node.find('#dio_error');
                    
                node.delegate('input', 'focus', function(){
                	node.find('.form_group').removeClass('form_dio_error');
                    error.hide();
                });

            	if($(this.node).find('.submit').hasClass('disabled')){
            		return false;
            	}  

            	node.delegate('.submit','click',function(){
            		var value = $.trim(node.find('.j-psw').val());
	                if(value.length == 0){
	                    node.find('.j-psw').parent().parent().addClass('form_dio_error').find('span').html('交易密码不能为空');
	                    return false;
	                }  

		            if(value.length < 8){
	                    node.find('.j-psw').parent().parent().addClass('form_dio_error').find('span').html('交易密码不能少于8位');
	                    return false;
	                }  
	                node.find('.submit').addClass('disabled').html('提交中');      

	                $.ajax({
						url: 'https://www.qianshenghua.com/profile/checkPayPwd.do',
	                    data: {pwd:value},
	                    type: 'post',
	                    dataType: 'json',
	                    success: function(data) {
							if (data.returnCode == 1) {
								//error.show().html(data.messageInfo);
								popup({text:data.messageInfo,type:'danger'});
								//error.show().html(data.messageInfo);
	        					node.find('.j-psw').val("");
	        					node.find('.submit').removeClass('disabled').html('确认');
	        				}else {
	        					that.subby();
	        					_dialog.remove();
	        				}
	                    }
					});	           		
            	});

            },
        });
    	_dialog.onclose = function(){
    		callback && callback();
        };
    },

	subby: function(){
	    var that = this;
		$.ajax({
			url: 'https://www.qianshenghua.com/profile/userCharge.do',
            data: {
				amount:$.trim(that.$money.val()),
				verfiyCode:$.trim(that.$vericode.val()),
				bank_card_id:that.$bankId.val(),
			},
            type: 'post',
            dataType: 'json',
            success: function(data) {
				if(data.returnCode == 0){
					popup({text:'充值成功',type:'success'});
//					that.popup('充值成功','success');
					setTimeout(function(){//此处需要添加充值记录链接
						//window.location.href = "https://www.qianshenghua.com/profile/tradeRecord.do";
						window.location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/trade/";
					}, 3000);
	            }else if(data.returnCode == -1){
	                var msg = data.messageInfo;
	                if(msg.indexOf('余额不足')>-1){
	                	popup({text:'银行卡余额不足',type:'danger'});
//	                	that.popup('银行卡余额不足');
//	                	setTimeout(function(){
//							window.location.href = "https://www.qianshenghua.com/profile/managerCard.do";
//						}, 3000);
	                }else{
	                	popup({text:msg,type:'danger'});
//					   that.popup(msg);
					}
	            }
				else{
					popup({text:data.messageInfo,type:'danger'});
//	                that.popup(data.messageInfo);
	            }
            }
		});
	},
    subby4Quickpay: function(){
	    var that = this;
	    var btn = $(this);
    	if(that.$submit.hasClass('disabled'))return;
    	that.$submit.addClass('disabled');
    	if(that.$vericode.val()==null ||that.$vericode.val()==''){
    		that.$error.show().html('请输入验证码');
			that.$submit.removeClass('disabled').html('确认');
			return;
    	}
	    if(that.$token.val()==null ||that.$externalRefNumber.val()==null|| that.$token.val()==''|| that.$externalRefNumber.val()==''){
	    	that.$error.show().html('请获取验证码');
			that.$submit.removeClass('disabled').html('确认');
			return;
		}
		$.ajax({
			url: 'https://www.qianshenghua.com/profile/userCharge4QuickPay.do',
            data: {
				amount:$.trim(that.$money.val()),
				verfiyCode:$.trim(that.$vericode.val()),
				bank_card_id:that.$bankId.val(),
				token:that.$token.val(),
				externalRefNumber:that.$externalRefNumber.val()
			},
            type: 'post',
            dataType: 'json',
            success: function(data) {
				if(data.returnCode == 0){
					popup({text:'充值成功',type:'success'});
					setTimeout(function(){//此处需要添加充值记录链接
						//window.location.href = "https://www.qianshenghua.com/profile/tradeRecord.do";
						window.location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/trade/";
					}, 3000);
	            }else if(data.returnCode == -1){
	                var msg = data.messageInfo;
	                if(msg.indexOf('余额不足')>-1){
//	                	popup({text:'银行卡余额不足',type:'danger'});
	                	that.$error.show().html('银行卡余额不足');
	                }else{
//	                	popup({text:msg,type:'danger'});
	                	that.$error.show().html(msg);
					}
	            }
				else{
					that.$error.show().html(data.messageInfo);
//	                that.popup(data.messageInfo);
	            }
				window.STEP = 0;
				that.$token.val("");
				that.$externalRefNumber.val("");
				that.$vericode.val("");
				that.$submit.removeClass('disabled').html('确认');
            }
		});
		
	}
};
