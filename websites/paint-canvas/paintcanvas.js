/**
 * Created by skadambi on 8/15/16.
 */
$(document).ready(function(){
    var capturecolor = "whitecolor";

    $("button").click(function(event){
        event.stopPropagation();
        var target = event.target.id;
        console.log(target);
        var y = target.toString();
        console.log("converting to sting" + y);
        if(target === "red"){
            console.log( " enterd in to if red color");
        }
        capturecolor = y +"color";
    });

    console.log("captured color is " + capturecolor);
    $("div").click(function(event){
        event.stopPropagation();
        var filltarget = event.target;
        var filltargetid = event.target.id;
        console.log(filltarget);
        //console.log(filltarget);
        console.log(filltarget.id);
        console.log(capturecolor);
        var currentclass =  $("#" + filltargetid).attr('class');
        console.log(currentclass);
        if(currentclass){
            $(filltarget).removeClass();
            $(filltarget).addClass(capturecolor);
        }
        else{
            $(filltarget).addClass(capturecolor);
        }









    });


});
