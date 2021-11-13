<?php
$product_id = $_GET["id"];
$conn = new mysqli("localhost", "id13008130_user_magazin", "dSYHs)}7ee*u^U_b", "id13008130_magazin");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?><!DOCTYPE html>
<html>

<head>
    <title>Magazinul care nu te tromboneste</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../1_static/magazin_static.css">
</head>

<body>
    <a id="header" href="magazin_dinamic.php">
        <i class="bi bi-shop"></i>
        <span>CristiMag</span>
        <span id="motto">Magazinul care nu te tromboneste</span>
    </a>
    <hr>
    <div id="product_content">
    <?php
        $stmt = $conn->prepare("SELECT * FROM product WHERE product_id=?");
        $stmt->bind_param("i", $product_id);
        $stmt->execute();
        $row = $stmt->get_result()->fetch_assoc();
    ?>
        <img class="product_pic_large" src="<?=$row["product_image_url"]?>">
        <h1><?=$row["product_name"]?></h1>
        <p><?=$row["product_description_short"]?></p>
        <p><?=$row["product_description_long"]?></p>
        <p class="product_price"><?=$row["product_price"]?> Lei</p>
    </div>
</body>

</html>