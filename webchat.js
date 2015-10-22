var username;
var lastScrollY;
var xhrMsgLog = new XMLHttpRequest();	//	obviously I can't pass xhr as a paremeter to updateLog() so here you go IE

function updateLog()
{
	var msgLogContent = document.getElementById("msgLogContent");
	var oldContent = msgLogContent.innerHTML;
	msgLogContent.innerHTML = xhrMsgLog.responseText;
	
	if(oldContent != msgLogContent.innerHTML)
		window.scrollTo(window.scrollX, document.body.scrollHeight);
}

function getLogFromFile()
{
	xhrMsgLog = new XMLHttpRequest();
	xhrMsgLog.open("GET", "update.php");
	xhrMsgLog.send();
	
	if(xhrMsgLog.addEventListener)
		xhrMsgLog.addEventListener("load", updateLog);
	else if(xhrMsgLog.attachEvent)
		xhrMsgLog.attachEvent("onload", updateLog);
}

function sendMsg()
{
	var msgInput = document.getElementById("userMsg");
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "send.php?userName=" + username +  "&userMsg=" + msgInput.value, true);
	xhr.send();
}

function askName()
{
	while(username == null || username == "undefined" || username == "")
		username = window.prompt("WHAT'S UR NAME BOI");
	console.log("The username is: " + username);
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "login.php?userName=" + username, true);
	xhr.send();
	
	if(window.addEventListener)
		window.addEventListener("beforeunload", logOff);	//	This is for browsers that work
	else if(window.attachEvent)
		window.attachEvent("onbeforeunload", logOff);		//	and this is for Internet Explorer
}

function logOff()
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "logout.php?userName=" + username, true);
	xhr.send();
}