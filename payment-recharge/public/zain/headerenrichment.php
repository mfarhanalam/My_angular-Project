<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header('Content-Type: application/json;charset=utf-8');
$msisdn = null;

class HeaderValues
{
  public $headerName;
  public $headervalue;
}
$headersArray = [];
foreach (getallheaders() as $name => $value) {
  $headers = new HeaderValues();
  $headers->headerName = $name;
  $headers->headervalue = $value;
  $headersArray[] = $headers;
  if ($name === 'x-msisdn') {
    $msisdn = $value;
    break;
  }
}

class SuccessResponse
{
  public $statusCode;
  public $message;
  public $mobileNumber;
  public $others;
  public $headers;
}

if ($msisdn != null) {
  $sReponse = new SuccessResponse();
  $sReponse->statusCode = 0;
  $sReponse->message = "Found Mobile NUmber";
  $sReponse->mobileNumber = $msisdn;
  $sReponse->headers = $headersArray;
} else {
  $sReponse = new SuccessResponse();
  $sReponse->statusCode = 1;
  $sReponse->message = "Mobile Number not found";
  $sReponse->mobileNumber = null;
  $sReponse->headers = $headersArray;
}
echo json_encode($sReponse);
