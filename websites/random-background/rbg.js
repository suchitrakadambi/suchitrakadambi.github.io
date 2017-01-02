/**
 * Created by skadambi on 8/16/16.
 */
$(document).ready(function(){
    console.log("document loaded");
    function randomcolor(){
        var x = Math.random().toString(16).slice(2,8);
        var y = "#" + x;
        return y;
    }
    $("div").mouseover(function(){
        console.log("entered in to the mouse over function");
        var color = randomcolor();
        $(this).css("background-color",color);



    })
});

