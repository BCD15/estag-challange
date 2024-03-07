<?php
include "../services/categories.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Acess-Control-Allow-Method: GET, DELETE, POST');
 
switch($_REQUEST["action"]){
    case 'post':
    postCategory(($myPDO));
    echo ("<script> history.back();</script>");
    break;
 
    case 'get';
    getCategories($myPDO);
    break;
 
    // case 'delet':
    //     try {
    //         delCategory(($myPDO));
    //     } catch (Exception $e){
    //         echo "HMMMMMMMM";
    //         echo '<button onclick="history.back()">Come Back</button>';
    //     }
    //     break;
}