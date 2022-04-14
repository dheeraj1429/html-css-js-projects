<?php
require 'smtp/PHPMailerAutoload.php';

function getTemplate($subject,$message){
	return '<!DOCTYPE html><html><head> <title>EMAIL </title> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> #outlook a{padding: 0;}.ReadMsgBody{width: 100%;}.ExternalClass{width: 100%;}.ExternalClass *{line-height: 100%; color: #000; font-size: 18px;}body{margin: 0; font-size: 18px; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table, td{border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;}img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}p{display: block; margin: 13px 0;}</style> <style type="text/css"> @media only screen and (max-width:480px){@-ms-viewport{width: 320px;}@viewport{width: 320px;}}</style> <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css"> <style type="text/css"> @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700); </style> <style type="text/css"> @media only screen and (min-width:480px){.mj-column-per-100{width: 100% !important; max-width: 100%;}.mj-column-per-50{width: 50% !important; max-width: 50%;}}</style> <style type="text/css"> @media only screen and (max-width:480px){table.full-width-mobile{width: 100% !important;}td.full-width-mobile{width: auto !important;}}</style></head><body style="background-color:#EDF2F9;"> <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> EMAIL </div><div style="background-color:#EDF2F9;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1abc9c;background-color:#1abc9c;width:100%;"> <tbody> <tr> <td> <div style="Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;text-align:center;vertical-align:top;"> <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="center" style="font-size:0px;padding:15px 0;word-break:break-word;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"> <tbody> <tr> <td style="width:80px;"> <a href="<?php echo SITE_URL;?>" target="_blank"> <img alt="" height="auto" src="'.SITE_URL.'/assets/img/logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="80"> </a> </td></tr></tbody> </table> </td></tr></table> </div></td></tr></tbody> </table> </div></td></tr></tbody> </table> <div style="background:#1abc9c;background-color:#1abc9c;Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1abc9c;background-color:#1abc9c;width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"> <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="center" style="padding:10px 25px;word-break:break-word;"> <div style="font-family: Helvetica Neue , Helvetica, Arial, sans-serif;font-size:26px;font-weight:600;line-height:24px;text-align:center;color:#fff;"> '.$subject.' </div></td></tr></table> </div></td></tr></tbody> </table> </div><div class="body-section" style="-webkit-box-shadow: 0 25px 50px rgba(8,21,66,.06); -moz-box-shadow: 0 25px 50px rgba(8,21,66,.06); box-shadow: 0 25px 50px rgba(8,21,66,.06); Margin: 0px auto; max-width: 600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;"> <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:15px;text-align:center;vertical-align:top;"> <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #dddddd;vertical-align:top;" width="100%"> <tr> <td align="left" style="font-size:0px;padding:20px;word-break:break-word;"> <div style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#000000;font-size:16px;"> '.$message.' </div></td></tr></table> </div></td></tr></tbody> </table> </div></td></tr></tbody> </table> </div><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> <tbody> <tr> <td> <div style="Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"> <div style="Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"> <tbody> <tr> <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <div style="font-family:" Helvetica Neue ", Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#445566;"> Copyright © '.SITE_NAME.'. All rights reserved.</div></td></tr></tbody> </table> </div></td></tr></tbody> </table> </div></td></tr></tbody> </table> </div></body></html>';
}

function smtp_mailer($to,$subject, $msg){
	$mail = new PHPMailer(); 
	// $mail->SMTPDebug=3;
	$mail->IsSMTP(); 
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = 'tls'; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port = "587"; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Username = "Ritik.gupta@bonamisoftware.com";
	$mail->Password = 'Rgritik@aman';
	$mail->SetFrom("Ritik.gupta@bonamisoftware.com");
	$mail->Subject = $subject;
	$mail->Body = getTemplate($subject,$msg);
	$mail->AddAddress($to);
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if(!$mail->Send()){
		echo $mail->ErrorInfo;
	}else{
	
	}
}

function smtp_bulk_mailer($to,$template){
	$mail = new PHPMailer(); 

	global $conn;

	$tempData=mysqli_query($conn,"SELECT `name`, `img`, `title`, `text`, `link` FROM `bnmi_campaign` WHERE `id`=$template ");
	$dataT=mysqli_fetch_assoc($tempData);
	if($dataT['link']!=NULL || $dataT['link'] != '#'){ 
		$button = '<a href="'.$dataT['link'].'" style=" display: inline-block; text-decoration: none; color: #fff; border-radius: 5px; background: #ea0009; padding: 10px 50px; font-size: 16px; border-radius: 25px; font-weight: 600; " >Click Here</a >';
	}else{
		$button=' ';
	}

	$message = '<div style="display: flex;justify-content: center;align-items: center;text-align: center;word-break: break-all;"> <div style=" width: 600px; text-align:center; height: 100vh; background-position: center; background-color: #fff; " > <div style="text-align: center"> <img src="'.SITE_URL.'/assets/img/'.getGeneral('logo').'" alt="" style="height: 100px; padding-bottom: 20px"/> </div><img src="SITEURL/assets/img/campaign/'.$dataT['img'].'" alt="" style="width: 100%"/> <h1 style="color: #ea0009; text-transform: uppercase; text-align: center" > '.$dataT['title'].' </h1> <hr style=" width: 100px; background-color: #ea0009; height: 2px; border: none; "/> <p style="padding: 10px 10px; text-align: center">'.htmlspecialchars_decode($dataT['text']).'</p><div style="text-align: center">'.$button.' </div><br/> <hr style="border: none; background-color: black; height: 1px"/> <div style="text-align: center; margin: 30px 0 30px 0"> <span style="border-right: 2px solid black; padding: 0 5px" >'.SITE_NAME.'</span > <span style="border-right: 2px solid black; padding: 0 5px" >Website</span > <span style="padding: 0 5px">Email</span> </div><hr style="border: none; background-color: black; height: 1px"/> <p style="text-align: center; margin-top: 30px"> Copyright &copy; '.SITE_NAME.'. All rights reserved </p></div></div>';

	// $mail->SMTPDebug=3;
	$mail->IsSMTP(); 
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = 'tls'; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port = "587"; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Username = "Ritik.gupta@bonamisoftware.com";
	$mail->Password = 'Rgritik@aman';
	$mail->SetFrom("Ritik.gupta@bonamisoftware.com");
	$mail->Subject = $subject;
	$mail->Body =$msg;
	foreach($to as $singleemail){
		$mail->AddAddress($singleemail);   
	}  
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if(!$mail->Send()){
		echo $mail->ErrorInfo;
	}else{
		echo 'Sent';
	}
}
// echo smtp_mailer($to,$subject, $msg);

function auctionMail($emails,$subject, $msg){
	$mail = new PHPMailer(); 
	// $mail->SMTPDebug=3;
	$mail->IsSMTP(); 
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = 'tls'; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port = "587"; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Username = "Ritik.gupta@bonamisoftware.com";
	$mail->Password = 'Rgritik@aman';
	$mail->SetFrom("Ritik.gupta@bonamisoftware.com");
	$mail->Subject = $subject;
	$mail->Body = getTemplate($subject,$msg);
	if(is_array($emails)){
		foreach($to as $singleemail){
			$mail->AddAddress($singleemail);   
		} 
	}else{
		$mail->AddAddress($to);
	}
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if(!$mail->Send()){
		echo $mail->ErrorInfo;
	}else{
		echo 'Sent';
	}
}
?>
