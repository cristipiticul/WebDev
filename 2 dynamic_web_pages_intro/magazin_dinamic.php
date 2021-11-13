<?php
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
    <div id="product_list">
        <?php
            $res = $conn->query("SELECT * FROM product ORDER BY product_id ASC");
            while ($row = $res->fetch_assoc()) {
        ?>
        <a class="product" href="magazin_dinamic_produs.php?id=<?=$row["product_id"]?>">
            <h2 class="product_title"><?=$row["product_name"]?></h2>
            <img class="product_pic" src="<?=$row["product_image_url"]?>">
            <p class="product_desc"><?=$row["product_description_short"]?></p>
            <p class="product_price"><?=$row["product_price"]?></p>
        </a>
        <?php
            }
        ?>
    </div>
</body>

</html>