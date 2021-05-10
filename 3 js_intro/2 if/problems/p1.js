document.getElementById('verifica').addEventListener('click', function() {
    var nr = document.getElementById('input').value;
    if (nr >= 0 && nr < 25) {
        document.getElementById('response').innerText = "Nr e in intervalul [0, 25)";
    }
    if (nr >= 25 && nr < 50) {
        document.getElementById('response').innerText = "Nr e in intervalul [25, 50)";
    }
    if (nr >= 50 && nr < 75) {
        document.getElementById('response').innerText = "Nr e in intervalul [50, 75)";
    }
    if (nr >= 75 && nr <= 100) {
        document.getElementById('response').innerText = "Nr e in intervalul [75, 100]";
    }
});