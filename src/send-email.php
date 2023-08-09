<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = $email;
  $subject = 'Your Website Message';
  $headers = 'From: yifengzheng.nyc@gmail.com' . "\r\n" .
    'Reply-To: yifengzheng.nyc@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    $response = ['success' => true];
  } else {
    $response = ['success' => false];
  }

  header('Content-Type: application/json');
  echo json_encode($response);
}
?>
