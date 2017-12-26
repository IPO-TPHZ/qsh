/*
*  配置文件路径
*/
require.config({
	baseUrl : "https://static.hehenian.com/p_v2/js/",
	urlArgs : "v=1479364906812",
	paths : {
		jquery : 'libs/jquery',
		avalon : 'avalon/avalon',
		mmRequest : 'avalon/mmRequest',
		mmRouter : 'avalon/mmRouter',
		mmState : "avalon/mmState",
		mmHistory : "avalon/mmHistory",
		mmPromise : "avalon/mmPromise",
		app : "model/main", //个人中心的入口文件
		config : "config/config",
		base   : "libs/base", //基础函数库
		route : "routes/center-route",
		jqueryUI:"widgets/jquery-ui-1.10.1.min.js",
		pagenavigation : "widgets/pagenavigation.js?v=1539396",
		datePicker : "libs/jquery.DatePicker.min.js?v=f60d1bf",
		zeroClipboard : "libs/ZeroClipboard.js?v=e8e36b4",
		distpickerData : "widgets/distpicker.data.js?v=037c1f4",
		distpicker :     "widgets/distpicker.js?v=e3a7213",
		Q : "widgets/upload/Q.js?v=6435de3",
		QUploader : "widgets/upload/Q.Uploader.js?v=870c861",

		/* 各个模块对应的servie */
		centerService :　"service/centerService",
		zeroAddressData:'widgets/distpicker.data.zero'
	},
	shim : {
		'jquery' : {
			exports : 'jquery'
		},
		Q : {
			exports : 'Q'
		},
		datePicker : {
			deps : ['jquery'],
			exports : "datePicker"
		},
		QUploader : {
			deps : ['Q'],
			exports : 'QUploader'
		},
		distpicker : {
			deps : ['distpickerData'],
			exports : 'distpicker'
		},
		distpickerData : {
			exports : 'distpickerData'
		},
		zeroClipboard : {
			deps : ['jquery'],
			exports : 'zeroClipboard'
		},
		jqueryUI : {
			deps : ['jquery'],
			exports : 'jqueryUI'
		},
		'avalon' : {
			exports : 'avalon'
		},
		'mmRequest' : {
			deps : ['avalon'], //设置依赖的模块
			exports : 'mmRequest'
		},
		'mmRouter' : {
			deps : ['avalon'],
			exports : 'mmRouter'
		},
		'mmState' : {
			deps : ['avalon'], //设置依赖的模块
			exports : 'mmState'
		},
		'mmHistory' : {
			deps : ['avalon'],
			exports : 'mmHistory'
		},
		'mmPromise' : {
			deps : ['avalon'],
			exports : 'mmPromise'
		},
		"app" : {
			deps : ['avalon','mmState','base','centerService'],
			exports : "app"
		},
		"centerService" : {
			deps : ['avalon','mmRequest'],
			exports : "centerService"
		},
		"route" : {
			deps : ['avalon','app','mmHistory','mmState','config'],
			exports : "route"
		},
		zeroAddressData:{
			exports:'ChineseDistricts'
		}
	}
});

require(["domReady!",'mmRouter','mmState','mmHistory','mmPromise','mmRequest','app','route'], function(){
	avalon.scan();
});


