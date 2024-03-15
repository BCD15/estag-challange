<?php
include ("../index.php");
  function postCart($myPDO) {
    $tax = $_POST["taxResult"];
    $total = $_POST["totalResult"];

    $cartPost = $myPDO->prepare("INSERT INTO orders (total, tax) VALUES (:total, :tax)");
    $cartPost->bindParam(":total", $total);
    $cartPost->bindParam(":tax", $tax);
    $cartPost->execute();
  };

  function postCartProducts($myPDO) {
    $order_code = $_POST["order_code"];
    $product_code = $_POST["product_code"];
    $amount = $_POST["Amount"];
    $price = $_POST["Price"];
    $tax = $_POST["Tax"];
 
    $cartItemPost = $myPDO->prepare("INSERT INTO order_item (order_code, product_code, amount, price, tax) VALUES ( :order_code, :product_code, :amount, :price, :tax)");
    $cartItemPost->bindParam(":order_code",$order_code);
    $cartItemPost->bindParam(":product_code",$product_code);
    $cartItemPost->bindParam(":amount",$amount);
    $cartItemPost->bindParam(":price",$price);
    $cartItemPost->bindParam(":tax",$tax);
    $cartItemPost->execute();
  };

  function getOrderCode($myPDO) {
    $order = $myPDO->query("SELECT MAX(code) FROM orders");
    $data = $order->fetchALL();
    return print_r(json_encode($data));
  };

  function postAmount($myPDO) {
    $amount = $_POST["amount"];
    $code = $_REQUEST["code"];
    $product = $myPDO->prepare("UPDATE products SET amount = {$amount} WHERE code = {$code}");
    $product->execute();
  };

