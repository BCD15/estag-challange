<?php
include ("../index.php");
  function postCart($myPDO) {
    $tax = $_POST["taxResult"];
    $total = $_POST["totalResult"];

    $cartPost = $myPDO->prepare("INSERT INTO orders (total, tax) VALUES ({$total}, {$tax})");
    $cartPost->execute();
  };

  function postCartProducts($myPDO) {
    $order_code = $_POST["order_code"];
    $product_code = $_POST["product_code"];
    $amount = $_POST["Amount"];
    $price = $_POST["Price"];
    $tax = $_POST["Tax"];
 
    $cartItemPost = $myPDO->prepare("INSERT INTO order_item (order_code, product_code, amount, price, tax) VALUES ({$order_code}, {$product_code}, {$amount}, {$price}, {$tax})");
    $cartItemPost->execute();
  };

  function getOrderCode($myPDO) {
    $order = $myPDO->query("SELECT MAX(code) FROM orders");
    $data = $order->fetchALL();
    return print_r(json_encode($data));
  };

