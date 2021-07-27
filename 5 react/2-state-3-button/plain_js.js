var on = false;
document.getElementById('on_off_button').addEventListener('click', function() {
    if (on) {
        document.getElementById('bulb').src = 'https://www.w3schools.com/js/pic_bulboff.gif';
        document.getElementById('on_off_button').innerText = 'Turn On';
        on = false;
    } else {
        document.getElementById('bulb').src = 'https://www.w3schools.com/js/pic_bulbon.gif';
        document.getElementById('on_off_button').innerText = 'Turn Off';
        on = true;
    }
});