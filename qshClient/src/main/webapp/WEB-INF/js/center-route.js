/*
 * 定义个人中心的路由
 */
define(['app'], function(app) {
    //路由的相关配置
    var baseUrl = "https://static.hehenian.com/p_v2/js/controllers";
    var rm = Math.random();
    avalon.state.config({
        onLoad: function(from, to) {
            //百度统计
            window._hmt&&window._hmt.push&&window._hmt.push(['_trackPageview', to.path]);
        },
        onUnload: function() {}
    });


    avalon.state("main", {
            //个人中心
            controller: app,
            url: "/",
            templateUrl: "html/center-index.html?v=" + rm,
            onEnter: function() { //路由加载进来的时候

            }
        }).state("adb", {
            controllerUrl: baseUrl + '/financialCtrl.js?v=a68f841' + rm,
            url: "/financial/:subChannel/:channel",
            templateUrl: "html/center-financial.html?v=" + rm,
            onEnter: function() {}
        }).state("xqk", {
            controllerUrl: baseUrl + '/xqkCtrl.js?v=db61945' + rm,
            url: "/xqk/:subChannel/:tradeType/:channel",
            templateUrl: "html/center-xqk.html?v=" + rm,
            onEnter: function() {}
        }).state("safe", {
            controllerUrl: baseUrl + '/safeCtrl.js?v=13f7892' + rm,
            url: "/safe",
            templateUrl: "html/center-safe.html?v=" + rm,
            onEnter: function() {

            }
        }).state("scattered", {
            controllerUrl: baseUrl + "/scatteredCtrl.js?v=05ad0df" + rm,
            url: "/scattered",
            templateUrl: "html/center-scattered.html?v=" + rm,
            onEnter: function() {}
        }).state('debt', {
            controllerUrl: baseUrl + "/debtCtrl.js?v=b4c3e60" + rm,
            url: "/debt",
            templateUrl: "html/center-debt.html?v=" + rm,
            onEnter: function() {}
        }).state('funds', {
            controllerUrl: baseUrl + '/fundsCtrl.js?v=98bc7fc' + rm,
            url: "/funds",
            templateUrl: "html/center-funds.html?v=" + rm,
            onEnter: function() {

            }
        }).state('coupon', {
            controllerUrl: baseUrl + '/couponCtrl.js?v=7221df9' + rm,
            url: "/coupon",
            templateUrl: "html/center-coupon.html?v=" + rm,
            onEnter: function() {}
        }).state('setting', {
            controllerUrl: baseUrl + '/settingCtrl.js?v=2918040' + rm,
            url: "/setting",
            templateUrl: "html/center-setting.html?v=" + rm,
            onEnter: function() {

            }
        }).state('trade', {
            controllerUrl: baseUrl + '/tradeCtrl.js?v=53b0505' + rm,
            url: "/trade/:queryType",
            templateUrl: "html/center-trade.html?v=" + rm,
            onEnter: function() {

            }
        }).state('planner', {
            controllerUrl: baseUrl + '/plannerCtrl.js?v=fd49d4c' + rm,
            url: "/planner",
            templateUrl: "html/center-planner.html?v=" + rm,
            onEnter: function() {}
        }).state('bankcard', {
            controllerUrl: baseUrl + '/bankCtrl.js?v=998055b' + rm,
            url: "/bankcard",
            templateUrl: "html/center-bank.html?v=" + rm,
            onEnter: function() {
            }
        }).state('finanDetail', {
            controllerUrl: baseUrl + '/finanDetailCtrl.js?v=637b400' + rm,
            url: "/finanDetail/:tradeId",
            templateUrl: "html/center-finanDetail.html?v=" + rm,
            onEnter: function() {}
        }).state('caiRecord', {
            controllerUrl: baseUrl + '/caiRecordCtrl.js?v=3717827' + rm,
            url: "/caiRecord",
            templateUrl: "html/center-crecord.html?v=" + rm,
            onEnter: function() {}
        }).state('caiBuyRecord', {
            controllerUrl: baseUrl + '/caiBuyRecordCtrl.js?v=b8e86ba' + rm,
            url: '/caiBuyRecord',
            templateUrl: "html/center-cbuy.html?v=" + rm,
            onEnter: function() {}
        }).state('shop', {
            url: '/shop/address',
            templateUrl: 'html/shop/address.html?v=' + rm,
            controllerUrl: baseUrl + '/shop.addressCtrl.js?v=9f00875' + rm
        })
        .state('shop', {
            url: '/shop/address/:addressId',
            templateUrl: 'html/shop/address.html?v=' + rm,
            controllerUrl: baseUrl + '/shop.addressCtrl.js?v=9f00875' + rm
        })
        .state('shop', {
            url: '/shop/orders',
            templateUrl: 'html/shop/orders.html?v=' + rm,
            controllerUrl: baseUrl + '/shop.ordersCtrl.js?v=345904b' + rm
        }).state('orderDetail', {
            controllerUrl: baseUrl + '/orderDetailCtrl.js?v=3e9d19e' + rm,
            url: "/orderDetail/:orderNo",
            templateUrl: "html/order_detail.html?v=" + rm
        }).state('vip', {
            controllerUrl: baseUrl + '/vipCtrl.js?v=371367f' + rm,
            url: '/vip',
            templateUrl: 'html/vip.html?v=' + rm
        }).state('edit', {
            controllerUrl : baseUrl + '/editCtrl.js?v=7a764b7' + rm,
            url : '/edit',
            templateUrl: 'html/edit_phone.html?v=' + rm
        }).state('hsbank', {
            controllerUrl : baseUrl + '/hsbank.js?v=39a7b1c' + rm,
            url : '/hsbank',
            templateUrl: 'html/hsbank/hsbank.html?v=' + rm
        }).state('hsbankIn', {
            controllerUrl : baseUrl + '/hsbankIn.js?v=1d09c74' + rm,
            url : '/hsbankIn/:fuComCode/:fundCode',
            templateUrl: 'html/hsbank/hsbankIn.html?v=' + rm
        }).state('hsbankDetail', {
            controllerUrl : baseUrl + '/hsbankDetail.js?v=e5fc8a6' + rm,
            url : '/hsbankDetail/:fuComCode/:fundCode/:fundName',
            templateUrl: 'html/hsbank/hsbankDetail.html?v=' + rm            
        }).state('hsbankNotice', {
            controllerUrl : baseUrl + '/hsbankNotice.js?v=04715f7' + rm,
            url : '/hsbankNotice/:type',
            templateUrl: 'html/hsbank/hsbankNotice.html?v=' + rm            
        }).state('hscharge',{
            controllerUrl : baseUrl + '/hscharge.js?v=11027fb' + rm,
            url : '/hscharge/:cardNo',
            templateUrl: 'html/hsbank/hscharge.html?v=' + rm   
        }).state('hswithdraw',{
            controllerUrl : baseUrl + '/hswithdraw.js?v=a92ca3d' + rm,
            url : '/hswithdraw',
            templateUrl: 'html/hsbank/hswithdraw.html?v=' + rm   
        });

    //启动路由
    avalon.history.start({
        basepath: "/mmRouter"
    })
});