/**
 * Author:jiangwmf 
 * Date:2015/07/28
 * Content:购买通用页js
 * Description:
 * 页面需包含如下id的标签对象{
 * buyBtn 购买按钮
 * 
 * money 投资金额
 * 
 * balanceSpan 用户余额
 * expectedReturn 预期收益
 * interestDate 计息日期
 * checkbox 是否同意协议
 * 
 * 以下为隐藏域：
 * mounth 所选产品期次
 * rate 所选产品年利率
 * rateId 所选产品产品id
 * productName 所选产品产品名称
 * coefficient 起投金额
 * channel 渠道
 * sub_channel 子渠道
 * }
 */
function limit18age() {
    dialog({
        title: false,
        padding: '0',
        content: '<div class="diol_pwd" style="padding:60px 60px 80px;">' +
            '        <div class="dio_close" i="close"></div>' +
            '<table>' +
            '<tr>' +
            '    <td>' +
            '        <img src="https://static.hehenian.com/p_v2/images/model_worning_icon.png" width="94" height="94" alt="" />' +
            '    </td>' +
            '    <td style="padding-left:20px;">' +
            '        <h1 style="padding-bottom:.8em">很抱歉！</h1>' +
            '        <p style="padding-bottom:.8em;color:#DB9403">由于您的年纪未满18周岁，根据国家相关政策法规，暂不允许未成年人参与平台投资。</p>' +
            '        <p>对此给您造成不便，敬请您谅解~！</p>' +
            '    </td>' +
            '</tr>' +
            '</table></div>',
    }).showModal();
};

function getTicketName(bizType){
        var obj  = {
            'a2':'现金券',
            'a5':'红包',
            'a1':'提现券',
            'a3':'加息券'
        }
        return obj['a'+bizType];
};

function ticketsItems(data, coupon) {
    var html = '';
    for (var i = 0; i < data.list.length; i++) {
        var className = "dio_coupon_list clearfix";
        var labelClass = "radio_label";
        if (!data.list[i].isMeet || coupon == 0) {
            className += ' dio_coupon_list_no';
            labelClass += ' is_disabled';
        }
        html += '                <div class="' + className + '">' +
            '                    <div class="dio_coupon_radio">' +
            '                        <span class="' + labelClass + '"></span>' +
            '                        <input type="radio" data-biztype="'+data.list[i].bizType+'" data-deduction="'+data.list[i].deduction+'" data-amount="' + data.list[i].amount + '" data-investamount="'+data.list[i].investAmount+'" name="coupon" value="' + data.list[i].ticketId + '" class="dio_coupon_r" />' +
            '                    </div>' +
            '                    <div class="dio_coupon_inner clearfix">' +
            '                        <div class="dio_coupon_top clearfix">' +
            '                            <div class="dio_coupon_money">'+ (data.list[i].bizType!=3?'<b>￥</b>'+data.list[i].amount:data.list[i].deduction*1000/10+'%') + '<i>'+getTicketName(data.list[i].bizType)+'</i>'+
            '                                <p>单笔满' + data.list[i].investAmount +(data.list[i].bizType!=3?'元':'元<br>不超过5万')+ '元可用</p>' + (data.list[i].bizType!=5?'':'<p>仅限使用一次</p>')+
            '                            </div>' +
            '                            <div class="dio_coupon_info">' +
            '                                <p>投资' + data.list[i].name + '期可用</p>' + (data.list[i].bizType!=5?'':'<p>红包金额可抵扣'+data.list[i].deduction*1000/10+'%的投资金额</p>')+
            '                                <p>有效期' + data.list[i].createTime + '至' + data.list[i].expireDate + '</p>' +
            '                            </div>' +
            '                        </div>';
        if (data.list[i].isMeet) {
            html += ' <p class="dio_coupon_succ">恭喜您，可以使用该优惠券</p>';
        } else {
            if (coupon == 0) {
                html += '<p class="dio_coupon_error">不可用原因<span>未输入投标金额或输入投标金额低于起投金额</span></p>';
            } else {
                html += '<p class="dio_coupon_error">不可用原因<span>' + data.list[i].info + '</span></p>';
            }

        }


        html += '                    </div>' +
            '                </div>';
    }

    return html;
}


function getTicksHtml(data, coupon) {
    var html = '<div class="diol_pwd" style="width:600px;">' +
        '        <div class="dio_close" i="close"></div>' +
        '        <div class="diol_title">选择您要使用的优惠券</div>' +
        '        <div class="form_main" style="width:490px;">' +
        '            <div class="form_group clearfix">' +
        '                <div class="form_ttl">' +
        '                    <div class="dio_coupon_radio is_focus">' +
        '                        <span class="radio_label radio_label_top"></span>' +
        '                        <input type="radio" name="coupon" value="0" class="dio_coupon_r" /> 不使用优惠券' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="dio_coupon"><div class="dio_coupon_content">';
    html += ticketsItems(data, coupon);
    html += '            </div><a href="javascript:;" id="loadMore" class="dio_coupon_more">点击加载更多</a></div>' +
        '           <div class="form_group form_group_last clearfix">' +
        '                <div class="form_ttl"></div>' +
        '                <div class="form_input">' +
        '                    <a href="javascript:;" style="margin-top:20px;" class="diol_opt">确认</a>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>';

    return html;
}

var countTime = 120;
var pageNo = 1;
var payAge = parseInt(window.payAge);

function buy(opts) {
    $.extend(this, {
        $money: null, //投资金额
        $balanceSpan: null, //用户余额
        $expectedReturn: null, //预期收益
        $interestDate: null, //计息日期
        $checkbox: null, //是否同意协议
        $autoPurchase: null, //是否同意续投
        $month: null, //所选产品期次
        $rate: null, //所选产品年利率
        $rateId: null, //所选产品产品id
        $productName: null, //所选产品产品名称
        $coefficient: null, //起投金额
        $channel: null, //渠道
        $sub_channel: null, //子渠道
        $buyBtn: null, //购买按钮
        $command: null, //是否输入口令
        $callback: null,
        $smsInput: null,
        $smsBtn: null,
        $isSendSms: true,
        $projectId: null,
        $ticketId: 0, //券的ID
        $ticketAmount: 0, //券的面值
        $ticketIdActive: true, //活动开启的标志
        $coupon: 0, //优惠券按钮的状态 0默认没有输入投标金额  1无可用优惠券 2未选择优惠券/或者已选择,
        bizType:'', //优惠券类型
        deduction:0,//优惠券抵扣
        ticketInvestAmount:0, //优惠券起投金额,
        isMeet: false //优惠券可不可用
    }, opts || {});
    this.init();
};

buy.prototype = {
    init: function() {
        var that = this;
        this.events();
    },
    events: function() {
        var that = this;
        var balance = 0;
        if (that.$interestDate != null) {
            if (that.$channel.val() == 0 && that.$sub_channel.val() == 9) {
                this.getInterestDate(0);
            } else {
                this.getInterestDate(1);
            }
        }
        var timeout = null;

        if (this.$ticketIdActive) {
            this.$money.on('input', function() {
                    timeout && clearTimeout(timeout);
                    var money = parseInt(that.$money.val());
                    var coefficient = parseInt(that.$coefficient.val());
/*                   if (that.bizType == 5 && that.deduction && money >= that.ticketInvestAmount&&money >= coefficient) {
                        var amount = money * that.deduction;
                        amount = amount > that.$ticketAmount ? that.$ticketAmount : amount;
                        if (that.$coupon == 2) {
                            $('.buy_pannel .meta').find("li:last").find('span').text('本次抵扣'+amount.toFixed(2) + '元');
                        }
                        return;
                    }*/
                    /* 
                    if (that.bizType == 3 && that.deduction && money >= that.ticketInvestAmount&&money >= coefficient&&money<50000) {
                        if (that.$coupon == 2) {
                            $('.buy_pannel .meta').find("li:last").find('span').text(that.deduction*1000/10+'%加息券');
                        }
                        return;
                    }
                    */
                timeout = setTimeout(function() {
                        that.getTickes(1, function(data) {
   /*                         if (that.bizType == 5 && that.deduction && money >= that.ticketInvestAmount) {
                                //防止异步延迟
                                return;
                            }
                            if (that.bizType == 3 && that.deduction && money >= that.ticketInvestAmount && money<50000) {
                                //防止异步延迟
                                return;
                            }*/
                            for(var i = 0, len = data.list.length; i< len; i++){
                                if(data.list[i].ticketId == that.$ticketId && data.list[i].isMeet){
                                    that.$coupon = 2;
                                    if(that.bizType == 5){
                                        var amount = money * that.deduction;
                                        amount = amount > that.$ticketAmount ? that.$ticketAmount : amount;
                                        $('.buy_pannel .meta').find("li:last").find('span').text('本次抵扣'+amount.toFixed(2) + '元');
                                    }else if(that.bizType == 3){
                                        $('.buy_pannel .meta').find("li:last").find('span').text(that.deduction*1000/10+'%加息券');
                                    }else{
                                        $('.buy_pannel .meta').find("li:last").find('span').text(data.list[i].amount.toFixed(2) + '元');
                                    }
                                    that.isMeet=true;
                                    return;
                                }
          /*                      if(data.list[i].ticketId == that.$ticketId && money >= that.ticketInvestAmount && that.bizType == 3&&money<50000){
                                    that.$coupon = 2;
                                    $('.buy_pannel .meta').find("li:last").find('span').text(data.list[i].amount.toFixed(2) + '元');
                                    return;
                                }*/
                            }
                            that.isMeet = false;
                            if (data.list && data.list.length > 0) {
                                that.$coupon = 2;
                                $('.meta').find("li:last").find('span').text('未选择优惠券');
                                $('.meta').find("li:last").find('.charge_btn').text(data.total + '个券').show();
                            } else {
                                $('.meta').find("li:last").find('span').text('无可用优惠券');
                                $('.meta').find("li:last").find('.charge_btn').text('0个券').hide();
                                that.$coupon = 1;
                            }
                        })
                }, 500);
            });

            //领券
            $('.meta').find("li:last").find('.charge_btn').click(function() {
                if (that.$coupon == 0 || that.$coupon == 2) {
                    that.getTickes(1, function(data) {
                        if (data.list && data.list.length > 0) {
                            that.getTickesDialog(data, that.$coupon);
                        }else{
                            $('.meta').find("li:last").find('span').text('无可用优惠券');
                            $('.meta').find("li:last").find('.charge_btn').text('0个券').hide();
                        }
                    })
                }
            });
        }
        //查询余额
        if (that.$balanceSpan != null) {
            $.ajax({
                url: "https://www.qianshenghua.com/queryUserBalance.do",
                type: 'post', //非必须.默认get
                data: {},
                dataType: 'json', //非必须.默认text
                async: true, //非必须.默认true
                cache: false, //非必须.默认false
                timeout: 30000, //非必须.默认30秒
                success: function(data) {
                    if (that.$balanceSpan != null) {
                        that.$balanceSpan.text(data.data.ba || 0);
                        balance = data.data.ba || 0;
                    }
                }
            });
        }
        this.$money.on('keyup', function() {
            var $this = $(this);
            $this.val($this.val().replace(/\D/g, ''));
        });
        if (that.$expectedReturn != null) {
            this.getExpectedReturn();
        }
        if (this.$smsInput && this.$smsBtn) {
            this.smsValidationFn();
        }
        this.$buyBtn.on('click', function() {
            var btn = $(this);
            if (payAge < 18 && payAge > 0) {
                limit18age();
                return;
            }
            if (window.isTest !== undefined && parseInt(window.isTest) === 0) {
                HHN.riskTest();
                return;
            }
            if (btn.hasClass('disabled')) return;
            btn.addClass('disabled');

            if (that.validation()) {
                if (balance < 1 && that.$money.val() < 10) {
                    popup({ text: '经银行调整最低交易金额至10元', type: 'danger' });

                } else {
                    //var amount = $("#money").val();
                    var amount = that.$money.val();
                    var channel = that.$channel.val();
                    var sub_channel = that.$sub_channel.val();
                    var stParam = [];
                    stParam.push('amount=' + amount);
                    stParam.push('channel=' + channel);
                    stParam.push('sub_channel=' + sub_channel);
                    //验证是否绑卡 
                    if (that.$isSendSms) {
                        that.valitationSms(function() {
                            $.ajax({
                                url: "https://www.qianshenghua.com/preUserInvestment.do",
                                type: 'post', //非必须.默认get
                                data: stParam.join('&'),
                                dataType: 'json', //非必须.默认text
                                async: true, //非必须.默认true
                                cache: false, //非必须.默认false
                                timeout: 60000, //非必须.默认30秒
                                success: function(data) {
                                    that.checkSuccess(data);
                                    //that.getTickes(data);
                                }
                            });
                        })
                    } else {
                        $.ajax({
                            url: "https://www.qianshenghua.com/preUserInvestment.do",
                            type: 'post', //非必须.默认get
                            data: stParam.join('&'),
                            dataType: 'json', //非必须.默认text
                            async: true, //非必须.默认true
                            cache: false, //非必须.默认false
                            timeout: 60000, //非必须.默认30秒
                            success: function(data) {
                                that.checkSuccess(data);
                                //that.getTickes(data);
                            }
                        });
                    }
                }
            }
            btn.removeClass('disabled');


        });
    },
    valitationSms: function(callback) {
        if (!$.trim($('#smsMobile').val())) {
            popup({ text: '请输入验证码', type: 'danger' });
            return;
        }
        $.ajax({
            url: 'https://www.qianshenghua.com/common/checkVerifyMobileCode.do',
            data: {
                identifyCode: $.trim($('#smsMobile').val())
            },
            dataType: 'json',
            success: function(json) {
                if (json.code === 0) {
                    callback();
                } else {
                    popup({ text: json.msg, type: 'danger' });
                }
            }
        });
    },
    smsValidationFn: function() {
        var that = this;
        window.smsIntverl = null;
        this.$smsBtn.on('click', function() {
            if (payAge < 18 && payAge > 0) {
                limit18age();
                return;
            }
            if (!that.$money.val()) {
                popup({ text: '请输入购买金额！', type: 'danger' });
                return false;
            }
            if (parseInt(that.$money.val()) < parseInt(that.$coefficient.val())) {
                popup({ text: '投资金额必须大于起投金额！', type: 'danger' });
                return false;
            }
            if (window.isTest !== undefined && parseInt(window.isTest) === 0) {
                HHN.riskTest();
                return;
            }
            if (120 !== countTime) return;
            if(CONFIG.accountType!==2){//非企业用户
                checkChoose(function(){//实名、绑卡、支付密码
                    $.ajax({
                        url: 'https://www.qianshenghua.com/common/sendSmsCode.do',
                        dataType: 'json',
                        data: { bizType: 'qsxy' },
                        success: function(json) {
                            if (parseInt(json.code) === 0) {
                                timer();
                                that.smsRet = 0;
                            } else {
                                json.message && popup({ text: json.message, type: 'info' });
                            }
                        },
                        error: function() {
                            HHN.popup('短信操作过于频繁，稍后重试！');
                        }
                    });
                })
            }else{//企业用户
                $.ajax({
                    url: 'https://www.qianshenghua.com/common/sendSmsCode.do',
                    dataType: 'json',
                    data: { bizType: 'qsxy' },
                    success: function(json) {
                        if (parseInt(json.code) === 0) {
                            timer();
                            that.smsRet = 0;
                        } else {
                            json.message && popup({ text: json.message, type: 'info' });
                        }
                    },
                    error: function() {
                        HHN.popup('短信操作过于频繁，稍后重试！');
                    }
                });
            }

        });

        function timer() {
            that.$smsBtn.html('120秒').addClass('disabled');
            window.smsIntverl = setInterval(function() {
                if (countTime < 1) {
                    clearInterval(window.smsIntverl);
                    countTime = 120;
                    that.$smsBtn.html('重新获取').removeClass('disabled');
                    return;
                }
                that.$smsBtn.html(--countTime + '秒');
            }, 1000);
        }
    },
    validation: function() {
        var month = this.$month.val();
        var amount = this.$money.val();
        var minLimit = this.$coefficient.val();
        var channel = this.$channel.val();
        var sub_channel = this.$sub_channel.val();
        var reg = /^[1-9]{1}[0-9]{0,19}$/;

        if (month == '' || isNaN(month)) {
            //alert("请选择投资产品！");
            popup({ text: '请选择投资产品！', type: 'danger' });
            return false;
        }
        if (amount == '') {
            //alert("请输入购买金额！");
            popup({ text: '请输入购买金额！', type: 'danger' });
            return false;
        }
        if (isNaN(amount)) {
            //alert("请输入有效购买金额，只能为数字！");
            popup({ text: '请输入有效购买金额，只能为数字！', type: 'danger' });
            return false;
        }
        if (!reg.test(amount)) {
            //alert("输入金额有误！");
            popup({ text: '输入金额有误！', type: 'danger' });
            return false;
        }
        if (amount.indexOf(' ') > -1) {
            //alert("购买金额不能包含空格！");
            popup({ text: '购买金额不能包含空格！', type: 'danger' });
            return false;
        }
        if (amount < 0) {
            //alert('买入金额不能为负数');
            popup({ text: '买入金额不能为负数', type: 'danger' });
            return false;
        }
        if (parseInt(amount) < parseInt(minLimit)) {
            popup({ text: '投资金额必须大于起投金额！', type: 'danger' });
            return false;
        }
        if (amount < 1 && data.money < 10) {
            HHN.popup('经银行调整最低交易限额至10元');
            return;
        }
        if (this.$checkbox != null) {
            if (this.$checkbox.attr('checked') != "checked") {
                //alert("未同意爱定宝服务协议！");
                popup({ text: '未同意服务协议！', type: 'danger' });
                return false;
            }
        }
        if (sub_channel == 3) {
            if (parseInt(amount) % 100 != 0 && amount.length > 2) {
                popup({ text: '输入的购买金额应为100的倍数！！', type: 'danger' });
                return false;
            }
        } else if (sub_channel == 5 && (parseInt(amount) % 10000) != 0) {
            popup({ text: '输入的购买金额应为10000的倍数！', type: 'danger' });
            return false;
        } else if (sub_channel == 6 && (parseInt(amount) % 10000) != 0) {
            popup({ text: '输入的购买金额应为10000的倍数！', type: 'danger' });
        	return false;
        }else if(channel == 0 && sub_channel == 6 && (parseInt(amount) % 10000) != 0) {
        	popup({text:'输入的购买金额应为10000的倍数！',type:'danger'});
            return false;
        }
        if (this.$command != null) {
            var command = this.$command.val();
            if ($.trim(command) == '') {
                popup({ text: '您还未输入口令哦^_^', type: 'danger' });
                return false;
            }
        }
        if (this.$smsInput && this.$smsBtn && this.smsRet === undefined) {
            popup({ text: '请先获取手机验证码', type: 'danger' });
            return;
        }
        return true;
    },
    getMoney: function() {
        return parseInt(this.$money.val().replace(/,/g, ''));
    },
    checkMoney: function() {
        return this.getMoney() >= this.$coefficient;
    },
    checkAgreement: function() {
        return this.$checkbox.attr('checked');
    },
    checkAutoPurchase: function() {
        return this.$autoPurchase != null ? this.$autoPurchase.attr('checked') : null;
    },
    getInterestDate: function(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth() + 1; //获取当前月份的日期
        var d = dd.getDate();
        this.$interestDate.text(y + "-" + m + "-" + d);
    },
    getExpectedReturn: function() {
        if (!this.getMoney())
            return 0;
        var ex = 0;
        if (this.$sub_Channel == 1) {
            ex = (this.getMoney() * $month) + (this.getMoney() * this.$rate / 12 * (this.$month == 6 ? 21 : 78));
        } else if (this.$sub_Channel == 3) {
            ex = (this.getMoney() * this.$rate) / 365;
        } else if (this.$sub_Channel == 5) {
            ex = (this.getMoney() % this.$coefficient) == 0 ? this.getMoney() * this.$rate * (this.$month / 12) / this.$month : 0;
        } else {
            ex = this.getMoney() + (this.getMoney() * this.$rate * this.$month / 12);
        }
        ex = this.floor(ex, 2);
        return HHN.formatNumber(ex);
    },
    floor: function(digit, length) {
        length = length ? parseInt(length) : 0;
        if (length <= 0)
            return Math.floor(digit);
        digit = Math.floor(digit * Math.pow(10, length)) / Math.pow(10, length);
        return digit;
    },
    getTickesDialog: function(data, coupon) {
        var tpl = getTicksHtml(data, coupon),
            that = this;
        var layer = dialog({
            title: false,
            padding: '0',
            content: tpl,
            onshow: function() {
                var node = $(this.node);
                node.on('click', '.radio_label', function() {
                    if ($(this).hasClass('is_disabled') || node.find('.is_disabled').length == data.list.length || that.$coupon == 0) return false;
                    $('.dio_coupon_radio').removeClass('is_focus');
                    if (!$(this).parent().hasClass('is_focus')) {
                        $(this).parent().addClass('is_focus')
                        $('.dio_coupon_r').attr('checked', false);
                        $(this).parent().find('input').attr('checked', true);
                    }
                });

                node.delegate('.diol_opt', 'click', function() {
                    var $checked   = $('.dio_coupon_r:checked');
                    var ticketId   = $checked.val();
                    var amount     = $checked.data('amount') || 0;
                    that.bizType   = $checked.data('biztype');
                    that.deduction = parseFloat($checked.data('deduction'));
                    that.ticketInvestAmount = parseFloat($checked.data('investamount'));

                    var money = that.$money.val();
                    
                    that.$ticketId = ticketId;
                    that.$ticketAmount = amount;
                    layer.close();

                    if(that.bizType==5&&that.deduction){
                        money = money*that.deduction;
                        money = money > amount ? amount: money;
                    }else{
                        money = amount;
                    }

                    if (that.$coupon == 2) {
                        if (ticketId == 0) {
                            $('.meta').find("li:last").find('span').text('不使用优惠券');
                        } else {
                            if(3!==that.bizType){
                                $('.meta').find("li:last").find('span').text((5==that.bizType?'本次抵扣':'')+money.toFixed(2) + '元');
                            }else{
                                $('.meta').find("li:last").find('span').text(that.deduction*1000/10+'%加息券');
                            }
                            that.isMeet = true;
                        }
                    }
                });

                node.find("#loadMore").on('click', function() {
                    that.getTickes(++pageNo, function(data) {
                        if (data.list && data.list.length > 0) {
                            var html = ticketsItems(data, that.$coupon);
                            node.find('.dio_coupon_content').append(html);
                        } else {
                            node.find("#loadMore").text('没有更多数据');
                        }
                    });
                });

                //选中当前选中的
                if (that.$ticketId) {
                    node.find('.dio_coupon_r').each(function() {
                        $(this).attr('checked', false);
                        $(this).parent().removeClass('is_focus');
                        if (this.value == that.$ticketId) {
                            $(this).attr('checked', true);
                            $(this).parent().addClass('is_focus');
                        }
                    });
                }
            }
        }).showModal();
    },
    getTickes: function(pageNo, callback) {
        var that = this;
        $.ajax({
            url: 'https://www.qianshenghua.com/ticket/getUnUsedTickets.do',
            data: {
                period: this.$month.val(),
                productName: this.$productName.val(),
                amount: this.$money.val(),
                pageNo: pageNo || 1
            },
            type: 'POST',
            dataType: 'json',
            success: function(data) {
                //弹窗显示优惠券
                if (data.retCode == 0) {
                    // if (data.data.list.length > 0) {
                    //     //弹出优惠券的框
                    //     that.getTickesDialog(data.data);
                    // } else {
                    //     //正常逻辑
                    // }
                    callback && callback(data.data);
                } else if(data.retCode == -1) {
                    $('.meta').find("li:last").find('span').text('请先登录');
                    $('.meta').find("li:last").find('.charge_btn').text('0个券').hide();;               
                }
            },
            error: function() {

            }
        })
    },
    checkSuccess: function(data) {
        var that = this;
        if (data.returnCode == 0) {

            //var mounth = $("#mounth").val();
            // var amount = $("#money").val();
            //var rate = $("#rate").val();
            //var rateId = $("#rateId").val();
            // var productName = $("#productName").val()+"·"+mounth+"-M";


            var mounth = this.$month.val();
            var amount = parseInt(this.$money.val());
            var rate = this.$rate.val();
            var rateId = this.$rateId.val();
            var channel = this.$channel.val();
            var sub_channel = this.$sub_channel.val();
            var projectId = this.$projectId ? this.$projectId.val() : '';
            var productName = "";
            if (channel == 0 && (sub_channel == 6 || sub_channel == 9)) {
                productName = this.$productName.val();
            } else {
                productName = this.$productName.val() + "·" + mounth + "-M";
            }
            var buyBtn = this.$buyBtn;
            var command = null;
            var autoPurchase = that.checkAutoPurchase() ? 2 : 1;
            if (this.$command != null) {
                command = this.$command.val();
            }

            var balance = this.$balanceSpan.text(); //余额
            var bankId = data.data.bank_card_id; //银行卡id
            var bankName = data.data.bank_name; //银行名称
            var cardNo = data.data.card_no; //银行卡号
            var bankNo = cardNo.substring(cardNo.length - 4, cardNo.length); //尾号
            var ticketAmount = that.$ticketAmount || 0;
            if(that.isMeet){
                if (that.bizType == 5 && that.deduction && amount >= that.ticketInvestAmount) {//抵扣券逻辑
                        ticketAmount = (amount * that.deduction).toFixed(2);
                        ticketAmount = ticketAmount > that.$ticketAmount ? that.$ticketAmount : ticketAmount;
                }else if(amount < that.ticketInvestAmount){
                        ticketAmount = 0;
                }
            }
            var phone;
            if (data.data.phone_no != '' && data.data.phone_no != null) {
                phone = data.data.phone_no; //银行预留手机号
            }
            if (eval(balance - amount) >= 0) { //投资金额小于余额
                HHN.dialog.payTradePswBalance({
                    product: productName,
                    money: amount,
                    rate: rate,
                    rateId: rateId,
                    mounth: mounth,
                    autoPurchase: autoPurchase,
                    channel: channel,
                    sub_channel: sub_channel,
                    buyBtn: buyBtn,
                    command: $.trim(command),
                    callback: that.$callback,
                    balance: balance,
                    phone: phone,
                    projectId: projectId,
                    ticketId: that.isMeet?that.$ticketId:'',//弹框中可判断有没有用优惠券
                    ticketAmount: ticketAmount,
                    actualAmount: amount - (that.isMeet?ticketAmount:0),
                    ticketIdActive: that.$ticketIdActive,
                    bizType: that.isMeet?that.bizType:'',
                    deduction: that.deduction*1000/10
                });
            } else {
                var bankAmount = this.floor(amount - balance, 2);
                if (data.data.pay_channel == 'QUICKPAY') {

                    HHN.dialog.payTradePswQuick({
                        product: productName,
                        money: amount,
                        rate: rate,
                        rateId: rateId,
                        mounth: mounth,
                        autoPurchase: autoPurchase,
                        channel: channel,
                        sub_channel: sub_channel,
                        buyBtn: buyBtn,
                        command: $.trim(command),
                        callback: that.$callback,
                        balance: balance,
                        bankAmount: bankAmount-ticketAmount,
                        bankName: bankName,
                        bankNo: bankNo,
                        phone: phone,
                        bankId: bankId,
                        projectId: projectId,
                        ticketId: that.isMeet?that.$ticketId:'',//弹框中可判断有没有用优惠券
                        ticketAmount: ticketAmount,
                        actualAmount: amount - (that.isMeet?ticketAmount:0),
                        ticketIdActive: that.$ticketIdActive,
                        bizType: that.isMeet?that.bizType:'',
                        deduction: that.deduction*1000/10
                    });
                } else if (data.data.pay_channel == 'TLPAY') {
                    //二次确认
                    HHN.dialog.payTradePswTL({
                        product: productName,
                        money: amount,
                        rate: rate,
                        rateId: rateId,
                        mounth: mounth,
                        autoPurchase: autoPurchase,
                        channel: channel,
                        sub_channel: sub_channel,
                        buyBtn: buyBtn,
                        command: $.trim(command),
                        callback: that.$callback,
                        balance: balance,
                        bankAmount: bankAmount-ticketAmount,
                        bankName: bankName,
                        bankNo: bankNo,
                        phone: phone,
                        projectId: projectId,
                        ticketId: that.isMeet?that.$ticketId:'',//弹框中可判断有没有用优惠券
                        ticketAmount: ticketAmount,
                        actualAmount: amount - (that.isMeet?ticketAmount:0),
                        ticketIdActive: that.$ticketIdActive,
                        bizType: that.isMeet?that.bizType:'',
                        deduction: that.deduction*1000/10
                    });
                } else if (data.data.pay_channel == 'LLPAY') {
                    HHN.dialog.llpayPCNotice();
                }
            }


        } else if (data.returnCode == 2) {
            //绑卡
            //alert("您当前未绑定银行卡，请绑定银行卡");
            //            popup({text:'您当前未绑定银行卡，请绑定银行卡！',type:'danger'});
            //            setTimeout(function(){//此处需要添加充值记录链接
            //            	document.location.href = "https://www.qianshenghua.com/profile/bindCard.do";
            //			}, 3000);
            recharge(2);
            //alert("dd");
        } else if (data.returnCode == 3) {
            //换卡
            //alert("您当前没有绑定成功的银行卡，系统检测到您有"+data.data.bankCount+"张绑定中的银行卡，请输入验证金额完成绑定");
            /*popup({text:'您当前没有绑定成功的银行卡，系统检测到您有绑定中的银行卡，请输入验证金额完成绑定！',type:'danger'});
            var bankName = getBankName(data.data.bankCode);
            var bankNo = data.data.bankNo;
            var param = "?bankName="+bankName+"&userAccount="+bankNo;
            setTimeout(function(){//此处需要添加充值记录链接
            	document.location.href = "https://www.qianshenghua.com/verifyCardPage.do"+param;
			}, 3000);*/
            continueMoneyVerify();
        } else if (data.returnCode == -1) {
            login();
        } else if (data.returnCode == 4) {
            HHN.dialog.setTradePsw(data.data);
        } else if (data.returnCode == 5) {
            HHN.dialog.enterpriseNotice();
        } else if (data.returnCode == 18) {
            limit18age();
        } else {
            //alert(data.messageInfo);
            popup({ text: data.messageInfo, type: 'danger' });

        }
    }
};