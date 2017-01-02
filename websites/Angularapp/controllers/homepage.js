/**
 * Created by skadambi on 9/7/16.
 */
app.controller("homepagectrl",['$scope','$location',function($scope,$location) {
var myresult ;
    $scope.userinfo = {
        firstName: "",
        email: "",
        pwd: ""
    };
    $scope.arr = users;

    $scope.registerUser = function (info) {
        $scope.arr.push(angular.copy(info));
        delete $scope.userinfo;
    };

    $scope.find = function (uinfo) {
        var candidate;
        var usermail = uinfo.email;
        var userpwd = uinfo.pwd;
console.log("the value of the candidate out of for loop" + candidate);
        if((uinfo.email.length<1)&&(uinfo.pwd.length<1)){
            console.log("no valid input has given");
            $location.url('/error');
        }
        console.log("the username from the sign in is " + usermail);
        console.log("the user password is"+ userpwd);
        for(var i=0;i<$scope.arr.length;i++){
            //console.log($scope.arr[i].firstName);
            if((usermail === $scope.arr[i].email)&&(userpwd === $scope.arr[i].pwd)){
                console.log("the candidate available");
                $scope.userinfo.firstName = $scope.arr[i].firstName;
                console.log("the users first name is" + $scope.userinfo.firstName);
                candidate=true;
                console.log("the value of the candidate innnnn for loop" + candidate);
                myresult = JSON.stringify($scope.userinfo);
                console.log("the result is" +myresult);
                $location.url('/welcome');
                return true;
            }
            else{
                $location.url('/error');
            }

        }

    }
}])

var users = [];
