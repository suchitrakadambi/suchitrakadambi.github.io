/**
 * Created by skadambi on 8/24/16.
 */
$(document).ready(function () {
    console.log("document ready");
    var enableClick;
    $(".arrow").click(function () {
        console.log("entered in to the click function");

        $("html,body").animate({scrollTop: $("#about").offset().top}, 1000);
        return false;
    });
    $("ul.navbar-nav>li,.letter").click(function (e) {
        console.log("in the letter section");
        console.log("the event is"+e);
        var target = e.target.id;
        $("a").css({backgroundColor: "transparent", color: "white"});
        console.log("the target is"+target);
        //if (target === "hme") {
        //    target = home;
        //}
        if (target === "abt") {
            target = "about";
        }
        if (target === "skil") {
            target = "skillst";
        }
        if (target === "work") {
            target = "mywrk";
        }
        if (target === "contactme") {
            target = "contact";
        }
        console.log("let c if the target value changes" + target);
        $("html,body").animate({scrollTop: $("#" + target).offset().top}, 650);
        return false;
    });
    var background_height = $(".bgimg").height();
    console.log("the background height is" + background_height);
    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) {
                $(".navbar").hide();
            }
            if ($(this).scrollTop() > background_height) {
                $(".navbar").show();
                $(".letter").css({color: "white"});
                $(".navbar").css({background: "black", opacity: 0.9});

                console.log("reached the limit height now display the nav bar");
            }

            if ($(this).scrollTop() == 0) {
                $(".navbar").show();
                $(".letter").css({color: "white"});
                $(".navbar").css({background: "transparent"});

            }

        })
    })();
    $(document).on("hover","li",function(){
        console.log("enterd in to the mouse enter function");
        $(this).css({color:"orange"})
    });






});
