var products = [
    {
        name: "Sweet Item",
        price: "5$",
        image: "https://js-beginners.github.io/filter-project/img/sweets-1.jpeg"
    },
    {
        name: "Cupcake Item",
        price: "10$",
        image: "https://js-beginners.github.io/filter-project/img/cupcake-1.jpeg"
    },
    {
        name: "Cake Item",
        price: "25$",
        image: "https://js-beginners.github.io/filter-project/img/cake-1.jpeg"
    },
    {
        name: "Dougnut Item",
        price: "10$",
        image: "https://js-beginners.github.io/filter-project/img/doughnut-1.jpeg"
    },
    {
        name: "Sweet Item",
        price: "5$",
        image: "https://js-beginners.github.io/filter-project/img/sweets-2.jpeg"
    },
    {
        name: "Cupcake Item",
        price: "10$",
        image: "https://js-beginners.github.io/filter-project/img/cupcake-1.jpeg"
    },
    {
        name: "Cake Item",
        price: "25$",
        image: "https://js-beginners.github.io/filter-project/img/cake-2.jpeg"
    },
    {
        name: "Dougnut item",
        price: "10$",
        image: "https://js-beginners.github.io/filter-project/img/doughnut-2.jpeg"
    },
    {
        name: "Sweet Item",
        price: "5$",
        image: "https://js-beginners.github.io/filter-project/img/sweets-3.jpeg"
    },
    {
        name: "Cupcake Item",
        price: "10$",
        image: "https://js-beginners.github.io/filter-project/img/cupcake-3.jpeg"
    },
    {
        name: "Cake Item",
        price: "25$",
        image: "https://js-beginners.github.io/filter-project/img/cake-3.jpeg"
    },
    {
        name: "Dougnut item",
        price: "10$",
        image: "https://js-beginners.github.io/filter-project/img/doughnut-3.jpeg"
    },
];

function createElement(i) {
    var img_var = document.createElement('img');
    img_var.src = products[i].image;
    var div_produs = document.createElement('div');
    div_produs.className = "product";
    div_produs.appendChild(img_var);
    document.getElementById('products').appendChild(div_produs);
    var br_var = document.createElement('br');
    div_produs.appendChild(br_var);
    var div_bottom = document.createElement('div');
    div_bottom.className = 'bottom';
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    div_produs.appendChild(div_bottom);
    div_bottom.appendChild(span1); // La div_bottom adauga copilul span1
    div_bottom.appendChild(span2);
    span1.innerText = products[i].name;
    span2.innerText = products[i].price;
}

for (var i = 0; i < products.length; i++) {
    createElement(i);
}

document.getElementById("cake").addEventListener("click", function() {
    for (var i = 0; i < products.length; i++) {
        if (products[i].name === "Cake Item") {
            createElement(i);
        }
    }
});

document.getElementById("products").style.backgroundColor = "green"; // modificari de CSS
document.getElementById("products").innerText = "abc"; // modificarea continutului HTML
document.getElementById("products").className = "myClass"; // ii dam o clasa


var elem = document.createElement('div'); // un element nou
elem.style.backgroundColor = '';

var a; // variabila fara valoare initiala
var b = 1;
var arr = [1, 2, 3];
var obj = { name: "Cristi", jmekerie: 100, birthday: "25.10.1994" };
var arrOfObj = [
    {
        name: "Cristi",
        birthday: "25.10.1994"
    },
    {
        name: "Maria",
        birthday: "13.04.1999"
    }
];

b++; // marim b cu 1 (devine 3)
arr[1] // 2
fruits[2] = "Pineapple"; // Schimbam Apple -> Pineapple
obj.name = "Georgica" // "Cristi"
arrOfObj[0].name // "Cristi"

document.getElementById("X").addEventListener("input", function() {
    var text = document.getElementById("search").value;
});

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // adaugam un element in array

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username === "cristi" && password == "bossu") {
    window.location.href = "main.html"
}

var quotes = ["Hai sa facem sa fie bine", "Unde's multi puterea creste", "Daca n-ai cap vai de picioare"];
for (var i = 0; i < quotes.length; i++) { // i va fi pe rand 0, 1, 2
    var p = document.createElement('p');
    p.innerText = quotes[i];
    document.getElementById("quotes").appendChild(p);
}

numar === 2
numar > 5
str === "prajitura"       // true daca variabila str e "prajitura"
str.includes("prajitura") // true daca variabila str contine "prajitura"
cond1 && cond2            // AND (true cand ambele conditii sunt true)
cond1 || cond2            // OR (true cand cel putin o conditie e true)