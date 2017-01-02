/**
 * Created by skadambi on 8/15/16.
 */
$(document).ready(function(){
    var clicked;
    var comsel;

    $(".button").on('click',start);
    function start(){
        $(".button").off('click');

        console.log("in the start function" + clicked);
        $("#"+comsel+"img").hide();
        $("#right"+clicked+"img").hide();
        $("#left-fist").show();
        $("#right-fist").show();
        clicked = this.id;

        countDown();
    }
    function countDown() {
        var i = 3;

        count();

        function count() {
            $('#left-fist').addClass('imgcontainer');
            $('#start-content').text(i);


            if (i == 0) {
                display();
            } else {
                i -= 1;
                setTimeout(count, 500);
            }
        }
    }

    function display(){
        //event.preventDefault();
        console.log("the button clicked is" + clicked);
        comsel = computer();
        $("#left-fist").hide();
        $("#right-fist").hide();
        $("#"+comsel+"img").show();
        $("#"+"right"+clicked+"img").show();
        function computer(){
            var imgarr = ["rock","paper","scissors"];
            var randomNum = Math.abs(Math.floor((Math.random() * 4)-1));
            var computerselected = imgarr[randomNum];
            console.log("the random number generated is"+randomNum+"  "+"the image selected is "+computerselected);
            return computerselected;
        }
        //comsel = computer();
        function compare(cs,cli){
            console.log("in the compare function"+" " + "computerselected is"+" "+cs +"the clicked item is"+" " +cli);
            if((cli === cs)){
                console.log("tie try again");
                $("#start-content").text("tie try again");
            }
            else if(((cli === "rock")&&(cs==="paper")) ||((cli === "rock")&&(cs === "scissors")) || ((cli === "paper")&&(cs === "rock"))|| ((cli === "scissors")&&(cs === "paper"))){
                console.log("you win");
                $("#start-content").text("you win");
            }
            else {
                console.log("you loose try again");
                $("#start-content").text("you loose try again");
            }
        }
        compare(comsel,clicked);
        //function count(){
        //    for(i=3;i>0;i--){
        //
        //    }
        //}
        setTimeout(function () {

            $(".button").on('click',start);
        },400)


    }






});


