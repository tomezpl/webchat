<?php
	$msgBuffer = fopen("msgBuffer", "a+");
	fwrite($msgBuffer, $_GET["userName"] . " says: ");
	fwrite($msgBuffer, $_GET["userMsg"] . "\r\n");
	fclose($msgBuffer);
?>