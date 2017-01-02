/**
 * Created by skadambi on 12/4/16.
 */
$("document").ready(function(){
    console.log("hey I am ready");
    $("#promtme").click(function(){
        console.log("hey promt me button is clicked");
        $(".inputclass").hide();
        var copy = $("#textid").val();
        console.log(copy);
        $("#teliprompt").css({visibility:"visible"});
        $("#teliprompt").text(copy);

        var lineheight = $("#teliprompt").css('line-height').split("px");
        console.log(lineheight);
        var mylenght = $("#teliprompt").height();
        console.log("my lenght is"+mylenght);
        var numberoflines =Math.round( mylenght/lineheight[0]);
        console.log("the number of lines is" +numberoflines);
        if(mylenght<100){
            console.log("in true if");
            $("#teliprompt").css({animationDuration:"30s"});
        }
        else{
            console.log("in else");
            $("#teliprompt").css({animationDuration:numberoflines*5+"s"});
        }
        var variab = Math.abs(mylenght);
        console.log(mylenght);
        $("body").css({backgroundColor:"rgb(128,64,0)"});
        $.keyframe.define({
            name: 'moveup',
            '0%':{

                'top':'500px'
            }
            ,'100%':{
                'top':"-"+variab+"px"
            }

        });
    })
});
