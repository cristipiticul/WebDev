document.getElementById("ziVadimBtn").addEventListener("click", function(){
    var pNou = document.createElement("p");    // <p></p>
    pNou.innerText = "Sumuldoaca escroaca";    // <p>Sumuldoaca escroaca</p>
    var pNou2 = document.createElement("p");   // <p></p>
    pNou2.innerText = "Da o muie nu vrei tu?"; // <p>Da o muie nu vrei tu?</p>

    var divNou = document.createElement("div"); // <div></div>
    divNou.appendChild(pNou);  // <div><p>Sumuldoaca escroaca</p></div>
    divNou.appendChild(pNou2); // <div><p>Sumuldoaca escroaca</p><p>Da o muie nu vrei tu?</p></div>

    document.getElementById("vorbeDeIntelepciune").appendChild(divNou); // add child
});