/**
 * Created by skadambi on 8/17/16.
 */
$(document).ready(function(){
    console.log("document ready ");
    $(window).click(function(){
        createsquare();
        console.log("entered in to the click function");
        //$("body").css("background-color" ,"red");
    });
    function createsquare(){
        console.log("enterd in to the create square function");
        var xp = getposition(event).x;
        var yp = getposition(event).y;
        var arr = [{w:20,h:20},{w:50,h:50},{w:5,h:5},{w:30,h:30}];
        var property = arr[randomnumber()];
        console.log("the property value is "+" "+property );
        console.log("the x and y co-ordinates are x :"+ xp +"y :" +yp);
        var newdiv = document.createElement("div");
        mycolor = randomcolor();
        $(newdiv).addClass("myclass");
        $(newdiv).css({"left":xp,"top":yp,"background-color":mycolor});
        $(newdiv).animate({"width" :property.w,"height":property.h,"opacity":0.5},1000);

        $("body").append(newdiv);
    }
    function getposition(event){
        var _x = event.clientX;
        var _y = event.clientY;
        return {
            x : _x,
            y :_y
        }
    }
    function randomnumber(){
        var num = Math.abs(Math.floor(Math.random()*3)+1);
        console.log(num);
        return num;
    }
    function randomcolor(){
        var x = Math.random().toString(16).slice(2,8);
        var y = "#" + x;
        return y;
    }
});
