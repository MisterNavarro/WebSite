var positionOfStory = 0;
var validationTest = true;
var caketype;
//while certain cake is true run function until counter hits 0.
function uploadImages() {
 //loads up the images into the containers
 for (var i = 1; i < 4; i++) {
  var pictureElement = document.getElementsByTagName("img");
 pictureElement[i].src = "CakePortfolio/" + caketype + (i + positionOfStory) + ".jpg";
 }
  if (positionOfStory == limit) {
   
  }
}
//makes it so 
function imageselect0() {
 var bdaycake = "bdaycake";
 loadsTheImages(bdaycake);
}
function buttonclick(choice) {
 switch(choice.value) { 
  case "Birthday Cakes":
    caketype = "bdaycake";
    loadsTheImages(caketype);
    break;  
   case "Baby Shower Cakes":
    caketype = "bbcake";
    loadsTheImages(caketype);
    break;  
   case "Wedding Cakes":
    caketype = "wcake";
    loadsTheImages(caketype);
    break;  
   case "Other Cakes":
    caketype = "ocake";
    loadsTheImages(caketype);
    break;  
   case "CupCakes":
    caketype = "ccake";
    loadsTheImages(caketype);
    break;
  }
}
function rightArrow() {
 positionOfStory+= 1;
 loadsTheImages();
}
function leftArrow() {
 positionOfStory-= 1;
 loadsTheImages();
}
function createEventListeners() {
 //The events for the left arrow
 var leftarrow = document.getElementById("leftarrow");
 if (leftarrow.addEventListener) {
  leftarrow.addEventListener("click", leftArrow, false);
 } 
 else if (leftarrow.attachEvent) {
  leftarrow.attachEvent("onclick", leftArrow);
  }
 //The events for the right arrow
 var rightarrow = document.getElementById("rightarrow");
 if (rightarrow.addEventListener) {
  rightarrow.addEventListener("click", leftArrow, false);
 } 
 else if (rightarrow.attachEvent) {
  rightarrow.attachEvent("onclick", leftArrow); 
 }
 //grabs all the buttons
 var buttons = document.getElementsByName("buttons");
 if (buttons[0].addEventListener) {
  for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", buttonclick, false); 
  } 
 }
 else if (buttons[0].attachEvent) {
  for (var i = 0; i < buttons.length; i++) {
   buttons[i].attachEvent("onclick", buttonclick); 
  } 
 }
 }
function setUpPage() {
 createEventListeners();
 caketype = "bdaycake";
 limit = 16;
 positionOfStory = 0;
 uploadImages();
}
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} 
else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}