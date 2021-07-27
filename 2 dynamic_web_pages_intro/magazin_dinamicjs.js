const xhttp = new XMLHttpRequest();
let products;
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        products = JSON.parse(this.responseText);
        showProducts();
    }
};
xhttp.open("GET", "magazin_dinamicjs_service.php", true);
xhttp.send();

function showProducts() {
    let productsHtml = "<div id=\"product_list\">";
    for (var i = 0; i < products.length; i++) {
        productsHtml += `
        <a class="product" href="javascript:showProduct(${product.id})">
            <h2 class="product_title">${product.name}</h2>
            <img class="product_pic" src="${product.imageUrl}">
            <p class="product_desc">${product.descriptionShort}</p>
            <p class="product_price">${product.price} Lei</p>
        </a>
        `;
    }
    productsHtml += "</div>";
    document.getElementById("content").innerHTML = productsHtml;
}

function showProduct(productId) {
    let productHtml = "";
    for (const product of products) {
        if (product.id == productId) {
            productHtml = `
            <div id="product_content">
                <img class="product_pic_large" src="${product.imageUrl}">
                <h1>${product.name}</h1>
                <p>${product.descriptionShort}</p>
                <p>${product.descriptionLong}</p>
                <p class="product_price">${product.price} Lei</p>
            </div>
            `;
        }
    }
    document.getElementById("content").innerHTML = productHtml;
}