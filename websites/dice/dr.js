/**
 * Created by skadambi on 9/7/16.
 */
$(document).ready(function(){
    function start(){

        var dice1;
        var dice2;
        $("#h1").text("Shake.. Shake.. Shake..");
        $("#cont").addClass("shake");
        setTimeout(function(){
            $("#cont").removeClass("shake");
        },500);
        //dice1 = randomnumber();
        //dice2 = randomnumber();
        var val1 = displayresult("#r1");
        var val2 = displayresult("#r2");
        result = val1+val2;
        console.log("the net result afer adding is" + result);
        $("#total").text("RESULT : "+result).css({fontSize:"50px",color:"red"});
    }
    setTimeout(function(){
        $(".button").click(function(){
            //$(this).off('click');
            start();
        });
    },200);

    function displayresult(param){
        console.log("entered in to the display result function");
        //var all = $(param).find(".r11");
        var all = $(param).children();
        var one = param +"4";
        var two  = param +"1"+","+param+"7";
        var three = param + "0"+","+param+"4"+","+param+"8";
        var four = param+"0"+","+param+"2"+","+param+"6"+","+param+"8";
        //var five = param +"4"+","+param+"0"+","+param+"2"+","+param+"6"+","+param+"8";
        var five = one+","+four;
        var six =five+param+"1"+","+param+"3" +","+param+"6";
        var roll = randomnumber();
        console.log("the random number generated is "+ roll);
        if(roll === 1){
            $(all).addClass("hide");
            //a = param+"7";
            //b = param+"1";
            $(one).removeClass("hide");
            $(one).show();
        }
        if (roll === 2){
            $(all).addClass("hide");
            //$(param+"4").removeClass("hide");
            //$(param+"4").show();
            $(two).removeClass("hide");
            $(two).show();
        }
        if(roll === 3){
            $(all).addClass("hide");
            $(three).removeClass("hide");
            $(three).show();
        }
        if(roll ===4){
            $(all).addClass("hide");
            $(four).removeClass("hide");
            $(four).show();
        }
        if(roll === 5){
            $(all).addClass("hide");
            $(five).removeClass("hide");
            $(five).show();
        }
        if(roll ===6){
            $(all).addClass("hide");
            $(six).removeClass("hide");
            $(six).show();
        }
        return roll;
    }
    function randomnumber(){
        var num = Math.abs(Math.floor(Math.random()*5)+1);
        console.log(num);
        return num;
    }

});
