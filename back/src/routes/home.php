<?php
include "../services/home.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Acess-Control-Allow-Method: GET, DELETE, POST');
 
switch($_REQUEST["action"]){
    case 'postCart':
        postCart(($myPDO));
        echo ("<script> history.back();</script>");
        break;
    
    case 'postProducts':
        postCartProducts(($myPDO));
        // echo ("<script> history.back();</script>");
        break;
    
    case 'get':
        getOrderCode(($myPDO));
        // echo ("<script> history.back();</script>");
        break;
}