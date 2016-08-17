var caketotal = 0;
//FUNCTION TO RESET MY FORM
function formreset() {
document.getElementById("selectSquare").style.visibility = "hidden";
document.getElementById("selectRound").style.visibility = "hidden";
document.getElementById("Round").style.display = "none";
document.getElementById("Square").style.display = "none";
labelR.style.display = "none";
labelS.style.display = "none"
document.getElementById("Round").checked = false;
document.getElementById("Square").checked = false;
document.getElementById("Buttercream").checked = false;
document.getElementById("Fondant").checked = false;
document.getElementById("selectRound").selected = false;
document.getElementById("selectSquare").selected = false;
document.getElementById("FruitFilling").value = 0;
document.getElementById("CutOuts").value = 0;
document.getElementById("Cupcakes").value = 0;
document.getElementById("thetotal").value = "$0.00";
caketotal = 0;
}
//SHOWS THE ROUND/SQUARE RADIO BUTTONS
function showRS() {
 document.getElementById("Round").style.display = "inline-block";
 document.getElementById("Square").style.display = "inline-block";
 document.getElementById("labelS").style.display = "inline-block";
 document.getElementById("labelR").style.display = "inline-block";
 document.getElementById("Square").defaultchecked = "false";
 document.getElementById("Round").defaultchecked = "false";
}
//This will show the select element for round and hide the other select element
function showRound() {
 document.getElementById("selectSquare").style.visibility="hidden";
 document.getElementById("selectRound").style.visibility="visible";  
}
//this will show the select element for square and hide the other select element
function showSquare() {
 document.getElementById("selectRound").style.visibility="hidden";
 document.getElementById("selectSquare").style.visibility="visible";
}
//ADDS THE VALUES ALL TOGETHER
function showtotal() {
 caketotal = 0;
 checkInput();
//IF/ELSE TO CALCULATE CAKE SIZE & TYPE. BOTH HAVE FUNCTIONS
if (document.getElementById("Round").checked) {
 solveValueR();
}
else if (document.getElementById("Square").checked) {
 solveValueS();
}
else {
	caketotal = 0;
}
 //GETS THE VALUE OF THE 3 INPUTS AND ADDS THEM TO THE TOTAL
caketotal+= (document.getElementById("FruitFilling").value * 5);
caketotal+= (document.getElementById("CutOuts").value * 5);
caketotal+= (document.getElementById("Cupcakes").value * 20);
document.getElementById("thetotal").value = "$" + caketotal + ".00";
}
function checkInput() {
 //CHECKS IF CUPCAKES IS NEGATIVE OR LETTERS
 try {
  if (document.getElementById("Cupcakes").value < 0)
   throw "a positive number";
  if (isNaN(document.getElementById("Cupcakes").value))
   throw "only numbers";}
 //DEPENDING ON THE ERROR IT SENDS A RESPOND AND RESETS THE VALUE
   catch(numbererror) {
   window.alert("Please provide " + numbererror);
     document.getElementById("Cupcakes").value = "0";}
   //CHECKS IF FRUIT FILLING IS NEGATIVE OR LETTERS
   try {
  if (document.getElementById("FruitFilling").value < 0)
   throw "a positive number";
  if (isNaN(document.getElementById("FruitFilling").value))
   throw "only numbers";}
  //DEPENDING ON THE ERROR IT SENDS A RESPOND AND RESETS THE VALUE
   catch(numbererror) {
   window.alert("Please provide " + numbererror)
    document.getElementById("FruitFilling").value = "0";}
     //CHECKS IF FONDANT CUTOUTS IS NEGATIVE OR LETTERS
 try {
  if (document.getElementById("CutOuts").value < 0)
   throw "a positive number";
  if (isNaN(document.getElementById("CutOuts").value))
   throw "only numbers";}
  //DEPENDING ON THE ERROR IT SENDS A RESPOND AND RESETS THE VALUE
  catch(numbererror) {
   window.alert("Please provide " + numbererror);
    document.getElementById("CutOuts").value = "0";}
}
//ROUND FUNCTION
function solveValueR() {
 //MAKES A VARIABLE TO HOLD THE SELECT VALUE FOR ROUND
 var round = parseInt(document.getElementById("selectRound").value);
 //CHECKS TO SEE IF BUTTERCREAM WAS CHECKED. IF SO TOTAL IS CORRECT
 if (document.getElementById("Buttercream").checked) {
  caketotal = round;
 }
 //ELSE FONDANT WAS CHOSEN & ADDS THE CALCULATIONS DIFFERENCE
 else if (document.getElementById("Fondant").checked) {
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
 var square = parseInt(document.getElementById("selectSquare").value);
 //IF SQUARE WAS SELECTED & BUTTERCREAM WAS SELECTED THEN ADD SELECTED VALUE TO TOTAL
 if (document.getElementById("Buttercream").checked) {
  caketotal = square;
 }
 //IF NOT BUTTERCREAM THEN FONDANT. IT THEN CHECKS TO SEE IF VALUE IS LESS THAN 70 IF SO ADDS THE 10 TO THE VALUE AND ADDS IT TO THE CAKETOTAL.
 else if (document.getElementById("Fondant").checked){
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