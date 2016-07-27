/**
 * Created by skadambi on 7/17/16.
 */
function changepic1(){
  var image = document.getElementById("change2");
  var para = document.getElementById("changepara");
  var heading =document.getElementById("changeheading");
  if(image.src.match("orange_door")){
    image.src ="orange_door_fire.png";
    para.innerHTML = "I opened the Orange Door which held a BAD THING.<br>Now if you want to switch you can choose the Green Door<br>or you can keep your first choice and open the Orange Door.<br>";
    heading.innerHTML ="You Picked the Blue Door!";
    document.getElementById("change1").onclick = function(){
      var changeelement = document.createElement("iframe");
      changeelement.id ="changeele";
      changeelement.src ="https://www.youtube.com/embed/oQxTiq_IM0U";
      var target = document.getElementById("change1");
      var parentDiv = target.parentNode;
      console.log(parentDiv);
      heading.innerHTML="YOU LOSE!";
      para.innerHTML ="Ouch! Too bad. Here is your BAD THING!";
      parentDiv.replaceChild(changeelement,target);
      //target.replaceChild(changeelement ,target);
    }
    document.getElementById("change3").onclick = function(){
      var changeelement = document.createElement("iframe");
      changeelement.id ="changeele";
      changeelement.src ="https://www.youtube.com/embed/fzzjgBAaWZw";
      var target = document.getElementById("change3");
      var parentDiv = target.parentNode;
      console.log(parentDiv);
      heading.innerHTML="YOU WIN!";
      para.innerHTML ="Booyah! Here is your AWESOME THING!";
      parentDiv.replaceChild(changeelement,target);
      //target.replaceChild(changeelement ,target);
    }
  }
  else
    image.src ="orange_door.png";
}

function changepic2(){
  var image = document.getElementById("change1");
  var para = document.getElementById("changepara");
  var heading =document.getElementById("changeheading");
  if(image.src.match("blue_door")){
    image.src="blue_door_fire.png";
    para.innerHTML = "I opened the Blue Door which held a BAD THING.<br>Now if you want to switch you can choose the Green Door<br>or you can keep your first choice and open the Blue Door.<br>";
    heading.innerHTML ="You Picked the Orange Door!";
    document.getElementById("change2").onclick = function(){
      var changeelement = document.createElement("iframe");
      changeelement.id ="changeele";
      changeelement.src ="https://www.youtube.com/embed/oQxTiq_IM0U";
      var target = document.getElementById("change2");
      var parentDiv = target.parentNode;
      console.log(parentDiv);
      heading.innerHTML="YOU LOSE!";
      para.innerHTML ="Ouch! Too bad. Here is your BAD THING!";
      parentDiv.replaceChild(changeelement,target);
      //target.replaceChild(changeelement ,target);
    }

    document.getElementById("change3").onclick = function(){
      var changeelement = document.createElement("iframe");
      changeelement.id ="changeele";
      changeelement.src ="https://www.youtube.com/embed/fzzjgBAaWZw";
      var target = document.getElementById("change3");
      var parentDiv = target.parentNode;
      console.log(parentDiv);
      heading.innerHTML="YOU WIN!";
      para.innerHTML ="Booyah! Here is your AWESOME THING!";
      parentDiv.replaceChild(changeelement,target);
      //target.replaceChild(changeelement ,target);
    }

  }
  else
    img.src="blue_dooe.png"
}

function changepic3(){
  var image = document.getElementById("change2");
  var para = document.getElementById("changepara");
  var heading =document.getElementById("changeheading")
  if(image.src.match("orange_door")){
    image.src ="orange_door_fire.png";
    para.innerHTML = "I opened the Orange Door which held a BAD THING.<br>Now if you want to switch you can choose the Blue Door<br>or you can keep your first choice and open the Green Door.<br>";
    heading.innerHTML ="You Picked the Green Door!";
    document.getElementById("change1").onclick = function(){
      var changeelement = document.createElement("iframe");
      changeelement.id ="changeele";
      changeelement.src ="https://www.youtube.com/embed/oQxTiq_IM0U";
      var target = document.getElementById("change1");
      var parentDiv = target.parentNode;
      console.log(parentDiv);
      heading.innerHTML="YOU LOSE!";
      para.innerHTML ="Ouch! Too bad. Here is your BAD THING!";
      parentDiv.replaceChild(changeelement,target);
      //target.replaceChild(changeelement ,target);
    }
    document.getElementById("change3").onclick = function(){
      var changeelement = document.createElement("iframe");
      changeelement.id ="changeele";
      changeelement.src ="https://www.youtube.com/embed/fzzjgBAaWZw";
      var target = document.getElementById("change3");
      var parentDiv = target.parentNode;
      console.log(parentDiv);
      heading.innerHTML="YOU WIN!";
      para.innerHTML ="Booyah! Here is your AWESOME THING!";
      parentDiv.replaceChild(changeelement,target);
      //target.replaceChild(changeelement ,target);
    }


  }
  else
    image.src ="orange_door.png";

}
