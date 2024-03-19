<?php
include "../services/products.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Acess-Control-Allow-Method: GET, DELETE, POST');
 
switch($_REQUEST["action"]){
    case 'post':
        postProduct(($myPDO));
        echo ("<script> history.back();</script>");
        break;
 
    case 'get';
        getProducts($myPDO);
        break;
 
    case 'delete':
        try {
            delProduct(($myPDO));
            echo ("<script> history.back();</script>");
        } catch (Exception $e){
            echo "bahhhhhhhhhhhhh";
            echo '<button onclick="history.back()">Voltar</button>';
        }
        break;
}