var allFormInput = true;
var todaysdate = new Date();
/*THINGS TO REMOVE penis from output*/
/*--------------FIRST-NAME--------------*/
function validateFirstName() {
 var fName = document.getElementById("firstname");
 try {
  if (fName.value === "") {
   throw "Please fill out the name";
  }
  if (!(isNaN(fName.value))){
   throw "No numbers is allowed";
  }
  if (fName.length > 25) {
   throw "Name is too long";
  }
 }
 catch(err) {
  window.alert(err);
  allFormInput = false;
 }
}
/*--------------PHONE-#-----------------*/
function validatePhoneNumber() {
  var phoneNum = document.getElementById("phoneNum");
 try {
  if (isNaN(phoneNum.value)) {
   throw "Please only provide numbers";
  }
  if (!phoneNum.length == 10) {
   throw "Please provide full number";
  }
  if (phoneNum.value == "") {
   throw "Please provide a phone number";
   }
  }
  catch(err) {
  window.alert(err);
  allFormInput = false;
 }
}
/*--------------EMAIL-------------------*/
function validateEmail() {
  var email = document.getElementById("email");
 try {
  if (email.value == "") {
   throw "Pleave provide email";
  }
 }
 catch(err) {
  allFormInput = false;
 }
}
/*----------DATE-CONFIGURATION----------*/
function changeDate() {
 /*gets the month, days, year*/
 var dateMonth = document.getElementById("requestMonth").value;
 var dateDay = document.getElementById("requestDay").value;
 var dateYear = document.getElementById("requestYear").value;
 /*if month is cleared then hide the rest*/
 if (!(dateMonth == "") || !(dateMonth == -1)) {
  todaysdate.setMonth(dateMonth - 1);
  fixCalendar();
 }
 else if (!(dateDay == "") || !(dateDay == -1)) {
  todaysdate.setDate(dateDay - 1);
  fixCalendar();
 }
 else if (!(dateYear == "") || !(dateYear == -1)) {
  todaysdate.setFullYear(dateYear);
  fixCalendar();
 }
 
}
/*-----------ALL-VALIDATION-------------*/
function checkAllValidation() {
 validateFirstName();
 validateLastName();
 validateEmail();
 validatePhoneNumber();
 validateDate();
 validateTime();
}
/*-----------CREATES-EVENTS-------------*/
function frontAMonth() {
 todaysdate.setMonth(todaysdate.getMonth() + 1); 
 todaysdate.setDate(1);
 fixCalendar();
}
function backAMonth() {
 todaysdate.setMonth(todaysdate.getMonth() - 1);
 todaysdate.setDate(1);
 fixCalendar();
}
function createEventListeners() {
 /*FIRST NAME INPUT|CHANGE|*/
 var firstName = document.getElementById("firstname");
 if (firstname.addEventListener) {
  firstname.addEventListener("change", validateFirstName, false);
 }
 else if (firstname.attachEvent) {
  firstname.attachEvent("onchange", validateFirstName);
 } 
  /*PHONE # INPUT|CHANGE|*/
 var phoneNum = document.getElementById("phoneNum");
 if (phoneNum.addEventListener) {
  phoneNum.addEventListener("change", validatePhoneNumber, false);
 }
 else if (phoneNum.attachEvent) {
  phoneNum.attachEvent("onchange", validatePhoneNumber);
 }
  /*EMAIL INPUT|CHANGE|*/
 var emailAddr = document.getElementById("email");
 if (emailAddr.addEventListener) {
  emailAddr.addEventListener("change", validateEmail, false);
 }
 else if (emailAddr.attachEvent) {
  emailAddr.attachEvent("onchange", validateEmail);
 }
 /*FIXES THE AMOUNT OF DAYS IN A MONTH |CHANGE|*/
 var requestDate = document.getElementById("requestMonth");
 if (requestDate.addEventListener) {
  requestDate.addEventListener("change", changeDate, false);
 }
 else if (requestDate.attachEvent) {
  requestDate.attachEvent("onchange", changeDate);
 }
 //Adds the button events
 var datebuttons = document.getElementById("undertable").getElementsByTagName("li");
 if (datebuttons[0].addEventListener) {
  datebuttons[0].addEventListener("click", backAMonth, false);
  datebuttons[1].addEventListener("click", frontAMonth, false);
 }
 else if (datebuttons[0].attachEvent) {
  datebuttons[0].attachEvent("onclick", backAMonth);
  datebuttons[1].attachEvent("onclick", frontAMonth);
 }
  /*SUBMIT BUTTON |CLICK|*/
 var btnSubmit = document.getElementById("buttonsubmit");
 if (btnSubmit.addEventListener) {
  btnSubmit.addEventListener("click", checkAllValidation, false);
 }
 else if (btnSubmit.attachEvent) {
  btnSubmit.attachEvent("onclick", checkAllValidation);
 }
}
/*---------SHOWS-TODAYS-DATE-------------*/
function addSelectedDate(dateSelected) {
 //makes it compatible with other browsers
 var theDate = dateSelected.target || dateSelected.src;
 var month = todaysdate.getMonth();
 var year = todaysdate.getFullYear();
 var rMonth = document.getElementById("requestMonth");
 var rDay = document.getElementById("requestDay");
 var rYear = document.getElementById("requestYear");
 var dayCells = document.getElementsByTagName("td");
 
 if (theDate.style.backgroundColor == "yellow") {
  /*Removes the date & selection from the field*/
  theDate.style.backgroundColor = "white";
  rMonth.value = -1; 
  rYear.value = -1; 
  rDay.value = -1;
 }
 else {
  for (var q = 0; q < dayCells.length; q++) {
  if (dayCells[q].style.backgroundColor == "yellow") {
   dayCells[q].style.backgroundColor = "white";
  }
  }
  /*Adds the date to the field*/
  rMonth.value = (1 + month); 
  rYear.value = year; 
  rDay.value = theDate.innerHTML;
  theDate.style.backgroundColor = "yellow";
 }
}
/*---------ADDS-DATES-TO-CALENDAR----------*/
function fixCalendar() {
 //Todays Date
 var funcDate = new Date();
 var today = funcDate.getDate();
 var todaymonth = funcDate.getMonth();
 var todayyear = funcDate.getFullYear();
 //The current selected time frame
 var month = todaysdate.getMonth();
 var year = todaysdate.getFullYear();
 /*Finds out the what day the 1st fall on*/
 var firstOfMonth = todaysdate.setDate(1);
 var StartPoint = todaysdate.getDay(firstOfMonth);
 StartPoint -= 1;
 //My months
 var calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 //finds out if its a leap year
 var leapYear = false;
 if (year % 4 === 0) {
  if (year % 100 === 0) {   if (year % 400 === 0) {
    leapYear = true;
    }
   else {
    leapYear = false;
   }
  }
  else {
   leapYear = true;
  }
 }
  else {
   leapYear = false;
  }
 //Amount of days in a month
 var daysInMonth;
 if (month == 1) {
  //figures out if its a leapyear
  if (leapYear) {
   daysInMonth = 29;
  }
  else {
   daysInMonth = 28;
  }
 }
 else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
  daysInMonth = 31;
 }
 else {
  daysInMonth = 30;
 }
 //My Date containers
 var dateCells = document.getElementsByTagName("td");
 //Clears out the calendars dates & month
 document.getElementsByTagName("caption")[0].innerHTML = "";
 for (var b = 0; b < dateCells.length; b++) {
  var bb = dateCells[b];
  bb.innerHTML = "";
  bb.style.backgroundColor = "black";
  if (bb.removeEventListener) {
     bb.removeEventListener("click", addSelectedDate, false);
   }
  else if (bb.removeEvent) {
     bb.removeEvent("onclick", addSelectedDate);
     }
 }
 //Adds the dates to the calendar
 for (var time = 1; time <= daysInMonth; time++) {
  var it = dateCells[StartPoint + time];
  /*Procedure if the year matches with the current year*/
  if (todayyear == year) {
   if (todaymonth == month) {
    if (time >= today) {
     if (it.addEventListener) {
     it.addEventListener("click", addSelectedDate, false);
   }
     else if (it.attachEvent) {
     it.attachEvent("onclick", addSelectedDate);
     }
    it.style.backgroundColor = "white";
    }
    else {
     it.style.backgroundColor = "gray";
    }
   }
   else if (todaymonth < month) {
    if (it.addEventListener) {
    it.addEventListener("click", addSelectedDate, false);
    }
    else if (it.attachEvent) {
    it.attachEvent("onclick", addSelectedDate);
    }
    it.style.backgroundColor = "white";
   }
   else {
    it.style.backgroundColor = "gray";
   }
  }
  /*Procedure if the year is after the current year */
  else if (todayyear < year) {
   if (it.addEventListener) {
   it.addEventListener("click", addSelectedDate, false);
   }
   else if (it.attachEvent) {
   it.attachEvent("onclick", addSelectedDate);
   }
   it.style.backgroundColor = "white";
  }
  /*Anything before the current year is invalid*/
  else if (todayyear > year) {
   it.style.backgroundColor = "gray";
  }
  it.innerHTML = time;
 }
  //Adds month name to the calendar
 document.getElementsByTagName("caption")[0].innerHTML = calendarMonths[month];
 //Any other date with an empty box will be black
 for (var z = 0; z < dateCells.length; z++) {
  if (dateCells[z].innerHTML == "") {
   dateCells[z].backgroundColor = "black";
  }
 }
/*Fixes the amount of days that are shown in select container*/
 var dayAmount = document.getElementById("requestDay");
 if (daysInMonth < dayAmount.length) {
  window.alert(dayAmount + "<--day Amount" + " Days in Month --->" + daysInMonth);
 }
}
/*---------REMOVES-ALL-INPUTS-----------*/
function eraseAllInputs() {
 /*GETS ALL THE INPUTS, SELECTS, & TEXTAREAS*/
 var eraseInputs = document.getElementsByTagName("#contactinfo input");
 var eraseSelected = document.getElementsByTagName("select");
 var eraseTextarea = document.getElementsByTagName("#extrainfo textarea");
 /* REMOVES ALL THE STRINGS IN THE INPUTS*/
 for (var i = 0; i < eraseInputs.length; i++) {
  eraseInputs[i].value == "";
 }
 /*REMOVES ALL THE SELECTED VALUES*/
 for (var e = 0; e < eraseSelected.length; e++) {
  eraseSelected[e].value = -1;
 }
 /*REMOVES THE TEXTS IN THE TEXTAREA*/
 eraseTextarea = "";
}
/*-------------SET-UP-PAGE--------------*/
function SetUpPage() {
 createEventListeners();
 eraseAllInputs();
 fixCalendar();
}
/*----------LOADS-UP-EVENTS---------------*/
if (window.addEventListener) {
 window.addEventListener("load", SetUpPage, false);
}
else if (window.attachEvent) {
 window.attachEvent("onload", SetUpPage);
}