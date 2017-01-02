/**
 * Created by skadambi on 8/15/16.
 */
/**
 * Created by skadambi on 5/20/16.
 */
$(document).ready(function(){
    //var bb = document.getElementsById("bal");
    var x = document.getElementsByClassName("ball");
    var y = $(x).css('animation');
    console.log("css property " + y);
    var w =  y.split(' ');
    var z = w[1];
    var q = z.split('s');
    console.log("this is the q value "+ q);
    var d = q[0];
    console.log("this is the d value "+d);
    //d=1.5;
    //var z = w.split('bounce');
    console.log("after splitting" + " "+z);
    //var w = z.split('bounce s');
    console.log( w);

    console.log("document loaded");
    var arr = ["The New Game Started :) ","Excellent !!!","Awesome !!! " ,"Fantastic !!! ","Marvelous !!! ","Nowords u Rock !!! ","there is no one to stop u !!!"];
    //var value =["3.5","2.5","1.5","0.5"];
    var value = parseFloat(d);
    var click = 0;
    console.log("outloop"+ " " + click);
    $("#bal").click(speed);
    function start(){
        console.log("in the start function");
        $("#bal").hide();
        $("#text").show();
        $("#text").text("The New Game Started :)");
        click = -1;
        value = parseFloat(d);
        speed();

    }
    function speed(){
        if(click === 6){
            $("#bal").hide();
            $("#text").show();
            console.log("in if loop");
            $(text).text("You Win");
        }
        else{
            $("#bal").hide();
            $("#text").show();
            setTimeout(function(){
                $("#bal").show();
                $("#text").hide();
            },1000);

            console.log("the value of click is " +value );
            //var  value = "1.5";

            var d = parseFloat("1.5");
            $(".ball").css('animation-duration' ,value-1 +'s');
            //$("#bal").animate({cssproperty : value},1000);
            console.log("inloop" + " " +click);
            click=click+1;
            value = value-1;
            console.log("present array index" + " "  +arr[click]);
            $(text).text(arr[click]);
        }

    }


    $("#start").click(function(){
        console.log("in the start button click function");
        setTimeout(function(){
            console.log("in the set time out function");
            start();
        },500)
    })
});

