/**
 * Created by skadambi on 12/22/16.
 */
angular.module("calapp", [])
    .controller("calctrl", function ($scope) {
        console.log("in the controller");

        $scope.getinfo = function ($event) {
            console.log("in the function");
            //console.log($event);
            var res = $event.target.innerHTML;
            console.log(res);
            switch(res) {
                case "=":
                    var val = $("#result").text().trim("");
                    calculateAnswer(val);
                    break;
                case "AC":
                case "C":
                    $("#result").text(" ");
                    break;
                default:
                    $("#result").append(res);
            }

            function calculateAnswer(value){

                var reg = value.split("");
                var regop = value.split(/[0-9]/);
                var renum = new RegExp("^[0-9]");
                var reope = new RegExp("^[\+\*\-\/]");
                var newarr = [];
                console.log("helooooooo");
                console.log("the reg is");
                console.log(reg);
                console.log("the regop is");
                console.log(regop);
                var mynum = "";
                for (i = 0, k = 0, j = 0; i < reg.length; i++) {
                    console.log("in the loop");
                    if (renum.test(reg[i])) {
                        console.log(i);
                        console.log("yes integer" + reg[i]);
                        mynum = Number(mynum) + reg[i];
                        newarr[k] = mynum;
                    }
                    if (reope.test(reg[i])) {
                        console.log(i);
                        console.log("yes operator");
                        myope = reg[i];
                        k = k + 1;
                        console.log("the ope we got is" + myope);
                        newarr[k] = myope;
                        k = k + 1;
                        mynum = "";
                    }
                }
                console.log("my new arr  is" + newarr);
                console.log("the eval value is");
                var mystr = " ";
                for (var p = 0; p < newarr.length; p++) {
                    mystr = mystr + newarr[p];
                }

                try {
                    var finalresult = eval(mystr);
                    console.log("the resulted mystr is" + finalresult);
                    if (isNaN(finalresult)) {
                        alert("something not right enter valid data");
                        $("#result").text("");

                    }
                    else {
                        $("#result").text(finalresult);
                    }
                }
                catch (err) {
                    alert("enter valid data");
                    $("#result").text("");
                }
            }
        }

    });
