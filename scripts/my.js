/**
 * Created by skadambi on 8/24/16.
 */
$(document).ready(function(){
    console.log("document ready");
    $(".arrow,.letter").click(function(){
        console.log("entered in to the click function");

        $("html,body").animate({scrollTop : $("#abt").offset().top},1000);
        return false;
    })
 var background_height = $(".bgimg").height();
    console.log("the background height is" + background_height);
    (function(){
        $(window).scroll(function(){
            if($(this).scrollTop()>background_height){
                $(".letter").css({color:"white"});
                $(".navbar").css({background:"black",opacity:0.9 });
                console.log("reached the limit height now display the nav bar");
            }
            else{
                $(".letter").css({color:"white"});
                $(".navbar").css({background:"transparent"});
            }
        })
    })();




});
