<?php
    header("Content-Type: application/json");
    $conn = new mysqli("localhost", "id13008130_user_magazin", "dSYHs)}7ee*u^U_b", "id13008130_magazin");
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $res = $conn->query("SELECT * FROM product ORDER BY product_id ASC");
    $products = array();
    while ($row = $res->fetch_assoc()) {
        $products[] = array(
            "id" => $row["product_id"],
            "name" => $row["product_name"],
            "imageUrl" => $row["product_image_url"],
            "descriptionShort" => $row["product_description_short"],
            "price" => $row["product_price"]
        );
    }
    echo(json_encode($products));
?>