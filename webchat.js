var username;
var lastScrollY;

function updateLog()
{
	var msgLogContent = document.getElementById("msgLogContent");
	var oldContent = msgLogContent.innerHTML;
	msgLogContent.innerHTML = this.responseText;
	
	if(oldContent != msgLogContent.innerHTML)
		window.scrollTo(window.scrollX, document.body.scrollHeight);
}

function getLogFromFile()
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "update.php");
	xhr.send();
	
	xhr.addEventListener("load", updateLog);
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
}