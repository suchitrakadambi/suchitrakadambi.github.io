/**
 * Created by skadambi on 8/31/16.
 */

$(document).ready(function () {
    var datawegot;
    $("#letsplay").click(function (event) {
        event.preventDefault();
        $("#externalcontent").addClass("show jumbotron");
        $("#letsplay").hide();

        //function start(){
        //    var wordsubmitted = $("#wordsubmit").val();
        //    console.log( " the word submitted to the input is "+ " "+wordsubmitted);
        //    initial = 3;
        //    if((initial >0) &&(compare(randomword(data) ,wordsubmitted))){
        //        // all the ajax code goes here
        //    }
        //    else{
        //        initial = initial-1;
        //    }
        //}
        // now we have to check the input value that is submitted ....

        $.ajax({
            url: 'wordslist1.txt',
            success: function (data) {
                var initial = 3;
                function start() {
                    $("#inputdata").val("");
                    $("#explanation").removeClass();
                    $("#explanation").addClass("hide");
                    $("#formdiv , #externalcontent,#score").addClass("show");
                    //$('#formdiv').addClass("show");
                    //$("#externalcontent").addClass("show");

                    console.log("the start function started");
                    var randomdata = randomword(data);
                    var datatopage = scramble(randomdata);
                    console.log("the data to page value is " + datatopage);
                    var joindata = datatopage.join(" ");
                    console.log("the joined data is "+ joindata);
                    $("#externalcontent").text(joindata);
                    $("form").submit(function (event) {
                        console.log("enterd in to the if condition");
                        var wordsubmitted = $("#inputdata").val();
                        event.preventDefault();

                        console.log(" the word submitted to the input is " + " " + wordsubmitted);

                        if (initial > 0) {
                            console.log("entered the initial condition");
                            //comparing the input value with the random word generated
                            if (randomdata === wordsubmitted) {
                                console.log("enterd in to if condition");
                                $("#explanation,#externalcontent").removeClass();
                                //$("#expanation").removeClass();
                                $("#formdiv").removeClass("show");
                                //$("#externalcontent").removeClass();
                                $("#formdiv,#externalcontent").addClass("hide");
                                //$("#formdiv").addClass("hide");
                                $("#explanation").addClass("show");
                                //$("#externalcontent").addClass("hide");
                                $("#explanation").text("Wow u have done a grat job Try the next word").css({fontSize:"30px",color:"white"});
                                console.log("words are compared and equal lets proceed to next word");
                                setTimeout(start, 3000);
                            } else {
                                event.preventDefault();
                                console.log("enterd into else condition");
                                $("#explanation,#externalcontent").removeClass();
                                $("#formdiv,#externalcontent").addClass("hide");
                                $("#formdiv").removeClass("show");
                                $("#explanation").addClass("show");
                                initial = initial-1;
                                //$("#number").text(initial).css({fontSize:"30px",color:"white"});
                                //console.log("the initial value is " + initial);
                                $("#explanation").text(" You have gone wrong but yet you can try the next word").css({fontSize:"30px",color:"white"});
                                //$("text").addClass("heading");
                                setTimeout(start, 3000);
                            }
                            //scramble(randomword(data));
                            //$("#externalcontent").text(scramble(randomword(data)));
                        }
                        else {
                            //initial = initial - 1;

                            console.log("the initial value now is" + " " + initial);
                            $("#explanation").text("game Over");
                            initial = 3;
                            //$("#number").text(initial).css({fontSize:"30px",color:"white"});
                            setTimeout(start,3000);
                        }
                    });
                }

                function randomword(data1) {
                    // to get the random data from the array of the input
                    var split = data1.split("\n");
                    var randomnumber = Math.floor(Math.random() * 10);
                    console.log("the random number generated is " + randomnumber);
                    var oneword = split[randomnumber];
                    console.log("after splitting" + oneword);
                    return oneword;
                }

                function scramble(data2) {
                    // making the random word in to the scrambled word
                    wordarr = data2.split("");
                    console.log("the word array formed with split function is   : " + " " + wordarr);
                    var scrambledword = wordarr.sort(function () {
                        return 0.5 - Math.random()
                    });
                    console.log("the scrambled word that is generated is  " + " " + scrambledword);
                    return scrambledword;

                }
                start();// calling the start function to start the program
            }
        });
    });
});



