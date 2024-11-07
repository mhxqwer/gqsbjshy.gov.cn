(function($) {
    // 奇偶行背景的控制
    var listModelOne = $('.easysite-list-modelone');
    $('li:even', listModelOne).css('background-color', '#ffffff');
    $('li:odd', listModelOne).css('background-color', '#f2f2f2');

    // 控制border
    var listModelTwo = $('.easysite-module-listtwo'),
        listTwoUl = $('.easysite-list-ul', listModelTwo);
    $('li', listTwoUl).first().css('border-top','none');

    // 图片轮播
    var mySwiper = new Swiper('.easysite-swiper-container',{
        speed: 1000,
        loop: true,
        autoplay: 3000,
        paginationClickable: true
    });

    // 前一个按钮
    $('.easysite-left-arrow').on('click', function(e){
        e.preventDefault();
        mySwiper.swipePrev();
    });
    // 后一个按钮
    $('.easysite-right-arrow').on('click', function(e){
        e.preventDefault();
        mySwiper.swipeNext();
    });
    $('.swiper-wrapper').on('mouseover', function() {
        mySwiper.stopAutoplay();
    }).on('mouseout', function() {
        mySwiper.startAutoplay();
    });

    // 控制字体的大小
    var $easysiteNewsText = $('#easysiteText *');
    $('#easySiteBigFont').on('click', function() {
        $easysiteNewsText.css('font-size', '20px');
    });
    $('#easySiteMiddleFont').on('click', function() {
        $easysiteNewsText.css('font-size', '18px');
    });
    $('#easySiteSmallFont').on('click', function() {
        $easysiteNewsText.css('font-size', '16px');
    });

})(jQuery)
