/**
 * Created by skadambi on 9/9/16.
 */
$(document).ready(function(){
    var count = 1;
    var avg =0;
    $("#start").click(start);
    function start(){
        $("#main").removeClass("hide");
        $(".c").hide();
        console.log("new window");
        $("#main").show();
        $(document).on("click",countClick);
        setTimeout(displayResult,30000);

    }
    function countClick(){
        count = count+1;
        console.log("the total counts are " + count);
        $(".count").text(count);
        avg = Math.round((count / 30)*Math.pow(10,2))/Math.pow(10,2);
    }
    function displayResult(){
        console.log("enterd in to the display result function");
        $("#main").hide();
        $("#result ,#btn").removeClass("hide");
        $("#result,#btn").show();
        $("#result").html("<h1>Time's Up ! <br></h1>"+"The Total no. of clicks is :"+count +"<br><br>That's "+" " +avg+" "+"clicks per second "+"<br><br>").addClass("res");
    }
    function restart(){
        $(".c").show();
        $("#btn,#result").hide();

    }
    $("#btn").click(restart);
});
