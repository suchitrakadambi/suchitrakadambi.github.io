/**
 * Created by skadambi on 10/13/16.
 */
$(document).ready(function(){
    $("ul").append("<li class='Tile hide'>9</li>");
    var rcArr =[];
    var r =0;
    var c=0;
    var currentRow;
    var currentColoumn;
    $("li").each(function(i){
        console.log("enterd in to id loop");
        $(this).attr("id","mytile"+(i+1));

        rcArr[i] ={row :r,coloumn:c,hidden:false,id :$(this).attr("id")}
        if(c<=2 && r<=2){
            c++;
        }
        if(c>2 && r<=2){
            r++;
            c=0;
        }
    });
    console.log(rcArr[8].hidden = true);
    console.log("the row and coloumn in the array is");
    for(var k=0;k<=rcArr.length;k++){
        console.log(rcArr[k]);
    }

    $("li").click(function(event){
        var target = $(this).text();
        console.log(target);
        var targetid = event.target.id;
        console.log("the tile that is clicked is"+" "+targetid);
        $.each(rcArr,function(k, v){
            console.log("in the $ each");
            console.log("the k and v values are"+ k + v.id);
            if(v.id == targetid){
                console.log("the k value" + k + "the v value "+ v + "the row and coloumns of the target is"+ v.row + " "+ v.coloumn);
                currentRow = v.row;
                currentColoumn = v.coloumn;
                checkEmptyTile(currentRow+1,currentColoumn ,targetid);
                checkEmptyTile(currentRow-1,currentColoumn,targetid);
                checkEmptyTile(currentRow,currentColoumn+1,targetid);
                checkEmptyTile(currentRow,currentColoumn-1,targetid);
            }
        })

    });
    function checkEmptyTile(r,c,ti){
        for(var k=0;k<=rcArr.length;k++){
            console.log(rcArr[k]);
        }
        for(var q=0;q<rcArr.length;q++){
            console.log("in the check empty tile");
            console.log("the values are" + " "+ rcArr[q].hidden +" "+ q);
            if(rcArr[q].row == r && rcArr[q].coloumn ==c){
                console.log("the row and coloumns are eual to the given value"+ r,c);
                if(rcArr[q].hidden ==true ){
                    console.log("empty tile at row" + r + "and at coloumn" +c);
                    rcArr[q].hidden ="false";
                    var mytext =$("#"+ti).text();
                    console.log("the my text is"+mytext);
                    $("#"+rcArr[q].id).text(mytext);
                    console.log("the empty arr text value to be changed is"+ $("#"+rcArr[q].id).text());
                    $("#"+rcArr[q].id).removeClass("hide");
                    $("#"+rcArr[q].id).show();

                    for(var p=0;p<rcArr.length;p++){
                        console.log("enterd in to the second each");
                        if(rcArr[p].id == ti){
                            console.log("the true value index is"+ rcArr[p].hidden);
                            rcArr[p].hidden =true;
                            console.log("afetr the value setting"+rcArr[p].hidden);
                            $("#"+rcArr[p].id).addClass("hide");
                            console.log("hided");
                        }
                    }

                }
            }
        }
    }



});
