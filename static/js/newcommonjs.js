//////新版搜索功能切换
$(function(){
    $(".xialaUl").click(function() {
        $(this).find("ul").stop(true, true).slideToggle();
    })
    $(".xialaUl ul li").click(function(e) {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }
        $(this).addClass("on").siblings().removeClass();
        $(".xialaUl .xialaUl_wenzi").text($(this).text());
        if ($(this).index() == 0) {
            $("#qt").attr("placeholder","站内搜索");
            $("#newSearchForm").attr("rel","http://www.bjshy.gov.cn/so/s")
        } else {
            $("#qt").attr("placeholder","一网通查");
            $("#newSearchForm").attr("rel","http://www.beijing.gov.cn/so/s")
        }
        $(".xialaUl").find("ul").stop(true, true).slideUp();
    })
    $("#gjssSUBMIT").click(function(){
            var inputValue  = $("#qt").val();
            var sou = $("#newSearchForm").attr("rel");
            var s_href = '';
            if (inputValue != "") {
                if(sou == 'http://www.bjshy.gov.cn/so/s'){
                    s_href = 'http://www.bjshy.gov.cn/so/s?qt=' + encodeURIComponent(inputValue);
                    
                }
                if(sou == 'http://www.beijing.gov.cn/so/s'){
                    s_href = 'http://www.beijing.gov.cn/so/s?qt=' + encodeURIComponent(inputValue);
                     
                }
                window.open(s_href);
            }
    })
})



//响应式头部菜单
    var windowWidthX = $(window).width();
    $(function(){
        if(windowWidthX < 1025){
            $(".newHeadNav .ulA .levelTwo").eq(3).css("top","72px");
            $(".newHeadNav .ulA .levelTwo").eq(4).css("top","72px");
            $(".newHeadNav .ulA .levelTwo").eq(5).css("top","72px");
            $(".newtopNav .open a.oneNavLinkA").click(function(e) {
                e.preventDefault();
                if($(this).parent().hasClass("close")){
                    $(this).parent().removeClass("close");
                    $(this).siblings(".levelTwo").stop(true,true).slideUp();
                }else{
                    $(this).parent().addClass("close").siblings().removeClass("close");
                    $(this).siblings(".levelTwo").stop(true,true).slideDown();
                }
                $(this).parent().siblings(".open").find(".levelTwo").stop(true,true).slideUp();
            })
        }
    })