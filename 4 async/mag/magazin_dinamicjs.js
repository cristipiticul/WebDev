function downloadAndDisplayProducts() {
    $.ajax({
        url: 'https://sda-cristi.000webhostapp.com/dynamic_pages/3_dinamic_js/magazin_dinamicjs_service.php',
        method: 'GET',
        success: function (response) {
            var products = response;
            // Ce sa se intample cu ce a descarcat
            for (var i = 0; i < products.length; i++) {
                $("#product_list").append(`
                    <div class="product">
                        <h2 class="product_title">${products[i].name}</h2>
                        <img class="product_pic" src="${products[i].imageUrl}">
                        <p class="product_desc">${products[i].descriptionShort}</p>
                        <p class="product_price">${products[i].price} Lei</p>
                    </div>
                `);
                console.log(response);
            }
        }
    });
}
downloadAndDisplayProducts();

async function f() {
    var products = await $.ajax({
        url: "products.json",
        method: 'GET'
    }); 
    console.log("Finished downloading");
    console.log("After ajax");
    console.log(products);
}

var a = // contine ["apple", "bread", "water"]







// async function downloadAndDisplayProducts() {
//     var products = await $.ajax({
//         url: 'https://sda-cristi.000webhostapp.com/dynamic_pages/3_dinamic_js/magazin_dinamicjs_service.php',
//         method: 'GET'
//     });
//     // Ce sa se intample cu ce a descarcat
//     for (var i = 0; i < products.length; i++) {
//         $("#product_list").append(`
//             <div class="product">
//                 <h2 class="product_title">${products[i].name}</h2>
//                 <img class="product_pic" src="${products[i].imageUrl}">
//                 <p class="product_desc">${products[i].descriptionShort}</p>
//                 <p class="product_price">${products[i].price} Lei</p>
//             </div>
//         `);
//     }
// }
// downloadAndDisplayProducts();