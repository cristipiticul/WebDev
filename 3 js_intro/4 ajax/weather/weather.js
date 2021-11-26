// AJAX - Descarca sau face Upload la informatii
// intra pe http://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=a21de446e4b337d45d3a05f089e5638b&units=metric
// descarca ce-i acolo
// pune intr-o variabila JS

// var squad = <descarca de pe https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
// ----------------------
// | GET    -> descarca |
// ----------------------
// POST   -> creaza -- upload
// PUT    -> modifica -- upload
// DELETE -> sterge
request.responseType = 'json';
request.send();

request.onload = function() { // Ce sa se intample cand gata de descarcat?
    var superHeroes = request.response;
    console.log(superHeroes);

    var h1 = document.createElement("h1");
    h1.innerText = superHeroes.squadName;
    document.getElementById('bodyId').appendChild(h1);
}