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
 
    case 'delete':
        try {
            delCategory(($myPDO));
            echo ("<script> history.back();</script>");
        } catch (Exception $e){
            echo "erro ao excluir categoria";
            echo "<br>";
            echo '<button onclick="history.back()">Voltar</button>';
        }
        break;
}