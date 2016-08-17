var introduction;
var changestory;
var i = 0;
var content = [20];
var content2 = [20];
//gets the information of the user and placing it in the selector information
function fillinContent() {
 //if they restart this is the first part they will encounter
 document.getElementById("thetitle").innerHTML= "Welcome to Websafe Practices";
 document.getElementById("toppar").innerHTML = "It's exciting how websites are becoming more dynamically created each day. What first started as documents for scientists to share and edit with each other. Ended up becoming one of the worlds most used technology.";
 document.getElementsByTagName("img")[0].src = "../public_html/WebSecurity/startit.jpg";
 theStartOfIt();
}
function nextPartOfStory() {
 var buttons = document.getElementsByTagName("input");
 buttons[0].style.visibility ="visible";
 buttons[1].style.visibility ="visible";
 buttons[2].style.visibility ="visible";
 var filepic;
 var picEl = document.getElementsByTagName("img")[0];
 if (i == 20) {
  picEl.src = "../public_html/WebSecurity/story" + i + ".jpg";
  middleSectionParagraph();
 }
 else if (i == 1 | 6 | 7 | 8 | 9 | 10 | 13 | 14 | 17 | 18) {
  middleSectionParagraph();
 }
 nextPartOfParagraph();
 picEl.src = "../public_html/WebSecurity/story" + i + ".jpg";
 i++; 
}
function middleSectionParagraph() {
 content2[1] = "To learn how to block websites Copy this link and paste it to your url.<br> https://www.google.com/#q=how+to+block+websites";
 content2[6] = "always close your website after using it. Even if you are not searching the web, there are websites that reloads its page after a certain amount of time.";
 content2[7] ="Websites can obtain information about the users:<br> <ul><li>Browser</li><li>Browser Version</li><li>Operating System</li><li>GPS</li><li>And more…</li></ul>";
content2[8] =" Software Updates are:<br><ul><li>Bugs or glitch fixes</li><li>New & improved features</li><li>Security Updates</li></ul> ";
 content2[8] =" Firewalls: <br><ul><li>Montitor your computer for infections</li><li>Warns you about malicious websites & files</li><li>and more...</li>";
 content2[9] = "Hackers would use your media content and edit it to make fake AD’s, fake Facebook profiles, anyway to cover their identity.";
 content2[10] = "After any installation, uninstallation, and software updates it’s always best to restart your computer so no data becomes corrupter.";
 content2[13] = "A website can also view your gps. Some websites use this for mobile games to try to give the game a more realistic effect.";
 content2[14] = "An estimate of 90% of cell phones have a virus, malware, or of sort. Some websafe practices would be to only download from the trusted apps like from google store. To find out more information go to:<br>https://www.lookout.com/resources/know-your-mobile/android-virus";
 content2[17] = "If you find random money transfers in your bank account, call your bank right away. First find out if it’s from something you have forgotten about. If it wasn’t you then, get the transactions stopped, and freeze your card.";
 content2[18] = "Always make your profiles private. When facebook was becoming a big hit, people’s houses were being robbed while they were away on vacation.";
content2[20] = "Thank you and I hope this was a helpful message for you to understand how serious this can be.";
 if (i == 7) {
  iCanSeeAll();
 }
 else {
document.getElementById("middlepar").innerHTML = content2[i];
 }
}
function nextPartOfParagraph() {
 content[0] = "Billy is an accountant that is married and has two kids. Who is  a hardworking, honest man. He purchased a computer to help manage his paperwork and bills online.";
 content[1] = "He knows how to block websites so that his underage children don’t accidently stumble upon a “bad” website. Billy believed as long as you stay off of the bad websites you won’t get a virus." 
 content[2] = "But what he didn’t know was that there were other kinds of dangers that lurked around the web. ";
 content[3] = "One day Billy’s son, Jimmy, asked if he could download 'a really cool game that the next door neighbor has'. ";
 content[4] = "Billy put some thought into it. 'What could go wrong? The neighbors have the game so it must be safe.' He then responded, 'Go for it Champ'.";
 content[5] = "Billy left for work shortly after.";
 content[6] = "Jimmy with excitement went straight to his dad’s computer. Opened up a new tab, went to the website, and started downloading the game.";
 content[7] = "Right when Jimmy started loading his new game, the website was already retrieving information about Jimmy’s browser.";
 content[8] = "The game installed quickly and launched the game full-screen.";
 content[9] = "Because Billy did not update his browsers and firewalls, his computer was unaware of the virus.";
 content[10] = "The website owner was a hacker who was able to make a copy of all your files, images, videos, and more. Sent it to himself, and left some virus behind to watch all of Billy activities.";
 content[11] = "Billy arrived home from work, got on the computer, and noticed the speed of his computer has decreased. Thinking it was because of the new installed game, he restarts his computer.";
 content[12] = "He went and checked his bank account, purchased some new items over the web, and answered some of his clients e-mails befor he went to bed.";
 content[13] ="The hacker was able to access his e-mail, see him input his card numbers, social security, and other personaly information.";
 content[14] = "The next day Billy left with his family on a road trip. He was using his GPS for directions & was kept in contact with work through e-mail.";
 content[15] = "The hacker infected Billy’s phone by e-mail, and kept track of his location through GPS & facebook.";
 content[16] = "While Billy was away, the hacker stole all of Billy's furniture, transferred all of his money to another account, and sent a virus to all of his e-mail contacts.";
 content[17] ="Once Billy and his family were 4 hours away they stopped in to a gas station. His card was rejected, so he tried other gas stations. After no luck Billy & his family had no other choice but to return home.";
 content[18] ="Billy arriving home alreay confused as it is arrived to an empty house. All of their furniture was gone! And all of this happened because of a small, simple, game.";
 content[19] ="This is why it is important to practice safe web searching.<br> Always be sure to delete your history, cookies, and maintain all your software’s up to date.";
 content[20] = "Only enter your credit, social, or other kind of information on an https website, or one that has a padlock on it. They are encrypted websites that hackers won’t be able to understand if they intercept the information message.";
 document.getElementById("toppar").innerHTML = content[i];
}
//The beginning of my story
function theStartOfIt() {
 i = 0;
 document.getElementById("toppar").innerHTML = "Here’s a story to help you understand how important it is to use the web safely.<br>This is Billy’s story.";
 document.getElementsByTagName("img")[0].src = "../public_html/WebSecurity/startit.jpg";
 document.getElementById("backButton").style.visibility ="hidden";
document.getElementById("nextButton").style.visibility = "hidden";
 document.getElementById("resetButton").style.visibility = "hidden";
 nextPartOfStory();
}
 function iCanSeeAll() {
 //var description =  
  document.getElementById("middlepar").style.visibility = "visible"; document.getElementById("middlepar").innerHTML = "People can view your information just by accessing their website. Down below you can see some of your information I have attained.<br>";
//the navigation properties
 var txt = "";
 txt += "Browser CodeName: " + navigator.appCodeName + "<br>";
 txt += "Browser Name: " + navigator.appName + "<br>";
 txt += "Cookies Enabled:" + navigator.cookieEnabled + "<br>";
 txt += "Platform: " + navigator.platform + "<br>";
 txt += "User-agent header: " + navigator.userAgent + "<br>";
 txt += "Browser Version: " + navigator.appVersion + "<br>";
 document.getElementById("bottompar").style.visibility = "visible";
 document.getElementById("bottompar").innerHTML = txt;
 }
//the back button works
function goBack() {
 //if i is 1 then its goign to the beginning so hide the back & reset button
 if (i == 1) { 
  document.getElementById("nextButton").style.visibility = "visible";
  document.getElementById("resetButton").style.visibility = "hidden";
  document.getElementById("backButton").style.visibility = "hidden";
 }
 //else remove 1 from the i & execute the next position
  i--; 
  nextPartOfStory();
}
function goNext() {
 //if i = 19 then hide the next button since 20 is the last slide
 if (i == 19) { 
  document.getElementById("nextButton").style.visibility = "hidden";
 }
  nextPartOfStory();
}
//STARTS ALL THE WAY FROM FUNCTION 1
function goReset() {
 i = 0;
 fillinContent();
}
//MY EVENTS
function createEventListeners() {
 //adds an event to my back button
 var backbutton = document.getElementById("backButton");
 if (backbutton.addEventListener) {
  backbutton.addEventListener("click", goBack, false); 
 }
 else if (backbutton.attachEvent) {
  backbutton.attachEven("onclick", goBack);
 }
  //adds an event to my next button
  var nextbutton = document.getElementById("nextButton");
 if (nextbutton.addEventListener) {
  nextbutton.addEventListener("click", goNext, false); 
 }
 else if (nextbutton.attachEvent) {
  nextbutton.attachEven("onclick", goNext);
 }
  //adds an event to my reset button
  var resetbutton = document.getElementById("resetButton");
 if (resetbutton.addEventListener) {
  resetbutton.addEventListener("click", goReset, false); 
 }
 else if (resetbutton.attachEvent) {
  resetbutton.attachEven("onclick", goReset);
 }
}
//SETS UP THE PAGE AND THE EVENTS
function setUpPage() {
 createEventListeners();
 fillinContent();
}
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} 
else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}