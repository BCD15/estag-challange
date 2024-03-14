<?php
include ("../index.php");

function getHistory($myPDO) {
    $purchases = $myPDO->query("SELECT * FROM orders");
    $data = $purchases->fetchALL();
    return print_r(json_encode($data));
}
function getItens($myPDO) {
    $purchases = $myPDO->query("SELECT * FROM order_item INNER JOIN products ON products.code = order_item.product_code INNER JOIN categories ON categories.code = products.category_code");
    $data = $purchases->fetchALL();
    return print_r(json_encode($data));
}