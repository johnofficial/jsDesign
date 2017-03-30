<?php

$EmailFrom = "jovansavic012@gmail.com";
$EmailTo = "jovansaviic@gmail.com";
$Subject = "Nice & Simple Contact Form by CSS-Tricks";
$Name = Trim(stripslashes($_POST['name'])); 
$Second_Name = Trim(stripslashes($_POST['second_name'])); 
$Tel = Trim(stripslashes($_POST['phone_number'])); 
$City = Trim(stripslashes($_POST['city'])); 
$Message = Trim(stripslashes($_POST['message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Second Name: ";
$Body .= $Second_Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "City: ";
$Body .= $City;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
	<script>
		$( '#form-status').load( 'contactthanks.php' );
	</script>
}
else{
	<script>
		$( '#form-status').load( 'contactthanks.php' );
	</script>
}
?>