var intrebari = [
    {
        intrebare: "Cati cai pot fi inhamati la o caruta?",
        raspuns1: "2 cai frumosi",
        raspuns2: "6 cai",
        raspuns3: "Nu furam Tibi draga",
        raspuns4: "Asa",
        raspunsCorect: "raspuns1"
    },
    {
        intrebare: "Care e leguma?",
        raspuns1: "Cristi",
        raspuns2: "Cartof",
        raspuns3: "Salam",
        raspuns4: "Papaya",
        raspunsCorect: "raspuns2"
    },
    {
        intrebare: "Care e o manea?",
        raspuns1: "Am bani dar nu am femei",
        raspuns2: "Nu am noroc nici cat un porc",
        raspuns3: "Cine are noroc are",
        raspuns4: "Gulasul iubirea mea",
        raspunsCorect: "raspuns3"
    }
];
var i = 0;
document.getElementById('check').addEventListener('click', function() {
    var raspuns = document.getElementById(intrebari[i].raspunsCorect).checked;
    if (raspuns) {
        document.getElementById("corect").innerText = "Raspuns corect!";
    } else {
        document.getElementById("corect").innerText = "Raspuns gresit!";
    }
});
document.getElementById('next').addEventListener('click', function() {
    i++;
    document.getElementById("intrebare").innerText = intrebari[i].intrebare;
    document.getElementById("label1").innerText = intrebari[i].raspuns1;
    document.getElementById("label2").innerText = intrebari[i].raspuns2;
    document.getElementById("label3").innerText = intrebari[i].raspuns3;
    document.getElementById("label4").innerText = intrebari[i].raspuns4;

    document.getElementById("raspuns1").checked = false;
    document.getElementById("raspuns2").checked = false;
    document.getElementById("raspuns3").checked = false;
    document.getElementById("raspuns4").checked = false;

    document.getElementById("corect").innerText = "";
});