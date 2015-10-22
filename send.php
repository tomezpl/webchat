<?php
	$msgBuffer = fopen("msgBuffer.txt", "a+");
	if(filesize("msgBuffer.txt") != 0)
		fwrite($msgBuffer, "\r\n");
	fwrite($msgBuffer, $_GET["userName"] . " says: ");
	fwrite($msgBuffer, $_GET["userMsg"]);
	fclose($msgBuffer);
?>