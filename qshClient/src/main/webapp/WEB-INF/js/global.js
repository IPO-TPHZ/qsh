var HHN = HHN || {};
var isAnimate =  false;
HHN.formatNumber = function(num) {
    num = num + '';
    var rgx = /(\d+)(\d{3})/g;
    while (rgx.test(num)) {
        num = num.replace(rgx, '$1' + ',' + '$2');
    }
    return num;
};
HHN.setCookie = function(cname, cvalue, exdays,domain) {
    domain = location.hostname.replace(/(\w+)\./,'.');
    exdays = exdays===undefined?365:exdays;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = exdays!==0?"expires="+d.toUTCString():0;
    document.cookie = cname + "=" + cvalue + "; " + expires+';path=/;domain='+domain;
};
//获取cookie
HHN.getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
};
HHN.parseURL = function(url) {
    var a = document.createElement('a');
    a.href = url || window.location.href;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function() {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
};
HHN.uDesk = function(elem){
            var commonUrl = '//qianshenghua.udesk.cn/im_client/?web_plugin_id=40566&';
                    newWin = window.open(commonUrl,"_udesk_im", "width=780,height=560,top=200,left=350,resizable=yes");

            $.ajax({
                url:'https://www.qianshenghua.com/profile/ajaxForKefuSystem.do',
                dataType:'json',
                success:function(res){
                    var param = '';
                    if(res.code=='0'){
                        param = "c_name=" + encodeURI(res.c_name) + '&c_phone=' + res.c_phone + '&nonce=' + res.nonce + '&c_cf_%E6%80%A7%E5%88%AB='+encodeURI(res.c_sex)+'&signature='+res.signature + '&timestamp='+res.timestamp+'&web_token='+res.web_token
                    }
                    newWin.location.href = commonUrl+param;
                }
            });
        };
HHN.dateFormat = function(date, format){  
        date = new Date(date);  
        var map = {  
            "M": date.getMonth() + 1, //月份   
            "d": date.getDate(), //日   
            "h": date.getHours(), //小时   
            "m": date.getMinutes(), //分   
            "s": date.getSeconds(), //秒   
            "q": Math.floor((date.getMonth() + 3) / 3), //季度   
            "S": date.getMilliseconds() //毫秒   
        };  
          
        format = format.replace(/([yMdhmsqS])+/g, function(all, t){  
            var v = map[t];  
            if (v !== undefined) {  
                if (all.length > 1) {  
                    v = '0' + v;  
                    v = v.substr(v.length - 2);  
                }  
                return v;  
            }  
            else if (t === 'y') {  
                    return (date.getFullYear() + '').substr(4 - all.length);  
                }  
            return all;  
        });  
        return format;  
    };
function popup(opt) {
    var type = {
        info: '<i class="ui-dialog-icon ui-dialog-info"></i>',
        danger: '<i class="ui-dialog-icon ui-dialog-danger"></i>',
        warning: '<i class="ui-dialog-icon ui-dialog-warning"></i>',
        success: '<i class="ui-dialog-icon ui-dialog-success"></i>'
    };

    var pop = dialog({
        oninit: function(pop) {
            pop.addClass('dialog-clear').addClass('dialog-popup');
        },
        fixed: true,
        padding: '10px 20px',
        content: '<table><tr><td>' + type[!opt.type ? 'info' : opt.type] + '</td><td>' + (opt.text || '') + '</td></tr></table>',
        onclose: opt.onclose || function() {}
    }).show();

    setTimeout(function() {
        pop._trigger('cancel');
        opt.callback && opt.callback();
    }, opt.time || 3000);

    return pop;

};


function login(isJump) {
    var template = '<div class="dio_login" id="loginTpl"><div i="close" title="关闭" class="dio_close"></div>'+
'        <div class="login_tab">'+
'            <ul class="u-login-tab">'+
'                <li data-type="0" class="login_tab_f cur">'+
'                    <a href="javascript:;">个人用户</a>'+
'                </li>'+
'                <li data-type="2">'+
'                    <a href="javascript:;">企业账户</a>'+
'                </li>'+
'            </ul>'+
'        </div>    '+
'        <div class="dio_login_main">'+
'            <div class="dio_login_group">'+
'                <i class="diol_icon diol_icon_user"></i>'+
'                <input type="text" id="username" placeholder="用户名/手机号码/邮箱" />'+
'                <i class="err_icon"></i>'+
'                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
'            </div>'+
'            <div class="dio_login_group">'+
'                <i class="diol_icon diol_icon_pwd"></i>'+
'                <input type="password" id="password" placeholder="登录密码" />'+
'                <i class="err_icon"></i>'+
'                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
'            </div>'+
'            <div class="dio_login_group">'+
'                <i class="diol_icon diol_icon_code"></i>'+
'                <input type="text" class="diol_code" id="checkcode" placeholder="输入验证码" /> <img class="js-code diol_code_img" src="https://www.qianshenghua.com/common/imageCode.do?pageId=userlogin" />'+
'                <i class="err_icon"></i>'+
'                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
'            </div>'+
'            <p class="dio_protol">'+
'                <i class="diol_icon_p diol_icon_checked"></i><input type="checkbox" id="addCookie" checked="checked" class="hide" />'+
'               记住我的帐号'+
'               <a href="javascript:;" class="login_find" onclick="HHN.dialog.retrieveLoginPsw();">忘记密码？</a>'+
'            </p>'+
    '            <a href="javascript:;" id="loginBtn" class="common_btn">登录</a><p style="text-align:center;margin-top:8px;">还没有帐号? <a href="https://www.qianshenghua.com/login/toReg.do?redirect='+encodeURIComponent(encodeURIComponent(location.href))+'" style="color: #e65124;">前去注册</a></p>'+
'        </div>    '+
'    </div>';



    window.accountType = 0;
    window.login_dialog = dialog({
        content: template,
        fixed:true,
        oninit: function(d) {
            d.addClass('dialog-clear');
            
        },
        onshow: function() {
            //cookie中有账号，就从cookie中取
            var un = HHN.getCookie("cName");
            if (un != "") {
                $("#username").val(decodeURIComponent(un)); //取cookie值
               // valueChange($("#username"));
            }

            var loginTpl = $('#loginTpl'),
                submit = $('#loginBtn');
            //loginTpl.find('input[type!="checkbox"]').on('input propertychange', valueChange)
            loginTpl.find('input[type!="checkbox"]')
                .on('focus', function() {
                    // if ($(this).attr('name') == 'checkcode') {
                    //     $(this).removeClass('error').siblings('label').html('验证码').removeClass('error');
                    //     return;
                    // }
                    var parent = $(this).parent();
                    parent.hasClass('dio_login_error') && parent.removeClass('dio_login_error');
                }).on('keyup', function(e) {
                    if (e.keyCode == 13) {
                        submit.trigger('click');
                    }
                });
            submit.on('click', function() {
                if (veriLogin()) {
					//设置cookie值
					if ($("#addCookie").attr("checked") == "checked"){
						//记住我的账号
						HHN.setCookie("cName",encodeURIComponent($('#username').val()),365);
					}else{
						HHN.setCookie("cName",'',365);
					}
					//ajax
					$.ajax({
						url: 'https://www.qianshenghua.com/login/login.do',
						type:"POST",
						data: {
							accountType: accountType,
							username: $('#username').val(),
							password: $('#password').val(),
							code: $('#checkcode').val(),
						},
						dataType: 'json',
						success: function(data) {
							if(data.result == 1){
								$('#username').parent().addClass('dio_login_error').find('span').html(data.msg);
							}else if(data.result == 2){
                                $("#checkcode").val('').parent().find('.err_icon').css('display','none');
                                $("#checkcode").val('').parent().addClass('dio_login_error').find('span').html(data.msg);
							}else if(data.result == 3){
								$('#username').parent().addClass('dio_login_error').find('span').html(data.msg);
							}else if(data.result == 4){
								$('#username').parent().addClass('dio_login_error').find('span').html(data.msg);
							}else if(data.result == 5){
								HHN.dialog.retrieveLoginPsw(data.msg,data.phone);
								//$('#username').parent().addClass('error').find('span').html('尊敬的用户，欢迎您使用钱生花。如果您忘记密码，请点击“忘记密码”找回.');
							}else if(data.result == 6){
								$('#username').parent().addClass('dio_login_error').find('span').html(data.msg);
							}else if(data.result == 7){
								$('#username').parent().addClass('dio_login_error').find('span').html(data.msg);
							}else{
                                var remainName = data.data.mobilePhone ? data.data.mobilePhone : data.data.username;  
                                HHN.setCookie('loginName',remainName, -1);
                                if(!isJump) {
                                    if(document.referrer.indexOf('qianshenghua') > -1){
                                        var hash = location.hash;
                                        if(hash == '#center' || document.referrer.indexOf('login/toReg.do') > -1 || document.referrer.indexOf('login/index.do') > -1 ){
                                            window.location.href = "https://www.qianshenghua.com/view/center-index.jsp";
                                        }else{
                                            window.location.href = document.referrer;
                                        }
                                    }else{
                                        window.location.href = "https://www.qianshenghua.com/index.do";
                                    }                                     
                                } else {
                                    location.reload();
                                }

							}
						}
					});
                   // return;
                }
            });
setTimeout(function(){$('.js-code').attr('ptitle', "还能获取" + (HHN.getCookie('srand')>0?HHN.getCookie('srand'):0) + "次，且点且珍惜");},600);
            loginTpl.delegate('.login-2dbtn', 'click', function() {
                loginTpl.addClass('type-2d');
            }).delegate('.login-countbtn', 'click', function() {
                loginTpl.removeClass('type-2d');
            }).delegate('.js-code', 'click', function() {
                $('.js-code').attr('ptitle', "还能获取" + (HHN.getCookie('srand')>0?HHN.getCookie('srand')-1:0) + "次，且点且珍惜");
                window.popover.reset($(this));
                loginTpl.find('img.js-code').attr('src', 'https://www.qianshenghua.com/common/imageCode.do?pageId=userlogin&d=' + (+new Date()))
            }).delegate('.js-code', 'mouseover', function(){
                loginTpl.find('.dio_login_group').removeClass('dio_login_error');
            })
            .delegate('.u-login-tab li', 'click', function(){
                $(this).addClass('cur').siblings().removeClass('cur');
                accountType = $(this).data('type');
                $('#curBorder').removeClass().addClass('cur-border'+accountType);
            }).delegate('.diol_icon_p','click', function(){
                if( !$(this).hasClass('diol_icon_checked')) {
                    $("#addCookie").attr('checked','checked');
                    $(this).addClass('diol_icon_checked');
                } else {
                    $(this).removeClass('diol_icon_checked');
                    $("#addCookie").removeAttr('checked');
                }
            });
        },
        padding: 0
    }).showModal();

    function valueChange(elem) {

        var self = this === window ? elem : $(this),
            parent = self.parent(),
            preClass = parent.attr('class'),
            val = $.trim(self.val());
        if (val !== '' && !/ext/.test(preClass)) {
            parent.removeClass().addClass(preClass + 'ext');
        } else if (val === '' && /ext/.test(preClass)) {
            parent.removeClass().addClass(preClass.replace('ext', ''));
        }
    };

    function veriLogin() {
        var $username = $('#username'),
            $password = $('#password'),
            $checkcode = $('#checkcode'),
            value = {
                username: $.trim($username.val()),
                password: $.trim($password.val()),
                code: $.trim($checkcode.val())
            };
        if (value.username.length < 3) {
            $username.parent().addClass('dio_login_error').find('span').html('不能少于3个字符');
            return false;
        }

        if (value.password.length < 6) {
            $password.parent().addClass('dio_login_error').find('span').html('不能少于8个字符');
            return false;
        }

        if (value.code.length < 4) {
            $checkcode.val('').parent().find('.err_icon').css('display','none');
            $checkcode.val('').parent().addClass('dio_login_error').find('span').html('验证码错误');
            return false;
        }
        return true;
    };

};



$('#login-menu,.main-nav>li,.phone_app').on('mouseover', function() {
    // if ($(this).hasClass('login-menued')) 
    $(this).addClass('hover');
}).on('mouseout', function() {
    $(this).removeClass('hover');
});
//侧边悬浮按钮
$(document).ready(function(){
var outTimeout = null;
$('#fixed-mbar a,#fixed-sbar a').on('mouseover', function() {
    var self = $(this);
    self.addClass('active');
    setTimeout(function() {
        self.find('.pop').addClass('popshow');
    }, 0);
}).on('mouseout', function() {
    var self = $(this);
    outTimeout = setTimeout(function(){
        self.find('.pop').removeClass('popshow');
        setTimeout(function() {
            self.removeClass('active');
        }, 0);
    },100);
}).on('click', function() {
    if ($(this).hasClass('top')) {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    }
    if( $(this).hasClass('floor')) {
        isAnimate = true;
        setTimeout(function(){
            isAnimate = false;
        },210);
    }
});
$('#fixed-mbar .pop,#fixed-sbar .pop').on('mouseover', function(){
    outTimeout && clearTimeout(outTimeout);
});
$(window).on('scroll', function(){
    var top = $(this).scrollTop();
    if(top<20){
        $('#fixed-mbar .top').hide();
    }else{
        $('#fixed-mbar .top').show();
    }
})
});
/**
 * 平台充值、绑卡、交易密码入口 
 */
function recharge(type, pos) {
	var url = "";
	if(type == 1||type == 2||type == 3){
		checkChoose(type, pos);
	}else{
		popup({text:'亲，出错了！请联系客服人员！',type:'danger'});
	}
	
}
/**
 * 汇付充值、绑卡、交易密码入口
 * @param type
 */
function recharge4huifu(type) {
	if(type == 1){//充值
		document.location.href = "https://www.qianshenghua.com/chinapnr/rechargeInit.do"
	}else if(type == 2){//绑卡
		document.location.href = "https://www.qianshenghua.com/chinapnr/bindCardInit.do"
	}else if(type == 3){//绑卡成功之后判断是否设置交易密码
		checkChoose(type);
	}else{
		popup({text:'亲，出错了！请联系客服人员！',type:'danger'})
	}
}

/**
 * 企业用户绑卡提示
 * @param type
 */
function step_tp(){
   popup({type:'info',text:'您的银行卡信息还在审核中，请等待客服审核后通知您'});
}


function checkChoose(type, pos){
    if(CONFIG&&CONFIG.accountType==2){
        if(type==1){
            document.location.href = "https://www.qianshenghua.com/preOnlinePay.do";
        }else if(type == 2){
            document.location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/bankcard";
        }else if(type == 3){
            HHN.dialog.setTradePsw();
        }
        return;
    }
	$.ajax({
        url: 'https://www.qianshenghua.com/profile/setUp.do',
        // data: {type:type},
        type: 'post',
        dataType: 'json',
        success: function(data) {
            var code = data.returnCode, success = true;
        	//充值 判断是否绑卡
            /*
			if(type == 1){
				if(data.returnCode==7){
					HHN.dialog.bangingCardNotice();
				}else if(data.returnCode==8){
					HHN.dialog.llpayPCNotice();
				}else{
					document.location.href = "https://www.qianshenghua.com/profile/chargePage.do";
				}
			}else if(type == 2){//绑卡判断是否实名认证
				
				if(data.returnCode==5){
					HHN.dialog.realNameNotice();
				}else if(data.returnCode==7){//去绑卡页面
					document.location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/bankcard";
				}else if(data.returnCode==8){//绑卡继续页面
					continueMoneyVerify();
				}else
				HHN.dialog.bangedCardNotice();//已经绑卡的提示
				
			}else if(type == 3){//绑卡成功之后判断是否设置交易密码
				if(data.returnCode==6){//为设置交易密码设置交易密码，否则提示去充值或者赚钱setTradePsw
					HHN.dialog.setTradePsw(data.data);
				}else{
					HHN.dialog.bangingCardSucNotice();
				}
			}
            */
            if(code==5){
                if(pos=='center'){
                    HHN.dialog.realNameNotice();
                }else{
                    setUpGuide('name');
                }
                success = false;
            }else if(code==7){
                if(pos=='center'){
                    document.location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/bankcard";
                }else{
                    setUpGuide('bank');
                }
                success = false;
            }else if(code == 6){
                setUpGuide('psw');
                success = false;
            }else if(code ==9){
                HHN.dialog.llpayPCNotice();
                success = false;
            }else if(code!==0){
                popup({
                    text:data.messageInfo,
                    type:'info'
                })
                return;
            }
            if(typeof type == 'function' && success){
                type();
                return;
            }
            if(success){
                if(type==1){
                    document.location.href = "https://www.qianshenghua.com/profile/chargePage.do";
                }
            }
		}
    });
	
}
function continueMoneyVerify(type) {
    $.ajax({
        url: 'https://www.qianshenghua.com/profile/continueMoneyVerify.do',
        data: {type:type},
        type: 'post',
        dataType: 'json',
        success: function(data) {
        	if(data.returnCode==0){
        		//HHN.dialog.bindingCardCert(data.data);
				//var bankData = data.data;
				//window.location.href ="https://www.qianshenghua.com/profile/confirmCard.do?bankCode="+bankData.bank_code+"&account="+bankData.card_no;
        	   popup({type:'info',text:'您的银行卡信息还在审核中，请等待客服审核后通知您'});
            }else if(data.returnCode==1){
        		HHN.dialog.bangedCardNotice();
        	}else{
        		recharge(2);
        	}
			
			}
    });
	
}
function selectPayChannel4huifu(type){
	window.location.href = "https://www.qianshenghua.com/withdraw/withdrawLoad.do";
}

function selectPayChannel(type){
		checkItems();
}

function checkItems(){
	//type:1 提现 2购买
	$.ajax({
        url: 'https://www.qianshenghua.com/profile/setUp.do',
        type: 'post',
        dataType: 'json',
        success: function(data) {
            if(CONFIG.accountType == 2) {
                //企业用户直接跳到提现
                location.href = "https://www.qianshenghua.com/withdrawPageNew.do"
            } else {
				if(data.returnCode==7){
					setUpGuide('bank');//提示去绑卡
				}else if(data.returnCode==5){
					setUpGuide('name');//提示去实名认证
				}else if(data.returnCode == 6){
                    setUpGuide('psw');
                }else if(data.returnCode==8){
					HHN.dialog.llpayPCNotice();//提示去继续绑卡
				}else{//通联提现
					document.location.href = "https://www.qianshenghua.com/withdrawPageNew.do";	
				}
		    }
        }
    });
}
function topNavFixed() {
        if($.browser.msie)return;
        var topNavFixed = $('#topNavFixed'),
            startPos = 0,
            endPos = 0,
            timeout = null,
            $win = $(window),
            offset = topNavFixed.data('offset') || 64,
            isAnimating = false, //动画过程，禁止操作
            setNav = function(direction, pos) {
                isAnimating = true;
                topNavFixed.css({
                    webkitTransform: 'translate(0,' + (direction * offset) + 'px) translateZ(0)',
                    transform: 'translate(0,' + (direction * offset) + 'px) translateZ(0)'
                });
                startPos = pos;
                setTimeout(function() {
                    isAnimating = false;
                }, 210);
            };

        $(window).on('scroll', function(e) {
            // if (isAnimating) return;
            if( isAnimate ) { 
                setNav(-1, endPos);
                return false; 
            }
            if (window.onpopstate !== null) {
                setNav(0, endPos);
                return;
            }
            endPos = $win.scrollTop();
            if ((endPos - startPos < -10 || endPos <= offset)) {
                setNav(0, endPos);
            } else if (endPos - startPos > 10) {
                setNav(-1, endPos);
            } 
        });
    };
    topNavFixed();

/*
 * JS placeholder
 * IE6-IE9不支持HTML5中的placeholder
 */
    
function Placeholder(options) {
    this.config = {
        defaultColor: '#ccc',
        curColor: '#333',
        targetElem: 'input'
    };

    this.init(options);
}

Placeholder.prototype = {

    constructor:Placeholder,

    init: function(options){
        this.config = $.extend(this.config, options || {});
        var self = this,
            _config = self.config;
        
        $(_config.targetElem).each(function(){
            var supportPlaceholder = 'placeholder' in document.createElement('input');
            if(!supportPlaceholder) {
                var defaultValue = $(this).attr('placeholder');
                $(this).focus(function(){
                    var pattern = new RegExp("^" + defaultValue + "$|^$");
                    pattern.test($(this).val()) && $(this).val('').css('color',_config.curColor);
                }).blur(function(){
                    if($(this).val() == defaultValue) {
                        $(this).css('color',_config.defaultColor);
                    }else if($(this).val().length == 0){
                        $(this).val(defaultValue).css('color', _config.defaultColor);
                    }
                }).trigger('blur');
            }
        });
        
    }    
};
new Placeholder({});

function Popover() {
    this.tpl = '<div class="popover"><p></p><i></i><em></em></div>';
    this.elems = $(document);
    this.init();
};

Popover.prototype = {
    init: function() {
        this.create();
        this.events();
    },
    create: function() {
        $(document.body).append(this.tpl);
        this.tpl = $('.popover');
        this.p = this.tpl.find('p');
    },
    events: function() {
        var that = this,
            timeout = null,
            title,
            self;
        this.elems.delegate('[ptitle]', 'mouseenter', function() {
            timeout && clearTimeout(timeout);
            self = $(this);
            that.reset(self);
            that.tpl.removeClass('popover-hide').addClass('popover-show');
            // title = self.attr('title');
            // self.attr('title', '');
        });
        this.elems.delegate('[ptitle]','mouseleave', function() {
            timeout && clearTimeout(timeout);
            that.tpl.removeClass('popover-show').addClass('popover-hide');
            // self.attr('title', self.attr('title'));
            timeout = setTimeout(function() {
                that.tpl.removeClass('popover-hide')
            }, $.browser.chrome?500:0);
        });
    },
    reset: function(target) { 
            this.p.html(target.attr('ptitle'));
        var tW = target.width(),
            tL = target.offset().left,
            tT = target.offset().top,
            pW = this.tpl.width(),
            pH = this.tpl.height();
        this.tpl.css({
            left: tL + tW / 2 - pW / 2,
            top: tT - pH - 10 
        });
    }
};


(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];
        
        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height(),
                    inview = $el.data('inview') || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data('inview', false);
                        $el.trigger('inview', [ false ]);                        
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
                        $el.data('inview', true);
                        $el.trigger('inview', [ true ]);
                    }
                }
            });
        }
    });
})(jQuery);



$(function(){
    $(document).off('ajaxSuccess').on('ajaxSuccess', function(e, xhr, opts){
        try{
        var data = window.JSON?JSON.parse(xhr.responseText) : (new Function("", "return " + xhr.responseText))();
        if(data.code===-10001&&data.redirectUrl)location.href=data.redirectUrl;
        if(data.code===-10000){
            if(!dialog){
            location.href = 'https://www.qianshenghua.com/login/index.do?redirectUrl='+encodeURIComponent(location.href);
        }else{
            !$('#loginTpl').size()&&setTimeout(function(){login(1)},300)
        }
        }
        }catch(e){_trackEvent('10014','ajaxErr', opts.url);}    }).on('ajaxError', function(e, xhr, opts){
        _trackEvent('10014', 'ajaxErr', opts.url);
    });
    window.popover = new Popover();
    $('.login_out').click(function(){
        HHN.setCookie('loginName','')
    });
    if(HHN.getCookie('isRegister')=='true'){
        setUpGuide('name');
        HHN.setCookie('isRegister', '');
    }
    //首页&产品列表页
    $('.progress .progress-value').one('inview', function(){
        var $this = $(this), width=$this.width();
        $this.css({width:0});
        setTimeout(function(){$this.addClass('animate').css({width:width})},0);
    });
    $(window).scroll();
    if(HHN.parseURL().params.adsChannel){
        HHN.setCookie('adsChannel',HHN.parseURL().params.adsChannel,0);
    }
    // $('.progress .progress-value').trigger('inview');
});

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.store = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";module.exports=function(){function e(){try{return o in n&&n[o]}catch(e){return!1}}var t,r={},n="undefined"!=typeof window?window:global,i=n.document,o="localStorage",a="script";if(r.disabled=!1,r.version="1.3.20",r.set=function(e,t){},r.get=function(e,t){},r.has=function(e){return void 0!==r.get(e)},r.remove=function(e){},r.clear=function(){},r.transact=function(e,t,n){null==n&&(n=t,t=null),null==t&&(t={});var i=r.get(e,t);n(i),r.set(e,i)},r.getAll=function(){},r.forEach=function(){},r.serialize=function(e){return JSON.stringify(e)},r.deserialize=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},e())t=n[o],r.set=function(e,n){return void 0===n?r.remove(e):(t.setItem(e,r.serialize(n)),n)},r.get=function(e,n){var i=r.deserialize(t.getItem(e));return void 0===i?n:i},r.remove=function(e){t.removeItem(e)},r.clear=function(){t.clear()},r.getAll=function(){var e={};return r.forEach(function(t,r){e[t]=r}),e},r.forEach=function(e){for(var n=0;n<t.length;n++){var i=t.key(n);e(i,r.get(i))}};else if(i&&i.documentElement.addBehavior){var c,u;try{u=new ActiveXObject("htmlfile"),u.open(),u.write("<"+a+">document.w=window</"+a+'><iframe src="/favicon.ico"></iframe>'),u.close(),c=u.w.frames[0].document,t=c.createElement("div")}catch(l){t=i.createElement("div"),c=i.body}var f=function(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(t),c.appendChild(t),t.addBehavior("#default#userData"),t.load(o);var i=e.apply(r,n);return c.removeChild(t),i}},d=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),s=function(e){return e.replace(/^d/,"___$&").replace(d,"___")};r.set=f(function(e,t,n){return t=s(t),void 0===n?r.remove(t):(e.setAttribute(t,r.serialize(n)),e.save(o),n)}),r.get=f(function(e,t,n){t=s(t);var i=r.deserialize(e.getAttribute(t));return void 0===i?n:i}),r.remove=f(function(e,t){t=s(t),e.removeAttribute(t),e.save(o)}),r.clear=f(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(o);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(o)}),r.getAll=function(e){var t={};return r.forEach(function(e,r){t[e]=r}),t},r.forEach=f(function(e,t){for(var n,i=e.XMLDocument.documentElement.attributes,o=0;n=i[o];++o)t(n.name,r.deserialize(e.getAttribute(n.name)))})}try{var v="__storejs__";r.set(v,v),r.get(v)!=v&&(r.disabled=!0),r.remove(v)}catch(l){r.disabled=!0}return r.enabled=!r.disabled,r}();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});


HHN.riskTest = function(){
    dialog({
        title:false,
        padding:'0',
        content:
            '<style>.riskDialogBtn:hover{text-decoration:none;background:#CEA04D;}</style>'+
            '<div class="diol_pwd" style="padding:60px 60px 50px;">'+
            '        <div class="dio_close" i="close"></div>'+
            '<div style="font-size:16px;text-align:center"><img style="position:relative;top: -22px;margin-right:10px;" src="https://static.hehenian.com/p_v2/images/risk/success_icon.png" alt="" />仅需最后一步</div>'+
            '<p style="text-align:center">应监管要求，您需要在投资前完成风险评估，只需10秒</p>'+
            '<a class="riskDialogBtn" style="display:block;height:36px;text-align:center;line-height:36px;border-radius: 4px;    background: -webkit-linear-gradient(top, #CC8B3B, #E8B967);width:170px;color:#fff;margin:40px auto 0" href="https://www.qianshenghua.com/view/riskTest.html#!/">开始评估</a>'+
            '</div>',
    }).showModal();
};

// 统计
function _trackEvent(id,msg,url,line,col,err, userDefinedId){
    if(location.protocol!='https:')return;
    try{
         var d = {msg:msg,url:url,line:line,col:col,err:err},
            image = new Image(),
            params = {
                appId:1001,
                eventId: id,
                eventUrl: encodeURIComponent(location.href),
                eventReferer: encodeURIComponent(document.referrer),
                eventUserID: HHN.getCookie('uid'),
                userDefinedId: userDefinedId||'',
                _:Math.random().toFixed(2)*100
            };
            if(msg||url||line||col||err){
                params.enventParams = encodeURIComponent(JSON.stringify(d))
            }
        image.src = 'https://m.hehenian.com/stat/stat.do?'+$.param(params);
    }catch(e){}
};
$(window).on('load',function(){
     window._hmt = window._hmt || [];
     if(location.protocol!='https:')return;
     var hm = document.createElement("script");
     hm.src = "https://hm.baidu.com/hm.js?afff41411ed2138763d1ed539796b88b";
     var s = document.getElementsByTagName("script")[0]; 
     s.parentNode.insertBefore(hm, s);
     window.onerror = function(msg,url,line,col,err){
        _trackEvent('10013',msg,url,line,col,err);
     }
});


// 实名认证引导
function setUpGuide(type){
    var html = '<div class="dio_close" i="close"></div>'+
    '<div class="guide-cert">'+
    '    <h2>完成认证，投资更安全 <i>完成认证，投资更安全</i></h2>'+
    '    <div class="guide-list-wrap">'+
    '        <ul id="guideList" class="guide-list clearfix">'+
    '            <li class="item-1">'+
    '                <div class="hd">01 <i class="icon icon-arrow"></i></div>'+
    '                <div class="bd">'+
    '                    <h3>实名认证</h3>'+
    '                    <div class="icon icon-real"></div>'+
    '                    <p>钱生花采用与银行一致的认证机制，在充值前必须绑定一张银行卡。</p>'+
    '                </div>'+
    '            </li>'+
    '            <li class="item-2">'+
    '                <div class="hd">02 <i class="icon icon-arrow"></i></div>'+
    '                <div class="bd">'+
    '                    <h3>绑定银行卡</h3>'+
    '                    <div class="icon icon-bank"></div>'+
    '                    <p>钱生花采用与银行一致的认证机制，在充值前必须绑定一张银行卡。</p>'+
    '                </div>'+
    '            </li>'+
    '            <li>'+
    '                <div class="hd">03</div>'+
    '                <div class="bd">'+
    '                    <h3>设置支付密码</h3>'+
    '                    <div class="icon icon-psw"></div>'+
    '                    <p>支付密码与登录密码不能一致，设置支付密码后，方可进行投资。</p>'+
    '                </div>'+
    '            </li>'+
    '        </ul>'+
    '    <div class="guide-cert-back"><div class="lock"></div><p>已经完成认证？</p><a class="guide-cert-btn" href="javascript:;" onclick="location.reload()" i="close">完成</a></div>'+
    '    </div>'+
    '    <a class="guide-cert-btn" target="_blank" href="https://www.qianshenghua.com/view/center-index.jsp#!/safe">立即验证</a>'+
    '</div>';

    dialog({
        title:false,
        content: html,
        onshow: function(){
            $(this.node).addClass('dialog-clear');
            var guideList = $('#guideList');
            if(type=='name'){
            }else if(type=='bank'){
                guideList.addClass('guide-done-1');
            }else if(type=='psw'){
                guideList.addClass('guide-done-2');
            }
            $(this.node).on('click', '.guide-cert-btn', function(){
                $('.guide-cert-back').show();
            })
        }
    }).showModal();
};

//加载圈
var sys_loading;
function showSysLoading(){
    var html = '    <div class="diol_pwd-loading">'+
'        <div class="form_main-loading">'+
'            <div class="spinner">'+
'              <div class="rect1"></div>'+
'              <div class="rect2"></div>'+
'              <div class="rect3"></div>'+
'              <div class="rect4"></div>'+
'              <div class="rect5"></div>'+
'            </div>'+
'            <p> 正在加载中...</p>'+
'        </div>'+
'    </div>';

    sys_loading = dialog({
        title:false,
        content: html,
        onshow: function(){
            var node = $(this.node);
            node.find('.ui-dialog').css({
                background:'none',
                border:'none'
            })
        }
    }).showModal();
}


function hideSysLoading(){
    sys_loading && sys_loading.remove().close();
}

