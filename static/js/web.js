/*
* @Author: sunjijing
* @Date:   2018-10-24 13:59:24
* @Last Modified by:   sunjijing
* @Last Modified time: 2018-10-24 17:19:38
*/

//收藏本站 www.bjshy.gov.cn
function AddFavorite(title, url) {
 try {
   window.external.addFavorite(url, title);
 }
catch (e) {
   try {
    window.sidebar.addPanel(title, url, "");
  }
   catch (e) {
     alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
   }
 }
}

$(function(){

    //无障碍功能添加
        var urlwza = window.location.href;
        var linkWza= urlwza.split('www.bjshy.gov.cn')[1];
        $("#pageWza").attr({"href":'/web/AiWza/index.html'+"#"+linkWza});


$("#searchForm").submit(function(){
  if($(".slideSS .slideSS_txt").text() == "站内搜索"){

  }else{
      var qttxt = jQuery.trim($("#q").val());
      var sourceCode = $('input[name="sourceCode"]').val();
      window.open("http://www.beijing.gov.cn/so/s?qt="+encodeURIComponent(qttxt)+"&sourceCode="+sourceCode,"_blank");
      return false;
  }
})


$(".slideSS").click(function(){
  $(this).find("ul").stop(true,true).slideToggle();
})

$(".slideSS ul li").click(function(e){
if(e && e.stopPropagation ){
    e.stopPropagation();
}else{
    window.event.cancelBubble = true;
}

$(".slideSS .slideSS_txt").text($(this).text());
  if($(this).index() == 0){
     document.getElementById("q").type="text";
     document.getElementById("qt").type= "hidden";
  }else{
     document.getElementById("q").type="hidden";
     document.getElementById("qt").type= "text";
  }
  document.getElementById("searchForm").action = $(this).attr("rel");

  $(".slideSS").find("ul").stop(true,true).slideUp();
})




    if($(document).height()<=$(window).height()){
        $(".footer").css({"position":"fixed","bottom":"0px"});
    }

    //更换背景
    if($("#bodyBg").length > 0){
        $(".bg img").attr("src",$("#bodyBg").attr('src'));
    }else{
        $(".bg img").attr("src",'/eportal/fileDir/web/resource/cms/img_pc_site/2018/11/2018110911042728824.jpg');
    };

    //顶部微信订阅号
    $(".ewm_icon").hover(function(){
        $(".ewm").show();
    },function(){
        $(".ewm").hide();
    });

       //客户端二维码
    $(".kehuduan").hover(function(){
        $(".kehuduan_Pic").show();
    },function(){
        $(".kehuduan_Pic").hide();
    });

    var menu_top_height;
    menu_top_height = $(window).height()-345;
    $(window).resize(function() {
        var seatH= $(".seize-seat").height();
        menu_top_height = $(window).height()-345;
        if(seatH!=0){
            $(".seize-seat").attr("style","height:"+menu_top_height+"px");
        }
    });

    $('.syNav-ul li.last').click(function(){
        //$('.plan-small').fadeIn(1000);
        $(this).toggleClass('change');
        if($(this).hasClass('change')){
            $('.logo').animate({top:'10px',left:'0',width:'422px'},1000);
            $('.search,.topLink').fadeIn(1000);
            $('.seize-seat').animate({height:'0'},1000);
            if($("#ascrail2000")) { $("#ascrail2000").show(); }
            //$('.font, .cloud').fadeOut(1000);
            $('.cont').slideDown(2000);
        }else{
            $('.logo').animate({top:'130px',left:'375px',width:'470px'},1000);
            $('.search,.topLink').fadeOut(1000);
            $('.seize-seat').animate({height:menu_top_height+'px'},1000);
            $('.cont').slideUp(1000);
            if($("#ascrail2000")) { $("#ascrail2000").hide(); }
            //$('.font, .cloud').fadeIn(1000);
            //$('.font').animate({"width":"410px"},500).animate({"width":"380px"},500);
        }
    });
    var w=$(window).width();
    var h=$(window).height();
    $('.bg').width(w);
    $('.bg').height(h);

    $(window).resize(function(){
        var w=$(window).width();
        var h=$(window).height();
        $('.bg').width(w);
        $('.bg').height(h);
    });
})

//创建cookie
function setCookie(name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires instanceof Date) {
        cookieText += ';expires=' + expires;
    }if (path) {
        cookieText += ';path=' + path;
    }if (domain) {
        cookieText += ';domain=' + domain;
    }if (secure) {
        cookieText += ';secure';
    }
    document.cookie = cookieText;
}

//获取cookie
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + '=';
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(';', cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}

//删除cookie
function unsetCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}

//失效天数，直接传一个天数即可
function setCookieDate(day) {
    if (typeof day == 'number' && day > 0) {
        var date = new Date();
        date.setDate(date.getDate() + day);
    } else {
        throw new Error('传递的day 必须是一个天数，必须比0大');
    }
    return date;
}

//信息详情页修改分享功能
$(function(){
    var fxdm = '<span style="float:left; font-size:14px; margin-right:10px;">分享到:</span><a class="share-wechat" href="javascript:;"><i></i><div class="bg-code"></div><div class="qrcode"><canvas width="100" height="0"></canvas></div><span class="close-btn">X</span></a><a class="share-weibo"><i></i></a><a class="share-qqzone"><i></i></a>';

    $(".share").html(fxdm);


})

$(function(){

/*外链弹窗 bin*/
        $("a[href*='http']" || "a[href*='https']" ).on("click",this,function(e){   
            var w_link = $(this).attr("href");
            if(w_link!=""&&w_link.toLowerCase().indexOf("javascript")==-1&&w_link.toLowerCase().indexOf(".bjshy.gov.cn")==-1){
                
                if (self.frameElement && self.frameElement.tagName == "IFRAME") {
                    
                   /* if($(window.parent.document).find("#w_warning").length < 1 ){
                        $(window.parent.document).find("body").append(f_html(w_link));
                    }else{
                        $(window.parent.document).find("#continue a").attr("href",w_link);
                    }
                    window.parent.f_kg();*/
                    window.parent.open(w_link);
                }
                else {
                    if($("#w_warning").length < 1 ){
                        $("body").append(f_html(w_link));
                    }else{
                        $("#continue a").attr("href",w_link);
                    }
                    f_kg();
                }
                
                return false;
            }
        });
/*外链弹窗 end*/

});



/*外链弹窗*/
function f_html(w_link){
    var w_html = ''; 
        w_html += '<div class="alert-warning" id="w_warning" >';
        w_html += '     <div class="alert-delete">';
        w_html += '         <span id="closets"></span>';
        w_html += '     </div>';
        w_html += '     <div class="alert-wzsm">';
        w_html += '         <p>您访问的链接即将离开"北京市顺义区人民政府"门户网站 是否继续？</p>';
        w_html += '     </div>';
        w_html += '     <div class="alert-footer">      ';
        w_html += '         <div class="xuanze">';
        w_html += '             <span class="continue" id="continue"><a href="'+w_link+'" target="_blank">外链</a></span>';   
        w_html += '             <span class="fangqi" id="fangqi">放弃</span>  ';
        w_html += '         </div>';
        w_html += '     </div>';
        w_html += '</div>';
        w_html += '<div class="alert-mengban" id="w_mengban" ></div>';
    return w_html;
}

/*外链打开关闭弹窗*/
function f_kg(){
        $("#w_mengban").fadeIn(200);
        $("#w_warning").delay(100).show().animate({top:"75px"}, 300);
        $("#closets,#fangqi,#w_mengban").click(function() {
            $("#w_warning").animate({top:"-400px"}, 200).hide(200);
            $("#w_mengban").delay(100).fadeOut(200);
        });
        $("#continue").click(function(){            
            $("#w_warning").hide(200);
            $("#w_mengban").delay(100).fadeOut(200);
        })
    
}


//详情页中“信息发布”单位“区投资促进中心”改为“区投资促进服务中心”
$(function(){
    var xx_txt = $('#xxfb_DW font').html();
    if(xx_txt == '区投资促进中心'){
        $('#xxfb_DW font').html('区投资促进服务中心');
    }
})