<?php
	if(strpos(file_get_contents("userlist"), $_GET["userName"] . "\r\n") == false)
	{
		$userlist = fopen("userlist", "a+");
		$msgBuffer = fopen("msgBuffer", "a+");
		
		fwrite($userlist, $_GET["userName"] . "\r\n");
		fwrite($msgBuffer, "\r\n" . $_GET["userName"] . " has logged in\r\n");
		
		fclose($userlist);
		fclose($msgBuffer);
	}
?>