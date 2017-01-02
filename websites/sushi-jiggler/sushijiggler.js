/**
 * Created by skadambi on 8/3/16.
 */
$(document).ready(function(){
    $("#sead,#sead1,#sead2,#sead3,#sead4,#sead5,#sead6,#sead7,#sead8,#sead9").on("click",function(){
        event.stopPropagation();
        var targetid = event.target.id;
        var target = event.target;
        console.log("target value" + " " +target);
        console.log("target id value" + " " +targetid);
        var x = (Math.floor(Math.random() *4));
        console.log(x);
        var classarray =["searotate" ,"seashake","seashakeV","seasemi"];
        console.log(classarray);
        console.log(classarray[x]);
        var y = "#"+targetid;
        console.log("after adding #" +" " +y);
        $(target).addClass(classarray[x]);
        setTimeout(function(){
            $(target).removeClass();
        },2000)

    });

});
