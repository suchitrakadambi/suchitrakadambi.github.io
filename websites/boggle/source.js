$(document).ready(function () {
    var data = ["aaafrs",
        "aaeeee",
        "aafirs",
        "adennn",
        "aeeeem",
        "aeegmu",
        "aegmnn",
        "afirsy",
        "bjkqxz",
        "ccenst",
        "ceiilt",
        "ceilpt",
        "ceipst",
        "ddhnot",
        "dhhlor",
        "dhlnor",
        "dhlnor",
        "eiiitt",
        "emottt",
        "ensssu",
        "fiprsy",
        "gorrvw",
        "iprrry",
        "nootuw",
        "ooottu"
    ];
    var rcArr = [];
    var selected = [];
    var r = 0;
    var c = 0;
        var finalscorelist =[];
    for (i = 0; i < 25; i++) {
        createDynamicDiv((i + 1));
        var value = getDiceValue(data, i);
        var strToArr = convertStringToArr(value);
        var diceAlphaSelected = diceVlue(strToArr);
        $(".button" + (i + 1)).text(diceAlphaSelected);
    }
    $("button").each(function (i) {
        $(this).attr("id", "btn" + ("_" + r + "_" + c));
        if (c <= 5 && r <= 5) {
            c++;
        }
        if (c >= 5 && r <= 5) {
            r++;
            c = 0;
        }
        rcArr[i] = { row: r, coloumn: c, id: $(this).attr("id") }

    })

    $(".MainDiv >button").click(function (event) {
        var selected = selectdice(event.target.id);

    })
    $(".btn >button").click(function (event) {
        event.preventDefault();
       
         var res = currentWordList(selected);
         finalscorelist.push(res);
        console.log(finalscorelist);
        totalscore(finalscorelist);
        selected.length = 0;
        $(".MainDiv >button").css({ backgroundColor: "white" });
    })


    function createDynamicDiv(param) {
        var button = document.createElement("button");
        button.className = "button" + param;
        $(".MainDiv").append(button);
        $(button).addClass("style");
    }
    function RandomNumber() {
        var x = Math.floor((Math.random() * 5) + 1);
        return x;
    }
    function getDiceValue(param, point) {
        return param[point];
    }
    function convertStringToArr(val) {
        val = val.split("");
        return val;
    }
    function diceVlue(param) {
        var selectAlpha = RandomNumber();
        return param[selectAlpha];

    }
    function selectdice(param) {
        console.log("in the select dice function");
        if ($.inArray(param, selected) !== -1) {
            //selected remove....
            checkToDeselect(param);
            clearAndUpdate(selected);
        } else {
            if (selected.length == 0) {
                selected.push(param);
                updateCurrentWord(selected, param);
                $("#" + param).css({ backgroundColor: "#ACCEEC" });
            } else {
                // check for the neighbouring dice
                //    checkToDeselect(param);
                var res = param.split("_");
                console.log(res);
                row = Number(res[1]);
                col = Number(res[2]);
                var neighbours = ["btn" + "_" + (Number(row - 1)) + "_" + (Number(col)),
                "btn" + "_" + (Number(row + 1)) + "_" + (Number(col)),
                "btn" + "_" + (Number(row)) + "_" + (Number(col - 1)),
                "btn" + "_" + (Number(row)) + "_" + (Number(col + 1)),
                "btn" + "_" + (Number(row - 1)) + "_" + (Number(col - 1)),
                "btn" + "_" + (Number(row + 1)) + "_" + (Number(col - 1)),
                "btn" + "_" + (Number(row - 1)) + "_" + (Number(col + 1)),
                "btn" + "_" + (Number(row + 1)) + "_" + (Number(col + 1))
                ];
                for (var i = 0; i <= neighbours.length; i++) {
                    if ($.inArray(neighbours[i], selected) == -1) {
                        console.log("selected array is not near by");
                    } else {
                        selected.push(param);
                        $("#" + param).css({ backgroundColor: "#ACCEEC" });
                        break;
                    }
                }
                updateCurrentWord(selected, param)

            }
        }

        function updateCurrentWord(selected, currentDice) {
            $("#currnetword").append($("#" + selected[selected.length - 1]).text());
        }
        return selected;


    }
    function checkToDeselect(param) {
        if (param == selected[selected.length - 1]) {
            $("#" + param).css({ backgroundColor: "white" });
            selected.pop();
        }
        else {
            console.log("cannot deselect the element");
        }

    }
    function clearAndUpdate(selected) {
        $("#currnetword").text(" ");
        for (var i = 0; i < selected.length; i++) {
            $("#currnetword").append($("#" + selected[i]).text());
        }



    }

    // updat the board 
    function currentWordList(selectedArr) {
        var resulWord = selectedArr;
        var markup = []
        var scorelist;
        $.each(selectedArr, function (index, value) {
            markup[index] = $("#" + value).text();

        })
        var scoreval = markup.length;
        switch (scoreval) {
            case 1:
            case 2:
                score = "0";
                appendVale(score, markup);
                break;
            case 3:
            case 4:
                score = "1"
                appendVale(score, markup);
                break;

            case 5: score = "2"
                appendVale(score, markup);
                break;
            case 6: score = "3"
                appendVale(score, markup);
                break;
            case 7: score = "5"
                appendVale(score, markup);
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25: score = "11"
                appendVale(score, markup);
                break;

        }

        function appendVale(score, markup) {
            $(".table").append('<tr><td>' + markup.join("") + '</td><td>' + score + '</td></tr>');
            scorelist= score; 
        }

        
        $("#currnetword").append().text(" ");
        return scorelist;
    }
    function totalscore(list){
        console.log(list);
        var res=0;
        for(var i=0;i<list.length;i++){
           res = Number(res) +Number(list[i]);
        }
        console.log(res);
          $("#scoreval").text(res);
          $("table > tfoot >tr>td").css({ backgroundColor:"#ACCEEC",fontWeight:"bold" });
    }
})