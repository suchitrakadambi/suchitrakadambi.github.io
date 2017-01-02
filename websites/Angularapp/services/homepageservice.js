/**
 * Created by skadambi on 9/7/16.
 */
app.factory("homepageservice",function(){
    var validUser ={};

    validUser.check = function(data,myarr){
        console.log("the data that recieved int he service is " +" " + data);
        console.log("the array value i have received is" + myarr);
        var name = data.firstName;
        console.log("the name that received is" + name);
        result = myarr.find(name);
        console.log("the result is"+ result);

    };
    return validUser;
});
