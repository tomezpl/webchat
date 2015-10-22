<?php
	$userList = fopen("userlist", "w");
	
	fwrite($userList, file_get_contents("userlist").str_replace($_GET["userName"]));
	
	fclose($userList);
	
	$msgBuffer = fopen("msgBuffer", "a+");
	
	fwrite($msgBuffer, "\r\n" . $_GET["userName"] . " has logged out.\r\n\r\n");
	
	fclose($msgBuffer);
?>