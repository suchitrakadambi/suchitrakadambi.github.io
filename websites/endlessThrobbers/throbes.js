$(document).ready(function() {
    console.log("hey Iam ready");
    $("#removeInstruction").click(function () {
        event.preventDefault();
        console.log("buttin is clicked");
        $(".instruction").hide();
        $('body').on("click", function (event) {
        event.preventDefault();
        console.log("some one just clicked me");
        var random = generateRandomNumber();
        console.log("the random number generated is" + random);
        var arr = [createThrobes1, createThreedots, createBars,createThrobes2];
        var call = arr[random];
        console.log("the call we got is" + call);
        call(event);
    });
    });
    
});

function createBars(event){
    console.log("in the create bars dots");
    var xp = getposition(event).x;
    var yp = getposition(event).y;
    console.log("the x position :" +xp +"\n" + "the y position :" +yp);
    var bar1 = document.createElement('div');
    var bar2 = document.createElement('div');
    var bar3 = document.createElement('div');
    $(bar1).addClass('barone');
    $(bar1).css({"left":xp,"top":yp});
    $(bar2).addClass('bartwo');
    $(bar2).css({"left":xp+30,"top":yp});
    $(bar3).addClass('barthree');
    $(bar3).css({"left":xp+60,"top":yp});
    $('body').append(bar1)
        .append(bar2)
        .append(bar3);

}
    function createThreedots(event){
        console.log("in the three dots");
        var xp = getposition(event).x;
        var yp = getposition(event).y;
        console.log("the x position :" +xp +"\n" + "the y position :" +yp);
        var threedots = document.createElement('div');
        var threedotsTwo = document.createElement('div');
            $(threedotsTwo).addClass('threedotsTwoo theedotsanimation1');
        var threedotsThree = document.createElement('div');
        $(threedotsThree).addClass('threedotsTwoo theedotsanimation2');
        //$(threedots).append(threedotsTwo)
        //    .append(threedotsTwo);
        $(threedots).addClass('threedotsTwoo theedotsanimation3');
        $(threedots).css({"left":xp,"top":yp});
        $(threedotsTwo).css({"left":xp+15,"top":yp});
        $(threedotsThree).css({"left":xp+30,"top":yp});
        $('body').append(threedots)
            .append(threedotsTwo)
            .append(threedotsThree);
        }

    // ........
function createThrobes1(event){
    var xp = getposition(event).x;
    var yp = getposition(event).y;
    console.log("the x position :" +xp +"\n" + "the y position :" +yp);
    var throbe = document.createElement('div');
    $(throbe).addClass('throbes');
    $(throbe).css({"left":xp,"top":yp});
    $('body').append(throbe);
}
    function createThrobes2(event){
        var xp = getposition(event).x;
        var yp = getposition(event).y;
        console.log("the x position :" +xp +"\n" + "the y position :" +yp);
        var throbe2 = document.createElement('div');
        $(throbe2).addClass('throbestwo');
        $(throbe2).css({"left":xp,"top":yp});
        $('body').append(throbe2);
    }
    function createThrobes3(event,p){
        var xp = getposition(event).x+p;
        var yp = getposition(event).y+100;
        console.log("the x position :" +xp +"\n" + "the y position :" +yp);
        var throbe = document.createElement('div');
        $(throbe).addClass('throbes');
        $(throbe).css({"left":xp,"top":yp});
        $('body').append(throbe);
    }
    // get the click position
    function getposition(event){
        var _x = event.clientX;
        var _y = event.clientY;
        return {
            x : _x,
            y :_y
        }
    }
    function generateRandomNumber(){
        return Math.floor((Math.random() * 4));
    }
//});
