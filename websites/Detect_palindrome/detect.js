$(document).ready(function(){
    $("#submit").click(function(){
        start();
});
$("#resultbtn").click(function(){
    console.log("back to start ");
     $("#resultarea,#resultbtn").css({visibility:"hidden"});
     $(".inputcontent,button ,.examplecontent").show();
     $(".inputcontent").val("");
})
function start(){
var content = $(".inputcontent").val();
        if(content){
        paraToWords(content);
    }
    else{
        alert("Please Enter the valid input data");
    }
}
    
    function paraToWords(param){
         var words = param.split(" ");
          var result = checkPalindrome(words);
         var gettheinput = $(".inputcontent").val();
          var resultjoin = result.join("|");
         var regexp = new RegExp("\\b(" + resultjoin + ")\\b", "gi");
          $(".inputcontent,button ,.examplecontent").hide();
        $("#resultarea,#resultbtn").css({visibility:"visible"});
          $("#resultarea").html(gettheinput.replace(regexp, "<span>$1</span>"));
          $("#resultbtn").show();
         
    }
    function checkPalindrome(param){
        var resultArr = [] ,j=0;
        for(var i=0;i<param.length;i++){
            var currentWord = param[i].toLowerCase();
             var reverse = currentWord.split("").reverse().join("");
             if(currentWord == reverse){
                 console.log("Hey we got the palindrome");
                 console.log(currentWord);
                 resultArr[j] = currentWord;
                 j++
             }
        }
        return resultArr;
    }
});