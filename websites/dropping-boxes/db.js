/**
 * Created by skadambi on 8/31/16.
 */

$(document).ready(function(){

    for(i=0;i<16;i++){
        $(".maincontainer").append('<div class="spot" id="spot'+ i +'"></div>');
        function generatecolor(){
            var x =  Math.random().toString(16).slice(2,8);
            var y = "#"+x;
            return y;
        }
        $("#spot" + i).css({width:'102px',height:'100px',float:'left',backgroundColor:generatecolor()});
    }
    function randomnumber(){
        var randomNumber = Math.floor((Math.random() * 5)-1);
        var absoluteRandomNumber = Math.abs(randomNumber);
        return absoluteRandomNumber;
    }
    var arrayOfAnimations = ["example","example1","example2","example3"];

    $(document).off('click',"div").on('click',"div",function(){
        var x = $(this).attr('id');
        var y ="#"+x;
        console.log("The attribute value"+x);

        $(y).css({'animation-name':arrayOfAnimations[randomnumber()]});
        console.log("the random number generated" + randomnumber());
        setTimeout(function(){
            $(y).remove(arrayOfAnimations[randomnumber()]);


        })
        //$("div").off('click');
    })







});
