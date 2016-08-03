/**
 * Created by skadambi on 8/3/16.
 */
$(document).ready(function(){
    var xp=0;
    var yp=0;
    var mouseX = 0;
    var mouseY=0;
    // creating the countinious 20 divs
    for(i=0;i<20;i++){
        var createddiv =  document.createElement("div");
        $("#mydiv").append(createddiv);
        createddiv.style.height= randomSize();
        createddiv.style.width = randomSize();
        createddiv.style.borderRadius="50px";
        createddiv.style.backgroundColor = randomColor();
        createddiv.setAttribute("id","div"+i);
        createddiv.setAttribute("class","myclass");
    }
    function randomColor(){
        var x = Math.random().toString(16).slice(2,8);
        var y = "#" + x;
        return y;
    }
    function randomSize(){
        var x = Math.floor((Math.random() * 10)+20);
        var y = x+"px";
        return y;
    }

    $(document).mousemove(function(event){
        mouseX= event.pageX;
        mouseY= event.pageY;
    });
    for(i=0;i<20;i++){
        movement("#div"+i , Math.floor((Math.random() * 10)*100));
    }


    function movement(element,speed){
        var loop = setInterval(function(){
            xp += (mouseX-xp)/speed;
            yp += (mouseY-yp)/speed;
            $(element).css({left:xp,top:yp});
            console.log(element+ " " + xp + "" +yp);
            console.log(speed);
        },30);
    }
    //var loop = setInterval(function(){
    //    xp += (mouseX-xp)/20;
    //    yp += (mouseY-yp)/20;
    //    $("#div0").css({left:xp,top:yp})
    //},30);
    //  var loop2 = setInterval(function(){
    //      xp += (mouseX-xp)/50;
    //      yp += (mouseY-yp)/50;
    //      $("#div1").css({left:xp,top:yp})
    //  },30);
    //  var loop3 = setInterval(function(){
    //      xp += (mouseX-xp)/10;
    //      yp += (mouseY-yp)/10;
    //      $("#div2").css({left:xp,top:yp})
    //  },30)
});
