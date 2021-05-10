var x = 0;
var y = 0;
document.addEventListener("keyup", function (event) {
    if (event.key == 'ArrowRight') {
        x += 10;
        document.getElementById("nano").style.left = x + 'px';
        console.log(event.key);
    }
    if (event.key == 'ArrowDown') {
        y += 10;
        document.getElementById("nano").style.top = y + 'px';
        console.log(event.key);
    }
});
