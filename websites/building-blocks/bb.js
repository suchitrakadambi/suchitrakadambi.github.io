/**
 * Created by skadambi on 8/16/16.
 */
$(document).ready(function(){
    $("div").click(function(){
        $("#bcheading").fadeOut();
    })
    for(i=0;i<=55;i++){
        $("#di"+i).draggable();
    }

});
