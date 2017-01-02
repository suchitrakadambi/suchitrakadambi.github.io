/**
 * Created by skadambi on 7/26/16.
 */
$(document).ready(function(){
  var currentDay = (new Date).getDay();
  //var currentDay = 7;
  // var x = 2;
  console.log(currentDay);
  var currentPosition = currentDay +1;
  console.log(currentPosition);
  $('p:nth-child('+currentPosition+')').addClass("add");
  //$('div ').text("this is trial").addClass("extra");
  //$('p:nth-child('+ x +')').text("this is trial").addClass("extra")
  var arr =['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','saturday'];
  $(" p > span").text(arr[currentDay]).addClass("content");
});
