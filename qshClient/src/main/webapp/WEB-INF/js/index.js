
	var swiper = new Swiper('.swiper-container-product', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: false,
        loop:true,
        prevButton : ".arrow_left",
        nextButton : ".arrow_right",
        preventClicks:false
    });
	var swiper2 = new Swiper('.swiper-container-adv', {
        speed: 1000,
        autoplay: 2000,
        loop:true,
        direction: 'vertical',
        preventClicks:false
    });
    $('.swiper-container-adv').mouseenter(function(){
    	swiper2.stopAutoplay();
    }).mouseleave(function(){
		swiper2.startAutoplay();
    })
    $(".slider").responsiveSlides({
        pager: true,
        pause:true,
        pauseControls:true,
        namespace: "slider"
    });
(function(){
	var html = '<div id="activityAd"><style>.activity-ad{position:fixed;width:165px;height:207px;bottom:50px;right:60px;-webkit-animation:adShow .3s ease .3s forwards;animation:adShow .3s ease .3s forwards;-webkit-transform:translate3d(0,150px,0);transform:translate3d(0,150px,0);z-index:99}.activity-ad .img{display:block;position:absolute;width:100%;height:100%;left:0;top:0;background-image:url("https://static.hehenian.com/p_v2/images/activity/egg/ad.png");background-size:cover;background-repeat:no-repeat;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:Tada 3s infinite 1s;animation:Tada 3s infinite 1s}@-webkit-keyframes adShow{0%{-webkit-transform:translate3d(0,150px,0);transform:translate3d(0,150px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes adShow{0%{-webkit-transform:translate3d(0,150px,0);transform:translate3d(0,150px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes Tada{0%{-webkit-transform:scale(1);transform:scale(1);transform:scale(1)}70%,73%{-webkit-transform:scale(0.9) rotate(-3deg);transform:scale(0.9) rotate(-3deg);transform:scale(0.9) rotate(-3deg)}77%,83%,90%,97%{-webkit-transform:scale(1.1) rotate(3deg);transform:scale(1.1) rotate(3deg);transform:scale(1.1) rotate(3deg)}80%,87%,93%{-webkit-transform:scale(1.1) rotate(-3deg);transform:scale(1.1) rotate(-3deg);transform:scale(1.1) rotate(-3deg)}100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0);transform:scale(1) rotate(0)}}@keyframes Tada{0%{-webkit-transform:scale(1);transform:scale(1);transform:scale(1)}70%,73%{-webkit-transform:scale(0.9) rotate(-3deg);transform:scale(0.9) rotate(-3deg);transform:scale(0.9) rotate(-3deg)}77%,83%,90%,97%{-webkit-transform:scale(1.1) rotate(3deg);transform:scale(1.1) rotate(3deg);transform:scale(1.1) rotate(3deg)}80%,87%,93%{-webkit-transform:scale(1.1) rotate(-3deg);transform:scale(1.1) rotate(-3deg);transform:scale(1.1) rotate(-3deg)}100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0);transform:scale(1) rotate(0)}}.activity-ad i{cursor:pointer;font-size: 12px;display:block;width:20px;height:20px;border-radius: 10px;background:rgba(255,74,74,.5);color:#fff;text-align: center;line-height: 20px;top: -20px;right: 0;position:absolute;}</style>';
            html+='<div class="activity-ad"><i onclick="$(\'#activityAd\').remove()">×</i>'+
                  '<a href=""></a><a href=""></a>'+
                  '<a href="https://www.qianshenghua.com/activity/decemberActivity.do" class="img"></a>'+
                '</div></div>';
            var now = new Date().getTime();
            if(now>=new Date(2017,11,22).getTime()&&now<new Date(2018,0,4).getTime()){
                $(document.body).append(html);
            }
})();

function rankDialog(){
    dialog({
	        title:false,
	        padding:0,
	        content: $('#rankDialog').html()
	}).showModal();
}

