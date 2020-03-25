<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$area = $_POST['area'];
$price = $_POST['price'];
$subject = 'Заявка Interiqa';
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";
$to = "i.const.yank@gmail.com, interiqa@yandex.ru";
$message .= "Имя: $name\n";
$message .= "Телефон: $phone\n";
$message .= "Площадь объекта: $area м²\n";
$message .= "Предварительная стоимость: $price ₽\n\n";
mail ($to,$subject,$message,$headers);
?>