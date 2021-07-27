var numbers = [1,2,3];
var strings = ['ana', 'are', 'mere'];
// Cand folosesti / schimbi ceva din HTML folosind javascript => dom manipulation
document.getElementById('idButon').addEventListener('click', function(evt) {
    document.getElementById('idP').innerText = 'Muie Ponta';
    
    document.getElementsByClassName('pclass')[0].style.backgroundColor='white';
    document.getElementsByClassName('pclass')[1].style.backgroundColor='white';
    document.getElementsByClassName('pclass')[2].style.backgroundColor='white';
});

document.getElementById('idInput').addEventListener('keyup', function() {
    document.getElementById('vana').classList.remove('fa-bath');
    document.getElementById('vana').classList.add('fa-shower');
});