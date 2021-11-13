async function f() {
    var products = await $.ajax({
        url: "products.json", // contine ["apple", "bread", "water"]
        method: 'GET',
    });
    console.log("Finished downloading"); 
    console.log("After ajax");
    console.log(products);
}