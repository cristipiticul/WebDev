function schimbaCuloareaInIntunecat() {
    document.getElementById("bodyId").style.backgroundColor = 'black';
    document.getElementById("bodyId").style.color = 'white';
}

function schimbaCuloareaInNota10() {
    document.getElementById("bodyId").style.backgroundColor = 'chartreuse';
    document.getElementById("bodyId").style.color = 'black';
}

function schimbaCuloareaPal() {
    document.getElementById('bodyId').style.backgroundColor = 'beige';
    document.getElementById('bodyId').style.color = 'black';
    // document.getElementsByClassName('button')[0].style.backgroundColor = 'LightGray';
    // document.getElementsByClassName('button')[1].style.backgroundColor = 'LightGray';
    // document.getElementsByClassName('button')[2].style.backgroundColor = 'LightGray';
    for (var i = 0; i < 4; i++) {
        document.getElementsByClassName('button')[i].style.backgroundColor = 'LightGray';
    }
}

document.getElementById('butonMaria').addEventListener('click', function(event) {
    document.getElementById('bodyId').style.backgroundColor = 'hotpink';
    document.getElementById('bodyId').style.color = 'LavenderBlush';
});