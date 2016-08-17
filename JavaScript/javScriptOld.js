//SELECT(R,S) ARE MY SELECT ELEMENTS
var selectR = document.getElementById("selectRound");
var selectS = document.getElementById("selectSquare");
//CAKE(R,S) ARE MY CAKE RADIO BUTTONS
var cakeR = document.getElementById("Round");
var cakeS = document.getElementById("Square");
//BUTTERCREAM/FONDANT ARE MY CAKE TYPE RADIO BUTTONS
var cakeB = document.getElementById("Buttercream");
var cakeF = document.getElementById("Fondant");
//FRUIT FILLING/FONDANTCO/CUPCAKES ARE MY INPUTS
var fruitfilling = document.getElementById("FruitFilling");
var fondantCO = document.getElementById("CutOuts");
var cupcakes = document.getElementById("Cupcakes");
//MY TOTAL INPUT
var caketotalE = document.getElementById("thetotal");
var caketotal = 0;
//FUNCTION TO RESET MY FORM
function formreset() {
selectS.style.visibility = "hidden";
selectR.style.visibility = "hidden";
cakeR.style.display = "none";
cakeS.style.display = "none";
labelR.style.display = "none";
labelS.style.display = "none"
cakeR.checked = false;
cakeS.checked = false;
cakeB.checked = false;
cakeF.checked = false;
selectR.selected = false;
selectS.selected = false;
fruitfilling.value = 0;
fondantCO.value = 0;
cupcakes.value = 0;
caketotalE.value = "$0.00";
caketotal = 0;
}
//SHOWS THE ROUND/SQUARE RADIO BUTTONS
function showRS() {
 cakeR.style.display = "inline-block";
 cakeS.style.display = "inline-block";
 document.getElementById("labelS").style.display = "inline-block";
 document.getElementById("labelR").style.display = "inline-block";
 cakeS.defaultchecked = "false";
 cakeR.defaultchecked = "false";
}
//This will show the select element for round and hide the other select element
function showRound() {
 selectS.style.visibility="hidden";
 selectR.style.visibility="visible";  
}
//this will show the select element for square and hide the other select element
function showSquare() {
 selectR.style.visibility="hidden";
 selectS.style.visibility="visible";
}
//ADDS THE VALUES ALL TOGETHER
function showtotal() {
 caketotal = 0;
 checkInput();
//IF/ELSE TO CALCULATE CAKE SIZE & TYPE. BOTH HAVE FUNCTIONS
if (cakeR.checked) {
 solveValueR();
}
else if (cakeS.checked) {
 solveValueS();
}
else {
	caketotal = 0;
}
 //GETS THE VALUE OF THE 3 INPUTS AND ADDS THEM TO THE TOTAL
caketotal+= (fruitfilling.value * 5);
caketotal+= (fondantCO.value * 5);
caketotal+= (cupcakes.value * 20);
caketotalE.value = "$" + caketotal + ".00";
}
function checkInput() {
 //CHECKS IF CUPCAKES IS NEGATIVE OR LETTERS
 try {
  if (cupcakes.value < 0)
   throw "a positive number";
  if (isNaN(cupcakes.value))
   throw "only numbers";}
 //DEPENDING ON THE ERROR IT SENDS A RESPOND AND RESETS THE VALUE
   catch(numbererror) {
   window.alert("Please provide " + numbererror);
     cupcakes.value = "0";}
   //CHECKS IF FRUIT FILLING IS NEGATIVE OR LETTERS
   try {
  if (fruitfilling.value < 0)
   throw "a positive number";
  if (isNaN(fruitfilling.value))
   throw "only numbers";}
  //DEPENDING ON THE ERROR IT SENDS A RESPOND AND RESETS THE VALUE
   catch(numbererror) {
   window.alert("Please provide " + numbererror)
    fruitfilling.value = "0";}
     //CHECKS IF FONDANT CUTOUTS IS NEGATIVE OR LETTERS
 try {
  if (fondantCO.value < 0)
   throw "a positive number";
  if (isNaN(fondantCO.value))
   throw "only numbers";}
  //DEPENDING ON THE ERROR IT SENDS A RESPOND AND RESETS THE VALUE
  catch(numbererror) {
   window.alert("Please provide " + numbererror);
    fondantCO.value = "0";}
}
//ROUND FUNCTION
function solveValueR() {
 //MAKES A VARIABLE TO HOLD THE SELECT VALUE FOR ROUND
 var round = parseInt(selectR.value);
 //CHECKS TO SEE IF BUTTERCREAM WAS CHECKED. IF SO TOTAL IS CORRECT
 if (cakeB.checked) {
  caketotal = round;
 }
 //ELSE FONDANT WAS CHOSEN & ADDS THE CALCULATIONS DIFFERENCE
 else if (cakeF.checked) {
  if (round < 60) {
   caketotal = (round + 10);
  }
  //ELSE IF ITS HIGHER THEN 60 THEN ADD 25 TO THE VALUE THEN TO THE
 else if (round > 60) {
   caketotal = (round + 25);
  }
  //IF NEITHER THEN ADD 15 
 else {
   caketotal = (round + 15);
  }
 }
 else {
	 caketotal = 0;
 }
}
//FUNCTION FOR SQUARE CAKES
function solveValueS() {
 //CONVERTED THE SELECT SQUARE ELEMENT TO INTEGER
 var square = parseInt(selectS.value);
 //IF SQUARE WAS SELECTED & BUTTERCREAM WAS SELECTED THEN ADD SELECTED VALUE TO TOTAL
 if (cakeB.checked) {
  caketotal = square;
 }
 //IF NOT BUTTERCREAM THEN FONDANT. IT THEN CHECKS TO SEE IF VALUE IS LESS THAN 70 IF SO ADDS THE 10 TO THE VALUE AND ADDS IT TO THE CAKETOTAL.
 else if (cakeF.checked){
  if (square < 70) {
  caketotal = (square + 10);
  }
 //ELSE ADD 20 TO THE VALUE AND THEN TO THE TOTAL.
 else {
  caketotal = (square + 20);
  }
 }
 else {
	 caketotal = 0;
 }
}