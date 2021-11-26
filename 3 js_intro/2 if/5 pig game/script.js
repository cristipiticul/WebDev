var active_player = 1;
var player_1_current_points = 0;
var player_2_current_points = 0;
document.getElementById("btn_hold").addEventListener("click", function() {
    if (active_player === 1) {
        document.getElementById("player_0_section").classList.remove("player--active");
        document.getElementById("player_1_section").classList.add("player--active");
        active_player = 2;
    } else {
        document.getElementById("player_0_section").className = "player player--0 player--active";
        document.getElementById("player_1_section").className = "player player--1";
        active_player = 1;
    }
});

document.getElementById("btn_roll").addEventListener("click", function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 1) {
        document.getElementById("dice_pic").src = "dice-1.png";
    }
    if (dice === 2) {
        document.getElementById("dice_pic").src = "dice-2.png";
    }
    if (dice === 3) {
        document.getElementById("dice_pic").src = "dice-3.png";
    }
    if (dice === 4) {
        document.getElementById("dice_pic").src = "dice-4.png";
    }
    if (dice === 5) {
        document.getElementById("dice_pic").src = "dice-5.png";
    }
    if (dice === 6) {
        document.getElementById("dice_pic").src = "dice-6.png";
    }
});