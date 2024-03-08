<?php
include ("../index.php");
  //Posta um produto
function postProduct($myPDO) {
    $name = $_POST["Product"];
    $amount = $_POST["Amount"];
    $price = $_POST["Price"];
    $category_code = $_POST["Category"];
 
    $productsPost = $myPDO->prepare("INSERT INTO products (name, amount, price, category_code) VALUES ('{$name}', '{$amount}', '{$price}', '{$category_code}')");
    $productsPost->execute();
}
// Busca todas os produtos

function getProducts($myPDO) {
    $products = $myPDO->query("SELECT * FROM products INNER JOIN categories ON products.category_code = categories.code;");
    $data = $products->fetchALL();
    return print_r(json_encode($data));
}
 
// Deleta um produto
function delProduct($myPDO) {
    $product = $myPDO->query("DELETE FROM products WHERE code=" .$_REQUEST["code"]);
}