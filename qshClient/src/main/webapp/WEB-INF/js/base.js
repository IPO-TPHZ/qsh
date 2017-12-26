/*
 * 配置相关路径 errCode  errInfo
 */
define([], function() {


    //patch 原生的prototype不精确

    Number.prototype.toFixed = function(d) {

        var s = this + "";
        if (!d) d = 0;
        if (s.indexOf(".") == -1) s += ".";
        s += new Array(d + 1).join("0");
        if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (d + 1) + "})?)\\d*$").test(s)) {

            var s = "0" + RegExp.$2,
                pm = RegExp.$1,
                a = RegExp.$3.length,
                b = true;
            if (a == d + 2) {
                a = s.match(/\d/g);
                if (parseInt(a[a.length - 1]) > 4) {

                    for (var i = a.length - 2; i >= 0; i--) {
                        a[i] = parseInt(a[i]) + 1;
                        if (a[i] == 10) {
                            a[i] = 0;
                            b = i != 1;

                        } else break;

                    }

                }
                s = a.join("").replace(new RegExp("(\\d+)(\\d{" + d + "})\\d$"), "$1.$2");

            }
            if (b) s = s.substr(1);
            return (pm + s).replace(/\.$/, "");

        }
        return this + "";
    };

    //格式化金额
    Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
        places = !isNaN(places = Math.abs(places)) ? places : 2;
        //symbol = symbol !== undefined ? symbol : "￥";
        thousand = thousand || ",";
        decimal = decimal || ".";
        var number = this,
            negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
    };


    function Base() {

    }

    Base.prototype = {
        getCookie: function() {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        topNavFixed: function(module) {
            if ($.browser.msie) return;
            var topNavFixed = $('#topNavFixed'),
                startPos = 0,
                endPos = 0,
                timeout = null,
                $win = $(window),
                offset = 120,
                isAnimating = false, //动画过程，禁止操作

                setNav = function(direction, pos) {
                    isAnimating = true;

                    // topNavFixed.css({
                    //     webkitTransform: 'translate(0,' + (direction * offset) + 'px) translateZ(0)',
                    //     transform: 'translate(0,' + (direction * offset) + 'px) translateZ(0)'
                    // });
                    module.headerTop = (direction * offset) + 'px';

                    startPos = pos;
                    setTimeout(function() {
                        isAnimating = false;
                    }, 210);
                };
            $(window).on('scroll', function(e) {
                // if (isAnimating) return;
                endPos = $win.scrollTop();
                if(endPos<offset){
                    setNav(0, endPos);
                }else if (endPos - startPos < -10) {
                    setNav(0, endPos);
                } else if (endPos - startPos > 10) {
                    setNav(-1, endPos);
                }
                avalon.scan();
            });
        }
    }

    var ins = new Base();
    return ins;
})
