var introduction;
///0.0\\\Its a variable to hold my timer
//0.1\\a variable to hold the first & only img element 
var imageElement = document.getElementsByTagName("img")[0];
//0.2\\i is going to be the position of the story
var i = 0;
//0.3\\top holds all the text for the middle paragraph
var top = [20];
//0.4\\middle holds all the text for the middle paragraph
var middle = [20];
//3\\Starts out the beginning introduction
function startingIntro() {
 //3.1\\ get the h1 and first <p> by selector and adds the text
 document.getElementById("hOne").innerHTML= "Welcome to Websafe Practices";
 document.getElementById("toppar").innerHTML = "It's exciting how websites are becoming more dynamically created each day. What first started as documents for scientists to share and edit with each other. Ended up becoming one of the worlds most used technology.";
 //3.2\\sets up the image using the global variable
 imageElement.src = "../public_html/WebSecurity/story01.jpg";
 //3.3\\hides the back, next, & reset buttons along with the bottom and middle paragraphs
 document.getElementById("backButton").style.visibility = "hidden";
 document.getElementById("nextButton").style.visibility = "hidden";
 document.getElementById("resetButton").style.visibility = "hidden";
 document.getElementById("middlepar").style.visibility = "hidden";
 document.getElementById("bottompar").style.visibility = "hidden";
 document.getElementById("backButton").style.visibility = "hidden";
 ///3.4\\\gives the user some time then executes the next function
 introduction = setTimeout(secondIntroduction, 5000);
}
///4\\\
function secondIntroduction() {
 //4.1\\makes i as 0 since its starting the story from beginning
 i = 0;
 //4.2\\changes the text of the midde & top paragraph & makes it visible
 document.getElementById("middlepar").style.visibility = "visible";
 document.getElementById("middlepar").style.fontSize = "200%";
 document.getElementById("middlepar").innerHTML = "This is Billy’s story.";
 document.getElementById("toppar").style.visibility = "visible";
 document.getElementById("toppar").innerHTML = "Here’s a story to help you understand how important it is to use the web safely.";
 //4.3\\changes the pic using the global variable
 imageElement.src = "../public_html/WebSecurity/startitup.jpg";
 //4.4\\gives it 5 seconds then executes the next part of the story 
 introduction = setTimeout(nextPartOfStory, 5000);
}
///5\\\Plays the next part of the story
function nextPartOfStory() {
 //5.1\\clears out the time if there was one and changes the image & top paragraph
 clearTimeout(introduction);
 fixImages();
 fixTopPar();
 introduction = setTimeout(nextPartOfStory, 10000);
 //5.2\\if i ='s any of these numbers
 if ( i == 0 | 2 | 3 | 4 | 5 | 11 | 12 | 15 | 16 | 19) {
   //5.21\\
   if (i == 0) {
    document.getElementById("backButton").style.visibility = "hidden";
    document.getElementById("middlepar").style.visibility = "hidden";
    document.getElementById("bottompar").style.visibility = "hidden";
   } 
    //5.3\\makes the back and reset visible, hides the middle and bottom paragraph
   else {
    document.getElementById("backButton").style.visibility = "visible";
    document.getElementById("resetButton").style.visibility = "visible";
    document.getElementById("middlepar").style.visibility = "hidden";
    document.getElementById("bottompar").style.visibility = "hidden";
    //5.31\\ if i == 19 then hide the next button else ma
    if (i == 19) { 
    document.getElementById("nextButton").style.visibility = "hidden";
    }
    else {
     document.getElementById("nextButton").style.visibility = "visible";
    }
   }
 }
  //5.3\\If = 7 then execute the middle paragraph function
  else if (i == 7) {
    //5.31\\Executes the middle and bottom paragraph
    fixMiddlePar();
    fixBottomPar();
   }
  //5.5\\If it is any of these numbers execute 
  else if (i == 1 || 6 || 8 || 9 || 10 || 13 || 14 || 17 || 18) {
   //5.51\\hides the bottom paragraph and executes the middle paragraph
   document.getElementById("bottompar").style.visibility = "hidden";
   fixMiddlePar();
  }
  //5.6\\If its 20 the last part, hide the bottom paragraph and the next button
  else if (i == 20) {
   document.getElementById("middlepar").style.visibility = "visible";
   document.getElementById("bottompar").style.visibility = "hidden";
   document.getElementById("nextButton").style.visibility = "hidden";
   clearTimeout(introduction);
   introduction = setTimeout(startingIntro, 8000);
  }
 //5.7\\if i is over 20 the start from the beginning
 else if (i => 21) {
  i = 0;
  startingIntro();
  } 
 //5.8\\after all the if else and so on add a 1 to the i
 i += 1;
}
///6\\\Changes the pic using the global variable and the i 
function fixImages() {
 imageElement.src = "../public_html/WebSecurity/story" + i + ".jpg";
}
///7\\\The top paragraph content that should be showing
function fixTopPar() {
 //7.1\\It uses the top array and fills it with text
 top[0] = "Billy is an accountant that is married and has two kids. Who is  a hardworking, honest man. He purchased a computer to help manage his paperwork and bills online.";

 top[1] = "He knows how to block websites so that his underage children don’t accidently stumble upon a 'bad' website. Billy believed as long as you stay off of the bad websites you won’t get a virus.";
 
 top[2] = "But what he didn’t know was that there were other kinds of dangers that lurked around the web. ";

 top[3] = "One day Billy’s son, Jimmy, asked if he could download 'a really cool game that the next door neighbor has'. ";
 
 top[4] = "Billy put some thought into it. 'What could go wrong? The neighbors have the game so it must be safe.' He then responded, 'Go for it Champ'.";
 
 top[5] = "Billy left for work shortly after.";
 
 top[6] = "Jimmy with excitement went straight to his dad’s computer. Opened up a new tab, went to the website, and started downloading the game.";
 
 top[7] = "Right when Jimmy started loading his new game, the website was already retrieving information about Jimmy’s browser.";
 
 top[8] = "The game installed quickly and launched the game full-screen.";
 
 top[9] = "Because Billy did not update his browsers and firewalls, his computer was unaware of the virus.";
 
 top[10] = "The website owner was a hacker who was able to make a copy of all your files, images, videos, and more. Sent it to himself, and left some virus behind to watch all of Billy activities.";
 
 top[11] = "Billy arrived home from work, got on the computer, and noticed the speed of his computer has decreased. Thinking it was because of the new installed game, he restarts his computer.";
 
 top[12] = "He went and checked his bank account, purchased some new items over the web, and answered some of his clients e-mails befor he went to bed.";
 
 top[13] ="The hacker was able to access his e-mail, see him input his card numbers, social security, and other personaly information.";
 
 top[14] = "The next day Billy left with his family on a road trip. He was using his GPS for directions & was kept in contact with work through e-mail.";
 
 top[15] = "The hacker infected Billy’s phone by e-mail, and kept track of his location through GPS & facebook.";
 
 top[16] = "While Billy was away, the hacker stole all of Billy's furniture, transferred all of his money to another account, and sent a virus to all of his e-mail contacts.";
 
 top[17] ="Once Billy and his family were 4 hours away they stopped in to a gas station. His card was rejected, so he tried other gas stations. After no luck Billy & his family had no other choice but to return home.";
 
 top[18] ="Billy arriving home, alreay confused as it is came to an empty house. All of their furniture was gone! And all of this happened because of a small, simple, game.";
 
 top[19] ="This is why it is important to practice safe web searching.<br> Always be sure to delete your history, cookies, and maintain all your software’s up to date.";
 
 top[20] = "Only enter your credit, social, or other kind of information on an https website, or one that has a padlock on it. They are encrypted websites that hackers won’t be able to understand if they intercept the information message.";
 //7.2\\gets the top paragraph element and puts in the top array using the i
 document.getElementById("toppar").innerHTML = top[i];
}
///8\\\Middle paragraph function
function fixMiddlePar() {
 //8.1\\makes the middle paragraph visible
 document.getElementById("middlepar").style.visibility = "visible";
 //8.2\\Adds all the content into the middle array
 middle[1] = "To learn how to block websites go to: <br> https://www.google.com/#q=how+to+block+websites";
 
 middle[6] = "Always close your website after using it. Even if you are not searching the web, there are websites that reloads its page after a certain amount of time.";
 
 middle[7] = "Websites can obtain information about the users:<br> <ul><li>Browser</li><li>Browser Version</li><li>Operating System</li><li>GPS</li><li>And more…</li></ul><br>Down below you can see some of your information I have attained.";
 
 middle[8] = "Software Updates are:<br><ul><li>Bugs or glitch fixes</li><li>New & improved features</li><li>Security Updates</li></ul>";
 
 middle[9] = "Hackers would use your media content and edit it to make fake AD’s, fake Facebook profiles, anyway to cover their identity.";
 
 middle[10] = "After any installation, uninstallation, and software updates it’s always best to restart your computer so no data becomes corrupter.";
 
 middle[13] = "A website can also view your gps. Some websites use this for mobile games to try to give the game a more realistic effect.";
 
 middle[14] = "An estimate of 90% of cell phones have a virus, malware, or of sort. Some websafe practices would be to only download from the trusted apps like from google store. To find out more information go to<br>https://www.lookout.com/resources/know-your-mobile/android-virus";
 
 middle[17] = "If you find random money transfers in your bank account, call your bank right away. First find out if it’s from something you have forgotten about. If it wasn’t you then, get the transactions stopped, and freeze your card.";
 
 middle[18] = "Always make your profiles private. When facebook was becoming a big hit, people’s houses were being robbed while they were away on vacation.";
 
 middle[20] = "Thank you and I hope this was a helpful message for you to understand how serious this can be.";
 //8.3\\Gets the middle array using the i and places in the middle paragraph
 document.getElementById("middlepar").innerHTML = middle[i];
 }
///9\\\Is the bottom paragraph function
function fixBottomPar() {  
 //9.1\\Makes the bottom paragraph visible
 document.getElementById("bottompar").style.visibility = "visible";
 //9.2\\If i = 8 add the bottom paragraph with the text
 if (i == 8) {
  //9.21my brief description of firwalls
  document.getElementById("bottompar").innerHTML = "Firewalls: <br><ul><li>Montitor your computer for infections</li><li>Warns you about malicious websites & files</li><li>and more...</li>"; 
 }
 //9.3\\else it was for the only other bottom paragraph
 //9.3\\else it was for the only other bottom paragraph
 else {
  //9.31\\Makes a txt variable, and adds all of the browsers information
  var txt = "";
  txt += "Browser CodeName: " + navigator.appCodeName + "<br>";
  txt += "Browser Name: " + navigator.appName + "<br>";
  txt += "Cookies Enabled:" + navigator.cookieEnabled + "<br>";
  txt += "Platform: " + navigator.platform + "<br>";
  txt += "User-agent header: " + navigator.userAgent + "<br>";
  txt += "Browser Version: " + navigator.appVersion + "<br>";
  //9.32\\Then places it in the bottom paragraph element.
  document.getElementById("bottompar").innerHTML = txt;
 }
}
//2.6\\my back button with two functions
function goBack() {
 //2.65\\ clears out the time 
 clearTimeout(introduction);
 //2.66\\ removes 2 from i 
 i -= 2; 
 //\\plays the function that executes the correct procedures
  nextPartOfStory();
}
//2.7\\My next button would play the next part
function goNext() {
 //2.75\\clears the time 
 clearTimeout(introduction);
 //
 nextPartOfStory();
}
//2.8\\My reset button clears the timeout & starts from the intro
function goReset() {
 //2.85\\method used to clear out the time on global variable introduction
 clearTimeout(introduction);
 ///3\\\executes the intro
 startingIntro();
}
//2.5\\Creates the events for my buttons
function createEventListeners() {
 //2.6\\Adds an event to my back button & works for compatibility
 var backbutton = document.getElementById("backButton");
 if (backbutton.addEventListener) {
  backbutton.addEventListener("click", goBack, false); 
 }
 else if (backbutton.attachEvent) {
  backbutton.attachEven("onclick", goBack);
 }
 //2.7\\Adds an event to my next button & works for compatibility
 var nextbutton = document.getElementById("nextButton");
 if (nextbutton.addEventListener) {
  nextbutton.addEventListener("click", goNext, false); 
 }
 else if (nextbutton.attachEvent) {
  nextbutton.attachEven("onclick", goNext);
 }
 //2.8\\Adds an event to my reset button & works for compatibility
 var resetbutton = document.getElementById("resetButton");
 if (resetbutton.addEventListener) {
  resetbutton.addEventListener("click", goReset, false); 
 }
 else if (resetbutton.attachEvent) {
  resetbutton.attachEven("onclick", goReset);
 }
}
///2\\\
//Sets up the page with 2 functions
function setUpPage() {
 //2.5\\function creates the events for my page buttons
 createEventListeners();
 ///3\\\function starts out with the introduction
 startingIntro();
}
///1\\\Adds an event when the window reloads
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} 
else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}