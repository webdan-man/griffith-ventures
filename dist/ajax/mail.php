<?php

input(type="text", name="name", required)
input(type="email", name="email", required)
input(type="text", name="subject", required)
textarea(name='message', required)

$name = $_POST['name'];
$email = $_POST['email'];
$sub = $_POST['subject'];
$text = $_POST['message'];
$subject = 'Griffith Ventures';
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$to = "i.const.yank@gmail.com";

$message .= "Name: $name\n";
$message .= "E-mail: $email\n";
$message .= "Subject: $sub\n";
$message .= "Message: $text\n\n";
mail ($to,$subject,$message,$headers);
?>