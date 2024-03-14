<?php
include "../services/history.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Acess-Control-Allow-Method: GET, DELETE, POST');
 
switch($_REQUEST["action"]){
    case 'get';
        getHistory($myPDO);
        break;
    
    case 'getItem';
        getItens($myPDO);
        break;
}