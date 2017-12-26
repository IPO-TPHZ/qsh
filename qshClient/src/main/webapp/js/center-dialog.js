
function CenterDialog() {
    this.template = {
        // setTradePsw: '<div class="center-dialog">' +
        //     '    <p class="tip">设置支付密码后，当您进行充值、提现、投资等操作时，必须输入支付密码。</p>' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">手机号码</td>' +
        //     '            <td><p class="text">{phone}</p></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">短信验证码</td>' +

        //     '            <td><input class="txt txt-min j-code" type="text" /><a class="input-btn" onclick="HHN.dialog.getcode();" href="javascript:;">获取验证码</a></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">支付密码</td>' +
        //     '            <td><input class="txt icon j-psw" type="password" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">确认支付密码</td>' +
        //     '            <td><input class="txt icon j-psw2" type="password" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td>' +
        //     '                <a href="javascript:;" class="submit">确 认</a>' +
        //     '                <p class="error">温馨提示：请保管好自己的密码哟~</p>' +
        //     '                <p id="error"></p>' +
        //     '            </td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '</div>',
    redeemNote:' <div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">温馨提示</div>'+
            '        <div class="form_main">'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_tit_img">'+
            '                    <img src="https://static.hehenian.com/p_v2/images/redeem_title.png" alt="" />'+
            '                </div>'+
            '                <div class="form_dio_redeem">'+
            '                    <strong>尊敬的主人</strong>'+
            '                    <p>您的{pName}已到期</p>'+
            '                    <p>小花为您赚了<span>￥{money}（{rate}%年化收利率）</span></p>'+
            '                    <p>莫让钱生锈，继续钱生花!</p>'+
            '                </div>'+
            '            </div>'+
            '            <a href="javascript:;" id="submit" class="diol_opt diol_center_opt">继续投资</a>'+
            '        </div>'+
            '    </div>',
    inputPayPwd  : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">输入支付密码</div>'+
            '        <div class="form_main">'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">支付密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password" id="password" class="dio_picon">'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt">确认</a><p class="diol_link" style="width: auto;"><a href="javascript:;" id="link">忘记支付密码？</a></p>'+
            '                </div>'+
            '            </div>'+
            '            <p id="dio_error"></p>'+
            '        </div>'+
            '    </div>',
        alTradeAmount : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">您的账户存在资金</div>'+
            '    <div class="form_main">'+
            '     <h3 style="font-size:16px;">为确保您的资金安全，须满足以下条件：</h3>'+
            '     <ul class="dio_notice-ul" style="color:#666;padding:10px 0;border-bottom: 1px solid #eee;">'+
            '        <li>平台内无在投产品；</li>'+
            '        <li>平台账户余额为0元；</li>'+
            '        <li>若资金处于提现审核状态，到账后可进行更换 银行卡操作</li></ul>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">提现银行卡号</div>'+
            '            <div class="form_input">'+
            '               <span class="dio_money">{bankTxt}</span>'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">账户余额</div>'+
            '            <div class="form_input">'+
            '                 <span class="dio_money">{balance}</span>元'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">投资产品金额</div>'+
            '            <div class="form_input">'+
            '                 <span class="dio_money">{proInvest}</span>元'+
            '            </div>'+
            '        </div>'+
            '        <a href="javascript:;" class="diol_opt diol_center_opt">确认</a>'+
            // '        <p class="diol_link"><a href="javascript:;" onclick="HHN.dialog.updateBindCard(2,2);">银行卡注销或已丢失?</a></p>'+
            '        <p id="dio_error"></p>'+
            '    </div>'+
            '</div>',
        setTradePsw :'<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">设置支付密码</div>'+
            '        <div class="form_main">'+
            '        <p class="dio_ttl">设置支付密码后，当您进行<span style="color:#e65124">充值、提现、投资</span>等操作时，必须输入支付密码。</p>'+
            '            <div class="form_group mb10 clearfix">'+
            '                <div class="form_ttl">手机号</div>'+
            '                <div class="form_input">'+
            '                    {phone}'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">短信验证码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" class="form_input_code j-code">'+
            '                    <button class="form_code input-btn" placeholder="短信验证码" onclick="HHN.dialog.getcode();">发送验证码</button>'+
            '                    <i class="err_icon"></i>'+
            '                    <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">支付密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password" placeholder="密码长度为8-20位,由数字与字母组成" class="dio_picon j-psw" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">确认密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password" placeholder="再次确认密码" class="dio_picon j-psw2" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt submit">确认</a>'+
            '                    <p class="dio_notice">温馨提示：请保管好自己的密码哟~</p>'+
            '                </div>'+
            '            </div>'+
            '            <p id="dio_error"></p>'+
            '        </div>'+
            '    </div>',
        baseSuc:'<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="form_main">'+
            '            <img src="https://static.hehenian.com/p/images/dio_edit.png" class="dio_edit_img" alt="" />'+
            '            <p class="dio_sinfo">{text}</p>'+
            '            <a href="javascript:;" class="diol_opt diol_opt_close">关闭</a>           '+
            '        </div>'+
            '    </div>',
        // onPaySubmitSuc: '<div>' +
        //     '    <div class="text">' +
        //     '        {text}' +
        //     '    </div>' +
        //     '</div>',
        onPaySubmitSuc : '<div class="diol_pwd clearfix">'+
            '        <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">{title}</div>'+
            '    <div class="form_main">'+
            '    <p class="dio_text dio_pb">{text}</p>'+
            '    </div>'+
            '</div>',
        // realNameCert : '<div id="fdas" class="center-dialog">' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">真实姓名</td>' +
        //     '            <td><input class="txt icon j-name" type="text" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">身份证号</td>' +
        //     '            <td><input class="txt icon j-id" type="text" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td><a href="javascript:;" class="submit">认 证</a><p id="error"></p></td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '</div>',
            realNameCert : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">实名认证</div>'+
            '    <div class="form_main">'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">真实姓名</div>'+
            '            <div class="form_input">'+
            '                <input type="text" placeholder="请输入真实姓名" class="dio_uicon j-name">'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">身份证号</div>'+
            '            <div class="form_input">'+
            '                <input type="text" placeholder="请输入身份证号" class="dio_cicon j-id">'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <p class="form-tTop" style="padding:0 15px 10px 28px;color:red;font-size:12px;">'+
            '           <span>温馨提示：<br>完成身份认证才能进行投资，请仔细核对您填写的内容，确保与身份证上的信息一致</span>'+
            '        </p>'+
            '        <div class="form_group form_group_last clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;" class="diol_opt submit">确认</a>'+
            '            </div>'+
            '        </div>'+
            '        <p id="dio_error"></p>'+
            '    </div>'+
            '</div>   ',
        // updateLoginPsw: '<div class="center-dialog">' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">旧登录密码</td>' +
        //     '            <td><input class="txt icon j-psw1" type="password" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">新登录密码</td>' +
        //     '            <td><input placeholder="6~16个字符，不能包含空格" class="txt icon j-psw2" type="password" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">确认新登录密码</td>' +
        //     '            <td><input class="txt icon j-psw3" type="password" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">验证码</td>' +
        //     '            <td class="cert-code"><input class="txt txt-min j-cert" type="text" />' +
        //     '            <img class="j-code" src="https://www.qianshenghua.com/common/imageCode.do?_={code}" width="100" height="50">' +
        //     '            <a class="j-code" href="javascript:;">看不清？<br>换一换</a></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td><a href="javascript:;" class="submit">确 认</a><p id="error"></p></td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '</div>',
        updateLoginPsw : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">修改登录密码</div>'+
            '        <div class="form_main">'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">登录旧密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password" placeholder="请输入登录旧密码"  class="dio_picon j-psw1" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">新密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password"  placeholder="6~16个字符，不能包含空格" class="dio_picon j-psw2" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">确认新密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password"  placeholder="确认新密码" class="dio_picon j-psw3"/>'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">验证码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" placeholder="验证码" class="form_input_code j-cert" />'+
            '                    <button class="form_code input-btn">发送验证码</button>'+
            '                    <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt submit">确认</a>'+
            '                </div>'+
            '            </div><p id="dio_error"></p>'+
            '        </div>'+
            '    </div>',
        // updateTradePsw: '<div class="center-dialog">' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">旧支付密码</td>' +
        //     '            <td><input class="txt icon j-psw1" type="password" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">新支付密码</td>' +
        //     '            <td><input placeholder="8~20个字符，不能包含空格" class="txt icon j-psw2" type="password" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">确认新支付密码</td>' +
        //     '            <td><input class="txt icon j-psw3" type="password" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">验证码</td>' +
        //     '            <td class="cert-code"><input class="txt txt-min j-cert" type="text" />' +
        //     '            <img class="j-code" src="https://www.qianshenghua.com/common/imageCode.do?pageId=setPaypwd" width="100" height="50">' +
        //     '            <a class="j-code" href="javascript:;">看不清？<br>换一换</a></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td><a href="javascript:;" class="submit">确 认</a><p id="error"></p></td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '</div>',
            updateTradePsw : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">修改支付密码</div>'+
            '    <div class="form_main">'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">旧支付密码</div>'+
            '            <div class="form_input">'+
            '                <input type="password" placeholder="请输入旧支付密码" class="dio_picon j-psw1">'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">新支付密码</div>'+
            '            <div class="form_input">'+
            '                <input type="password" placeholder="长度为8-20位,由数字与字母组成" class="dio_picon j-psw2">'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">确认新密码</div>'+
            '            <div class="form_input">'+
            '                <input type="password" placeholder="确认新密码" class="dio_picon j-psw3">'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">验证码</div>'+
            '            <div class="form_input">'+
            '                <input type="text" placeholder="验证码" class="form_input_code j-cert">'+
            '                <button class="form_code input-btn">发送验证码</button>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group form_group_last clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;" class="diol_opt submit">确认</a>'+
            '            </div>'+
            '        </div><p id="dio_error"></p>'+
            '    </div>'+
            '</div>',
        updatePhone1: '<div class="center-dialog">' +
            '    <table>' +
            '        <tr>' +
            '            <td class="label">当前手机号</td>' +
            '            <td><p class="text">{phone}</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">短信验证码</td>' +
            '            <td><input class="txt txt-min j-code" type="text"><a class="input-btn" href="javascript:;">获取验证码</a></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">新手机号码</td>' +
            '            <td><input class="txt icon j-phone1" type="text"></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">确认新手机号码</td>' +
            '            <td><input class="txt icon j-phone2" type="text"></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td></td>' +
            '            <td><a href="javascript:;" class="submit" id="submit1">下一步</a>' +
            '                <p class="ftip">手机不在身边？<span class="red">请联系客服</span></p>' +
            '                <p id="error"></p>' +
            '            </td>' +
            '        </tr>' +
            '    </table>' +
            '</div>',
        updatePhone2: '<div class="center-dialog">' +
            '    <p class="tip">验证码已向您的新手机号发送，<span class="red">10分钟</span>内输入有效。</p>' +
            '    <table>' +
            '        <tr>' +
            '            <td class="label">短信验证码</td>' +
            '            <td><input class="txt txt-min j-code" type="text" /></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td></td>' +
            '            <td><a class="submit" href="javascript:;" id="submit2">确定</a></td>' +
            '        </tr>' +
            '    </table>' +
            '    <p id="error" class="j-error"></p>' +
            '</div>',
        // certEmail: '<div class="center-dialog">' +
        //     '    <p class="tip">完成邮箱认证后，您可以通过该邮箱接收电子合同、最新优惠活动信息等。</p>' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">常用邮箱</td>' +
        //     '            <td><input class="txt j-mail" type="text" /></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td><a class="submit" id="submit" href="javascript:;">确定</a></td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '    <p id="error"></p>' +
        //     '</div>',
        certEmail : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">邮箱认证</div>'+
            '        <div class="form_main">'+
            '            <p class="dio_ttl">完成邮箱认证后，您可以通过该邮箱接收电子合同、最新优惠活动信息等。</p>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">常用邮箱</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" class="j-mail" placeholder="请输入合法的邮箱地址"/>'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt submit" id="submit">确认</a>'+
            '                </div>'+
            '            </div>'+
            '        </div>'+
            '    </div>',
        // certEmailLink: '<div class="center-dialog">' +
        //     '    <p class="tip">验证邮件已发出，请您前往收取邮件。</p>' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">常用邮箱</td>' +
        //     '            <td><p class="text">{mail}　<a style="color:#3ED6C8" href="javascript:;" class="j-prev">修改</a></p></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td><a class="submit" target="_blank" href="{link}">登录邮箱验证</a></td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '</div>',
            certEmailLink : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">邮箱认证</div>'+
            '        <div class="form_main">'+
            '            <p class="dio_ttl">验证邮件已发出，请您前往收取邮件。</p>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">常用邮箱</div>'+
            '                <div class="form_input">'+
            '                    {mail} <a href="javascript:;" class="dio_mail_edit j-prev">修改</a>'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <a href="{link}" target="_blank" class="diol_opt diol_opt_sure submit">登陆邮箱验证</a>'+
            '            </div>'+
            '        </div>'+
            '    </div>  ',
      //   retrieveLoginPsw: '<div class="center-dialog">' +
		    // '{tipText}'+
      //       '    <table>' +
      //       '        <tr>' +
      //       '            <td class="label">手机号码</td>' +
      //       '            <td><input class="txt" id="mobile" type="text" value="{phone}"/></td>' +
      //       '        </tr>' +
      //       '        <tr>' +
      //       '            <td class="label">短信验证码</td>' +
      //       '            <td><input class="txt txt-min j-code" type="text" /><a class="input-btn" href="javascript:;">获取验证码</a></td>' +
      //       '        </tr>' +
      //       '        <tr>' +
      //       '            <td class="label">新登录密码</td>' +
      //       '            <td><input class="txt icon j-psw" type="password" /></td>' +
      //       '        </tr>' +
      //       '        <tr>' +
      //       '            <td class="label">确认新登录密码</td>' +
      //       '            <td><input class="txt icon j-psw2" type="password" /></td>' +
      //       '        </tr>' +
      //       '        <tr>' +
      //       '            <td></td>' +
      //       '            <td>' +
      //       '                <a href="javascript:;" class="submit">确 认</a>' +
      //       '                <p class="error">温馨提示：请保管好自己的密码哟~</p>' +
      //       '                <p id="error"></p>' +
      //       '            </td>' +
      //       '        </tr>' +
      //       '    </table>' +
      //       '</div>',
      retrieveLoginPsw : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">{title}</div>'+
            '        <div class="form_main">'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">手机号码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" id="mobile" placeholder="请输入你绑定的手机号码" value="{phone}" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">短信验证码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" placeholder="短信验证码" class="form_input_code j-code" />'+
            '                    <button class="form_code input-btn">发送验证码</button>'+
            '                    <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">新密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password" placeholder="请输入新密码，8-20个字符" class="j-psw"/>'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">确认新密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password"  placeholder="请再次输入新密码" class="j-psw2"/>'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt submit">确认</a>'+
            '                </div>'+
            '            </div>'+
            '           '+
            '        </div>'+
            '    </div>',
      // inputTradePsw: '<div class="center-dialog">' +
      //       '    <table>' +
      //       '        <tr>' +
      //       '            <td class="label">支付密码</td>' +
      //       '            <td><input class="txt icon j-psw" type="password" /></td>' +
      //       '        </tr>' +
      //       '    </table>' +
      //       '    <p id="error"></p>' +
      //       '</div>',
            inputTradePsw : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">请输入支付密码</div>'+
            '    <div class="form_main">'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">支付密码</div>'+
            '            <div class="form_input">'+
            '                <input type="password" placeholder="确认新密码" class="dio_picon j-psw">'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group form_group_last clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;" class="diol_opt submit">确认</a>'+
            '            </div>'+
            '        </div>'+
            '        <p id="dio_error"></p>'+
            '    </div>'+
            '</div>',
        pay: '<div class="center-dialog">' +
            '    <table>' +
            '        <tr>' +
            '            <td class="label"><label><input type="radio" name="v" value="1" /> 可用余额</label></td>' +
            '            <td><span class="text cRed">￥{money}</span>　　<a class="cGreen" target="_self">充值</a></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label"><label><input checked="checked" type="radio" name="v" value="2" /> 选择银行</label></td>' +
            '            <td><p class="text">{bank}</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">购买金额</td>' +
            '            <td><input value=" {minMoney}元起购" id="money" class="txt default" type="text" /></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td></td>' +
            '            <td>' +
            '                <p style="text-align: right;font-size:12px">到期本息收益： 0元<br>' +
            '                   计息日期： 2015-7-20</p>' +
            '                <p style="margin-top: 10px" class="agreement"><label>' +
            '                <input id="agree" checked="checked" type="checkbox" /> 同意<a href="" target="_blank">《爱定宝服务协议》</a></label></p>' +
            '                <a class="submit" id="submit1" style="margin-top:6px" href="javascript:;">立即支付</a>' +
            '            </td>' +
            '        </tr>' +
            '    </table>' +
            '    <p id="error"></p>' +
            '</div>',
        payTradePsw: '<div class="center-dialog">' +
            '    <table>' +
            '        <tr>' +
            '            <td class="label">产品名称</td>' +
            '            <td><p class="text">{product}</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">购买金额</td>' +
            '            <td><p class="text"><span class="cRed">{money}</span>元</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">支付密码</td>' +
            '            <td><input id="payPassWord" class="txt icon" type="password" /></td>' +
            '        </tr>' +
            '        <tr id="recommendInput">' +
            '            <td class="label">推荐人</td>' +
            '            <td><input id="payRecommend" class="txt icon j-recommend" type="text" placeholder="推荐人手机号（选填）" /></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td></td>' +
            '            <td><a class="submit" id="submit2" href="javascript:;">确认</a></td>' +
            '        </tr>' +
            '    </table>' +
            '    <p id="error"></p>' +
            '</div>',
          // payTradePswTL: '<div class="center-dialog">' +
          //   '    <table>' +
          //   '        <tr>' +
          //   '            <td class="label">产品名称</td>' +
          //   '            <td><p class="text">{product}</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">购买金额</td>' +
          //   '            <td><p class="text"><span class="cRed">{money}</span>元</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">可用余额</td>' +
          //   '            <td><p class="text"><span class="cRed">{balance}</span>元</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">银行扣款</td>' +
          //   '            <td><p class="text"><span class="cRed">{bankAmount}</span>元</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">银行账号</td>' +
          //   '            <td><p class="text">{bankName}(尾号{bankNo})</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">手机号　</td>' +
          //   '            <td><p class="text">{phone}</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">支付密码</td>' +
          //   '            <td><input id="payPassWord" class="txt icon" type="password" /></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td></td>' +
          //   '            <td><a class="submit" id="submit2" href="javascript:;">确认</a></td>' +
          //   '        </tr>' +
          //   '    </table>' +
          //   '    <p id="error"></p>' +
          //   '</div>',
        payTradePswTL: '<div class="diol_pwd">' +
            '        <div class="dio_close" i="close"></div>' +
            '        <div class="diol_title">确认购买信息</div>' +
            '        <div class="form_main">' +
            '            <div class="form_group d_tit mb0 clearfix">' +
            '                <div class="form_ttl">产品名称</div>' +
            '                <div class="form_input">' +
            '                   {product}' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i></div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl d_prodt">购买金额</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{money}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix coupon">' +
            '                <div class="form_ttl dio_buy">优惠券</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{ticketAmount}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix coupon">' +
            '                <div class="form_ttl dio_buy">实际付款</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{actualAmount}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl">可用余额</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{balance}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl">银行扣款</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{bankAmount}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl">银行账号</div>' +
            '                <div class="form_input">' +
            '                   {bankName}(尾号{bankNo})' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i></div>' +
            '            </div>' +
            '            <div class="form_group mb10 clearfix">' +
            '                <div class="form_ttl">手机号</div>' +
            '                <div class="form_input">' +
            '                    {phone}' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group clearfix">' +
            '                <div class="form_ttl">支付密码</div>' +
            '                <div class="form_input"><input style="display:none">' +
            '                    <input type="password" autocomplete="off" id="payPassWord" class="dio_picon" />' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>' +
            '            </div>' +
            '            <div class="form_group clearfix" id="recommendInput" >' +
            '                <div class="form_ttl">推荐人</div>' +
            '                <div class="form_input">' +
            '                    <input type="text" id="payRecommend" placeholder="推荐人手机号（选填）" class="dio_picon" />' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>' +
            '            </div>' +
            '            <div class="form_group form_group_last clearfix">' +
            '                <div class="form_ttl"></div>' +
            '                <div class="form_input">' +
            '                    <a href="javascript:;" id="submit2" class="diol_opt submit">确认</a>' +
            '                </div>' +
            '            </div>' +
            '            <p id="dio_error"></p>' +
            '        </div>' +
            '    </div>',
         // payTradePswQuick: '<div class="center-dialog">' +
         //    '    <table>' +
         //    '        <tr>' +
         //    '            <td class="label">产品名称</td>' +
         //    '            <td><p class="text">{product}</p></td>' +
         //    '        </tr>' +
         //    '        <tr>' +
         //    '            <td class="label">购买金额</td>' +
         //    '            <td><p class="text"><span class="cRed">{money}</span>元</p></td>' +
         //    '        </tr>' +
         //    '        <tr>' +
         //    '            <td class="label">可用余额</td>' +
         //    '            <td><p class="text"><span class="cRed">{balance}</span>元</p></td>' +
         //    '        </tr>' +
         //    '        <tr>' +
         //    '            <td class="label">银行扣款</td>' +
         //    '            <td><p class="text"><span class="cRed">{bankAmount}</span>元</p></td>' +
         //    '        </tr>' +
         //    '        <tr>' +
         //    '            <td class="label">银行账号</td>' +
         //    '            <td><p class="text">{bankName}(尾号{bankNo})</p></td>' +
         //    '        </tr>' +
         //    '        <tr>' +
         //    '            <td class="label">手机号　</td>' +
         //    '            <td><p class="text">{phone}</p></td>' +
         //    '        </tr>' +
         //    '        <tr id="recommendInput">' +
         //    '            <td class="label">推荐人</td>' +
         //    '            <td><input id="payRecommend" class="txt icon j-recommend" type="text" placeholder="推荐人手机号（选填）" /></td>' +
         //    '        </tr>' +
         //    '        <tr>' +
         //    '            <td class="label">短信验证码</td>' +
         //    '            <td><input class="txt txt-min j-code" type="text" id="validCode"><a class="input-btn" id="quickCode" onclick="HHN.dialog.getcodeQuick({bankId},{bankAmount});" href="javascript:;">获取验证码</a></td>' +
         //    '			 <input type="hidden" id="token" value=""/>'+
         //    '			 <input type="hidden" id="externalRefNumber" value=""/>'+
         //    '        </tr>' +
         //    '        <tr>' +
         //    '            <td></td>' +
         //    '            <td><a class="submit" id="submit2" href="javascript:;">确认</a></td>' +
         //    '        </tr>' +
         //    '    </table>' +
         //    '    <p id="error"></p>' +
         //    '</div>',
        payTradePswQuick: '<div class="diol_pwd">' +
            '        <div class="dio_close" i="close"></div>' +
            '        <div class="diol_title">确认购买信息</div>' +
            '        <div class="form_main">' +
            '            <div class="form_group mb0 d_prodt clearfix">' +
            '                <div class="form_ttl">产品名称</div>' +
            '                <div class="form_input">' +
            '                   {product}' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i></div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl d_tit">购买金额</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{money}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix coupon" style="display:none;">' +
            '                <div class="form_ttl dio_buy">优惠券</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{ticketAmount}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix coupon"style="display:none;">' +
            '                <div class="form_ttl dio_buy">实际付款</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{actualAmount}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl">可用余额</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{balance}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl">银行扣款</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{bankAmount}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl">银行账号</div>' +
            '                <div class="form_input">' +
            '                   {bankName}(尾号{bankNo})' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i></div>' +
            '            </div>' +
            '            <div class="form_group mb10 clearfix">' +
            '                <div class="form_ttl">手机号</div>' +
            '                <div class="form_input">' +
            '                    {phone}' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group clearfix" id="recommendInput" >' +
            '                <div class="form_ttl">推荐人</div>' +
            '                <div class="form_input">' +
            '                    <input type="text" id="payRecommend" placeholder="推荐人手机号（选填）" class="dio_picon" />' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>' +
            '            </div>' +
            '            <div class="form_group clearfix">' +
            '                <div class="form_ttl">短信验证码</div>' +
            '                <div class="form_input">' +
            '                    <input type="text" id="validCode" class="form_input_code">' +
            '                    <button class="form_code" id="quickCode" onclick="HHN.dialog.getcodeQuick({bankId},{bankAmount});">发送验证码</button>' +
            '                    <i class="err_icon"></i>' +
            '                    <div class="dio_info"><i class="err_arrow"></i><span></span></div>' +
            '                    <input type="hidden" id="token" value=""/>' +
            '                    <input type="hidden" id="externalRefNumber" value=""/>' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group form_group_last clearfix">' +
            '                <div class="form_ttl"></div>' +
            '                <div class="form_input">' +
            '                    <a href="javascript:;" id="submit2" class="diol_opt submit">确认</a>' +
            '                </div>' +
            '            </div>' +
            '            <p id="dio_error"></p>' +
            '        </div>' +
            '    </div>  ',
          // payTradePswBalance: '<div class="center-dialog">' +
          //   '    <table>' +
          //   '        <tr>' +
          //   '            <td class="label">产品名称</td>' +
          //   '            <td><p class="text">{product}</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">购买金额</td>' +
          //   '            <td><p class="text"><span class="cRed">{money}</span>元</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">可用余额</td>' +
          //   '            <td><p class="text"><span class="cRed">{balance}</span>元</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">手机号　</td>' +
          //   '            <td><p class="text">{phone}</p></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td class="label">支付密码</td>' +
          //   '            <td><input id="payPassWord" class="txt icon" type="password" /></td>' +
          //   '        </tr>' +
          //   '        <tr id="recommendInput">' +
          //   '            <td class="label">推荐人</td>' +
          //   '            <td><input id="payRecommend" class="txt icon j-recommend" type="text" placeholder="推荐人手机号（选填）" /></td>' +
          //   '        </tr>' +
          //   '        <tr>' +
          //   '            <td></td>' +
          //   '            <td><a class="submit" id="submit2" href="javascript:;">确认</a></td>' +
          //   '        </tr>' +
          //   '    </table>' +
          //   '    <p id="error"></p>' +
          //   '</div>',
        payTradePswBalance: '<div class="diol_pwd">' +
            '        <div class="dio_close" i="close"></div>' +
            '        <div class="diol_title">确认购买信息</div>' +
            '        <div class="form_main">' +
            '            <div class="form_group mb0 clearfix dio_title">' +
            '                <div class="form_ttl">产品名称</div>' +
            '                <div class="form_input">' +
            '                   {product}' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i></div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl">可用余额</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{balance}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix">' +
            '                <div class="form_ttl dio_buy">购买金额</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{money}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix coupon" style="display:none">' +
            '                <div class="form_ttl dio_buy">优惠券</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{ticketAmount}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb0 clearfix coupon" style="display:none">' +
            '                <div class="form_ttl dio_buy">实际付款</div>' +
            '                <div class="form_input">' +
            '                    <span class="dio_money">{actualAmount}</span>元' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group mb10 clearfix">' +
            '                <div class="form_ttl">手机号码</div>' +
            '                <div class="form_input">' +
            '                    {phone}' +
            '                </div>' +
            '            </div>' +
            '            <div class="form_group clearfix">' +
            '                <div class="form_ttl">支付密码</div>' +
            '                <div class="form_input"><input style="display:none">' +
            '                    <input type="password" autocomplete="off" placeholder="请输入支付密码" id="payPassWord" class="dio_picon" />' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>' +
            '            </div>' +
            '            <div class="form_group clearfix" id="recommendInput">' +
            '                <div class="form_ttl">推荐人</div>' +
            '                <div class="form_input">' +
            '                    <input type="text" id="payRecommend" placeholder="没有推荐人不填" class="dio_ticon"/>' +
            '                </div>' +
            '                <i class="err_icon"></i>' +
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>' +
            '            </div>' +
            '            <div class="form_group form_group_last clearfix">' +
            '                <div class="form_ttl"></div>' +
            '                <div class="form_input">' +
            '                    <a href="javascript:;" id="submit2" class="diol_opt submit">确认</a>' +
            '                </div>' +
            '            </div><p id="dio_error"></p>' +
            '           ' +
            '        </div>' +
            '    </div>',
        payTradePsw2: '<div class="center-dialog">' +
            '    <table>' +
            '        <tr>' +
            '            <td class="label">产品名称</td>' +
            '            <td><p class="text">{product}</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">购买金额</td>' +
            '            <td><p class="text"><span class="cRed">{money}</span>元</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">手机号</td>' +
            '            <td><p class="text">{phone}</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">短信验证码</td>' +
            '            <td><input class="txt txt-min j-code" type="text"><a class="input-btn" href="javascript:;">获取验证码</a></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">支付密码</td>' +
            '            <td><input id="payPassWord" placeholder="请输入支付密码" class="txt icon" type="password" /></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td></td>' +
            '            <td><a class="submit" id="submit2" href="javascript:;">确认</a></td>' +
            '        </tr>' +
            '    </table>' +
            '    <p id="error"></p>' +
            '</div>',
            // payTradePsw3: '<div class="center-dialog">' +
            // '    <table>' +
            // '        <tr>' +
            // '            <td class="label">{bankNam}扣除:</td>' +
            // '            <td><p class="text"><span class="cRed">{charge2}</span>元 (尾号{bankNo})</p></td>' +
            // '        </tr>' +
            // '        <tr>' +
            // '            <td class="label">购买金额</td>' +
            // '            <td><p class="text"><span class="cRed">{money}</span>元</p></td>' +
            // '        </tr>' +
            // '        <tr>' +
            // '            <td class="label">账户余额扣除</td>' +
            // '            <td><p class="text"><span class="cRed">{charge1}</span>元</p></td>' +
            // '        </tr>' +
            // '        <tr>' +
            // '            <td class="label">支付密码</td>' +
            // '            <td><input id="payPassWord" class="txt icon" type="password" /></td>' +
            // '        </tr>' +
            // '        <tr>' +
            // '            <td></td>' +
            // '            <td><a class="submit" id="submit2" href="javascript:;">确认</a></td>' +
            // '        </tr>' +
            // '    </table>' +
            // '    <p id="error"></p>' +
            // '</div>',
            payTradePsw3 : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">确认购买信息</div>'+
            '    <div class="form_main">'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">{bankNam}扣除</div>'+
            '            <div class="form_input">'+
            '                <span class="dio_money">{charge2}</span>元 (尾号{bankNo})'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">购买金额</div>'+
            '            <div class="form_input">'+
            '                <span class="dio_money">{money}</span>元'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">账户余额扣除</div>'+
            '            <div class="form_input">'+
            '                <span class="dio_money">{charge1}</span>元'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">支付密码</div>'+
            '            <div class="form_input">'+
            '                <input type="password" id="payPassWord" placeholder="请输入支付密码" class="dio_picon" placeholder="请输入支付密码"/>'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group form_group_last clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;" id="submit2" class="diol_opt submit">下一步</a>'+
            '            </div>'+
            '        </div>'+
            '        <p id="dio_error"></p>'+
            '    </div>'+
            '</div> ',
            // tradeConfirm: '<div class="center-dialog">' +
            //     '    <table>' +
            //     '        <tr>' +
            //     '            <td class="label">产品名称</td>' +
            //     '            <td><p class="text">小钱库</p></td>' +
            //     '        </tr>' +
            //     '        <tr>' +
            //     '            <td class="label">年化收益</td>' +
            //     '            <td><p class="text">4.00%</p></td>' +
            //     '        </tr>' +
            //     '        <tr>' +
            //     '            <td class="label">购买金额</td>' +
            //     '            <td><input class="txt j-money" id="money" type="text" placeholder="最低1元起"/></td>' +
            //     '        </tr>' +
            //     '        <tr>' +
            //     '            <td class="label">计息日期</td>' +
            //     '            <td><p class="text">{deadline}</td>' +
            //     '        </tr>' +
            //     '        <tr>' +
            //     '            <td></td>' +
            //     '            <td><a class="submit" id="submit2" href="javascript:;">下一步</a></td>' +
            //     '        </tr>' +
            //     '    </table>' +
            //     '    <p id="error"></p>' +
            //     '</div>',
            tradeConfirm : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">确认购买信息</div>'+
            '    <div class="form_main">'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">产品名称</div>'+
            '            <div class="form_input">'+
            '                小钱库'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">年化收益</div>'+
            '            <div class="form_input">'+
            '                4.00%'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">购买金额</div>'+
            '            <div class="form_input">'+
            '                <input type="text" class="j-money" id="money" placeholder="最低1元起"/>'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">计息日期</div>'+
            '            <div class="form_input">'+
            '                {deadline}'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group form_group_last clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;" id="submit2" class="diol_opt submit">下一步</a>'+
            '            </div>'+
            '        </div>'+
            '        <p id="dio_error"></p>'+
            '    </div>'+
            '</div>  ',
        bindCardConfirm: '<div class="center-dialog">' +
            '    <p class="tip">请确认你的银行卡信息</p>' +
            '    <table>' +
            '        <tr>' +
            '            <td class="label">持卡人</td>' +
            '            <td><p class="text">{user}</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">开户银行</td>' +
            '            <td><p class="text">{bank}</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">银行卡号</td>' +
            '            <td><p class="text">{cardNo}</p></td>' +
            '        </tr>' +
            '    </table>' +
            '</div>',
        bindCardCert: '<div class="center-dialog">' +
            '    <p class="tip">验证金额已经以短信形式发送您的手机</p>' +
            '    <table>' +
            '        <tr>' +
            '            <td class="label">手机号码</td>' +
            '            <td><p class="text">{phone}</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">验证金额</td>' +
            '            <td><input class="txt j-money" type="text" /></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td></td>' +
            '            <td>' +
            '                <a class="submit" href="javascript:;">确认</a>' +
            '                <p class="error">温馨提示：超过3次输入错误系统将进行锁定。<br />' +
            '                收不到短信提醒请登录网上银行查看资金明细</p>' +
            '            </td>' +
            '        </tr>' +
            '    </table>' +
            '    <p id="error"></p>' +
            '</div>',
        // bindingCardCert: '<div class="center-dialog">' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">验证金额</td>' +
        //     '            <td><input class="txt j-money" id="money" type="text" placeholder="请输入验证金额"/></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td>' +
        //     '                <a class="submit" href="javascript:;">确认</a>' +
        //     '                <p class="error">温馨提示：超过3次输入错误系统将进行锁定。</p>' +
        //     '            </td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '    <p id="error"></p>' +
        //     '</div>',
            bindingCardCert : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">请输入验证金额完成银行卡绑定</div>'+
            '    <div class="form_main">'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">验证金额</div>'+
            '            <div class="form_input">'+
            '                <input type="text" class="dio_picon j-money" id="money" placeholder="请输入验证金额">'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group form_group_last clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;" class="diol_opt submit">确认</a>'+
            '                <p class="dio_notice">温馨提示：超过3次输入错误系统将进行锁定。</p>'+
            '            </div>'+
            '        </div>'+
            '        <p id="dio_error"></p>'+
            '    </div>'+
            '</div>',
        // earlyEedemption: '<div class="center-dialog">' +
        //     '    <style type="text/css">.center-dialog td{padding: 0;height: 40px}</style>' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">赎回金额</td>' +
        //     '            <td><p class="text"><span class="cRed" style="font-size: 22px">{money}</span> 元</p></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">手续费</td>' +
        //     '            <td><p class="text"><span class="cRed" style="font-size: 22px">{fee}</span> 元</p></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">产品名称</td>' +
        //     '            <td><p class="text">{product}</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">年化收益</td>' +
        //     '            <td><p class="text">{rate}</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">实际投资</td>' +
        //     '            <td><p class="text">{time}</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">待收收益</td>' +
        //     '            <td><p class="text">{pending}元</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">到账时间</td>' +
        //     '            <td><p class="text">预计{deadline}到账</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td><a class="submit j-next" href="javascript:;">下一步</a></td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '</div>',
            earlyEedemption : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">提前赎回</div>'+
            '        <div class="form_main">'+
            '            <div class="form_group mb0 clearfix">'+
            '                <div class="form_ttl">赎回金额</div>'+
            '                <div class="form_input">'+
            '                   <span class="dio_money">{money}</span>元'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group mb0 clearfix">'+
            '                <div class="form_ttl">手续费</div>'+
            '                <div class="form_input">'+
            '                    <span class="dio_money">{fee}</span>元'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group mb0 clearfix">'+
            '                <div class="form_ttl">产品名称</div>'+
            '                <div class="form_input">'+
            '                    {product}'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group mb0 clearfix">'+
            '                <div class="form_ttl">年化收益</div>'+
            '                <div class="form_input">'+
            '                    {rate}'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group mb0 clearfix">'+
            '                <div class="form_ttl">实际投资</div>'+
            '                <div class="form_input">'+
            '                  {time}'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group mb0 clearfix">'+
            '                <div class="form_ttl">待收收益</div>'+
            '                <div class="form_input">'+
            '                   {pending}元'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group mb0 clearfix">'+
            '                <div class="form_ttl">到账时间</div>'+
            '                <div class="form_input">'+
            '                    预计{deadline}到账'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt submit j-next">下一步</a>'+
            '                </div>'+
            '            </div>'+
            '            <p id="dio_error"></p>'+
            '        </div>'+
            '    </div>',
        // earlyEedemptionMsn: '<div class="center-dialog">' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">手机号码</td>' +
        //     '            <td><p class="text">{phone}</p></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">短信验证码</td>' +
        //     '            <td><input class="txt txt-min j-code" type="text"><a class="input-btn" href="javascript:;">获取验证码</a></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td>' +
        //     '                <a href="javascript:;" class="submit">确 认</a>' +
        //     '                <p class="ftip">返回<a class="cRed" href="">账户余额</a></p>' +
        //     '                <p id="error" style="display: none;"></p>' +
        //     '            </td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '</div>',
            earlyEedemptionMsn : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">提前赎回</div>'+
            '        <div class="form_main">'+
            '            <div class="form_group mb10 clearfix">'+
            '                <div class="form_ttl">手机号</div>'+
            '                <div class="form_input">'+
            '                    {phone}'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">短信验证码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" placeholder="请输入验证码" class="form_input_code j-code">'+
            '                    <button class="form_code input-btn">发送验证码</button>'+
            '                    <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt submit">确认</a>'+
            '                </div>'+
            '            </div>'+
            '            <p id="dio_error"></p>'+
            '        </div>'+
            '    </div>    ',
        // xqkEarlyEedemption: '<div class="center-dialog">' +
        //     '    <style type="text/css">.center-dialog td{padding: 0;height: 40px}</style>' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">赎回金额</td>' +
        //     '            <td><p class="text"><span class="cRed" style="font-size: 22px">{money}</span> 元</p></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">手续费</td>' +
        //     '            <td><p class="text"><span class="cRed" style="font-size: 22px">{fee}</span> 元</p></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">产品名称</td>' +
        //     '            <td><p class="text">{product}</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">年化收益</td>' +
        //     '            <td><p class="text">{rate}</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">赎回金额</td>' +
        //     '            <td><input class="txt j-money" id="money" type="text" placeholder="最低100元起"/></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">到账时间</td>' +
        //     '            <td><p class="text">预计{deadline}到账</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td><a class="submit j-next" href="javascript:;">赎回</a>'+
        //     '                <p id="error" style="display: none;"></p>' +
        //     '			</td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '</div>',
      xqkEarlyEedemption:'<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">赎回</div>'+
            '    <div class="form_main">'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">赎回金额</div>'+
            '            <div class="form_input">'+
            '                <span class="dio_money">{money}</span>元'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">手续费</div>'+
            '            <div class="form_input">'+
            '                <span class="dio_money">{fee}</span>元'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">产品名称</div>'+
            '            <div class="form_input">'+
            '               {product}'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">年化收益</div>'+
            '            <div class="form_input">'+
            '                {rate}'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group clearfix">'+
            '            <div class="form_ttl">赎回金额</div>'+
            '            <div class="form_input">'+
            '                <input type="text" class="dio_picon j-money" id="money" placeholder="最低100元起"/>'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group mb0  clearfix">'+
            '            <div class="form_ttl">到账时间</div>'+
            '            <div class="form_input">'+
            '                预计{deadline}到账户余额'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group form_group_last clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;" class="diol_opt submit j-next">赎回</a>'+
            '            </div>'+
            '        </div>'+
            '        <p id="dio_error"></p>'+
            '    </div>'+
            '</div> ',
        xqkEarlyEedemptionMsn: '<div class="center-dialog">' +
            '    <table>' +
            '        <tr>' +
            '            <td class="label">手机号码</td>' +
            '            <td><p class="text">{phone}</p></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td class="label">短信验证码</td>' +
            '            <td><input class="txt txt-min j-code" type="text"><a class="input-btn" href="javascript:;">获取验证码</a></td>' +
            '        </tr>' +
            '        <tr>' +
            '            <td></td>' +
            '            <td>' +
            '                <a href="javascript:;" class="submit">确 认</a>' +
            '                <p id="error" style="display: none;"></p>' +
            '            </td>' +
            '        </tr>' +
            '    </table>' +
            '</div>',
        // bidBuy: '<div class="center-dialog">' +
        //     '    <style type="text/css">' +
        //     '    .splite dl {float: left; font-size: 16px; } .splite .bdr {border-right: 1px solid #B6B6B6; margin-right: 10px; }' +
        //     '    .splite dd {font-size: 20px; } .splite dt {color: #999; padding-bottom: 8px; }.splite{padding-bottom: 10px;}' +
        //     '    .center-dialog td{height: 24px;}' +
        //     '    </style>' +
        //     '    <div class="splite clearfix">' +
        //     '        <dl class="bdr">' +
        //     '            <dt>剩余投标金额（元）</dt>' +
        //     '            <dd>{bidLast}</dd>' +
        //     '        </dl>' +
        //     '        <dl>' +
        //     '            <dt>目前总投标金额（元）</dt>' +
        //     '            <dd>{bidTotal}</dd>' +
        //     '        </dl>' +
        //     '    </div>' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">可用余额</td>' +
        //     '            <td>{last}元（汇付）　<a href="https://www.qianshenghua.com/chinapnr/rechargeInit.do" target="_blank" class="cGreen">充值</a></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">借款金额</td>' +
        //     '            <td>{loan}元</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">借款期限</td>' +
        //     '            <td>{time}</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">年利率</td>' +
        //     '            <td>{rate}</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">还款方式</td>' +
        //     '            <td>{method}</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">剩余时间</td>' +
        //     '            <td id="deadline">----</td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">投标金额</td>' +
        //     '            <td>' +
        //     '                <input value="" id="money" class="txt default" type="text">' +
        //     '            </td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td>' +
        //     '                <p style="margin-top: 10px" class="agreement">' +
        //     '                    <label>' +
        //     '                        <input id="agree" checked="checked" type="checkbox"> 同意<a href="http://www.hehenian.com/agreement.do?borrowId={borrowId}" target="_blank">《借款协议》</a></label>' +
        //     '                </p> <a class="submit" id="submit1" style="margin-top:6px" href="javascript:;">立即支付</a> </td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '    <p id="error"></p>' +
        //     '</div>',
           bidBuy:'<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">{stitle}</div>'+
            '    <div class="form_main">'+
            '        <div class="dio_counts clearfix">'+
            '            <div class="dio_count  dio_br">'+
            '                <p>剩余投标金额（元）</p>'+
            '                <span>{bidLast}</span>'+
            '            </div>'+
            '            <div class="dio_count">'+
            '                <p>目前总投标金额（元）</p>'+
            '                <span>{bidTotal}</span>'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">可用余额：</div>'+
            '            <div class="form_input">'+
            '                <span class="dio_money">{last}元</span>（汇付）　<a href="https://www.qianshenghua.com/chinapnr/rechargeInit.do" target="_blank" class="dio_mail_edit">充值</a>'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">借款金额：</div>'+
            '            <div class="form_input">'+
            '                <span class="dio_money">{loan}</span>元'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">借款期限：</div>'+
            '            <div class="form_input">'+
            '                {time}'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">年化收利率：</div>'+
            '            <div class="form_input">'+
            '                {rate}'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">还款方式：</div>'+
            '            <div class="form_input">'+
            '                <span class="dio_money">{method}</span>'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">剩余时间：</div>'+
            '            <div class="form_input" id="deadline">'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">投标金额：</div>'+
            '            <div class="form_input">'+
            '                <input type="text" id="money"/>'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input form_input_checkbox">'+
            '                <input type="checkbox" id="agree" />同意<a href="http://www.hehenian.com/agreement.do?borrowId={borrowId}" target="_blank">《借款协议》</a>'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group form_group_last clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;"  id="submit1" class="diol_opt submit">立即支付</a>'+
            '            </div>'+
            '        </div>'+
            '        <p id="dio_error"></p>'+
            '    </div>'+
            '</div>',
        // moneyGateway: '<div class="moneyGateway" id="moneyGateway">' +
        //     '    <a href="{link1}" class="bd">通联支付</a>' +
        //     '    <a href="{link2}">汇付天下</a>' +
        //     '</div>',
            moneyGateway:'<div class="diol_pwd" id="moneyGateway">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">请选择平台</div>'+
            '    <div class="form_main form_bsel">'+
            '        <a href="{link1}" class="dio_br">通联支付</a>'+
            '        <a href="{link2}">汇付天下</a>'+
            '    </div>'+
            '</div>',
        // moneyRechargeGateway: '<div class="moneyGateway" id="moneyRechargeGateway">' +
        //     '    <a href="{link0}" class="bd">网上银行</a>' +
        //     '    <a href="{link1}" class="bd">通联支付</a>' +
        //     '    <a href="{link2}">汇付天下</a>' +
        //     '</div>',
            moneyRechargeGateway :'<div class="diol_pwd" id="moneyRechargeGateway">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">请选择平台</div>'+
            '    <div class="form_main form_bsel">'+
            '        <a href="{link0}" class="dio_br">网上银行</a>'+
            '        <a href="{link1}" class="dio_br">通联支付</a>'+
            '        <a href="{link2}">汇付天下</a>'+
            '    </div>'+
            '</div>',
        // transferDebt: '<div class="center-dialog">' +
        //     '    <table>' +
        //     '        <tr>' +
        //     '            <td class="label">温馨提示：</td>' +
        //     '            <td><p class="text">投资满2个月之后才能进行债权转让</p></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">剩余本金：</td>' +
        //     '            <td><p class="text"><span class="cRed">{money}</span>元</p></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td class="label">转让价格：</td>' +
        //     '            <td><input id="amount" class="txt" type="text" value="{amount}"/></td>' +
        //     '        </tr>' +
        //     '		<tr>' +
        //     '            <td class="label">&nbsp;</td>' +
        //     '            <td><span class="cRed">{desc}</span></td>' +
        //     '        </tr>' +
        //     '        <tr>' +
        //     '            <td></td>' +
        //     '            <td><a class="submit" id="submit2" href="javascript:;">确认</a></td>' +
        //     '        </tr>' +
        //     '    </table>' +
        //     '    <p id="error"></p>' +
        //     '</div>',
            transferDebt : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">{title}</div>'+
            '    <div class="form_main">'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">温馨提示：</div>'+
            '            <div class="form_input">'+
            '                投资满2个月之后才能进行债权转让'+
            '            </div>'+
            '        </div>'+
            '        <div class="form_group mb0 clearfix">'+
            '            <div class="form_ttl">剩余本金：</div>'+
            '            <div class="form_input">'+
            '                <span class="dio_money">{tradeAmount}</span>元'+
            '            </div>'+
            '        </div>'+
            // '        <div class="form_group clearfix">'+
            // '            <div class="form_ttl">转让价格：</div>'+
            // '            <div class="form_input">'+
            // '                <input type="text" id="amount" value="{tradeAmount}"/>'+
            // '                <p class="dio_notice">{desc}</p>'+
            // '            </div>'+
            // '            <i class="err_icon"></i>'+
            // '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            // '        </div>'+
            '        <div class="form_group form_group_last clearfix">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;" id="submit2" class="diol_opt submit">确认</a>'+
            '            </div>'+
            '        </div>'+
            '        <p id="dio_error"></p>'+
            '    </div>'+
            '</div>',
	// imageCode: '<div class="center-dialog">'+
	//         '    <table>' +
 //            '        <tr>' +
 //            '             <td class="cert-code"><input id="codeInput" class="txt txt-min j-cert" type="text" />' +
 //            '            <img class="j-code" src="https://www.qianshenghua.com/common/imageCode.do?pageId=userlogin&_{code}" width="100" height="50">' +
 //            '            <a class="j-code" href="javascript:;">看不清？<br>换一换</a></td>' +
 //            '        </tr>' +
	// 		'        <tr><td><a class="submit" style="margin-top:6px" href="javascript:;">确定</a><p id="error" style="display: none;"></p></td></tr>'+
	// 		'   </table>'+
 //            '</div>',
        imageCode : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">请输入图形验证码</div>'+
            '        <div class="form_main">'+
            '            <div class="dio_tc_p">'+
            '                <input type="text" id="codeInput" class="dio_tcode j-cert" />'+
            '                <img class="js-code diol_code_img diol_codes" id="code" src="https://www.qianshenghua.com/common/imageCode.do?pageId=userlogin&_{code}" ptitle="还能获取6次，且点且珍惜">'+
            '            </div>'+
            '            <a href="javascript:;" class="diol_opt diol_opt_sure submit">确定</a>    '+
            '        </div>'+
            '    </div>',
        resetTradePwd  :  '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">重置支付密码</div>'+
            '        <div class="form_main">'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">绑定的号码</div>'+
            '                <div class="form_input">'+
            '                    {phone}'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">短信验证码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" placeholder="验证码" class="form_input_code j-code">'+
            '                    <button class="form_code input-btn">发送验证码</button>'+
            '                    <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">真实姓名</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" class="dio_uicon j-name" placeholder="请输入实名验证的真实姓名" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">身份证号码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" class="dio_cicon j-card" placeholder="请输入身份证号码" />'+
            '                    <p class="dio_notice">温馨提示：香港，澳门用户填写港澳居民来往内地通行证（回乡证）号码。</p>'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">新支付密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password" class="dio_picon j-pwd" placeholder="请输入新的支付密码" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">确认支付密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password" class="dio_picon j-pwd2" placeholder="请确认支付密码" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt submit">确定</a>'+
            '                    <p class="dio_notice">温馨提示：保管好自己的密码哟~~</p>'+
            '                </div>'+
            '            </div>'+
            '        <p id="dio_error"></p>'+
            '        <input type="hidden" value="{hidePhone}" id="mobile">'+
            '        </div>'+
            '</div>',
            updateBindCard : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">绑定新银行卡</div>'+
            '        <div class="form_main">'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">开户银行</div>'+
            '                <div class="form_input">'+
            '                <select name="b_name" id="b_name" class="dio_select">'+
            '                <option value="-1">请选择银行</option>'+
            '                <option value="BOC">中国银行</option>'+
            '                <option value="BCOM">交通银行</option>'+
            '                <option value="PAB">平安银行</option>'+
            '                <option value="SPDB">浦发银行</option>'+
            '                <option value="HXB">华夏银行</option>'+
            '                <option value="CITIC">中信银行</option>'+
            '                <option value="CEB">光大银行</option>'+
            '                <option value="PSBC">邮储银行</option>'+
            '                <option value="CMB">招商银行</option>'+
            '                <option value="GDB">广发银行</option>'+
            '                <option value="ABC">农业银行</option>'+
            '                <option value="CIB">兴业银行</option>'+
            '                <option value="03050000">民生银行</option>'+
            '                <option value="64135810">广州银行</option>'+
            '                <option value="01050000">建设银行</option>'+
            '                <option value="01020000">工商银行</option>'+
            '                </select>'+
            '                </div>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">银行地址</div>'+
            '                <div class="form_input" id="distpicker2">'+
            '                    <select name="b_province" id="b_province" class="dio_sel">'+
            '                        <option value="">—— 省 ——</option>'+
            '                    </select>'+
            '                    <select name="b_city" id="b_city" class="dio_sel">'+
            '                        <option value="">—— 市 ——</option>'+
            '                    </select>'+
            '                </div>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">银行卡号</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" id="b_card" placeholder="请输入银行卡号" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">手机号码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" id="b_phone" placeholder="请输入银行预留手机号码" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl">短信验证码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" id="b_code" placeholder="验证码" class="form_input_code">'+
            '                    <button class="form_code" id="getCodeBtn">发送验证码</button>'+
            '                    <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt">确认</a>'+
            '                </div>'+
            '            </div>'+
            '        <p id="dio_error"></p>'+
            '        </div>'+
            '</div>',

            llBindNotice : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">提示</div>'+
            '    <div class="form_main">'+
            '     <p class="dio_text">你绑定的银行卡仅支持移动端操作<br/>请到移动端使用相关操作</p>'+
            '        <a href="javascript:;" class="diol_opt diol_center_opt" i="close">确认</a>'+
            '    </div>'+
            '</div>',

            updateBankNotice :'<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">资料提交成功</div>'+
            '    <div class="form_main" style="width:430px;">'+
            '     <p class="dio_text">您的资料已经上传成功，我们会在两个工作日内安排工作人员审核！<br/>审核结束后会通过短信或者电话的方式通知您。</p>'+
            '        <a href="javascript:;" class="diol_opt diol_center_opt" i="close" style="margin-bottom:10px;">好的</a>'+
            '    </div>'+
            '</div>',

            updateBankSuccNotice : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">更换银行卡成功</div>'+
            '    <div class="form_main">'+
            '     <p class="dio_text">您的银行卡已经更换成功！<br/>感谢你对钱生花平台的支持！</p>'+
            '        <a href="javascript:;" class="diol_opt diol_center_opt" i="close">好的</a>'+
            '    </div>'+
            '</div>',

            updateBankFailNotice : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">更换银行卡失败</div>'+
            '    <div class="form_main">'+
            '     <p class="dio_text">您的银行卡更换失败！<br/>失败原因：{info}<br/>请尝试重新连接或联系钱生花客服！</p>'+
            '        <a href="javascript:;" class="diol_opt diol_center_opt" i="close">好的</a>'+
            '    </div>'+
            '</div>',

            updateBankSubmit : '<div class="diol_pwd">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">请勿重复提交资料</div>'+
            '    <div class="form_main" style="width:430px;">'+
            '     <p class="dio_text">您的资料已经上传成功，我们会在两个工作日内安排工作人员审核！<br/>审核结束后会通过短信或者电话的方式联系您！</p>'+
            '        <a href="javascript:;" class="diol_opt diol_center_opt" i="close">好的</a>'+
            '    </div>'+
            '</div>',             

            uploadCardInfo :'<div class="diol_paper">'+
            '    <div class="dio_close" i="close"></div>'+
            '    <div class="diol_title">请你提交相关资料</div>'+
            '    <div class="paper_main clearfix">'+
            '        <div class="paper_item clearfix">'+
            '            <p class="paper_item_tit">手持身份证照片</p>'+
            '            <div class="paper_up clearfix">'+
            '                <div class="paper_up_item">'+
            '                    <p>个人信息页</p>'+
            '                    <div class="paper_img">'+
            '                        <div class="paper_load" data-form="{\'type1\':\'idCardFrontImg\',\'type2\':\'2-2\'}">'+
            '                            <div class="paper_start"><div class="upload-target">'+
            '                                <i></i>'+
            '                                <p>点此上传</p>'+
            '                            </div></div>'+
            '                            '+
            '                            <div class="papaer_loading">'+
            '                                <i></i>'+
            '                                <p>正在上传</p>                                '+
            '                            </div>'+
            '                            '+
            '                            <div class="paper_complete">'+
            '                                <img src="https://static.hehenian.com/p_v2/images/up_exam.jpg" class="paper_preview" alt="" />'+
            '                                <div class="paper_bar  upload-target">'+
            '                                    重新上传'+
            '                                </div>'+
            '                            </div>'+
            '                        </div>'+
            '                        <a href="https://static.hehenian.com/p_v2/images/card_z.jpg" target="_blank">'+
            '                            <img src="https://static.hehenian.com/p_v2/images/up_exam.jpg" alt="" />'+
            '                        </a>'+
            '                    </div>'+
            '                </div>'+
            '                <div class="paper_up_item paper_up_item2">'+
            '                    <p>国徽页</p>'+
            '                    <div class="paper_img">'+
            '                        <div class="paper_load" data-form="{\'type1\':\'idCardVersoImg\',\'type2\':\'2-2\'}">'+
            '                            <div class="paper_start"><div class="upload-target">'+
            '                                <i></i>'+
            '                                <p>点此上传</p>'+
            '                            </div></div>'+
            '                            '+
            '                            <div class="papaer_loading">'+
            '                                <i></i>'+
            '                                <p>正在上传</p>                                '+
            '                            </div>'+
            '                            '+
            '                            <div class="paper_complete">'+
            '                                <img src="https://static.hehenian.com/p_v2/images/up_exam.jpg" class="paper_preview" alt="" />'+
            '                                <div class="paper_bar upload-target">'+
            '                                    重新上传'+
            '                                </div>'+
            '                            </div>'+
            '                        </div>'+
            '                        <a href="https://static.hehenian.com/p_v2/images/card_f.jpg" target="_blank">'+
            '                            <img src="https://static.hehenian.com/p_v2/images/up_exam.jpg" alt="" />'+
            '                        </a>'+
            '                    </div>'+
            '                </div>'+
            '                <div class="paper_ti">请拍摄手持身份证在胸前的照片（身份证正反面均提供）</div>'+
            '            </div>'+
            '        </div>'+
            '        <div class="paper_item paper_item_last">'+
            '            <p class="paper_item_tit">银行相关证明<br>（需盖银行公章）</p>'+
            '            <div class="paper_up">'+
            '                <div class="paper_up_item">'+
            '                    <p><input type="radio" checked="checked" name="selType" class="selType" value="1" /> 银行卡挂失或注销证明</p>'+
            '                    <div class="paper_img paper_s">'+
            '                        <div class="paper_load" id="data_form" data-form="{\'type1\':\'cancellationProve\',\'type2\':\'2-2\'}">'+
            '                            <div class="paper_start"><div class="upload-target">'+
            '                                <i></i>'+
            '                                <p>点此上传</p>'+
            '                            </div></div>'+
            '                            '+
            '                            <div class="papaer_loading">'+
            '                                <i></i>'+
            '                                <p>正在上传</p>                                '+
            '                            </div>'+
            '                            '+
            '                            <div class="paper_complete">'+
            '                                <img src="https://static.hehenian.com/p_v2/images/up_exam.jpg" class="paper_preview" alt="" />'+
            '                                <div class="paper_bar upload-target">'+
            '                                    重新上传'+
            '                                </div>'+
            '                            </div>'+
            '                        </div>'+
            '                        <a id="exam_link" href="https://static.hehenian.com/p_v2/images/card_pz.jpg" target="_blank">'+
            '                            <img src="https://static.hehenian.com/p_v2/images/up_exam2.jpg" alt="" />'+
            '                        </a>'+
            '                    </div>'+
            '                    <div class="paper_img paper_s" style="display:none">'+
            '                        <div class="paper_load" id="data_form" data-form="{\'type1\':\'recordProve\',\'type2\':\'2-2\'}">'+
            '                            <div class="paper_start"><div class="upload-target">'+
            '                                <i></i>'+
            '                                <p>点此上传</p>'+
            '                            </div></div>'+
            '                            '+
            '                            <div class="papaer_loading">'+
            '                                <i></i>'+
            '                                <p>正在上传</p>                                '+
            '                            </div>'+
            '                            '+
            '                            <div class="paper_complete">'+
            '                                <img src="https://static.hehenian.com/p_v2/images/up_exam.jpg" class="paper_preview" alt="" />'+
            '                                <div class="paper_bar upload-target">'+
            '                                    重新上传'+
            '                                </div>'+
            '                            </div>'+
            '                        </div>'+
            '                        <a id="exam_link" href="https://static.hehenian.com/p_v2/images/card_trade.jpg" target="_blank">'+
            '                            <img srcdata:image/jpeg;base64,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R3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBSAAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAAAAAAQY3JvcFdoZW5QcmludGluZ2Jvb2wAAAAADmNyb3BSZWN0Qm90dG9tbG9uZwAAAAAAAAAMY3JvcFJlY3RMZWZ0bG9uZwAAAAAAAAANY3JvcFJlY3RSaWdodGxvbmcAAAAAAAAAC2Nyb3BSZWN0VG9wbG9uZwAAAAAAOEJJTQPtAAAAAAAQAEgAAAABAAIASAAAAAEAAjhCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAeDhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAjhCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAAAAAAAAAIAMThCSU0EAgAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4QklNBDAAAAAAAD4BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB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ZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE2LTAzLTI1VDE0OjUyOjAzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE2LTA0LTA1VDE1OjQ3OjA1KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxNi0wNC0wNVQxNTo0NzowNSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMWQ3Mjg0LWI3OGItNzg0OS1hZDJkLTNkNTEzMDhiMDZhYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4Y2I4YTgxMS04ZGRhLWUzNGMtYWU3OC05NmU4ZTUzNzA5MjYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4Y2I4YTgxMS04ZGRhLWUzNGMtYWU3OC05NmU4ZTUzNzA5MjYiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGNiOGE4MTEtOGRkYS1lMzRjLWFlNzgtOTZlOGU1MzcwOTI2IiBzdEV2dDp3aGVuPSIyMDE2LTAzLTI1VDE0OjUyOjAzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Y2I2M2IxMC1mMTkxLWZiNGUtYjBlZC1iMTQzNzZjYzQ3Y2EiIHN0RXZ0OndoZW49IjIwMTYtMDMtMjVUMTQ6NTI6MjgrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY4YzBlZDAwLTQ0YzMtMDA0My04ZDVmLWFiNDYyNGI4YTBlZSIgc3RFdnQ6d2hlbj0iMjAxNi0wNC0wNVQxNTo0NzowNSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvanBlZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMDFkNzI4NC1iNzhiLTc4NDktYWQyZC0zZDUxMzA4YjA2YWEiIHN0RXZ0OndoZW49IjIwMTYtMDQtMDVUMTU6NDc6MDUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmY4YzBlZDAwLTQ0YzMtMDA0My04ZDVmLWFiNDYyNGI4YTBlZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Y2I4YTgxMS04ZGRhLWUzNGMtYWU3OC05NmU4ZTUzNzA5MjYiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4Y2I4YTgxMS04ZGRhLWUzNGMtYWU3OC05NmU4ZTUzNzA5MjYiLz4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSLngrnmraTkuIrkvKAiIHBob3Rvc2hvcDpMYXllclRleHQ9IueCueatpOS4iuS8oCIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IuekuuS+iyIgcGhvdG9zaG9wOkxheWVyVGV4dD0i56S65L6LIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0i56S65L6LIOaLt+i0nSAyIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSLnpLrkvosiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSLmiYvmjIHouqvku73or4HnhafniYciIHBob3Rvc2hvcDpMYXllclRleHQ9IuaJi+aMgei6q+S7veivgeeFp+eJhyIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IuS4quS6uuS/oeaBr+mhtSIgcGhvdG9zaG9wOkxheWVyVGV4dD0i5Liq5Lq65L+h5oGv6aG1Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0i5q2j5Zyo5LiK5LygIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSLmraPlnKjkuIrkvKAiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSLnpLrkvosiIHBob3Rvc2hvcDpMYXllclRleHQ9IuekuuS+iyIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IuekuuS+iyDmi7fotJ0gMiIgcGhvdG9zaG9wOkxheWVyVGV4dD0i56S65L6LIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0i5omL5oyB6Lqr5Lu96K+B54Wn54mHIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSLmiYvmjIHouqvku73or4HnhafniYciLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSLkuKrkurrkv6Hmga/pobUiIHBob3Rvc2hvcDpMYXllclRleHQ9IuS4quS6uuS/oeaBr+mhtSIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IuekuuS+iyIgcGhvdG9zaG9wOkxheWVyVGV4dD0i56S65L6LIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0i56S65L6LIOaLt+i0nSAyIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSLnpLrkvosiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSLmiYvmjIHouqvku73or4HnhafniYciIHBob3Rvc2hvcDpMYXllclRleHQ9IuaJi+aMgei6q+S7veivgeeFp+eJhyIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IuS4quS6uuS/oeaBr+mhtSIgcGhvdG9zaG9wOkxheWVyVGV4dD0i5Liq5Lq65L+h5oGv6aG1Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0i6YeN5paw5LiK5LygIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSLph43mlrDkuIrkvKAiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSLnpLrkvosiIHBob3Rvc2hvcDpMYXllclRleHQ9IuekuuS+iyIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IuekuuS+iyDmi7fotJ0gMiIgcGhvdG9zaG9wOkxheWVyVGV4dD0i56S65L6LIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0i5omL5oyB6Lqr5Lu96K+B54Wn54mHIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSLmiYvmjIHouqvku73or4HnhafniYciLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSLkuKrkurrkv6Hmga/pobUiIHBob3Rvc2hvcDpMYXllclRleHQ9IuS4quS6uuS/oeaBr+mhtSIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkE2ODYxQUYxQUFDMkI5RUI1ODc5NkNFRTZFNEMxQzlCPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAA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" alt="" />'+
            '                        </a>'+
            '                    </div>'+
            '                </div>'+
            '                <div class="paper_up_item paper_up_item2">'+
            '                    <p><input type="radio" name="selType" class="selType" value="2" /> 银行卡资金流水证明</p>'+
            '                </div>'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '    <a href="javascript:;" class="diol_opt diol_opt_paper">提交</a>'+
            '</div>',
            confirmPwdSure : '<div class="diol_pwd">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">提前赎回</div>'+
            '        <div class="form_group clearfix" style="margin-top:30px;margin-left:54px;">'+
            '            <div class="form_ttl">支付密码</div>'+
            '            <div class="form_input">'+
            '                <input type="password" placeholder="请输入支付密码" class="dio_picon pwd">'+
            '            </div>'+
            '            <i class="err_icon"></i>'+
            '            <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '        </div>'+
            '        <div class="form_group form_group_last clearfix" style="margin-left:53px;margin-bottom:30px;">'+
            '            <div class="form_ttl"></div>'+
            '            <div class="form_input">'+
            '                <a href="javascript:;" class="diol_opt">确认</a><p class="diol_link"><a href="javascript:;" id="forget">忘记支付密码？</a></p>'+
            '            </div>'+
            '        </div>'+
            ' </div>',
            forgetTradePwd: '<div class="diol_pwd" style="width:567px">'+
            '        <div class="dio_close" i="close"></div>'+
            '        <div class="diol_title">找回支付密码</div>'+
            '        <div class="form_main" style="width:474px">'+
            '            <div class="form_group mb10 clearfix">'+
            '                <div class="form_ttl" style="width:10em;">注册绑定的手机号</div>'+
            '                <div class="form_input">'+
            '                    {phone}'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl" style="width:10em;">短信验证码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" class="form_input_code j-code">'+
            '                    <button class="form_code input-btn">发送验证码</button>'+
            '                    <i class="err_icon"></i>'+
            '                    <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '                </div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl" style="width:10em;">企业名称</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" class="j-name" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+    
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl" style="width:10em;">注册号/社会信用代码</div>'+
            '                <div class="form_input">'+
            '                    <input type="text" id="registerId"/>'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+                     
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl" style="width:10em;">新支付密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password" class="dio_picon" id="psw" placeholder="密码长度为8-20位,由数字与字母组成" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group clearfix">'+
            '                <div class="form_ttl" style="width:10em;">确认新支付密码</div>'+
            '                <div class="form_input">'+
            '                    <input type="password" class="dio_picon j-psw2" id="psw2" />'+
            '                </div>'+
            '                <i class="err_icon"></i>'+
            '                <div class="dio_info"><i class="err_arrow"></i><span></span></div>'+
            '            </div>'+
            '            <div class="form_group form_group_last clearfix">'+
            '                <div class="form_ttl" style="width:10em;"></div>'+
            '                <div class="form_input">'+
            '                    <a href="javascript:;" class="diol_opt submit">确认</a>'+
            '                    <p class="dio_notice">温馨提示：请保管好自己的密码哟~</p>'+
            '                </div>'+
            '            </div>'+
            '            <p id="dio_error"></p>'+
            '        </div>'+
            '    </div>',

    };
    this.url = 'js/center/';
    this.init();
};

CenterDialog.prototype = {
    init: function() {
        var css = '<link rel="stylesheet" href="' + this.url + 'center-dialog.css" />';
        $('head').append(css);
    },
    inputPayPwd  :function(hideMobile, mobile,callback){
        var ipdia = this.dialog({
            padding : "0px",
            content : this.template.inputPayPwd,
            onshow : function(){
                var node = $(this.node),
                    error = node.find("#dio_error");

                node.delegate('input','focus', function(){
                    node.find('.form_group').removeClass('form_dio_error');
                    error.hide();
                });

                node.delegate('.diol_opt','click', function(){
                    var password = node.find("#password");
                    if( !password.val() ) {
                        password.parent().parent().addClass('form_dio_error').find('span').html('请输入支付密码');
                        return false;
                    }
                    $.ajax({
                        url: 'https://www.qianshenghua.com/profile/checkPayPwd.do',
                        data: {pwd:password.val()},
                        type: 'post',
                        dataType: 'json',
                        success: function(data) {
                            if (data.returnCode == 1) {
                                HHN.popup ? HHN.popup(data.messageInfo) : popup({
                                    text : data.messageInfo,
                                    type : "warning"
                                });
                                node.find('#password').val("");
                            }else {
                                ipdia.close().remove();
                                callback && callback();
                            }
                        }
                    });

                });

                node.delegate('#link', 'click', function(){
                    ipdia.close().remove();
                    HHN.dialog.resetTradePwd(hideMobile,mobile);
                });
            }
        });
    },
    updateBankNotice : function(){
        this.dialog({
            padding : "0px",
            content : this.template.updateBankNotice
        })
    },

    updateBankFailNotice :function(info){
        this.dialog({
            padding: "0px",
            content : this.template.updateBankFailNotice.replace('{info}',info)
        });
    },

    updateBankSubmit :function(){
        this.dialog({
            padding:"0px",
            content : this.template.updateBankSubmit,
            id : "updateBankSubmit"
        })
    },

    updateBankSuccNotice :function(){
        this.dialog({
            padding : "0px",
            content : this.template.updateBankSuccNotice,
            id:"updateBankSuccNotice",
            onclose: function(){
                location.reload();
            }
        });
    },

    llBindNotice : function(){
        var dig = this.dialog({
            padding : "0px",
            content : this.template.llBindNotice,
            id: "llBindNotice",
            onshow : function(){

            }
        });
    },
    uploadCardInfo : function(){
        var uDiolog = this.dialog({
            padding:"0px",
            content : this.template.uploadCardInfo,
            onshow : function(){
            var node = $(this.node);
            var targetBtn = node.find('.upload-target');
            var selBtn = node.find('.selType');
            var exam_link = node.find('#exam_link');
            var data_form = node.find('#data_form');
            var dio_error = node.find("#dio_error");
            var aNode = node.find('.paper_s');

            selBtn.click(function(){
                aNode.find('.paper_start').show();
                aNode.find('.papaer_loading').hide();
                aNode.find('.paper_complete').hide();
                aNode.css('display','none').eq(this.value-1).css('display','block');
            });

            node.delegate('.paper_preview','click',function(){
                window.open(this.src);
            });

            node.delegate('.diol_opt','click',function(){
                var btns = $('.paper_complete:visible').size();
                if(btns < 3){
                    popup({
                        type:'danger',
                        text:'您还有证件照未上传！'
                    });
                    return false;
                }                
                var bankProveType = Number(node.find('.selType:checked').val());
                $.post('https://www.qianshenghua.com/profile/replaceCardCredentials.do',{
                    bankProveType : bankProveType-1
                },function( data ){
                    if( data.code == 0  ) {
                        uDiolog.close().remove();
                        var vmodel = avalon.vmodels.bankCtrl;
                        vmodel.getData();
                        HHN.dialog.updateBankNotice();
                    } else if(data.code == -1) {
                        popup({
                            text : "您还有证件照未上传！",
                            type : "danger"
                        });                        
                    }else {
                        popup({
                            text : "更换银行卡失败,请重试或联系客服！",
                            type : "danger"
                        });
                    }
                },'json')
            });
            //alert( targetBtn.length );
                //处理文件上传
            var Uploader = Q.Uploader,
            formatSize = Q.formatSize;
            // boxView = node.find("#upload-info")[0];
                for( var i=0;i < targetBtn.length; i++ ) {
                    d = eval("("+$(targetBtn[i]).parent().parent().data('form')+")");
                    new Uploader({
                        url: 'https://www.qianshenghua.com/account/uploadImage.do',
                        target: targetBtn[i],

                        multiple: false,
                        upName : "file",
                        data : d,
                        dataType : "json",
                        allows: ".jpg,.png,.gif,.bmp",
                        //clickTrigger: false,
                        on : {
                            add : function(task){
                                if (task.disabled) return popup({text : "你上传的文件格式不合法",type:"danger"});
                                $(this.target).parent().parent().find('.paper_start').hide();
                                $(this.target).parent().parent().find('.papaer_loading').show();
                                $(this.target).parent().parent().find('.paper_complete').hide();
                            },
                            complete : function( task ){
                                var data =$.parseJSON(task.response);
                                $(this.target).parent().parent().find('.paper_start').hide();
                                $(this.target).parent().parent().find('.papaer_loading').hide();
                                $(this.target).parent().parent().find('.paper_complete').show().find('img').attr('src',data.path);                        
                            }
                        },
                        //自定义UI实现,无需导入 Q.Uploader.UI.js 和 uploader.css
                        UI: {
                            //init: function () { },
                            draw: function (task) {
                                //this.update(task);
                            }
                        }
                    });
                }
            }
        });
    },
    updateBindCard : function(replaceCardFlag,auditFlag ){
        if(replaceCardFlag==2&&auditFlag==2){
            dialog.get('alTradeAmount').remove();
            avalon.vmodels.bankCtrl.data.code=-1;
            avalon.vmodels.bankCtrl.replaceCardFlag = avalon.vmodels.bankCtrl.auditFlag = 1;
            return;
        }
        if( dialog.get('alTradeAmount')) {
            dialog.get('alTradeAmount').remove();
        }
        if( dialog.get('llBindNotice') ) {
            dialog.get('llBindNotice').remove();
        }
        if( dialog.get('updateBankSuccNotice')) {
            dialog.get('updateBankSuccNotice').remove();
        }

        var dia = this.dialog({
            padding: '0px',
            content :this.template.updateBindCard,
            id : "updateBindCard",
            onshow : function(){
                // $("#distpicker2").distpicker({
                //   autoSelect: false
                // });
                new Distpicker("#distpicker2", {
                    autoSelect: false
                });
                var node = $(this.node),
                    b_name = node.find("#b_name"),
                    b_province = node.find("#b_province"),
                    b_city = node.find("#b_city"),
                    b_card = node.find("#b_card"),
                    b_phone = node.find('#b_phone'),
                    b_code = node.find("#b_code"),
                    error = node.find("#dio_error"),
                    submit = node.find('.diol_opt'),
                    token = ''
                    externalRefNumber = '';


                node.delegate('select','change',function(){
                    node.find('.form_group').removeClass('form_dio_error');
                    error.hide();
                });

                node.delegate('input','focus', function(){
                    node.find('.form_group').removeClass('form_dio_error');
                    error.hide();
                });
                
                var telephoneTimer_ = function() {
                    window.STEP = 120;
                    var timer=setInterval(function(){
                        if(STEP <= 0){
                            clearInterval(timer);
                            $("#getCodeBtn").removeClass("disabled").text("获取验证码");
                        }else{
                            STEP--;
                            $("#getCodeBtn").text(STEP+"s重获");
                        }
                    },1000);
                }

                var checkValid = function(b_namel,b_provincel,b_cityl,b_cardl,b_phonel,b_codel){
                    if(!b_namel||b_namel==-1){
                        b_name.parent().parent().addClass('form_dio_error').find('span').html('请选择银行');
                        return false;
                    } 
                    if(!b_provincel||b_provincel==""){
                        b_province.parent().parent().addClass('form_dio_error').find('span').html('请选择省份');
                        return false;
                    }
                    if(!b_cityl||b_cityl==""){
                        b_city.parent().parent().addClass('form_dio_error').find('span').html('请选择城市');
                        return false;
                    }  
                    var reg16 = /^\d{16}$/g;
                    var reg17 = /^\d{17}$/g;
                    var reg18 = /^\d{18}$/g;
                    var reg19 = /^\d{19}$/g;
                    if(!reg16.test(b_cardl) && !reg17.test(b_cardl)&& !reg18.test(b_cardl)&& !reg19.test(b_cardl)){
                        b_card.parent().parent().addClass('form_dio_error').find('span').html('银行账号输入有误');
                        return false;
                    }

                    var re =new RegExp("/^1[3|5|7|8|][0-9]{9}$/");
                    if (!/^0{0,1}(13[0-9]|15[0-9]|18[0-9]|14[0-9]|17[0-9])[0-9]{8}$/.test(b_phonel)){
                        b_phone.parent().parent().addClass('form_dio_error').find('span').html('输入手机号的格式有误');
                        return false;
                    }
                    if(b_phonel==''){
                        b_phone.parent().parent().addClass('form_dio_error').find('span').html('请输入银行预留手机号码');
                        return false;
                    }  
                    return true;                   
                };

                node.delegate('.diol_opt','click',function(){
                    if( checkValid(b_name.val(),b_province.val(),b_city.val(),b_card.val(),b_phone.val(),b_code.val() )) {
                        //连连渠道只能在手机端绑卡
                        if(b_name.val()=='03050000' || b_name.val()=='64135810' || b_name.val()=='01050000' || b_name.val()=='01020000') {
                        	HHN.dialog.llBindNotice();
                        	return false;
                        }
                        
                        if(externalRefNumber==null||token==null||token==""||externalRefNumber==""){
                            error.show().html("请先获取验证码");
                            return;
                        }

                        var stParam = {};

                        stParam["mobilePhone"]=b_phone.val();
                        stParam["bankCode"]=b_name.val();
                        stParam["userAccount"]=b_card.val();
                        stParam["bankChannel"]="QUICKPAY";
                        stParam["province"]=b_province.val();
                        stParam["city"]=b_city.val().split("_")[0];
                        stParam["bankName"]=b_name.find('option:selected').text();
                        stParam["validCode"]=b_code.val();
                        stParam["token"]=token;
                        stParam["externalRefNumber"]=externalRefNumber;
                        if( replaceCardFlag ) {
                            stParam['replaceCardFlag'] = replaceCardFlag;
                        }   
                        if( auditFlag ) {
                            stParam['auditFlag'] = auditFlag;
                        }
                          
                        if(submit.hasClass('disabled'))return;
                        submit.addClass('disabled').html('提交中');
                        $.post("https://www.qianshenghua.com/quickBindCardCheck.do", stParam, function(data) {
                          if(data.returnCode == 0){
                                if( replaceCardFlag && auditFlag ) {
                                    dia.remove();
                                    HHN.dialog.uploadCardInfo();
                                } else {
                                    var vmodel = avalon.vmodels.bankCtrl;
                                    vmodel.getData();   
                                    dia.remove();  
                                    HHN.dialog.updateBankSuccNotice();                               
                                }
                                
                                //window.location.href ="https://www.qianshenghua.com/profile/chargePage.do";
                          }else{
                              submit.removeClass('disabled');
                              dia.remove();
                              HHN.diolog.updateBankFailNotice(data.messageInfo);
                          }
                            window.STEP = 0;
                            b_code.val('')
                            token = '';
                            externalRefNumber = '';
                        },"json");


                    }
                });

                node.delegate('#getCodeBtn','click', function(){
                    var param = {};
                    if( checkValid(b_name.val(),b_province.val(),b_city.val(),b_card.val(),b_phone.val(),b_code.val() )) {
                        param["mobilePhone"]=b_phone.val();
                        param["bankCode"]=b_name.val();
                        param["userAccount"]=b_card.val();
                        param["bankChannel"]="QUICKPAY";
                        param["bankName"]=b_name.find('option:selected').text();
                        if( $("#getCodeBtn").hasClass('disabled') ) return false;
                        $("#getCodeBtn").addClass("disabled").text("120s重获");
                        telephoneTimer_();
                        $.post("https://www.qianshenghua.com/sendQuickIdentify.do", param, function(data) {
                            if(data.returnCode==0){
                                //20151030 jiangwmf added start
                                token = data.data.token;
                                externalRefNumber = data.data.externalRefNumber;
                            }else{
                                error.show().html(data.messageInfo);
                                $("#getCodeBtn").removeClass("disabled").text("获取验证码");
                                window.STEP = 0;
                                b_code.val('');
                                token = '';
                                externalRefNumber = '';
                            }
                            //20151030 jiangwmf added end
                        },"json"); 
                    }
                });

            }
        });
    },
    // 换卡的时候有余额的弹框
    alTradeAmount : function(info){
        var dio = this.dialog({
            padding:"0px",
            content:this.parseHTML(this.template.alTradeAmount, [info]),
            id : "alTradeAmount",
            onshow: function() {
                  var node = $(this.node),
                      submit = node.find('.diol_opt');

                    submit.click(function(){
                       dialog.get('alTradeAmount').remove();                     
                    }) ; 
                  // if( info.balance ) {
                  //     submit.attr('href','https://www.qianshenghua.com/withdrawPageNew.do');  
                  // } else {
                  //     submit.attr('href','https://www.qianshenghua.com/view/center-index.jsp#!/financial//');
                  // }
            }
        });        
    },
    //赎回成功后的续投提醒
    redeemNote : function(pName,money, rate, channel, subChannel){
        var redeemNote = this.dialog({
            padding : '0px',
            content : this.template.redeemNote.replace('{money}',money).replace('{rate}',rate).replace('{pName}',pName),
            id : 'redeemNote',
            onshow : function(){
                var node = $(this.node);

                node.delegate('#submit','click', function(){
                    location.href = "https://www.qianshenghua.com/productTypeSelect.do?channel="+channel+"&sub_channel="+subChannel;
                }) ; 
            }
        });
    },
    //设置支付密码
    setTradePsw: function(phone) {
        phone = phone||HHN.getCookie('loginName');
        var cert = function(node, value, callback) {
                var error = node.find('#dio_error'),
                    submit = node.find(".submit");
                var p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;

                if (value.code.length < 6) {
                    node.find('.j-code').parent().parent().find('.err_icon').remove();
                    node.find('.j-code').parent().parent().addClass('form_dio_error').find('span').html('短信验证码长度不能小于6位');
                    return;
                }
                if (value.psw.length < 8 || value.psw.length > 20) {
                    node.find('.j-psw').parent().parent().addClass('form_dio_error').find('span').html('密码长度为8-20位,由数字与字母组成');
                    return;
                }
                if (!p.test(value.psw)) {
                    node.find('.j-psw').parent().parent().addClass('form_dio_error').find('span').html('密码长度为8-20位,由数字与字母组成');
                    return;
                }
                if (value.psw !== value.psw2) {
                    node.find('.j-psw2').parent().parent().addClass('form_dio_error').find('span').html('两次密码不一致');
                    return;
                }


                if (submit.hasClass('disabled')) return;
                submit.addClass('disabled').html('提交中...');

                $.ajax({
                    url: 'https://www.qianshenghua.com/account/setPayPwd.do',
                    type: "POST",
                    data: {
                        identifyCode: value.code,
                        pwd: value.psw,
                        confirmPwd: value.psw2
                    },
                    dataType: 'json',
                    success: function(data) {
                        if (data.result == 0) { //密码修改成功，跳到成功页面
                            HHN.dialog.tradePswSuc();
                        } else {
                            error.show().html(data.msg);
                            submit.removeClass('disabled').html('确认');
                        }
                    }
                });
                //或者ajax，success后调用callback();
                callback();
            },
            that = this,
            node;
        this.dialog({
            id: 'setTradePsw',
            // title: '设置支付密码',
            content: this.template.setTradePsw.replace('{phone}', phone),
            padding: '0px',
            onshow: function() {
                node = $(this.node);
                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    node.find('#dio_error').hide();
                });
                node.delegate('.submit', 'click', function() {

                    var value = {
                        code: node.find('.j-code').val(),
                        psw: node.find('.j-psw').val(),
                        psw2: node.find('.j-psw2').val()
                    };
                    var pass = cert(node, value, function() {
                        //alert('success');
                    });
                });

                node.delegate('.input-btn', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    that.countdown($(this));
                });
            }
        });
    },
	    //设置支付密码
    setTradePswCallback: function(phone,callback) {
        var cert = function(node, value) {
                var error = node.find('#dio_error'),
                    submit = node.find(".submit");
                var p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;

                if (value.code.length < 6) {
                    node.find('.j-code').parent().parent().addClass('form_dio_error').find('span').html('短信验证码长度不能小于6位');
                    return;
                }
                if (!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)([^\s]+){8,20}$/g.test(value.psw) ||  (value.psw.split(value.psw[0]).length-1== value.psw.length)) {
                    node.find('.j-psw').parent().parent().addClass('form_dio_error').find('span').html('密码过于简单，请尝试数字+字母组合');
                    return;
                }
                if (value.psw !== value.psw2) {
                    node.find('.j-psw2').parent().parent().addClass('form_dio_error').find('span').html('两次密码不一致');
                    return;
                }
                if (!p.test(value.psw)) {
                    node.find('.j-psw').parent().parent().addClass('form_dio_error').find('span').html('密码长度为8-20位,由数字与字母组成');
                    return;
                }

                if (submit.hasClass('disabled')) return;
                submit.addClass('disabled').html('提交中...');

                $.ajax({
                    url: 'https://www.qianshenghua.com/account/setPayPwd.do',
                    type: "POST",
                    data: {
                        identifyCode: value.code,
                        pwd: value.psw,
                        confirmPwd: value.psw2
                    },
                    dataType: 'json',
                    success: function(data) {
                        if (data.result == 0) { //密码修改成功，跳到成功页面
                            callback && callback();
							//HHN.dialog.tradePswSuc();
                        } else {
                            error.show().html(data.msg);
                            submit.removeClass('disabled').html('确认');
                        }
                    }
                });
                
            },
            that = this,
            node;
        this.dialog({
            id: 'setTradePsw',
            // title: '设置支付密码',
            content: this.template.setTradePsw.replace('{phone}', phone),
            padding: '0px',
            onshow: function() {
                node = $(this.node);
                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');      
                    node.find('#dio_error').hide();
                });
                node.delegate('.submit', 'click', function() {

                    var value = {
                        code: node.find('.j-code').val(),
                        psw: node.find('.j-psw').val(),
                        psw2: node.find('.j-psw2').val()
                    };
                    var pass = cert(node, value);
                });

                node.delegate('.input-btn', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    that.countdown($(this));
                });
            }
        });
    },
    //设置支付密码成功
    tradePswSuc: function() {
        dialog.get('setTradePsw').content(this.template.baseSuc.replace('{text}', '支付密码设置成功！'));
        var node = dialog.get('setTradePsw').node;
        var self = dialog.get('setTradePsw');
        $(node).delegate('.dio_close,.diol_opt_close','click',function(){
            self.remove();
            if( location.hash == "#!/safe"||location.pathname=='/'||location.pathname=='/index.do') {
                location.reload(true);
            }
            //$('.dio_close').click();
        });
    },
    //实名验证
    realNameCert: function(flag) {
        var rel = this.dialog({
            padding: '0px',
            content: this.template.realNameCert,
            onshow: function() {
                var that = this,
                    node = $(this.node),
                    error = node.find('#dio_error'),
                    submit = node.find(".submit");

                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    node.find('#dio_error').hide();
                });
                node.delegate('.submit', 'click', function() {
                    var realName = node.find('.j-name').val();
                    var idNo = node.find('.j-id').val();
                    if ($.trim(realName) == "") {
                        node.find('.j-name').parent().parent().addClass('form_dio_error').find('span').html('请填写真实姓名');
                        return;
                    }
                    realName = $.trim(realName);
                    var isName = new Object();
                    isName = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                    if (realName.length < 2 || realName.length > 20) {
                        node.find('.j-name').parent().parent().addClass('form_dio_error').find('span').html('名字长度为2-20个字符');
                        return;
                    }
                    if (!isName.test(realName)) {
                        node.find('.j-name').parent().parent().addClass('form_dio_error').find('span').html('真实姓名格式输入有误');
                        return;
                    }
                    if ($.trim(idNo) == "") {
                        node.find('.j-id').parent().parent().addClass('form_dio_error').find('span').html('请填写身份号码');
                        return;
                    }
                    var isIDCard1 = new Object();
                    var isIDCard2 = new Object();
                    //身份证正则表达式(15位) 
                    isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
                    //身份证正则表达式(18位) 
                    isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}(x|X))$/;
                    if (isIDCard1.test(idNo) || isIDCard2.test(idNo)) {
                        if ($(this).hasClass('disabled')) return;
                        $(this).addClass('disabled').html('提交中...');
                        var value = {
                            realName: realName,
                            idNo: idNo
                        };
                        $.post("https://www.qianshenghua.com/account/authRealName.do", value, function(data) {
                            if (data.msg == "保存成功") {
                                popup({
                                    type: 'success',
                                    text: '实名认证成功',
                                    time: 3000,
                                    callback:function(){
                                       rel.remove();   
                                       if( !flag ) {
                                            if( location.hash == '#!/safe') {
                                                location.reload(true);
                                            } else {
                                                document.location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/safe";
                                            }
                                       } else {
                                            location.reload(true);
                                       }
                                    }
                                });
                                //document.location.href = "https://www.qianshenghua.com/profile/securityIndex.do"
					
                            } else {
                                error.show().html(data.msg);
                                submit.removeClass('disabled').html('认证');
                            }
                        }, "json");
                    } else {
                        error.show().html("身份证号码不正确");
                    }
                });
            }
        });
    },
	 //实名验证
    realNameCertCallback: function(callback) {
        this.dialog({
            padding: '0px',
            content: this.template.realNameCert,
            onshow: function() {
                var that = this,
                    node = $(this.node),
                    error = node.find('#dio_error'),
                    submit = node.find(".submit");

                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    node.find('#dio_error').hide();
                });
                node.delegate('.submit', 'click', function() {
                    var realName = node.find('.j-name').val();
                    var idNo = node.find('.j-id').val();
                    if ($.trim(realName) == "") {
                         node.find('.j-name').parent().parent().addClass('form_dio_error').find('span').html('请填写真实姓名');
                        return;
                    }
                    realName = $.trim(realName);
                    var isName = new Object();
                    isName = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                    if (realName.length < 2 || realName.length > 20) {
                         node.find('.j-name').parent().parent().addClass('form_dio_error').find('span').html("名字长度为2-20个字符");
                        return;
                    }
                    if (!isName.test(realName)) {
                         node.find('.j-name').parent().parent().addClass('form_dio_error').find('span').html("真实姓名格式输入有误");
                        return;
                    }
                    if ($.trim(idNo) == "") {
                        node.find('.j-id').parent().parent().addClass('form_dio_error').find('span').html("请填写身份号码");
                        return;
                    }
                    var isIDCard1 = new Object();
                    var isIDCard2 = new Object();
                    //身份证正则表达式(15位) 
                    isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
                    //身份证正则表达式(18位) 
                    isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}(x|X))$/;
                    if (isIDCard1.test(idNo) || isIDCard2.test(idNo)) {
                        if ($(this).hasClass('disabled')) return;
                        $(this).addClass('disabled').html('提交中...');
                        var value = {
                            realName: realName,
                            idNo: idNo
                        };
                        $.post("https://www.qianshenghua.com/account/authRealName.do", value, function(data) {
                            if (data.msg == "保存成功") {
                                popup({
                                    type: 'success',
                                    text: '实名认证成功',
                                    time: 4000
                                });
								callback && callback();
                            } else {
                                error.show().html(data.msg);
                                submit.removeClass('disabled').html('认证');
                            }
                        }, "json");
                    } else {
                        error.show().html("身份证号码不正确");
                    }
                });
            }
        });
    },
    //实名认证通知
    realNameNotice: function() {
        var tpl = '    <div class="diol_pwd clearfix">'+
                  '        <div class="dio_close" i="close"></div>'+
                  '        <div class="diol_title">系统提示</div>'+
                  '        <div class="form_main">'+
                  '        <p class="dio_text">您还没有<span class="dio_money">实名验证</span>，点击确定进行实名认证!</p>'+
                  '        '+
                  '        <p class="dio_vtns">'+
                  '            <a href="javascript:;" class="dio_sure">确定</a>'+
                  '        </p>'+
                  '        </div>'+
                  '    </div>';  
        var rectDia = this.dialog({
            padding:"0px",
            content: tpl,
            onshow: function() {
                  var node = $(this.node);
                  var accountType = CONFIG.accountType;
                   node.delegate('.dio_sure', 'click', function() {
                        if(accountType == 2){
                              location.href = "https://www.qianshenghua.com/withdrawPageNew.do";
                        }else{
                              rectDia.close().remove();
                              HHN.dialog.realNameCert();
                        }
                   });
            }
        });
    },

    resetTradePwd : function(phone,hidePhone){
        var that = this;
        var dialog =  this.dialog({
            padding : "0px",
            content : this.template.resetTradePwd.replace('{phone}',hidePhone).replace('{hidePhone}',phone),
            onshow : function(){
                var node = $(this.node);
                node.delegate('.submit', 'click', function() {
                    var j_code = node.find('.j-code'),
                        j_name = node.find('.j-name'),
                        j_card = node.find('.j-card'),
                        j_pwd = node.find('.j-pwd'),
                        j_pwd2 = node.find('.j-pwd2'),
                        error = $("#dio_error");
                    
                        node.delegate('input', 'focus', function() {
                          node.find('.form_group').removeClass('form_dio_error');
                          error.hide();
                        });

                        if(!j_code.val() ) {
                            j_code.parent().parent().addClass('form_dio_error').find('span').html("验证码错误");
                            return false;
                        }

                        // var isName = new Object();
                        var realName = $.trim( j_name.val() );
                        isName = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                        if (realName.length < 2 || realName.length > 20) {
                            j_name.parent().parent().addClass('form_dio_error').find('span').html('名字长度为2-20个字符');
                            return;
                        }
                        // if (!isName.test(realName)) {
                        //     j_name.parent().parent().addClass('form_dio_error').find('span').html('真实姓名格式输入有误');
                        //     return;
                        // }
                        if ($.trim(j_card.val()) == "") {
                            j_card.parent().parent().addClass('form_dio_error').find('span').html('请填写身份号码');
                            return;
                        }
                        // var isIDCard1 = new Object();
                        // var isIDCard2 = new Object();
                        // //身份证正则表达式(15位) 
                        // isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
                        // //身份证正则表达式(18位) 
                        // isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}(x|X))$/;
                        // if(!isIDCard1.test(j_card.val()) && !isIDCard2.test(j_card.val())) {
                        //     j_card.parent().parent().addClass('form_dio_error').find('span').html('身份证号码不正确');
                        //     return;                            
                        // }

                        var p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
                        if (j_pwd.val().length < 8 || j_pwd.val().length > 20) {
                            j_pwd.parent().parent().addClass('form_dio_error').find('span').html("密码长度为8-20位,由数字与字母组成");
                            return;
                        } else if (!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)([^\s]+){8,20}$/g.test(j_pwd.val()) ||  (j_pwd.val().split(j_pwd.val()[0]).length-1== j_pwd.val().length)) {
                            j_pwd.parent().parent().addClass('form_dio_error').find('span').html("密码过于简单，请尝试数字+字母组合");
                            return;
                        } else if( j_pwd.val() != j_pwd2.val() ) {
                            j_pwd2.parent().parent().addClass('form_dio_error').find('span').html("两次输入的密码不一致");
                            return;                            
                        }  

                        $('.submit').addClass('disabled').html('提交中');
                        //发送ajax请求
                        $.ajax({
                            type : "POST",
                            dataType : "json",
                            data : {
                                code : j_code.val(),
                                realName : j_name.val(),
                                idCard : j_card.val(),
                                payPwd : j_pwd.val(),
                                confirmPwd : j_pwd2.val()
                            },
                            url : "https://www.qianshenghua.com/account/resetPayPwd.do",
                            success : function( data ){
                                if( data.result == 0 ) {
                                   popup({
                                        text : "支付密码重置成功！",
                                        type : "success",
                                        callback : function(){
                                            dialog.close().remove();
                                        }
                                   });

                                } else if( data.result == -3 ){
                                    error.show().html('真实姓名不正确');
                                    $('.submit').removeClass('disabled').html('确定');
                                } else {
                                    error.show().html(data.msg);
                                    $('.submit').removeClass('disabled').html('确定');
                                }
                            },
                            error  :function(){

                            }
                        }) ;                     
                }); 
                
                node.delegate('.input-btn', 'click', function() {
                    var curr = $(this);
                    var m = node.find('#mobile').val();
                    if ($(this).hasClass('disabled')) return;
                    HHN.dialog.getImageCode(m,function(sign){
                      var data = {
                        mobilePhone: '',
                        checkPhone: false,
                        sign:sign
                      };
                      that.getCode(curr, data);
                    });
                });

            }
        });
    },
    forgetTradePwd: function(phone,mobile){
        var top = this;
        var forgetTradePwdDialog = this.dialog({
            padding:'0px',
            id:'forgetTradePwd',
            content: this.template.forgetTradePwd.replace('{phone}',phone),
            onshow: function(){
                var that = this,
                    node = $(this.node);
                    
                    node.delegate('.input-btn', 'click', function(){
                        var curr = $(this);
                        HHN.dialog.getImageCode(mobile,function(sign){
                                var data = {
                                    mobilePhone: '',
                                    checkPhone: false,
                                    sign:sign
                                };
                                top.getCode(curr, data);
                            });
                    });
                    
                    node.delegate('.submit','click', function(){
                        var btn = $(this);
                        var data = {
                            code : $.trim(node.find('.j-code').val()),
                            enterpriseName: $.trim(node.find('.j-name').val()),
                            registerId: $.trim(node.find('#registerId').val()),
                            payPwd: $.trim(node.find('#psw').val()),
                            confirmPwd: $.trim(node.find('#psw2').val())
                        }
                        var p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
                        if(data.code.length!=6){
                            //popup({type: 'danger',text: '短信验证码错误！'});
                            node.find(".j-code").parent().parent().addClass('form_dio_error').find('span').html('短信验证码错误！');
                            return;
                        }
                        if(data.enterpriseName.length<2){
                            //popup({type: 'danger',text: '企业名称有误！'});
                            node.find(".j-name").parent().parent().addClass('form_dio_error').find('span').html('企业名称有误！');
                            return;
                        }
                        if(data.registerId.length<2){
                            //popup({type: 'danger',text: '注册号/社会信用代码有误！'});
                            node.find("#registerId").parent().parent().addClass('form_dio_error').find('span').html('注册号/社会信用代码有误！');
                            return;
                        }
                        if(!p.test(data.payPwd)){
                            //popup({type: 'danger',text: '密码长度为8-20位,由数字与字母组成'});
                            node.find("#psw").parent().parent().addClass('form_dio_error').find('span').html('密码长度为8-20位,由数字与字母组成！');
                            return;
                        }
                        if(data.payPwd != data.confirmPwd){
                            //popup({type: 'danger',text: '确认密码错误！'});
                            node.find("#psw2").parent().parent().addClass('form_dio_error').find('span').html('确认密码错误！');
                            return;
                        }
                        btn.addClass('disabled').html('提交中...');
                        $.ajax({
                            url:'https://www.qianshenghua.com/account/resetEnterprisePayPwd.do',
                            type:'post',
                            data:data,
                            dataType:'json',
                            success: function(json){
                                if(json.result===0){
                                    forgetTradePwdDialog.remove();
                                    popup({type: 'success',text: json.msg});
                                }else{
                                    popup({type: 'danger',text: json.msg});
                                    btn.removeClass('disabled').html('确定');
                                }
                            }
                        });
                    });
            }
        });
    },
    llpayPCNotice: function(info) {
        info = info || {};
        var tpl = '    <div class="diol_pwd">'+
                  '        <div class="dio_close" i="close"></div>'+
                  '        <div class="diol_title">系统提示</div>'+
                  '        <div class="form_main">'+
                  '        <p class="dio_text">您绑定的银行卡暂时仅支持移动端充值和直接购买。</p>'+
                  '        <p class="dio_text">请网银充值后购买或直接到移动端购买</p>'+
                  '        '+
                  '        <p>'+
                  '            <a href="javascript:;" i="close" class="dio_cancle">取消</a>'+
                  '            <a href="https://www.qianshenghua.com/preOnlinePay.do" class="dio_sure">前往网银充值</a>'+
                  '        </p>'+
                  '        </div>'+
                  '    </div>';
        this.dialog({
            padding:"0px",
            content: tpl,
            onclose: function(){
                if( info ) {
                    info.closeCallback && info.closeCallback();
                }
            }
        });
    },
    //实名认证通知
    enterpriseNotice: function() {
        var tpl = '    <div class="diol_pwd clearfix">'+
                  '        <div class="dio_close" i="close"></div>'+
                  '        <div class="diol_title">系统提示</div>'+
                  '        <div class="form_main">'+
                  '        <p class="dio_text">您账户<span class="dio_money">余额不足</span>，点击确定进行充值!</p>'+
                  '        '+
                  '        <p class="dio_vtns">'+
                  '            <a href="https://www.qianshenghua.com/preOnlinePay.do" class="dio_sure">确定</a>'+
                  '        </p>'+
                  '        </div>'+
                  '    </div>';    
        this.dialog({
            padding : "0px",
            content: tpl
        });
    },
    //汇付提现银行卡绑定通知
    huifuBankBindNotice: function() {
        var tpl = '    <div class="diol_pwd clearfix">'+
                  '        <div class="dio_close" i="close"></div>'+
                  '        <div class="diol_title">系统提示</div>'+
                  '        <div class="form_main">'+
                  '        <p class="dio_text">您未绑定汇付天下<span class="dio_money">提现银行卡</span>，请先绑定!</p>'+
                  '        '+
                  '        <p class="dio_vtns">'+
                  '            <a href="https://www.qianshenghua.com/withdraw/bindCardInit.do" class="dio_sure">确定</a>'+
                  '        </p>'+
                  '        </div>'+
                  '    </div>';  
        this.dialog({
            content: tpl,
            padding:"0px"
        });
    },
    //绑卡通知
    bangingCardNotice: function() {
        var tpl = '    <div class="diol_pwd clearfix">'+
                  '        <div class="dio_close" i="close"></div>'+
                  '        <div class="diol_title">系统提示</div>'+
                  '        <div class="form_main">'+
                  '        <p class="dio_text">您还没有<span class="dio_money">绑定银行卡</span>，点击确定进行绑定!</p>'+
                  '        '+
                  '        <p class="dio_vtns">'+
                  '            <a href="javascript:;" class="dio_sure">确定</a>'+
                  '        </p>'+
                  '        </div>'+
                  '    </div>';    

        this.dialog({
            content: tpl,
            padding:"0px",
            onshow : function(){
              var node = $(this.node);
              var self = this;
              node.delegate('.dio_sure','click',function(){
                    self.close();
                    location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/bankcard";
              });                
            }
        });

        //        this.dialog({
        //            title: '通知',
        //            content: '<p style="padding:20px 0;">您还没有<span class="cRed">绑定银行卡</span>，请关注微信公众号“合和年在线”进行绑卡!</p>',
        //            ok: function(){
        //            	//recharge(2);
        //            	window.location.href="https://www.qianshenghua.com/profile/index.do";
        //            }
        //        });
    },
    //设置支付密码通知
    setTradePswNotice: function(phone) {
        var tpl = '    <div class="diol_pwd clearfix">'+
                  '        <div class="dio_close" i="close"></div>'+
                  '        <div class="diol_title">系统提示</div>'+
                  '        <div class="form_main">'+
                  '        <p class="dio_text">您还没有<span class="dio_money">设置支付密码</span>，点击确定进行设置!</p>'+
                  '        '+
                  '        <p class="dio_vtns">'+
                  '            <a href="javascript:;" onclick="HHN.dialog.setTradePsw('+phone+')" class="dio_sure">确定</a>'+
                  '        </p>'+
                  '        </div>'+
                  '    </div>';   
        this.dialog({
            content: tpl,
            padding:"0px"
        });
    },
    //绑卡成功通知
    bangingCardSucNotice: function() {
        var tpl = '    <div class="diol_pwd clearfix">'+
                  '        <div class="dio_close" i="close"></div>'+
                  '        <div class="diol_title">系统提示</div>'+
                  '        <div class="form_main">'+
                  '        <p class="dio_text"><span class="dio_money">绑卡成功！</span>现在去查看<span class="dio_money">我要赚钱!</span></p>'+
                  '        '+
                  '        <p class="dio_vtns">'+
                  '            <a href="https://www.qianshenghua.com/termFinance.do" class="dio_sure">确定</a>'+
                  '        </p>'+
                  '        </div>'+
                  '    </div>'; 
        this.dialog({
            content: tpl,
            padding:"0px"
        });
    },
    //已绑卡通知
    bangedCardNotice: function() {
        var tpl = '    <div class="diol_pwd clearfix">'+
                  '        <div class="dio_close" i="close"></div>'+
                  '        <div class="diol_title">系统提示</div>'+
                  '        <div class="form_main">'+
                  '        <p class="dio_text">您已经<span class="dio_money">绑定了银行卡</span>，请到银行卡管理查看！</p>'+
                  '        '+
                  '        <p class="dio_vtns">'+
                  '            <a href="javascript:;" class="dio_sure">确定</a>'+
                  '        </p>'+
                  '        </div>'+
                  '    </div>';    

        this.dialog({
            content: tpl,
            padding:"0px",
            onshow:function(){
                  var node = $(this.node);
                  var self = this;
                  node.delegate('.dio_sure','click',function(){
                        self.close();
                        location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/bankcard";
                  });
                 //https://www.qianshenghua.com/view/center-index.jsp#!/safe 
            }
        });
    },
    //修改登录密码
    updateLoginPsw: function() {
        var dt = new Date;
        this.dialog({
            id: 'updateLoginPsw',
            padding: '0px',
            content: this.template.updateLoginPsw.replace('{code}', dt.getTime()),
            onshow: function() {
                var node = $(this.node),
                    error = node.find('#dio_error'),
                    submit = node.find(".submit");

                node.delegate('input', 'focus', function() {
                  node.find('.form_group').removeClass('form_dio_error');
                  error.hide();
                });

                node.delegate('.input-btn', 'click', function() {
                    HHN.dialog.getCode($(this),{});
                });

                node.delegate('.submit', 'click', function() {
                    var oldPwd = node.find('.j-psw1').val();
                    if ($.trim(oldPwd) == '') {
                        node.find('.j-psw1').parent().parent().addClass('form_dio_error').find('span').html('请输入旧密码');
                        return;
                    }
                    var newPwd = node.find('.j-psw2').val();
                    if ($.trim(newPwd) == '') {
                        node.find('.j-psw2').parent().parent().addClass('form_dio_error').find('span').html('请输入新密码');
                        return;
                    }
                    if (newPwd.length < 6 || newPwd.length > 20) {
                        node.find('.j-psw2').parent().parent().addClass('form_dio_error').find('span').html('密码长度必须为8-20个字符');
                        return;
                    }

                    if (!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)([^\s]+){8,20}$/g.test(newPwd) ||  (newPwd.split(newPwd[0]).length-1== newPwd.length)){
                        node.find('.j-psw2').parent().parent().addClass('form_dio_error').find('span').html('密码过于简单，请尝试数字+字母组合');
                        return;
                    }
                    var confirmPwd = node.find('.j-psw3').val();
                    if ($.trim(confirmPwd) == '') {
                        node.find('.j-psw3').parent().parent().addClass('form_dio_error').find('span').html('请输入确认密码');
                        return;
                    }
                    if (newPwd != confirmPwd) {
                        node.find('.j-psw3').parent().parent().addClass('form_dio_error').find('span').html('两次密码不一致');
                        return;
                    }
                    var code = node.find('.j-cert').val();
                    if ($.trim(code) == '') {
                        node.find('.j-cert').parent().parent().addClass('form_dio_error').find('span').html('请输入验证码');
                        return;
                    }
                    if ($(this).hasClass('disabled')) return;
                    $(this).addClass('disabled').html('提交中...');

                    var value = {
                        oldPwd: oldPwd,
                        newPwd: newPwd,
                        confirmPwd: confirmPwd,
                        identifyCode: code
                    };

                    $.ajax({
                        url: 'https://www.qianshenghua.com/account/updateLoginPwd.do',
                        data: value,
                        type: 'post',
                        dataType: 'json',
                        success: function(data) {
                            if (data.result == 0) {
                                HHN.dialog.updateLoginPswSuc();
                            } else { //密码修改成功，跳到成功页面
                                // if (data.result == 1) {
                                //     error.show().html("填写的密码信息格式有误");
                                // } else if (data.result == 2) {
                                //     error.show().html("两次密码输入不一致");
                                // } else if (data.result == 3) {
                                //     error.show().html("新密码不能与原密码相同");
                                // } else if (data.result == 4 || data.result == 5) {
                                //     error.show().html("修改密码失败");
                                // } else if (data.result == 6) {
                                //     error.show().html("旧密码不正确");
                                // } else if( data.result == 7 ) {
                                    
                                // }
                                error.show().html(data.msg);
                                submit.removeClass('disabled').html('确认');
                            }
                        }
                    });
                });
            }
        });
    },
    //修改登录密码成功
    updateLoginPswSuc: function() {
        dialog.get('updateLoginPsw').content(this.template.baseSuc.replace('{text}', '登录密码修改成功！'));
        var node = dialog.get('updateLoginPsw').node;
        var self = dialog.get('updateLoginPsw');
        $(node).delegate('.dio_close,.diol_opt_close','click',function(){
            self.remove();
            //$('.dio_close').click();
        });
    },
    //修改支付密码
    updateTradePsw: function() {
        this.dialog({
            id: 'updateTradePsw',
            padding: '0px',
            // title: '修改支付密码',
            content: this.template.updateTradePsw,
            onshow: function() {
                var node = $(this.node),
                    error = node.find('#dio_error'),
                    submit = node.find(".submit");

                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    error.hide();
                });
                node.delegate('.input-btn', 'click', function() {
                    HHN.dialog.getCode($(this),{})
                });

                node.delegate('.submit', 'click', function() {

                    var value = {
                        psw1: node.find('.j-psw1').val(),
                        psw2: node.find('.j-psw2').val(),
                        psw3: node.find('.j-psw3').val(),
                        cert: node.find('.j-cert').val()
                    };

                    var p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
                    if(!value.psw1) {
                        node.find('.j-psw1').parent().parent().addClass('form_dio_error').find('span').html("旧支付密码不得为空");
                        return false;
                    }
                    if (value.psw2.length < 8 || value.psw2.length > 20) {
                       node.find('.j-psw2').parent().parent().addClass('form_dio_error').find('span').html("密码长度为8-20位,由数字与字母组成");
                        return;
                    } else if (!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)([^\s]+){8,20}$/g.test(value.psw2) ||  (value.psw2.split(value.psw2[0]).length-1== value.psw2.length)) {
                        node.find('.j-psw2').parent().parent().addClass('form_dio_error').find('span').html("密码过于简单，请尝试数字+字母组合");
                        return;
                    } else if (value.psw2 != value.psw3) {
                        node.find('.j-psw3').parent().parent().addClass('form_dio_error').find('span').html("两次密码不一致");
                        return;
                    } else if( !value.cert.length) {
                        node.find('.j-cert').parent().parent().addClass('form_dio_error').find('span').html("请输入验证码");
                        return;                        
                    } else {
                        if (submit.hasClass('disabled')) return;
                        submit.addClass('disabled').html('提交中...');


                        $.ajax({
                            url: 'https://www.qianshenghua.com/account/updatePayPwd.do',
                            data: {
                                oldPwd: value.psw1,
                                pwd: value.psw2,
                                confirmPwd: value.psw3,
                                identifyCode: value.cert
                            },
                            type: 'post',
                            dataType: 'json',
                            success: function(data) {
                                if (data.result == 0) {
                                    HHN.dialog.updateTradePswSuc();
                                } else { //密码修改成功，跳到成功页面
                                    error.show().html(data.msg);
                                    submit.removeClass('disabled').html('确认');
                                }
                            }
                        });
                    }

                    // 下面各种验证
                    //error.show().html('验证码错误');
                });
            }
        });
    },
    //修改支付密码成功
    updateTradePswSuc: function() {
        // dialog.get('updateTradePsw').content(this.template.baseSuc.replace('{text}', '支付密码修改成功！'));
        dialog.get('updateTradePsw').content(this.template.baseSuc.replace('{text}', '支付密码修改成功！'));
        var node = dialog.get('updateTradePsw').node;
        var self = dialog.get('updateTradePsw');
        $(node).delegate('.dio_close,.diol_opt_close','click',function(){
            self.remove();
            location.reload();
            //$('.dio_close').click();
        });
    },
    //修改手机号，第一步
    updatePhone1: function(phone) {
        var that = this;
        this.dialog({
            id: 'updatePhone',
            title: '修改手机号',
            padding: '20px 40px',
            content: this.template.updatePhone1.replace('{phone}', phone),
            onshow: function() {
                var node = $(this.node),
                    error = node.find('#error'),
                    submit = node.find(".submit");
                node.delegate('input', 'focus', function() {
                    error.hide();
                });

                node.delegate('#submit1', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    $(this).html('提交中...').addClass('disabled');
                    var value = {
                        code: node.find('.j-code'),
                        phone1: node.find('.j-phone1'),
                        phone2: node.find('.j-phone2')
                    }

                    error.show().html('错误提示demo');
                });

                node.delegate('.input-btn', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    that.countdown($(this));
                });
            }
        });
    },
    //修改手机号，第二部
    updatePhone2: function() {
        var _dialog = dialog.get('updatePhone'),
            node,
            error;
        _dialog.content(this.template.updatePhone2);

        node = $(_dialog.node);
        error = node.find('#error');

        node.delegate('#submit2', 'click', function() {
            if ($(this).hasClass('disabled')) return;
            $(this).html('提交中...').addClass('disabled');
            var code = node.find('.j-code');
            error.show().html('错误提示demo');
        });
    },
    //修改手机号成功提示
    updatePhoneSuc: function() {
        dialog.get('updatePhone').content(this.template.baseSuc.replace('{text}', '手机号码修改成功！'));
    },
    //验证邮箱第一步
    certEmail: function() {
        this.dialog({
            id: 'certEmail',
            padding: '0px',
            content: this.template.certEmail,
            onshow: function() {
                var node = $(this.node),
                    error = node.find('#dio_error'),
                    mail;

                node.delegate('input[type="text"]', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    error.hide();
                });

                node.delegate('#submit', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    $(this).html('提交中...').addClass('disabled');

                    mail = $.trim(node.find('.j-mail').val())

                    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(mail)) {
                        $(this).removeClass('disabled').html('确定');
                        node.find('.j-mail').parent().parent().addClass('form_dio_error').find('span').html('邮箱格式错误');
                        return;
                    }
                    //HHN.dialog.certEmailLink();
                    $.ajax({
                        type: 'POST',
                        url: 'https://www.qianshenghua.com/profile/sendMail.do',
                        data: {
                            email: mail
                        },
                        success: function(data) {
                            if (data['msg'] == 0) {
                                HHN.dialog.certEmailLink();
                            } else {
                                error.show().html('邮件发送失败');
                            }
                        },
                        failure: function(data) {
                            error.show().html('邮件发送失败');
                        },
                        dataType: 'json'
                    });
                });

            }
        })
    },
    //验证邮箱第二部
    certEmailLink: function() {
        var that = this,
            _dialog = dialog.get('certEmail'),
            node = $(_dialog.node),
            mail = $.trim(node.find('.j-mail').val()),
            link = 'http://mail.' + mail.split('@')[1];
        _dialog.content(this.template.certEmailLink.replace('{mail}', mail).replace('{link}', link));
        node.find('.dio_close').click(function(){
            _dialog.remove();
        });

        $(_dialog.node).undelegate('.j-prev', 'click')
            .delegate('.j-prev', 'click', function() {
                _dialog.remove();
                HHN.dialog.certEmail();
            })
            .delegate('.submit', 'click', function() {
                if ($(this).data('link')) {
                    location.reload();
                    return;
                }
                var self = $(this);
                setTimeout(function() {
                    self.data('link', 1).attr('href', 'javascript:;').html('已经去邮箱验证了？');
                }, 100);
            });

    },
    certEmailSuc: function() {
        this.dialog({
            title: '邮箱验证',
            content: this.template.baseSuc.replace('{text}', '邮箱验证成功！'),
            onclose: function() {
                //window.location.href = "https://www.qianshenghua.com/profile/securityIndex.do";
				window.location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/safe"
            }
        });
    },
    //找回登录密码
    retrieveLoginPsw: function(tipText,phone) {
        var cert = function(node, value, callback) {
                if ($.trim(value.mobilePhone) == '') {
                    node.find("#mobile").parent().parent().addClass('form_dio_error').find('span').html('请输入您账号绑定的手机号码');
                    return;
                }
                if (!/^0?(13|15|18|14|17)[0-9]{9}$/.test($.trim(value.mobilePhone))) {
                //if (!/^(1(([37][0-9])|(47)|70|[8][0123456789]))\d{8}$/.test($.trim(value.mobilePhone))) {
                     node.find("#mobile").parent().parent().addClass('form_dio_error').find('span').html('手机号码格式错误');
                    return;
                }
                if (value.code.length < 6) {
                    node.find('.err_icon').remove();
                    node.find(".j-code").parent().parent().addClass('form_dio_error').find('span').html('短信验证码长度不能小于6位');
                    return;
                }
                if (value.pwd.length < 8 || value.pwd.length > 20) {
                    node.find(".j-psw").parent().parent().addClass('form_dio_error').find('span').html('密码长度为8-20个字符');
                    return;
                }
                if (!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)([^\s]+){8,20}$/g.test(value.pwd) ||  (value.pwd.split(value.pwd[0]).length-1== value.pwd.length)) {
                    node.find(".j-psw").parent().parent().addClass('form_dio_error').find('span').html('密码过于简单，请尝试数字+字母组合');
                    return;
                }
                if (value.pwd !== value.confirmPwd) {
                    node.find(".j-psw2").parent().parent().addClass('form_dio_error').find('span').html('确认密码不一致');
                    return;
                }
                node.find('.form_group').removeClass('form_dio_error');
                //或者ajax，success后调用callback();
                callback();
            },
            that = this;
        this.dialog({
            id: 'retrieveLoginPsw',
            // title: '找回登录密码',
            padding:'0px',
            content: this.template.retrieveLoginPsw.replace('{title}','重置登录密码').replace('{tipText}',tipText?'<p class="error" style="padding:0 0 10px 0;">'+tipText+'</p>':'').replace('{phone}',phone?phone:''),
            onshow: function() {
                var node = $(this.node);
                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                });
                node.delegate('.submit', 'click', function() {
                    var value = {
                        mobilePhone: node.find('#mobile').val(),
                        code: node.find('.j-code').val(),
                        pwd: node.find('.j-psw').val(),
                        confirmPwd: node.find('.j-psw2').val()
                    };
                    var pass = cert(node, value, function() {
                        if (node.find('.submit').hasClass('disabled')) return;
                        node.find('.submit').addClass('disabled').html('提交中...');
                        $.ajax({
                            url: 'https://www.qianshenghua.com/account/retrieveLoginPwd.do',
                            data: value,
                            type: 'post',
                            dataType: 'json',
                            success: function(data) {
                                if (data.code == 0) {
                                    HHN.dialog.retrieveLoginPswSuc();
                                } else {
                                    popup({
                                        type: 'warning',
                                        text: data.msg
                                    });
                                    node.find('.submit').removeClass('disabled').html('确认');
                                }
                            }
                        });
                    });
                });

                node.delegate('.input-btn', 'click', function() {
				    var curr = $(this);
                    var m = node.find('#mobile').val();
                    if ($.trim(m) == "") {
                        node.find("#mobile").parent().parent().addClass('form_dio_error').find('span').html('请输入手机号码');
                        return;
                    }
                    if (!/^0?(13|15|18|14|17)[0-9]{9}$/.test(m)) {
                        node.find("#mobile").parent().parent().addClass('form_dio_error').find('span').html('手机号码格式错误');
                        return;
                    }
                    if ($(this).hasClass('disabled')) return;
					HHN.dialog.getImageCode(m,function(sign){
					  var data = {
                        mobilePhone: m,
                        checkPhone: false,
						sign:sign
                      };
					  that.getCode(curr, data);
				    });
                });
            }
        });
    },
    //找回登录密码成功
    retrieveLoginPswSuc: function() {
        dialog.get('retrieveLoginPsw').content(this.template.baseSuc.replace('{text}', '找回登录密码成功！'));
        var node = dialog.get('retrieveLoginPsw').node;
        var self = dialog.get('retrieveLoginPsw');
        $(node).delegate('.dio_close,.diol_opt_close','click',function(){
            self.remove();
            //$('.dio_close').click();
        });
            
    },
	//获取图形验证码
	getImageCode:function(phone,callback){
	      var dt = new Date;
	      var imgDialog = this.dialog({
            id: 'imageCodes',
            padding: '0px',
            content: this.template.imageCode.replace('{code}', dt.getTime()),
            onshow: function() {
                var node = $(this.node),
				//error = node.find('#error'),
				code = node.find('#codeInput');
                        //console.log( node.find('.j-code') );
				node.delegate('#code', 'click', function() {
                        $(this).attr('src', 'https://www.qianshenghua.com/common/imageCode.do?pageId=userlogin&_=' + (+new Date))
                });
                node.delegate('.submit', 'click', function() {
                    if ($.trim(code.val()) == '') {
                        popup({
                            type: 'warning',
                            text: '请输入验证码'
                        });
                       return;
                    }
					$.ajax({
						url: 'https://www.qianshenghua.com/login/checkCode.do',
						type:"POST",
						data: {
							code: code.val(),
							phone: phone,
						},
						dataType: 'json',
						success: function(data) {
							if(data.result == 1){
                                popup({
                                    type: 'warning',
                                    text: '验证码错误!'
                                });
							}else if(data.result ==2){
                                popup({
                                    type: 'warning',
                                    text: '请输入手机号码!'
                                });
							}else{
							    //error.hide();
							    imgDialog.remove();
							    callback(data.sign);
							}
						}
			      });
					
             });
            }
        });
	},
    //找回登录密码
    retrieveTradePsw: function(phone) {
        var cert = function(node, value, callback) {
                var error = node.find('#dio_error');
                if (value.code.length < 6) {
                    node.find('.j-code').parent().parent().addClass('form_dio_error').find('span').html('短信验证码长度不能小于6位');
                    node.find('.submit').removeClass('disabled').html('确认');
                    return;
                }
                if (value.psw.length < 6) {
                    node.find('.j-psw').parent().parent().addClass('form_dio_error').find('span').html('支付密码长度不能小于6位');
                    node.find('.submit').removeClass('disabled').html('确认');
                    return;
                }
                if (value.psw !== value.psw2) {
                    node.find('.j-psw2').parent().parent().addClass('form_dio_error').find('span').html('两次输入的密码不一致');
                    node.find('.submit').removeClass('disabled').html('确认');
                    return;
                }
                //或者ajax，success后调用callback();
                callback && callback();
            },
            that = this;
        this.dialog({
            id: 'retrieveTradePsw',
            // title: '找交易录密码',
            padding : "0px",
            content: this.template.retrieveLoginPsw.replace('{title}','找回交易录密码').replace('{phone}', phone).replace('新密码', '支付密码').replace('确认新密码', '确认密码'),
            onshow: function() {
                var node = $(this.node);
                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    node.find('#error').hide();
                });
                node.delegate('.submit', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    $(this).addClass('disabled').html('提交中...');
                    var value = {
                        code: node.find('.j-code').val(),
                        psw: node.find('.j-psw').val(),
                        psw2: node.find('.j-psw2').val()
                    };
                    var pass = cert(node, value, function() {
                       
                    });
                });

                node.delegate('.input-btn', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    that.countdown($(this));
                });
            }
        });
    },
    //找回登录密码成功
    retrieveTradePswSuc: function() {
        dialog.get('retrieveTradePsw').content(this.template.baseSuc.replace('{text}', '找回支付密码成功！'));
        var node = dialog.get('retrieveTradePsw').node;
        var self = dialog.get('retrieveTradePsw');
        $(node).delegate('.dio_close,.diol_opt_close','click',function(){
            self.remove();
            //$('.dio_close').click();
        });
            
    },
    //输入支付密码
    inputTradePsw: function() {
        this.dialog({
            // title: '请输入支付密码',
            padding:"0px",
            content: this.template.inputTradePsw,
            ok: function() {
                var node = $(this.node),
                    error = node.find('#error'),
                    value = $.trim(node.find('.j-psw').val());
                if (value.length == 0) {
                    error.show().html('支付密码不能为空');
                    return false;
                }
                if (value.length < 6) {
                    error.show().html('支付密码错误');
                    return false;
                }
            },
            onshow: function() {
                var node = $(this.node),
                    error = node.find('#error');
                node.delegate('input', 'focus', function() {
                    error.hide();
                });
            }
        });
    },
    //网银支付over
    onlinePaySuc: function() {
        this.dialog({
            padding : '0px',
            content: this.template.onPaySubmitSuc.replace('{title}','请在新打开的网银页面完成转账充值！').replace('{text}', '转账成功后可在"个人中心-我的账户"查看账户余额或者在"资金明细"查看充值明细.</br>充值过程中如有疑问，请致电客服咨询!'),
            onclose: function() {
                //window.location.href = "https://www.qianshenghua.com/profile/tradeRecord.do";
				window.location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/trade/";
            }
        });
    },
    //彩住宅购买
   caiOnlinePaySuc: function() {
        this.dialog({
            padding: '0px',
            content: this.template.onPaySubmitSuc.replace('{title}','请在新打开的网银页面完成转账购买！').replace('{text}', '购买成功后可在"彩住宅"->"购买记录"中查看购买记录.</br>购买过程中如有疑问，请致电客服咨询!'),
            onclose: function() {
                window.location.href = "https://www.qianshenghua.com/view/center-index.jsp#!/caiBuyRecord";
            }
        });
    },    
    //彩住宅网银支付
    consoleOnlinePaySuc: function() {
    	this.dialog({
    		padding: '0px',
    		content: this.template.onPaySubmitSuc.replace('{title}','请在新打开的网银页面完成转账购买！').replace('{text}', '购买成功后可在"彩住宅"-"订单查询"中查看购买记录.</br>购买过程中如有疑问，请致电客服咨询!'),
    		onclose: function() {
    			window.location.href = "http://manage.hehenian.com/colourresidence/orders.html";
    		}
    	});
    },
	//网银支付over
    onlinePaySucToCallback: function(callback) {
        this.dialog({
            padding : '0px',
            content: this.template.onPaySubmitSuc.replace('{title}','请在新打开的网银页面完成转账充值！').replace('{text}', '在充值过程中如有疑问，请致电客服4008-893-893咨询'),
            onclose: function() {
                callback && callback();
            }
        });
    },
    pay: function(opt) {
        opt.minMoney = opt.minMoney || 1;
        var that = this,
            bank = false,
            _dialog = this.dialog({
                id: 'pay',
                title: '购买' + opt.product,
                onshow: function() {
                    var node = $(this.node),
                        error;
                    $.ajax({
                        url: 'https://static.hehenian.com/p/html/ajax_demo_data/pay.json',
                        metod: 'post',
                        dataType: 'json',
                        cache: false,
                        data: {
                            userId: opt.userId
                        },
                        success: function(data) {
                            var tpl = that.template.pay.replace('{money}', HHN.formatNumber(data.money))
                                .replace('{bank}', data.bank ? data.bank : '<a class="cGreen" target="_self" href="">绑定银行卡</a>')
                                .replace('{time}', '2015-07-12')
                                .replace('{minMoney}', opt.minMoney);
                            _dialog.content(tpl);
                            _dialog.opt = opt;
                            bank = data.bank;
                            error = node.find('#error');
                        }
                    });


                    node.delegate('#submit1', 'click', function() {
                        var value = {
                            type: node.find('input[name="v"]').prop('checked'),
                            money: parseInt($.trim(node.find('#money').val().replace(/\d*元起购/, ''))),
                            agree: node.find('#agree').prop('checked')
                        };

                        if (!bank) {
                            error.show().html('必须先绑定银行卡');
                            return;
                        }

                        if (!value.agree) {
                            error.show().html('必须同意《爱定宝服务协议》');
                            return;
                        }
                        if (!value.money) {
                            error.show().html('您未输入购买金额');
                            return;
                        }
                        if (value.money < opt.minMoney) {
                            error.show().html('购买金额不能少于' + opt.minMoney + '元');
                            return;
                        }

                        //输入支付密码 和 确认订单
                        var newTpl = that.template.payTradePsw.replace('{product}', opt.product)

                        .replace('{money}', value.money);
                        _dialog.title('确认购买信息');
                        _dialog.content(newTpl);
                        error = node.find('#error');

                    });

                    node.delegate('#submit2', 'click', function() {
                        error.show().html('支付密码错误demo!');
                    });

                    node.delegate('#money', 'focus', function() {
                            if (this.value == this.defaultValue) this.value = '';
                        })
                        .delegate('#money', 'blur', function() {
                            if (this.value == '') this.value = this.defaultValue;
                        });
                    node.delegate('input', 'click focus', function() {
                        error.hide();
                    });
                }
            });
    },
    payTradePsw: function(info) {
        this.dialog({
            title: '支付密码',
            content: this.parseHTML(this.template.payTradePsw, [info]),
            onshow: function() {
                var node = $(this.node),
                    that = this,
                    error = node.find('#error'),
                    payPassWord = node.find('#payPassWord'),
                    payRecommend= node.find('#payRecommend');

                  // 企金宝不显示推荐人
                  if(info.recommend === false || (0 == info['channel'] && (6 == info['sub_channel'] || 9 == info['sub_channel']))||(8 == info['channel'] && (6 == info['sub_channel']))){
                        $('#recommendInput').hide();
                  }
                node.delegate('input', 'click focus', function() {
                    error.hide();
                });

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');
                    //20150729 jiangwmf 
                    var psw = $.trim(payPassWord.val());
                    if (!psw) {
                        error.show().html('请输入支付密码!');
                        btn.removeClass('disabled');
                    } else if (psw.length < 8) {
                        error.show().html('支付密码不能少于8位!');
                        btn.removeClass('disabled');
                    }else if(payRecommend.val() && !(/^0?(13|15|18|14|17)[0-9]{9}$/.test($.trim(payRecommend.val()))) ){
                        error.show().html('您填写的推荐人手机号格式错误!');
                        btn.removeClass('disabled');
                    } else {
                        //支付密码校验
                        $.ajax({
                            url: 'https://www.qianshenghua.com/profile/checkPayPwd.do',
                            data: {
                                pwd: psw
                            },
                            type: 'post',
                            dataType: 'json',
                            success: function(data) {
                              
                                if (data.returnCode == 1) {
                                    error.show().html(data.messageInfo);
                                    btn.removeClass('disabled');
                                } else {
                                    if(info.callback){
                                        info.callback();
                                        that.close();
                                        return;
                                    }  
                                    //校验通过，提交
                                    var stParam = [];
                                    stParam.push('mounth=' + info.mounth);
                                    stParam.push('amount=' + info.money);
                                    stParam.push('rateId=' + info.rateId);
                                    stParam.push('curRate=' + info.rate);
                                    stParam.push('autoPurchase=' + info.autoPurchase);
                                    stParam.push('channel=' + info.channel);
                                    stParam.push('sub_channel=' + info.sub_channel);
                                    stParam.push('recommentPhone=' + payRecommend.val());
									//口令不为空
									if(info.command!=null){
										stParam.push('command=' + info.command);
									}
                                    $.ajax({
                                        url: 'https://www.qianshenghua.com/userInvestment.do',
                                        type: 'post', //非必须.默认get
                                        data: stParam.join('&'),
                                        dataType: 'json', //非必须.默认text
                                        async: true, //非必须.默认true
                                        cache: false, //非必须.默认false
                                        timeout: 60000, //非必须.默认30秒
                                        success: function(data) {
                                            if (data.returnCode == 0) {
                                                $('#successNotice').addClass('donghua');
                                                var mouth = data.data.mouth;
                                                var invest = data.data.investAmount;
                                                var balance = data.data.balanceAmount;
                                                var charge = data.data.chargeAmount;
                                                var bankNo = data.data.bankNo;
                                                var bankCode = data.data.bankCode;
                                                var bankNam = encodeURI(data.data.bankName);
                                                var param = "?mounth=" + mouth + "&invest=" + invest + "&balance=" + balance + "&bankNo=" + bankNo + "&bankCode=" + bankCode + "&bankName=" + bankNam + "&charge=" + charge;
                       
												//如果有回掉函数
												if(info.callback!=null){
												    that.close();
													info.callback();
												}else{
												//    	                                       
                                                popup({
                                                    type: 'success',
                                                    text: '购买成功!'
                                                });
                                                setTimeout(function() { //此处需要添加充值记录链接
                                                	var url;
                                                	if(0 == info.channel && 9 == info.sub_channel){
														url = "https://www.qianshenghua.com/view/center-index.jsp#!/xqk/9/INVESTMENT/0";
                                                	}else{
														url = "https://www.qianshenghua.com/view/center-index.jsp#!/financial/"+info.sub_channel+"/"+info.channel;
                                                	}
                                                    document.location.href = url;
                                                }, 3000);
					                            }
                                            } else if (data.returnCode == 2) {
                                                //绑卡
                                                //    	                                        alert("您当前未绑定银行卡，请绑定银行卡");
                                                error.show().html(data.messageInfo);
                                                btn.removeClass('disabled');
                                                //    	                                        document.location.href = "https://www.qianshenghua.com/bindCardPage.do";
                                            } else if (data.returnCode == 3) {
                                                error.show().html("您当前没有绑定成功的银行卡，系统检测到您有" + data.data.bankCount + "张绑定中的银行卡，请输入验证金额完成绑定");
                                                btn.removeClass('disabled');
                                                //换卡
                                                //    	                                        alert("您当前没有绑定成功的银行卡，系统检测到您有"+data.data.bankCount+"张绑定中的银行卡，请输入验证金额完成绑定");
                                                //    	                                        var bankName = getBankName(data.data.bankCode);
                                                //    	                                        var bankNo = data.data.bankNo;
                                                //    	                                        var param = "?bankName="+bankName+"&userAccount="+bankNo;
                                                //    	                                        document.location.href = "https://www.qianshenghua.com/verifyCardPage.do"+param;
                                            }
                                            //    	                                    else if(data.returnCode == 4){
                                            //    	                                        var bankName = getBankName(data.data.bankCode);
                                            //    	                                        var bankNo = data.data.bankNo;
                                            //    	                                        var param = "?bankName="+bankName+"&userAccount="+bankNo;
                                            //    	                                        document.location.href = "https://www.qianshenghua.com/view/mobileVerification.jsp"+param;
                                            //    	                                    }
                                            else if (data.returnCode == -1) {
                                                var msg = data.messageInfo;
                                                if (msg.indexOf('余额不足') > -1) {
                                                    //alert("抱歉，无法完成付款，此银行卡余额不足");
                                                    error.show().html("抱歉，无法完成付款，此银行卡余额不足");
                                                    btn.removeClass('disabled');
                                                    //document.location.href = "https://www.qianshenghua.com/bindCardPage.do?v=1";
                                                } else {
                                                    error.show().html(data.messageInfo);
                                                    btn.removeClass('disabled');
                                                    //document.location.href = "https://www.qianshenghua.com/view/orderGeneration.jsp";
                                                }
                                            } else {
                                                error.show().html(data.messageInfo);
                                                btn.removeClass('disabled');
                                            }



                                        }
                                    });
                                }
                            }
                        });
                    }
                });
            },
            onclose: function() {
                var buyBtn = info.buyBtn;
                this.remove();
                if (buyBtn.hasClass('disabled')) {
                    buyBtn.removeClass('disabled');
                }
            }
        })
    },
    payTradePswQuickCrash: function(info) {
        this.dialog({
            // title: '确认购买信息',
            padding:"0px",
            content: this.parseHTML(this.template.payTradePswQuick, [info]),
            onshow: function() {
                var node = $(this.node),
                    that = this,
                    error = node.find('#dio_error'),
                    payRecommend = node.find('#payRecommend');
                    node.find('.diol_title').html("现金购买确认信息");
                    node.find('.d_prodt').hide();
                    node.find('.d_tit').html('消费金额');
                 // 企金宝不显示推荐人
                if(info.recommend === false || (0 == info['channel'] && (6 == info['sub_channel'] || 9 == info['sub_channel']))||(8 == info['channel'] && (6 == info['sub_channel']))){
                      $('#recommendInput').hide();
                }
                    
                node.delegate('input', 'click focus', function() {
                    $('.form_group').removeClass('form_dio_error');     
                    error.hide();
                });

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');

                    if(payRecommend.val() && !(/^0?(13|15|18|14|17)[0-9]{9}$/.test($.trim(payRecommend.val()))) ){
                        payRecommend.parent().parent().addClass('form_dio_error').find('span').html('您填写的推荐人手机号格式错误!');
                        btn.removeClass('disabled');
                        return;
                    } 

                    if($('#validCode').val()==null||$('#validCode').val()==''){
                        $('#validCode').parent().parent().find('.err_icon').remove();
                        $('#validCode').parent().parent().addClass('form_dio_error').find('span').html('请输入验证码');
                        btn.removeClass('disabled');
                        return;
                    }
                    if($('#token').val()==null ||$('#externalRefNumber').val()==null|| $('#token').val()==''|| $('#externalRefNumber').val()==''){
                        $('#validCode').parent().parent().find('.err_icon').remove();
                        $('#validCode').parent().parent().addClass('form_dio_error').find('span').html('请获取验证码');
                        btn.removeClass('disabled');
                        return;
                    }

                    info.callback && info.callback();
                });
            
            }
        })
    },    
    payTradePswQuick: function(info) {
        var d = this.dialog({
            // title: '确认购买信息',
            padding:"0px",
            content: this.parseHTML(this.template.payTradePswQuick, [info]),
            onshow: function() {
                var node = $(this.node),
                    that = this,
                    error = node.find('#dio_error'),
                    payRecommend = node.find('#payRecommend');
                
                    if( info.commendPhone ) {
                        //$(payRecommend).val(info.commendPhone);
                        $("#recommendInput").find('.form_input').html(info.commendPhone);
                    }

                if (info.ticketIdActive&&info.ticketId) {
                    node.find('.coupon').show();
                    //加息券
                    if(info.bizType==3){
                        node.find('.coupon:eq(0) .form_input').html('<span class="dio_money">'+info.deduction+'%</span>加息券');
                    }
                }

                 // 企金宝不显示推荐人 
                if(info.recommend === false || (0 == info['channel'] && (6 == info['sub_channel'] || 9 == info['sub_channel']))||(8 == info['channel'] && (6 == info['sub_channel']))){
                      $('#recommendInput').hide();
                }
                    
                //活动显示推荐人 add by tanhqmf
                if( info.isActive && info.isActive != 0 ) {
                    $('#recommendInput').show();
                }
                    
                node.delegate('input', 'click focus', function() {
                    $('.form_group').removeClass('form_dio_error');     
                    error.hide();
                });

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');

                    if(payRecommend.val() && !(/^0?(13|15|18|14|17)[0-9]{9}$/.test($.trim(payRecommend.val()))) ){
                        payRecommend.parent().parent().addClass('form_dio_error').find('span').html('您填写的推荐人手机号格式错误!');
                        btn.removeClass('disabled');
                        return;
                    } 

                    if($('#validCode').val()==null||$('#validCode').val()==''){
                        $('#validCode').parent().parent().find('.err_icon').remove();
                    	$('#validCode').parent().parent().addClass('form_dio_error').find('span').html('请输入验证码');
                    	btn.removeClass('disabled');
            			return;
                    }
                    if($('#token').val()==null ||$('#externalRefNumber').val()==null|| $('#token').val()==''|| $('#externalRefNumber').val()==''){
                    	$('#validCode').parent().parent().find('.err_icon').remove();
                        $('#validCode').parent().parent().addClass('form_dio_error').find('span').html('请获取验证码');
                    	btn.removeClass('disabled');
            			return;
            		}

                    //校验通过，提交
                    var stParam = [];
                    stParam.push('mounth=' + info.mounth);
                    stParam.push('amount=' + info.money);
                    stParam.push('rateId=' + info.rateId);
                    stParam.push('curRate=' + info.rate);
                    stParam.push('autoPurchase=' + info.autoPurchase);
                    stParam.push('channel=' + info.channel);
                    stParam.push('sub_channel=' + info.sub_channel);
                    stParam.push('paychannel=QUICKPAY');
            		//快钱增加 token、externalRefNumber、validCode
            		stParam.push('token=' + $('#token').val());
            		stParam.push('externalRefNumber='+ $('#externalRefNumber').val());
            		stParam.push('validCode=' + $('#validCode').val());
            		stParam.push('recommentPhone=' + payRecommend.val());
            		stParam.push('smsCode=' + info.smsCode);					
            		stParam.push('projectId=' + info.projectId);
                    if (info.ticketIdActive&&info.ticketId) {
                        stParam.push('ticketId=' + info.ticketId);
                        stParam.push('bizType=' + info.bizType);
                    }
                    if( info.data && info.data.isActive != 0 || info.recommend) {
                        info.data.recommentPhone = payRecommend.val() || info.commendPhone;
                    }
                    //口令不为空
                    if(info.data && !info.data.validCode) {
                        info.data.validCode = $('#validCode').val();
                    }
                    if(info.data && !info.data.token ) {
                        info.data.token = $('#token').val();
                    }
                    if(info.data && !info.data.externalRefNumber ) {
                        info.data.externalRefNumber = $('#externalRefNumber').val();
                    }
					if(info.command!=null){
						stParam.push('command=' + info.command);
					}
                    $.ajax({
                        url: info.url || 'https://www.qianshenghua.com/userInvestment.do',
                        type: 'post', //非必须.默认get
                        data: info.url?info.data:stParam.join('&'),
                        dataType: 'json', //非必须.默认text
                        async: true, //非必须.默认true
                        cache: false, //非必须.默认false
                        timeout: 60000, //非必须.默认30秒
                        success: function(data) {
                            if (data.returnCode == 0) {
                                $('#successNotice').addClass('donghua');
                                var mouth = data.data.mouth;
                                var invest = data.data.investAmount;
                                var balance = data.data.balanceAmount;
                                var charge = data.data.chargeAmount;
                                var bankNo = data.data.bankNo;
                                var bankCode = data.data.bankCode;
                                var bankNam = encodeURI(data.data.bankName);
                                var param = "?mounth=" + mouth + "&invest=" + invest + "&balance=" + balance + "&bankNo=" + bankNo + "&bankCode=" + bankCode + "&bankName=" + bankNam + "&charge=" + charge;
       
								//如果有回掉函数
                                if (info.callback != null) {
                                    that.close();
                                    HHN.setCookie('share_from', '', -1);
                                    info.callback();
                                } else {
                                    if (info.ticketIdActive && data.data.shareCode) {
                                        that.close();
                                        HHN.dialog.shareDialog('https://www.qianshenghua.com/ticket/index.do?id=' + data.data.shareCode);
                                    } else {
                                        popup({
                                            type: 'success',
                                            text: '购买成功!',
                                            time: 2000
                                        });
                                        d.close().remove();
                                        setTimeout(function() { //此处需要添加充值记录链接
                                            HHN.setCookie('share_from', '', -1);
                                            var url;
                                            if (0 == info.channel && 9 == info.sub_channel) {
                                                url = "https://www.qianshenghua.com/view/center-index.jsp#!/xqk/9/INVESTMENT/0";
                                            } else {
                                                url = "https://www.qianshenghua.com/view/center-index.jsp#!/financial/" + info.sub_channel + "/" + info.channel;
                                            }

                                            document.location.href = url;
                                        }, 2000);
                                    }
                                }
                            } else if (data.returnCode == 2) {
                                //绑卡
                                error.show().html(data.messageInfo);
                                btn.removeClass('disabled');
                            } else if (data.returnCode == 3) {
                                error.show().html("您当前没有绑定成功的银行卡，系统检测到您有" + data.data.bankCount + "张绑定中的银行卡，请输入验证金额完成绑定");
                                btn.removeClass('disabled');
                            }else if (data.returnCode == -1) {
                                var msg = data.messageInfo;
                                if (msg.indexOf('余额不足') > -1) {
                                    error.show().html("抱歉，无法完成付款，此银行卡余额不足");
                                    btn.removeClass('disabled');
                                } else {
                                    error.show().html(data.messageInfo);
                                    btn.removeClass('disabled');
                                }
                            } else {
                                error.show().html(data.messageInfo);
                                btn.removeClass('disabled');
                            }
                            window.STEP = 0;
                            $('#token').val("");
            				$('#externalRefNumber').val("");
            				$('#validCode').val("");
                        }
                    });  
                });
            
            },
            onclose: function() {
                var buyBtn = info.buyBtn;
                info.closeCallback && info.closeCallback();
                if (buyBtn!=null&&buyBtn.hasClass('disabled')) {
                    buyBtn.removeClass('disabled');
                }
                if(window.smsIntverl){
                    $('#smsMobile').val('');
                    $('#smsBtn').removeClass('disabled').html('发送验证码');
                    window.smsIntverl && clearInterval(smsIntverl);
                    window.countTime = 120;
                }
            }
        })
    },
    payTradePswCrash : function(info){
        this.dialog({
            // title: '确认购买信息',
            padding:"0px",
            content: this.parseHTML(this.template.payTradePswBalance, [info]),
            onshow: function() {
                console.log( info );
                var node = $(this.node),
                    that = this,
                    error = node.find('#dio_error'),
                    payPassWord = node.find('#payPassWord');
                    payRecommend = node.find('#payRecommend');
                    node.find('.dio_title').hide();
                    node.find('.dio_buy').html('消费金额');
                    node.find('.diol_title').html('现金购买确认信息');
                
                // 企金宝不显示推荐人
                if(info.recommend === false || (0 == info['channel'] && (6 == info['sub_channel'] || 9 == info['sub_channel']))||(8 == info['channel'] && (6 == info['sub_channel']))){
                      $('#recommendInput').hide();
                }
                
                node.delegate('input', 'click focus', function() {
                    $('.form_group').removeClass('form_dio_error');
                    error.hide();
                });

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');
                    //20150729 jiangwmf 
                    var psw = $.trim(payPassWord.val());
                    if (!psw) {
                       payPassWord.parent().parent().addClass('form_dio_error').find('span').html('请输入支付密码!');
                       btn.removeClass('disabled');
                    } else if (psw.length < 8) {
                        payPassWord.parent().parent().addClass('form_dio_error').find('span').html('支付密码不能少于8位!');
                        btn.removeClass('disabled');
                    } else if(payRecommend.val() && !(/^0?(13|15|18|14|17)[0-9]{9}$/.test($.trim(payRecommend.val()))) ){
                        payRecommend.parent().parent().addClass('form_dio_error').find('span').html('您填写的推荐人手机号格式错误!');
                        btn.removeClass('disabled');
                    } else {
                        //支付密码校验
                        $.ajax({
                            url: 'https://www.qianshenghua.com/profile/checkPayPwd.do',
                            data: {
                                pwd: psw
                            },
                            type: 'post',
                            dataType: 'json',
                            success: function(data) {
                                if (data.returnCode == 1) {
                                    error.show().html(data.messageInfo);
                                    btn.removeClass('disabled');
                                } else {
                                   info.callback && info.callback();
                                }
                            }
                        });
                    }
                });
            
            }
        })
    },
    payTradePswBalance: function(info) {
        var d = this.dialog({
            // title: '确认购买信息',
            padding:"0px",
            content: this.parseHTML(this.template.payTradePswBalance, [info]),
            onshow: function() {
                var node = $(this.node),
                    that = this,
                    error = node.find('#dio_error'),
                    payPassWord = node.find('#payPassWord');
                    payRecommend = node.find('#payRecommend');
                    
                    //add by tanhqmf 专区显示推荐人
                    if( info.commendPhone ) {
                        //$(payRecommend).val( info.commendPhone );
                        $("#recommendInput").find('.form_input').html(info.commendPhone);
                    }
                if (info.ticketIdActive&&info.ticketId) {
                    node.find('.coupon').show();
                        //加息券
                    if(info.bizType==3){
                        node.find('.coupon:eq(0) .form_input').html('<span class="dio_money">'+info.deduction+'%</span>加息券');
                    }
                }
                // 企金宝不显示推荐人
                if(info.recommend === false || (0 == info['channel'] && (6 == info['sub_channel'] || 9 == info['sub_channel']))||(8 == info['channel'] && (6 == info['sub_channel']))){
                      $('#recommendInput').hide();
                }
                
                //活动显示推荐人  add by tanhqmf
                if( info.isActive && info.isActive != 0) {
                    $('#recommendInput').show();
                } 
                
                node.delegate('input', 'click focus', function() {
                    $('.form_group').removeClass('form_dio_error');
                    error.hide();
                });

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');
                    //20150729 jiangwmf 
                    var psw = $.trim(payPassWord.val());
                    if (!psw) {
                       payPassWord.parent().parent().addClass('form_dio_error').find('span').html('请输入支付密码!');
                       btn.removeClass('disabled');
                    } else if (psw.length < 8) {
                        payPassWord.parent().parent().addClass('form_dio_error').find('span').html('支付密码不能少于8位!');
                        btn.removeClass('disabled');
                    } else if(payRecommend.val() && !(/^0?(13|15|18|14|17)[0-9]{9}$/.test($.trim(payRecommend.val()))) ){
                        payRecommend.parent().parent().addClass('form_dio_error').find('span').html('您填写的推荐人手机号格式错误!');
                        btn.removeClass('disabled');
                    } else {
                        //支付密码校验
                        $.ajax({
                            url: 'https://www.qianshenghua.com/profile/checkPayPwd.do',
                            data: {
                                pwd: psw
                            },
                            type: 'post',
                            dataType: 'json',
                            success: function(data) {
                                if (data.returnCode == 1) {
                                    error.show().html(data.messageInfo);
                                    btn.removeClass('disabled');
                                } else {
                                    //校验通过，提交
                                    var stParam = [];
                                    stParam.push('mounth=' + info.mounth);
                                    stParam.push('amount=' + info.money);
                                    stParam.push('rateId=' + info.rateId);
                                    stParam.push('curRate=' + info.rate);
                                    stParam.push('autoPurchase=' + info.autoPurchase);
                                    stParam.push('channel=' + info.channel);
                                    stParam.push('sub_channel=' + info.sub_channel);
                                    stParam.push('recommentPhone=' + payRecommend.val());
                                    stParam.push('projectId=' + info.projectId);

                                    //优惠券
                                    if (info.ticketIdActive && info.ticketId) {
                                        stParam.push('ticketId=' + info.ticketId);
                                        stParam.push('bizType=' + info.bizType);
                                    }

                                    if( info.data && info.data.isActive != 0 || info.recommend ) {
                                        info.data.recommentPhone = payRecommend.val() || info.commendPhone;

                                    }
									//口令不为空
									if(info.command!=null){
										stParam.push('command=' + info.command);
									}
                                    $.ajax({
                                        url: info.url||'https://www.qianshenghua.com/userInvestment.do',
                                        type: 'post', //非必须.默认get
                                        data: info.url?info.data:stParam.join('&'),
                                        dataType: 'json', //非必须.默认text
                                        async: true, //非必须.默认true
                                        cache: false, //非必须.默认false
                                        timeout: 60000, //非必须.默认30秒
                                        success: function(data) {
                                            if (data.returnCode == 0) {
                                                $('#successNotice').addClass('donghua');
                                                var mouth = data.data.mouth;
                                                var invest = data.data.investAmount;
                                                var balance = data.data.balanceAmount;
                                                var charge = data.data.chargeAmount;
                                                var bankNo = data.data.bankNo;
                                                var bankCode = data.data.bankCode;
                                                var bankNam = encodeURI(data.data.bankName);
                                                var param = "?mounth=" + mouth + "&invest=" + invest + "&balance=" + balance + "&bankNo=" + bankNo + "&bankCode=" + bankCode + "&bankName=" + bankNam + "&charge=" + charge;
                       
												//如果有回掉函数
                                                if (info.callback != null) {
                                                    that.close();
                                                    HHN.setCookie('share_from', '', -1);
                                                    info.callback();
                                                } else {
                                                    //   
                                                    if (info.ticketIdActive && data.data.shareCode) {
                                                        that.close();
                                                        HHN.dialog.shareDialog('https://www.qianshenghua.com/ticket/index.do?id=' + data.data.shareCode);
                                                    } else {
                                                        popup({
                                                            type: 'success',
                                                            text: '购买成功!',
                                                            time: 2000
                                                        });
                                                        d.close().remove();
                                                        setTimeout(function() { //此处需要添加充值记录链接
                                                            HHN.setCookie('share_from', '', -1);
                                                            var url;
                                                            if (0 == info.channel && 9 == info.sub_channel) {
                                                                url = "https://www.qianshenghua.com/view/center-index.jsp#!/xqk/9/INVESTMENT/0";
                                                            } else {
                                                                url = "https://www.qianshenghua.com/view/center-index.jsp#!/financial/" + info.sub_channel + "/" + info.channel;
                                                            }
                                                            document.location.href = url;
                                                        }, 2000);
                                                    }
                                                }
                                            } else if (data.returnCode == 2) {
                                                //绑卡
                                                //    	                                        alert("您当前未绑定银行卡，请绑定银行卡");
                                                error.show().html(data.messageInfo);
                                                btn.removeClass('disabled');
                                                //    	                                        document.location.href = "https://www.qianshenghua.com/bindCardPage.do";
                                            } else if (data.returnCode == 3) {
                                                error.show().html("您当前没有绑定成功的银行卡，系统检测到您有" + data.data.bankCount + "张绑定中的银行卡，请输入验证金额完成绑定");
                                                btn.removeClass('disabled');
                                            }
                                            else if (data.returnCode == -1) {
                                                var msg = data.messageInfo;
                                                if (msg.indexOf('余额不足') > -1) {
                                                    error.show().html("抱歉，无法完成付款，此银行卡余额不足");
                                                    btn.removeClass('disabled');
                                                } else {
                                                    error.show().html(data.messageInfo);
                                                    btn.removeClass('disabled');
                                                }
                                            } else {
                                                error.show().html(data.messageInfo);
                                                btn.removeClass('disabled');
                                            }



                                        }
                                    });
                                }
                            }
                        });
                    }
                });
            
            },
            onclose: function() {
                var buyBtn = info.buyBtn;
                info.closeCallback && info.closeCallback();
                if (buyBtn.hasClass('disabled')) {
                    buyBtn.removeClass('disabled');
                }
                if(window.smsIntverl){
                    $('#smsMobile').val('');
                    $('#smsBtn').removeClass('disabled').html('发送验证码');
                    window.smsIntverl && clearInterval(smsIntverl);
                    window.countTime = 120;
                }
            }
        })
    },
    payTradePswTLCrash: function(info) {
        this.dialog({
            // title: '确认购买信息',
            padding:'0px',
            content: this.parseHTML(this.template.payTradePswTL, [info]),
            onshow: function() {
                var node = $(this.node),
                    that = this,
                    error = node.find('#dio_error'),
                    payPassWord = node.find('#payPassWord');
                    node.find('.dio_title').html('现金购买确认信息');
                    node.find('.t_')
                
                node.delegate('input', 'click focus', function() {
                    $('.form_group').removeClass('form_dio_error');
                    error.hide();
                });

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');
                    //20150729 jiangwmf 
                    var psw = $.trim(payPassWord.val());
                    if (!psw) {
                        payPassWord.parent().parent().addClass('form_dio_error').find('span').html('请输入支付密码!');
                        btn.removeClass('disabled');
                    } else if (psw.length < 8) {
                        payPassWord.parent().parent().addClass('form_dio_error').find('span').html('支付密码不能少于8位!');
                        btn.removeClass('disabled');
                    } else {
                        //支付密码校验
                        info.callback && info.callback();
                    }
                });
            
            },
        })
    },
    payTradePswTL: function(info) {
        var d = this.dialog({
            // title: '确认购买信息',
            padding:'0px',
            content: this.parseHTML(this.template.payTradePswTL, [info]),
            onshow: function() {
                var node = $(this.node),
                    that = this,
                    error = node.find('#dio_error'),
                    payPassWord = node.find('#payPassWord'),
                    payRecommend = node.find("#payRecommend");

                    if( info.commendPhone ) {
                        //$(payRecommend).val( info.commendPhone );
                        $("#recommendInput").find('.form_input').html(info.commendPhone);
                    }
                
                if (info.ticketIdActive&&info.ticketId) {
                    node.find('coupon').show();
                    //加息券
                    if(info.bizType==3&&info.deduction&&info.money<50000){
                        node.find('.coupon:eq(0) .form_input').html('<span class="dio_money">'+info.deduction+'%</span>加息券');
                    }else if(info.bizType==3&&info.money>50000){
                        info.ticketId = '';
                    }
                }

                node.delegate('input', 'click focus', function() {
                    $('.form_group').removeClass('form_dio_error');
                    error.hide();
                });

                 // 企金宝不显示推荐人
                if(info.recommend === false || (0 == info['channel'] && (6 == info['sub_channel'] || 9 == info['sub_channel']))||(8 == info['channel'] && (6 == info['sub_channel']))){
                      $('#recommendInput').hide();
                }

                //活动显示推荐人 add by tanhqmf
                if( info.isActive && info.isActive != 0 ) {
                    $('#recommendInput').show();
                }

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    var payRecommend = $("#payRecommend");
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');
                    //20150729 jiangwmf 
                    var psw = $.trim(payPassWord.val());
                    if (!psw) {
                        payPassWord.parent().parent().addClass('form_dio_error').find('span').html('请输入支付密码!');
                        btn.removeClass('disabled');
                    } else if (psw.length < 8) {
                        payPassWord.parent().parent().addClass('form_dio_error').find('span').html('支付密码不能少于8位!');
                        btn.removeClass('disabled');
                    } else {
                        //支付密码校验
                        $.ajax({
                            url: 'https://www.qianshenghua.com/profile/checkPayPwd.do',
                            data: {
                                pwd: psw
                            },
                            type: 'post',
                            dataType: 'json',
                            success: function(data) {
                                if (data.returnCode == 1) {
                                    error.show().html(data.messageInfo);
                                    btn.removeClass('disabled');
                                } else {
                                    //校验通过，提交
                                    var stParam = [];
                                    stParam.push('mounth=' + info.mounth);
                                    stParam.push('amount=' + info.money);
                                    stParam.push('rateId=' + info.rateId);
                                    stParam.push('curRate=' + info.rate);
                                    stParam.push('autoPurchase=' + info.autoPurchase);
                                    stParam.push('channel=' + info.channel);
                                    stParam.push('sub_channel=' + info.sub_channel);
                                    stParam.push('recommentPhone=' + payRecommend.val());
                                    stParam.push('smsCode=' + info.smsCode);
                                    stParam.push('payPsw=' + psw);                                    //活动标识
                                    stParam.push('projectId=' + info.projectId);
                                    if (info.ticketIdActive&&info.ticketId) {
                                        stParam.push('ticketId=' + info.ticketId);
                                        stParam.push('bizType=' + info.bizType);
                                    }
                                    if( info.data && info.data.isActive != 0 || info.recommend) {
                                        info.data.recommentPhone = payRecommend.val() || info.commendPhone;
                                    }									//口令不为空
									if(info.command!=null){
										stParam.push('command=' + info.command);
									}
                                    $.ajax({
                                        url: info.url || 'https://www.qianshenghua.com/userInvestment.do',
                                        type: 'post', //非必须.默认get
                                        data: info.url?info.data:stParam.join('&'),
                                        dataType: 'json', //非必须.默认text
                                        async: true, //非必须.默认true
                                        cache: false, //非必须.默认false
                                        timeout: 60000, //非必须.默认30秒
                                        success: function(data) {
                                            if (data.returnCode == 0) {
                                                $('#successNotice').addClass('donghua');
                                                var mouth = data.data.mouth;
                                                var invest = data.data.investAmount;
                                                var balance = data.data.balanceAmount;
                                                var charge = data.data.chargeAmount;
                                                var bankNo = data.data.bankNo;
                                                var bankCode = data.data.bankCode;
                                                var bankNam = encodeURI(data.data.bankName);
                                                var param = "?mounth=" + mouth + "&invest=" + invest + "&balance=" + balance + "&bankNo=" + bankNo + "&bankCode=" + bankCode + "&bankName=" + bankNam + "&charge=" + charge;
                       
												//如果有回掉函数
									            if (info.callback != null) {
                                                    that.close();
                                                    HHN.setCookie('share_from', '', -1);
                                                    info.callback();
                                                } else {
                                                    if (info.ticketIdActive && data.data.shareCode) {
                                                        that.close();
                                                        HHN.dialog.shareDialog('https://www.qianshenghua.com/ticket/index.do?id=' + data.data.shareCode);
                                                    } else {
                                                        popup({
                                                            type: 'success',
                                                            text: '购买成功!',
                                                            time: 2000
                                                        });
                                                        HHN.setCookie('share_from', '', -1);
                                                        d.close().remove();
                                                        setTimeout(function() { //此处需要添加充值记录链接
                                                            var url;
                                                            if (0 == info.channel && 9 == info.sub_channel) {
                                                                url = "https://www.qianshenghua.com/view/center-index.jsp#!/xqk/9/INVESTMENT/0";
                                                            } else {
                                                                url = "https://www.qianshenghua.com/view/center-index.jsp#!/financial/" + info.sub_channel + "/" + info.channel;
                                                            }
                                                            document.location.href = url;
                                                        }, 3000);
                                                    }
                                                }
                                            } else if (data.returnCode == 2) {
                                                //绑卡
                                                error.show().html(data.messageInfo);
                                                btn.removeClass('disabled');
                                            } else if (data.returnCode == 3) {
                                                error.show().html("您当前没有绑定成功的银行卡，系统检测到您有" + data.data.bankCount + "张绑定中的银行卡，请输入验证金额完成绑定");
                                                btn.removeClass('disabled');
                                            }
                                            else if (data.returnCode == -1) {
                                                var msg = data.messageInfo;
                                                if (msg.indexOf('余额不足') > -1) {
                                                    error.show().html("抱歉，无法完成付款，此银行卡余额不足");
                                                    btn.removeClass('disabled');
                                                } else {
                                                    error.show().html(data.messageInfo);
                                                    btn.removeClass('disabled');
                                                }
                                            } else {
                                                error.show().html(data.messageInfo);
                                                btn.removeClass('disabled');
                                            }



                                        }
                                    });
                                }
                            }
                        });
                    }
                });
            
            },
            onclose: function() {
                var buyBtn = info.buyBtn;
                info.closeCallback && info.closeCallback();
                if (buyBtn.hasClass('disabled')) {
                    buyBtn.removeClass('disabled');
                }
                if(window.smsIntverl){
                    $('#smsMobile').val('');
                    $('#smsBtn').removeClass('disabled').html('发送验证码');
                    window.smsIntverl && clearInterval(smsIntverl);
                    window.countTime = 120;
                }
            }
        })
    },
    payTradePsw2: function(info) {
        var that = this;
        this.dialog({
            title: '确认购买信息',
            padding:'20px 60px',
            content: this.parseHTML(this.template.payTradePsw2, [info]),
            onshow: function() {
                var node = $(this.node),
                    error = node.find('#error'),
                    payPassWord = node.find('#payPassWord');

                node.delegate('input[type="text"]', 'focus', function() {
                    node.find('#error').hide();
                });

                node.delegate('.submit', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    $(this).addClass('disabled').html('提交中...');
                    node.find('#error').show().html('error demo');
                });

                node.delegate('.input-btn', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    that.countdown($(this));
                });
            }
        });
    },
    payTradePsw3: function(info) {
        var d= this.dialog({
            // title: '确认购买信息',
            padding:"0px",
            content: this.parseHTML(this.template.payTradePsw3, [info]),
            onshow: function() {
                var node = $(this.node),
                    that = this,
                    error = node.find('#dio_error'),
                    payPassWord = node.find('#payPassWord');
//                    payRecommend= node.find('#payRecommend');

                  // 企金宝不显示推荐人
//                  if(info.recommend === false || (0 == info['channel'] && 6 == info['sub_channel'])){
//                        $('#recommendInput').hide();
//                  }
                node.delegate('input', 'click focus', function() {
                    $('.form_group').removeClass('form_dio_error');
                    error.hide();
                });

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');
                    //20150729 jiangwmf 
                    var psw = $.trim(payPassWord.val());
                    if (!psw) {
                        payPassWord.parent().parent().addClass('form_dio_error').find('span').html('请输入支付密码!');
                        btn.removeClass('disabled');
                    } else if (psw.length < 8) {
                        payPassWord.parent().parent().addClass('form_dio_error').find('span').html('支付密码不能少于8位!');
                        btn.removeClass('disabled');
                    }
//                    else if(payRecommend.val() && !(/^0?(13|15|18|14|17)[0-9]{9}$/.test($.trim(payRecommend.val()))) ){
//                        error.show().html('您填写的推荐人手机号格式错误!');
//                        btn.removeClass('disabled');
//                    } 
                    else {
                        //支付密码校验
                        $.ajax({
                            url: 'https://www.qianshenghua.com/profile/checkPayPwd.do',
                            data: {
                                pwd: psw
                            },
                            type: 'post',
                            dataType: 'json',
                            success: function(data) {
                                if (data.returnCode == 1) {
                                    error.show().html(data.messageInfo);
                                    btn.removeClass('disabled');
                                } else {
                                    //校验通过，提交
                                    var stParam = [];
                                    stParam.push('mounth=' + info.mounth);
                                    stParam.push('amount=' + info.money);
                                    stParam.push('rateId=' + info.rateId);
                                    stParam.push('curRate=' + info.rate);
                                    stParam.push('autoPurchase=' + info.autoPurchase);
                                    stParam.push('channel=' + info.channel);
                                    stParam.push('sub_channel=' + info.sub_channel);
//                                    stParam.push('recommentPhone=' + payRecommend.val());
									//口令不为空
									if(info.command!=null){
										stParam.push('command=' + info.command);
									}
                                    $.ajax({
                                        url: 'https://www.qianshenghua.com/userInvestment.do',
                                        type: 'post', //非必须.默认get
                                        data: stParam.join('&'),
                                        dataType: 'json', //非必须.默认text
                                        async: true, //非必须.默认true
                                        cache: false, //非必须.默认false
                                        timeout: 60000, //非必须.默认30秒
                                        success: function(data) {
                                            if (data.returnCode == 0) {
                                                $('#successNotice').addClass('donghua');
                                                var mouth = data.data.mouth;
                                                var invest = data.data.investAmount;
                                                var balance = data.data.balanceAmount;
                                                var charge = data.data.chargeAmount;
                                                var bankNo = data.data.bankNo;
                                                var bankCode = data.data.bankCode;
                                                var bankNam = encodeURI(data.data.bankName);
                                                var param = "?mounth=" + mouth + "&invest=" + invest + "&balance=" + balance + "&bankNo=" + bankNo + "&bankCode=" + bankCode + "&bankName=" + bankNam + "&charge=" + charge;
                       
								//如果有回掉函数
								if(info.callback!=null){
								    that.close();
									info.callback();
								}else{
								//    	                                       
                                                popup({
                                                    type: 'success',
                                                    text: '购买成功!',
                                                    time : 2000
                                                });
                                                setTimeout(function() { //此处需要添加充值记录链接
                                                      that.close();
                                                	var url;
                                                	if(0 == info.channel && 9 == info.sub_channel){
														//update by duanhr PC改版 换链接 
														url = "https://www.qianshenghua.com/view/center-index.jsp#!/xqk/9/INVESTMENT/0";
                                                        location.reload();
                                                		//url = "https://www.qianshenghua.com/profile/xqkTradeRecord.do?channel=" + info.channel + "&subChannel=" + info.sub_channel+ "&tradeType=INVESTMENT";
                                                	}else{
														//update by duanhr PC改版 换链接 https://www.qianshenghua.com/view/center-index.jsp#!/financial/subChannel/channel
														url = "https://www.qianshenghua.com/view/center-index.jsp#!/financial/"+info.sub_channel+"/"+info.channel;
                                                		//url = "https://www.qianshenghua.com/profile/buy.do?channel=" + info.channel + "&subChannel=" + info.sub_channel;
                                                	    document.location.replace(url);
                                                    }
                                                    
                                                }, 2000);
					                            }
                                            } else if (data.returnCode == 2) {
                                                //绑卡
                                                //    	                                        alert("您当前未绑定银行卡，请绑定银行卡");
                                                error.show().html(data.messageInfo);
                                                btn.removeClass('disabled');
                                                //    	                                        document.location.href = "https://www.qianshenghua.com/bindCardPage.do";
                                            } else if (data.returnCode == 3) {
                                                error.show().html("您当前没有绑定成功的银行卡，系统检测到您有" + data.data.bankCount + "张绑定中的银行卡，请输入验证金额完成绑定");
                                                btn.removeClass('disabled');
                                                //换卡
                                                //    	                                        alert("您当前没有绑定成功的银行卡，系统检测到您有"+data.data.bankCount+"张绑定中的银行卡，请输入验证金额完成绑定");
                                                //    	                                        var bankName = getBankName(data.data.bankCode);
                                                //    	                                        var bankNo = data.data.bankNo;
                                                //    	                                        var param = "?bankName="+bankName+"&userAccount="+bankNo;
                                                //    	                                        document.location.href = "https://www.qianshenghua.com/verifyCardPage.do"+param;
                                            }
                                            //    	                                    else if(data.returnCode == 4){
                                            //    	                                        var bankName = getBankName(data.data.bankCode);
                                            //    	                                        var bankNo = data.data.bankNo;
                                            //    	                                        var param = "?bankName="+bankName+"&userAccount="+bankNo;
                                            //    	                                        document.location.href = "https://www.qianshenghua.com/view/mobileVerification.jsp"+param;
                                            //    	                                    }
                                            else if (data.returnCode == -1) {
                                                var msg = data.messageInfo;
                                                if (msg.indexOf('余额不足') > -1) {
                                                    //alert("抱歉，无法完成付款，此银行卡余额不足");
                                                    error.show().html("抱歉，无法完成付款，此银行卡余额不足");
                                                    btn.removeClass('disabled');
                                                    //document.location.href = "https://www.qianshenghua.com/bindCardPage.do?v=1";
                                                } else {
                                                    error.show().html(data.messageInfo);
                                                    btn.removeClass('disabled');
                                                    //document.location.href = "https://www.qianshenghua.com/view/orderGeneration.jsp";
                                                }
                                            } else {
                                                error.show().html(data.messageInfo);
                                                btn.removeClass('disabled');
                                            }



                                        }
                                    });
                                }
                            }
                        });
                    }
                });
            },
            onclose: function() {
//                var buyBtn = info.buyBtn;
//                if (buyBtn.hasClass('disabled')) {
//                    buyBtn.removeClass('disabled');
//                }
            }
        })
    },
    tradeConfirm: function(info) {
        var that = this,
            tradeDialog = this.dialog({
            padding:'0px',
            content: this.parseHTML(this.template.tradeConfirm, [info]),
            onshow: function() {
                var node = $(this.node),
                    error = node.find('#dio_error'),
                    payPassWord = node.find('#payPassWord');
                node.delegate('input[type="text"]', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    node.find('#error').hide();
                });

                node.delegate('.submit', 'click', function() {
                	var btn = $(this);
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled')/*.html('提交中...')*/;
                    var reg = /^[1-9]{1}[0-9]{0,19}$/;
//                    if(month=='' || isNaN(month)){
//                        //alert("请选择投资产品！");
//                    	popup({text:'请选择投资产品！',type:'danger'});
//                        return false;
//                    }
                    var amount = $.trim(node.find('.j-money').val());
                    if(amount==''){
                        //alert("请输入购买金额！");
                        //popup({text:'请输入购买金额！',type:'danger'});
                        node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('请输入购买金额！');
                        btn.removeClass('disabled');
                        return false;
                    }
                    if(isNaN(amount)){
                        //alert("请输入有效购买金额，只能为数字！");
                        node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('请输入有效购买金额，只能为数字！');
                        btn.removeClass('disabled');
                        return false;
                    }
                    if(!reg.test(amount)){
                        //alert("输入金额有误！");
                        node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('输入金额有误！');
                        btn.removeClass('disabled');
                        return false;
                    }
                    if(amount.indexOf(' ')>-1){
                        //alert("购买金额不能包含空格！");
                        node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('购买金额不能包含空格！');
                        btn.removeClass('disabled');
                        return false;
                    }
                    if(amount<0){
                        //alert('买入金额不能为负数');
                        node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('买入金额不能为负数');
                        btn.removeClass('disabled');
                        return false;
                    }
                    if(parseInt(amount)<parseInt(1)){
                        node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('投资金额必须大于起投金额！');
                        btn.removeClass('disabled');
                        return false;
                    }
                    $.ajax({
                        url: 'https://www.qianshenghua.com/profile/xqkPurchaseInfo.do',
                        data: {amount:amount},
                        type: 'post',
                        dataType: 'json',
                        success: function(data) {
                            if (data.returnCode == 0) {
                            	tradeDialog.remove();
                            	var tradeInfo ={
                            		money : data.data.amount,
                            		charge1 : data.data.charge1,
                            		charge2 : data.data.charge2,
                            		bankNam : data.data.bankNam,
                            		bankNo : data.data.bankNo,
                            		mounth : data.data.mounth,
                            		rate : data.data.rate,
                            		channel : data.data.channel,
                            		sub_channel : data.data.sub_channel,
                            		rateId : data.data.rateId
        						};
                            	if(data.data.charge2>0){//银行卡充值大于0
                            		if(data.data.pay_channel=='QUICKPAY'){
                    					
                    					HHN.dialog.payTradePswQuick({
                    					    product:'小钱库',
                    					    money: data.data.amount,
                    					    rate:data.data.rate,
                    					    rateId:data.data.rateId,
                    					    mounth:data.data.mounth,
                    					    autoPurchase:null,
                    					    channel:data.data.channel,
                    					    sub_channel:data.data.sub_channel,
                    					    buyBtn:null,
                    						command:null,
                    						callback:null,
                    						balance:data.data.balance,
                    						bankAmount:data.data.charge2,
                    						bankName:data.data.bankNam,
                    						bankNo:data.data.bankNo,
                    						phone:data.data.phone,
                    						bankId:data.data.bankId
                    					});
                    				}else if(data.data.pay_channel=='TLPAY'){
                    		        	//二次确认
                    					HHN.dialog.payTradePsw3(tradeInfo);
                    				}else if(data.data.pay_channel=='LLPAY'){
                    					HHN.dialog.llpayPCNotice();
                    				}
                            	}else{
                            		HHN.dialog.payTradePsw3(tradeInfo);
                            	}
                            } else if(data.returnCode == 2){
                            	tradeDialog.remove();
                            	recharge(2);
                            }else if(data.returnCode == 3){
                            	tradeDialog.remove();
                            	continueMoneyVerify();
                            }else if(data.returnCode==-1){
                            	tradeDialog.remove();
                        		login();
                        	}else if(data.returnCode==4){
                        		tradeDialog.remove();
                    			HHN.dialog.setTradePsw(data.data);
                    		}else if(data.returnCode==5){
                    			tradeDialog.remove();
                    			HHN.dialog.enterpriseNotice();
                    		}else{
                    			tradeDialog.remove();
                                popup({text:data.messageInfo,type:'danger'});
                                
                            }
                        }
                    });
                    return false;
                });
            }
        });
    },
    bindCardConfirm: function(data, callback) {
        var htmldata = data;
        this.dialog({
            id: 'bindCardConfirm',
            title: '确认信息',
            padding: '20px 60px',
            content: this.parseHTML(this.template.bindCardConfirm, [htmldata]),
            ok: function() {
                $.ajax({
                    url: 'https://www.qianshenghua.com/profile/bindCardDeal.do',
                    data: htmldata,
                    type: 'post',
                    dataType: 'json',
                    success: function(data) {
                        if (data.returnCode == 0) {
                            //HHN.dialog.bindCardCert(htmldata,callback);
                            //                	        if(v==1){
                            //                	            window.location.href ="https://www.qianshenghua.com/profile/moneyVerify.do?bankCode="+htmldata.bankcode+"&userAccount="+htmldata.cardNo+"&v=1";
                            //                	        }else{
                            //                	            window.location.href ="https://www.qianshenghua.com/profile/moneyVerify.do?bankCode="+htmldata.bankcode+"&userAccount="+htmldata.cardNo;
                            //                	        }
                            window.location.href = "https://www.qianshenghua.com/profile/confirmCard.do?bankCode=" + htmldata.bankcode + "&account=" + htmldata.cardNo;
                        } else if (data.returnCode == -1) {
                            popup({
                                text: data.messageInfo,
                                type: 'warning'
                            });
                            //newAlertOf("验证金额已发送，请耐心等待银行处理",'https://www.qianshenghua.com/profile/managerCard.do');
                        } else if (data.returnCode == 10) {
                            popup({
                                text: data.messageInfo,
                                type: 'success'
                            });
                            //newAlertOf("验证金额已发送，请耐心等待银行处理",'https://www.qianshenghua.com/profile/managerCard.do');
                        } else {
                            //$('#nextBtn').removeClass('disable');
                            popup({
                                text: data.messageInfo,
                                type: 'danger'
                            });
                            //newAlert(data.messageInfo);
                        }
                    }
                });
                //HHN.dialog.bindCardCert(data);
                return false;
            },
            cancel: function() {
                //this.remove();
                callback();
            }
        })
    },
    bindCardCert: function(data) {
        var _dialog = dialog.get('bindCardConfirm'),
            node, error, money;
        _dialog.title('验证金额');
        _dialog.content(this.parseHTML(this.template.bindCardCert, [data]));
        _dialog.button([]);
        node = $(_dialog.node);
        error = node.find('#error');
        money = node.find('.j-money');
        node.delegate('input', 'focus', function() {
            error.hide();
        });
        node.delegate('.submit', 'click', function() {
            if (!money.val()) {
                error.show().html('验证金额为空');
                return false;
            }
            $.ajax({
                url: 'https://www.qianshenghua.com/profile/verifyCard.do',
                data: {
                    money: money.val(),
                    account: data.cardNo
                },
                type: 'post',
                dataType: 'json',
                timeout: 30000, //非必须.默认30秒
                success: function(data) {
                    if (data.returnCode == 0) {
                        recharge(3);
                        //        			          window.location.href ="https://www.qianshenghua.com/profile/managerCard.do";
                    } else if (data.returnCode == 2) {
                        //        			        $('#act-right').text('确定');
                        //        			        if(v==1){
                        //        			          $('#act-right-Url').attr('href','https://m.hehenian.com/finance/bindCard.do?v=1&bankChannel=TLPAY&bankCode='+bankCode);
                        //        			        }else{
                        //        			          $('#act-right-Url').attr('href','https://m.hehenian.com/finance/bindCard.do?bankChannel=TLPAY&bankCode='+bankCode);
                        //        			        }
                        popup({
                            text: '验卡次数超过3次，请重新绑定',
                            type: 'danger'
                        });
                        //        			        HHN.popup('验卡次数超过3次，请重新绑定');
                    } else {
                        //        			        $('#nextBtn').removeClass('disable');
                        //        			        HHN.popup(data.messageInfo);
                        popup({
                            text: data.messageInfo,
                            type: 'danger'
                        });
                    }
                },
                complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
                    if (status == 'timeout') { //超时,status还有success,error等值的情况
                        ajaxTimeOut.abort(); //取消请求
                        //        		            $('#nextBtn').removeClass('disable');
                        //        		            HHN.popup('系统处理超时,请稍后重试');
                        popup({
                            text: '系统处理超时,请稍后重试',
                            type: 'danger'
                        });
                    }
                }
            });
        });
    },

    //输入yanzhengjine 
    bindingCardCert: function(data) {
        var _dialog = this.dialog({
            // title: '请输入验证金额完成银行卡绑定',
            padding:"0px",
            content: this.template.bindingCardCert,
            onshow: function() {
                var node = $(this.node),
                    error = node.find('#dio_error'),
                    money = node.find('#money');
                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    error.hide();
                });
                node.delegate('.submit', 'click', function() {
                    if ($(this).hasClass('disabled')) return;
                    if (money.val() == '') {
                        money.parent().parent().addClass('form_dio_error').find('span').html('验证金额不能为空');
                        return false;
                    }
                    $(this).html('提交中...').addClass('disabled');
                    var that = $(this);
                    $.ajax({
                        url: 'https://www.qianshenghua.com/profile/verifyCard.do',
                        data: {
                            money: money.val(),
                            account: data.card_no
                        },
                        type: 'post',
                        dataType: 'json',
                        timeout: 30000, //非必须.默认30秒
                        success: function(data) {
                            if (data.returnCode == 0) {
                                recharge(3);
                                //            			          window.location.href ="https://www.qianshenghua.com/profile/managerCard.do";
                            } else if (data.returnCode == 2) {
                                // popup({
                                //     text: '验卡次数超过3次，请重新绑定',
                                //     type: 'danger'
                                // });
                                error.show.html('验卡次数超过3次，请重新绑定');
                                //            			        HHN.popup('验卡次数超过3次，请重新绑定');
                            } else {
                                popup({
                                    text: data.messageInfo,
                                    type: 'danger'
                                });
                            }
                            that.removeClass('disabled').html('确认');
                        },
                        complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
                            if (status == 'timeout') { //超时,status还有success,error等值的情况
                                ajaxTimeOut.abort(); //取消请求
                                popup({
                                    text: '系统处理超时,请稍后重试',
                                    type: 'danger'
                                });
                            }
                        }
                    });
                });
            }
        });
        _dialog.button([]);
    },
    earlyEedemption: function(info) {
        this.dialog({
            id: 'earlyEedemption',
            padding:"0px",
            content: this.parseHTML(this.template.earlyEedemption, [info]),
            // padding: '20px 100px',
            onshow: function() {
                var node = $(this.node),
                    that = this;
                node.delegate('.j-next', 'click', function() {
                    HHN.dialog.earlyEedemptionMsn(info);
                });
            }
        })
    },
    // 提前赎回 输入手机验证码确认
    earlyEedemptionMsn: function(info) {
        var _dialog = dialog.get('earlyEedemption'),
            that = this;
        _dialog.content(this.parseHTML(this.template.earlyEedemptionMsn, [info]));
        var node = $(_dialog.node),
            error = node.find('#dio_error'),
            value;
        node.delegate('input', 'focus', function() {
            node.find('.form_group').removeClass('form_dio_error');
            error.hide();
        });

        node.delegate('.dio_close','click',function(){
             _dialog.remove();
        });

        node.delegate('.submit', 'click', function() {
            value = $.trim(node.find('.j-code').val());
            if (value.length != 6) {
                node.find('.j-code').parent().parent().addClass('form_dio_error').find('span').html('请输入正确的验证码');
                return false;
            }
            $.ajax({
                url: 'https://www.qianshenghua.com/common/checkVerifyMobileCode.do',
                data: {
                    identifyCode: value
                },
                type: 'post',
                dataType: 'json',
                success: function(data) {
                    if (data.result == 0) {
                        //							error.show().html('错误提示demo');
                        // popup({
                        //     text: data.messageInfo,
                        //     type: 'success'
                        // });
                        //刷新当前页面
                        _dialog.close().remove();
                        HHN.dialog.confirmPwdSure(info);

                    } else {
                        popup({
                            text: data.msg,
                            type: 'danger'
                        });
                    }
                }
            });
        });
        
        node.delegate('.input-btn', 'click', function() {
            if ($(this).hasClass('disabled')) return;
            var that1 = $(this);
            $.ajax({
                url: 'https://www.qianshenghua.com/common/sendPhoneVirifyCode.do',
                type: "POST",
                data: {
                    checkPhone: false,
                    bizType: 'redeem'
                },
                dataType: 'json',
                success: function(data) {
                    if (data.ret == 1) {
                        popup({
                            text: '发送验证码失败',
                            type: 'danger'
                        });
                    } else if (data.ret == 2) {
                        popup({
                            text: '手机号码不存在',
                            type: 'danger'
                        });
                    } else if (data.ret == 3) {
                        popup({
                            text: '手机号码已存在',
                            type: 'danger'
                        });
                    } else {
                        that.countdown(that1);
                    }
                }
            });
        });
        // _dialog.onclose = function() {
        //     location.reload();
        // };

    },
    // 提前赎回
    confirmPwdSure : function(info){
        var _dialog = this.dialog({
            id:'confirmPwdSure',
            padding:'0px',
            content : this.template.confirmPwdSure,
            onshow : function(){
                var node = $(this.node),
                    that = this,
                    pwd = node.find('.pwd');

                node.delegate(".diol_opt", 'click', function(){
                    if (!pwd.val()) {
                        popup({text:'支付密码不得为空',type:'warning'});
                        return false;
                    }
                    $.ajax({
                        url : 'https://www.qianshenghua.com/profile/redeemProcess.do',
                        type:'GET',
                        data : {
                            payPassword : pwd.val(),
                            tradeId : info.tradeId
                        },
                        dataType : 'json',
                        success : function(data){
                            if (data.returnCode == 0) {
                                //                          error.show().html('错误提示demo');
                                popup({
                                    text: data.messageInfo,
                                    type: 'success'
                                });
                                //刷新当前页面
                                _dialog.close().remove();
                                window.location.reload();
                            } else {
                                popup({
                                    text: data.messageInfo,
                                    type: 'danger'
                                });
                            }
                        }
                    })
                });

                node.delegate('#forget','click', function(){
                    _dialog.close().remove();
                    HHN.dialog.resetTradePwd(_mobilePhone,_mobilePhone);
                });
            }
        })
    },
    //小钱库
 // 提前赎回
    xqkEarlyEedemption: function(info) {
    	 var _dialog = this.dialog({
            id: 'xqkEarlyEedemption',
            // title: '赎回',
            padding:"0px",
            content: this.parseHTML(this.template.xqkEarlyEedemption, [info]),
            // padding: '20px 100px',
            onshow: function() {
                var node = $(this.node),
                error = node.find('#dio_error'),
                    that = this;

                node.delegate('input[type="text"]', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    node.find('#dio_error').hide();
                });

                node.delegate('.j-next', 'click', function() {
                  if($(this).hasClass('disabled')) return false;
                	var canMoney = info.money;
                	money = $.trim(node.find('.j-money').val());
                	if (money.length == 0) {
                        node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('赎回金额为空');
                        return false;
                    }
                	// 可赎回金额小于100，请一次性赎回
        			if (canMoney < 100) {
        				if (canMoney > money) {
        					node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('可赎回金额小于100，请一次性赎回');
                             return false;
        				}
        				if (canMoney < money) {
        					node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('输入金额不能大于可赎回金额');
                             return false;
        				}
        			} else {
        				if (money < 100) {
        					node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('赎回金额最低100元');
                            return false;
        				}
        				if (canMoney < money) {
        					node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('输入金额不能大于可赎回金额');
                            return false;
        				}
        			}
        			 if(isNaN(money)){
        				 node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('请输入有效购买金额，只能为数字');
                         return false;
                     }
                     if(money.indexOf(' ')>-1){
                         //alert("购买金额不能包含空格！");
                    	 node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('购买金额不能包含空格');
                         return false;
                     }
                     if(money<0){
                         //alert('买入金额不能为负数');
                    	 node.find('.j-money').parent().parent().addClass('form_dio_error').find('span').html('买入金额不能为负数');    
                         return false;
                     }
                     $(this).addClass('disabled').html('提交中...');
                     var that = this;
                     $.ajax({
                         url: 'https://www.qianshenghua.com/profile/xqkRedeemProcess.do',
                         data: {
//                             verifyCode: value,
                             redeemAmount: money
                         },
                         type: 'post',
                         dataType: 'json',
                         success: function(data) {
                             if (data.returnCode == 0) {
                                 popup({
                                     text: data.messageInfo,
                                     type: 'success'
                                 });
                                 setTimeout(function() {
                                 	_dialog.close().remove();
                                    if( location.href.indexOf('REDEEM')  > -1 ) {
                                          var vmodel = avalon.vmodels.xqkCtrl;
                                          vmodel.tradeType = 'REDEEM';
                                          vmodel.getData();
                                    }
                                    location.href= "https://www.qianshenghua.com/view/center-index.jsp#!/xqk/9/REDEEM/";
                                 }, 2000);
                             } else {
                                 popup({
                                     text: data.messageInfo,
                                     type: 'danger'
                                 });
                                 that.removeClass('disabled').html('确定');
                             }
                         }
                     });
//                    HHN.dialog.xqkEarlyEedemptionMsn(info,money);
                });
            }
        })
        _dialog.onclose = function() {
             _dialog.remove();
         };
    },
    // 提前赎回 输入手机验证码确认
    xqkEarlyEedemptionMsn: function(info,money) {
        var _dialog = dialog.get('xqkEarlyEedemption'),
            that = this;
        _dialog.content(this.parseHTML(this.template.xqkEarlyEedemptionMsn, [info]));
        var node = $(_dialog.node),
            error = node.find('#error'),
            value;
        node.delegate('input', 'focus', function() {
            error.hide();
        });
        node.delegate('.submit', 'click', function() {
            value = $.trim(node.find('.j-code').val());
            if (value.length != 6) {
                error.show().html('请输入正确的验证码');
                return false;
            }

            $.ajax({
                url: 'https://www.qianshenghua.com/profile/xqkRedeemProcess.do',
                data: {
                    verifyCode: value,
                    redeemAmount: money
                },
                type: 'post',
                dataType: 'json',
                success: function(data) {
                    if (data.returnCode == 0) {
                        popup({
                            text: data.messageInfo,
                            type: 'success'
                        });
                        setTimeout(function() {
                        	_dialog.close().remove();
                        }, 2000);
                    } else {
                        popup({
                            text: data.messageInfo,
                            type: 'danger'
                        });
                    }
                }
            });
        });
        node.delegate('.input-btn', 'click', function() {
            if ($(this).hasClass('disabled')) return;
            var that1 = $(this);
            $.ajax({
                url: 'https://www.qianshenghua.com/common/sendPhoneVirifyCode.do',
                type: "POST",
                data: {
                    checkPhone: false,
                    bizType: 'redeem'
                },
                dataType: 'json',
                success: function(data) {
                    if (data.ret == 1) {
                        popup({
                            text: '发送验证码失败',
                            type: 'danger'
                        });
                    } else if (data.ret == 2) {
                        popup({
                            text: '手机号码不存在',
                            type: 'danger'
                        });
                    } else if (data.ret == 3) {
                        popup({
                            text: '手机号码已存在',
                            type: 'danger'
                        });
                    } else {
                        that.countdown(that1);
                    }
                }
            });
        });
        _dialog.onclose = function() {
            location.reload();
        };

    },
    bidBuy: function(info) {
        var that = this;
        info.stitle = info.title + ' - 编号：' + info.number,
        this.dialog({
            padding : '0px',
            content: this.parseHTML(this.template.bidBuy.replace('{borrowId}', info.id), [info]),
            onshow: function() {
                var node = $(this.node),
                    deadline = node.find('#deadline'),
                    error = node.find('#dio_error'),
                    money = node.find('#money'),
                    submit = node.find('.submit');
                that.countDown2(deadline, info.deadline);
                var btn = '立即投标';
                if (info.status == 3) {
                    btn = '满标';
                } else if (info.status == 4) {
                    btn = '还款中';
                } else if (info.status == 5) {
                    btn = '已还完';
                } else if (info.status == 1) {
                    btn = '初审中';
                } else if (info.status == 7) {
                    btn = '复审中';
                } else if (info.status == 2) {
                    btn = '立即投标';
                } else {
                    btn = '流标';
                }
                if (info.status != 2) {
                    submit.addClass('disabled');
                }

                node.delegate('input','focus',function(){
                  node.find('.form_group').removeClass('form_dio_error');
                  node.find('#dio_error').hide();                 
                });

                submit.html(btn);
                node.delegate('.submit', 'click', function() {

                   if (info.status != 2) return;
                    var m = money.val();
                    m = m.replace(/[^\d]/g, '');
                    money.val(m);
                    if ($.trim(m) == null || $.trim(m) == '') {
                        node.find('#money').parent().parent().addClass('form_dio_error').find('span').html('请输入投标金额');
                    } else if (m % 100 != 0 || m < 100) {
                        node.find('#money').parent().parent().addClass('form_dio_error').find('span').html('输入的购买金额应为100的倍数');
                    } else if (!node.find('#agree').attr('checked')) {
                        error.show().html('请仔细阅读并同意借款协议');
                    } else {
                        $.ajax({
                            url: 'https://www.qianshenghua.com/finance/borrowInvest.do',
                            type: "POST",
                            data: {
                                amount: m,
                                id: info.id
                            },
                            dataType: 'json',
                            success: function(data) {
                                if (data.statu > -1) {
                                    popup({
                                        text: data.msg,
                                        type: 'success'
                                    });
                                } else {
                                    popup({
                                        text: data.msg,
                                        type: 'danger'
                                    });
                                }
                                error.hide();
                            }
                        });

                    }
                });
            }
        });
    },
    moneyGateway: function(link1, link2) {
        this.dialog({
            // title: '请选择平台',
            padding:'0px',
            content: this.parseHTML(this.template.moneyGateway, [{
                link1: link1,
                link2: link2
            }])
        });
    },
    moneyRechargeGateway: function(link0, link1, link2) {
        this.dialog({
            // title: '请选择平台',
            padding:"0px",
            content: this.parseHTML(this.template.moneyRechargeGateway, [{
                link0: link0,
                link1: link1,
                link2: link2
            }])
        });
    },
    dialog: function(opt, lock) {
        $.extend(opt, {
            padding: opt.padding || '20px 40px',
            fixed: true
        });
        var d = dialog(opt);
        if (lock !== false) {
            d.showModal();
        } else {
            d.show();
        }
        return d;
    },
    countdown: function(elem) {
        elem.addClass('disabled').html('60秒重新获取');
        var step = 60,
            interval = setInterval(function() {
                if (!--step) {
                    clearInterval(interval);
                    elem.html('重新获取').removeClass('disabled');
                    return;
                }
                elem.html(step + '秒重新获取');
            }, 1000);
    },
    countdown4quickpay: function(){
    	$("#quickCode").addClass('disabled').html('120秒重新获取');
    	window.STEP = 120,
    	that = this,
    	interval = setInterval(function(){
    		if(--STEP<0){
    			clearInterval(interval);
    			$("#quickCode").html('重新获取').removeClass('disabled');
    			return;
    		}
    		$("#quickCode").html(STEP+'秒重新获取');
    	}, 1000);
    },
    parseHTML: function(template, json, fn, result) {
        result = result || '';
        if (Object.prototype.toString.call(json) === '[object Array]') {
            var first = json.shift();
            result += template.replace(/\{([^{}]+)\}/g, function(match, key) {
                var val = first[key];
                if (fn) {
                    return fn(key, val);
                }
                return val !== undefined ? val : match;
            });
            return json.length !== 0 ?
                parseHTML(template, json, fn, result) : //递归
                result;
        } else {
            alert('只接收数组形式的JSON数据！');
        }
    },
    countDown2: function(elem, time) {
        function getDiffDate() {
            time = time - 1;
            if (time > 0) {
                var second = Math.floor(time % 60); // 计算秒     
                var minite = Math.floor((time / 60) % 60); //计算分 
                var hour = Math.floor((time / 3600) % 24); //计算小时 
                var day = Math.floor((time / 3600) / 24); //计算天 
                return day + "天" + hour + "小时" + minite + "分" + second + "秒";
            }
            return "<font style='color:red'>过期</font>";
        }
        elem.html(getDiffDate());
        setInterval(function() {
            elem.html(getDiffDate()); // 参数为两个时间的毫秒差
        }, 1000);
    },
    //获取验证码
    getcode: function(phone, btn) {
        var that =  this;
        console.log(this);
        $.ajax({
            url: 'https://www.qianshenghua.com/common/sendPhoneVirifyCode.do',
            type: "POST",
            data: {
                mobilePhone: phone,
                checkPhone: true,
                bizType: 'setPayPwd'
            },
            dataType: 'json',
            success: function(data) {
                if (data.ret == 1) {
                    popup({text: '发送验证码失败',type: 'danger'});
                } else if (data.ret == 2) {
                     popup({text: '手机号码不存在',type: 'danger'});
                } else if (data.ret == 3) {
                    popup({text: '手机号码已存在',type: 'danger'});
                } else {
                    that.countdown(btn ? $(btn) : $(this));
                }
            }
        });
    },
    getcodeQuick: function(bankId,bankAmount) {
    	var that = this;
    	if($("#quickCode").hasClass('disabled'))return;
	    that.countdown4quickpay();
		$.ajax({
	        url: 'https://www.qianshenghua.com/getQuickDynCode.do',
			type:"POST",
	        data: {bank_card_id:bankId,amount:bankAmount},
	        dataType: 'json',
	        success: function(data) {
				if(data.returnCode==0){
					$('#token').val(data.data.token);
					$('#externalRefNumber').val(data.data.externalRefNumber);
				}else if(data.returnCode==1){
					popup({text:data.messageInfo,type: 'danger'});
				}
			}
	    });
    },
    getCode: function(btn, json) {
        var that = this;
        $.ajax({
            url: 'https://www.qianshenghua.com/common/sendPhoneVirifyCode.do',
            type: "POST",
            data: json,
            dataType: 'json',
            success: function(data) {
                if (data.ret == 1) {
				    popup({text: '发送验证码失败',type: 'danger'});
                } else if (data.ret == 2) {
				    popup({text: '手机号码不存在',type: 'danger'});
                } else if (data.ret == 3) {
				    popup({text: '手机号码已存在',type: 'danger'});
                } else {
                    that.countdown(btn);
                }
            }
        });
    },

    transferDebt: function(info) {
        this.dialog({
            // title: info.title,
            padding:"0px",

            content: this.parseHTML(this.template.transferDebt, [info]),
            onshow: function() {
                var node = $(this.node),
                    that = this,
                    amount = node.find('#amount'),
                    error = node.find('#dio_error');

                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    node.find('#dio_error').hide();
                });

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    //var price = $.trim(amount.val());
                    //var debtSum = Number(info.tradeAmount);
                    //var min = Number(debtSum * 0.9).toFixed(2);
                    var param = {};
                    // if (isNaN(price)) {
                    //     amount.parent().parent().addClass('form_dio_error').find('span').html('转让价格不合法');
                    //     return;
                    // }
                    // price = Number(price);
                    // if (debtSum < price || min > price) {
                    //     amount.parent().parent().addClass('form_dio_error').find('span').html('转让价格不能超过剩余本金或者少于剩余本金的90%');
                    //     return;
                    // }
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');
                    //param['loanId'] = info.loanId;
                    param['tradeAmount'] = info.tradeAmount;
                    //param['periods'] = info.periods;
                    //param['flag'] = info.flag;
                    param['investId'] = info.investId;
                    $.post("https://www.qianshenghua.com/debt/addAssignmentDebt.do", param, function(data) {
                        if (data.err_code == 0) {
                            popup({
                                type: 'success',
                                text: '操作成功'
                            });
                            window.location.reload();
                        } else {
                            // popup({
                            //     text: data.msg,
                            //     type: 'danger'
                            // });
                            error.show().html(data.err_msg);
                            btn.removeClass('disabled');
                        }
                    }, 'JSON');
                });
            }
        })
    },

	
	batchTransferDebt: function(info) {
        this.dialog({
            // title: info.title,
            padding:"0px",
            content: this.parseHTML(this.template.transferDebt, [info]),
            onshow: function() {
                var node = $(this.node),
                    that = this,
                    error = node.find('#dio_error');
                    //amount = node.find('#amount');
					//amount.attr("disabled",true);

                node.delegate('input', 'focus', function() {
                    node.find('.form_group').removeClass('form_dio_error');
                    node.find('#dio_error').hide();
                });

                node.delegate('#submit2', 'click', function() {
                    var btn = $(this);
                    //var price = $.trim(amount.val());
                    var param = {};
                    // if (isNaN(price)) {
                    //     amount.parent().parent().addClass('form_dio_error').find('span').html('转让价格不合法');
                    //     return;
                    // }
                    if (btn.hasClass('disabled')) return;
                    btn.addClass('disabled');
                    param['investIds'] = info.investIds.join(',');
                    //param['auctionBasePrices'] = info.amounts.join(',');
                    //param['debtSums'] = info.debtSums.join(',');
                    //param['borrowIds'] = info.borrowIds.join(',');
                    param['tradeAmounts'] = info.tradeAmounts.join(',');
                    $.post("https://www.qianshenghua.com/debt/batchAssignmentDebt.do", param, function(data) {
                        if (data.err_code == 0) {
                            popup({
                                type: 'success',
                                text: '批量操作成功'
                            });
                            window.location.reload();
                        } else {
                            // popup({
                            //     text: data.msg,
                            //     type: 'danger'
                            // });
                             error.show().html(data.data[0].retMsg);
                             btn.removeClass('disabled');
                        }
                    }, 'JSON');
                });
            }
        })
    },
    fastBindCard: function(){
      var topObj = this;
            this.dialog({
                  title:'通知',
                  content: document.getElementById('fdaf'),
                  padding:'30px 100px',
                  onshow: function(){
                        function distpicker(){
                              $('#distpicker').distpicker({
                                    autoSelect: false
                                });
                        };
                        if(!$.fn.distpicker){
                              var done = 0,
                                  callback = function(){
                                    ++done;
                                    if(done===1){
                                         $.getScript("https://static.hehenian.com/p/js/plugins/distpicker/distpicker.min.js",callback);       
                                    }else if(done===2){
                                          distpicker();
                                       }
                                    };
                              $.getScript("https://static.hehenian.com/p/js/plugins/distpicker/distpicker.data.min.js",callback);
                        }else{
                              distpicker();
                        }
                        var node = $(this.node),
                        that = this,
                        phone = node.find('.j-phone'),
                        code = node.find('.j-code'),
                        error = node.find('#error'),
                        check = node.find('#agree'),
                        province = node.find('.j-province'),
                        city = node.find('.j-city')

                        node.delegate('.submit', 'click', function() {
                              if(!check.prop('checked')){
                                    error.show().html('必须同意《钱生花快捷支付用户协议》');
                                    return;
                              }else if(!city.val()){
                                    error.show().html('请选择开户所在地！');
                                    return;
                              }else if(!/^0?(13|15|18|14|17)[0-9]{9}$/.test($.trim(phone.val()))){
                                    error.show().html('手机号码错误！');
                                    return;
                              }else if($.trim(code.val()).length!=6){
                                    error.show().html('手机验证码错误！');
                                    return;
                              }else{
                                    error.hide();
                              }
                        });
                        node.delegate('input[type="text"],select', 'focus', function() {
                                error.hide();
                        });
                        node.delegate('.input-btn', 'click', function() {
                              if ($(this).hasClass('disabled')) return;
                              if(!/^0?(13|15|18|14|17)[0-9]{9}$/.test($.trim(phone.val()))){
                                    error.show().html('手机号码错误！');
                                    return;
                              }
                              topObj.countdown($(this));
                              error.hide();
                        });
                  }
            });
    }
};

var HHN = HHN || {};
HHN.dialog = HHN.dialog || {};
$.extend(HHN.dialog, new CenterDialog);
