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
    $(".letter").click(function (event) {
        console.log("in the letter section");
        var target = event.target.id;
        $("a").css({backgroundColor: "transparent", color: "white"});
        console.log(target);
        if (target === "hme") {
            target = home;
        }
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
                //$(".navbar").hover(function(){
                //    console.log("in to the hover function");
                //   $(this).css({color:"yellow"});
                //});
                console.log("reached the limit height now display the nav bar");
            }

            if ($(this).scrollTop() == 0) {
                $(".navbar").show();
                $(".letter").css({color: "white"});
                $(".navbar").css({background: "transparent"});

            }
            //else{
            //    $(".navbar").show();
            //    $(".letter").css({color:"white"});
            //    $(".navbar").css({background:"transparent"});
            //}
        })
    })();
    $("#myimage").click(function(event){
        console.log("enterd in to the my image container");
        evt = event || window.event;
        enableClick = document.elementFromPoint(evt.clientX ,evt.clientY);

        $(enableClick).click();
        //$(enableClick).hover();
    });




});
