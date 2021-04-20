var t = 0;
var left = 0;
document.addEventListener('keydown', function(evt) {
    console.log(evt.code);
    if (evt.code == 'ArrowUp') {
        t -= 10;
    }
    if (evt.code == 'ArrowDown') {
        t += 10;
    }
    if (evt.code == 'ArrowLeft') {
        left -= 10;
    }
    if (evt.code == 'ArrowRight') {
        left += 10;
    }
    console.log('left ' + left + ' top ' + t)
    document.getElementById('nano').style.left = left + 'px';
    document.getElementById('nano').style.top = t + 'px';
});