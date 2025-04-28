<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header('Content-Type: application/json;charset=utf-8');
$msisdn = null;
foreach (getallheaders() as $name => $value) {
  if ($name === 'x-msisdn') {
    $msisdn = $value;
    break;
  }
}
if ($msisdn != null) {
  header("Location: http://sl.bizmobia.com/zainpromo?msisdn=" . $msisdn);
  exit();
} else {
  header("Location: http://sl.bizmobia.com/zainpromo?msisdn=" . 'notfound');
  exit();
}
