// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "#FF0000";


// var userX = 0;
// var userY = 0;


// var user = ctx.fillRect(userX, userY, 10, 10);
// var user = ctx.fillRect(100, 100, 10, 10);

// var leftKeyPressed

var canvas, canvasContext;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    setInterval(mainloop, 1000 / 60);
}


//Player
var playerXpos = 300;
var playerYpos = 585;
const PLAYER_SIZE = 15;
var playerXspeed = 5;
var playerYspeed = 5;

//invader
var invaderXpos = 0;
var invaderYpos = 0;
const INVADER_SIZE = 20;
var invaderXspeed = 5;
var invaderYspeed = 5;

var leftKeyPressed = false;
var rightKeyPressed = false;
var spaceKeyPressed = false;

const LEFT_KEY = 37;
const RIGHT_KEY = 39;


//bullet
var bulXpos = playerXpos;
var bulYpos = 590;
const BUL_SIZE = 5;
var bulYspeed = -5;
var bulXspeed = 5;


function mainloop() {
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect(bulXpos, bulYpos, BUL_SIZE, BUL_SIZE, 'white'); //bullet
    colorRect(playerXpos, playerYpos, PLAYER_SIZE, PLAYER_SIZE, 'green'); //player
    colorRect(invaderXpos, invaderYpos, INVADER_SIZE, INVADER_SIZE, 'red'); //enemy


    playerMove();
    invaderMove();
    bulletMove();
}

function keyPressed(evt) {
    if (evt.keyCode === LEFT_KEY) {
        leftKeyPressed = true;
    }
    if (evt.keyCode === RIGHT_KEY) {
        rightKeyPressed = true;
    }
    if (evt.keyCode === 32) {
        spaceKeyPressed = true;
    }
}

function keyReleased(evt) {
    if (evt.keyCode === LEFT_KEY) {
        leftKeyPressed = false;
    }
    if (evt.keyCode === RIGHT_KEY) {
        rightKeyPressed = false;
    }
}

function playerMove() {
    if (leftKeyPressed) {
        playerXpos -= playerXspeed;
        bulXpos -= bulXspeed;
        if (playerXpos < 0) {
            playerXpos = 0 + PLAYER_SIZE / 2;
        }
    }
    if (rightKeyPressed) {
        playerXpos += playerXspeed;
        bulXpos += bulXspeed;
        if (playerXpos > 600) {
            playerXpos = 590 - PLAYER_SIZE / 2;
        }
    }
}

function invaderMove() {
    invaderXpos += invaderXspeed;

    if (invaderXpos > 570) {
        invaderXspeed = -5;
        invaderYpos += 10;

    } else if (invaderXpos < 10) {
        invaderXspeed = 5;
    } else if (invaderYpos === 300) {
        invaderYpos -= 10;
    }
}


function bulletMove(evt) {
    if (spaceKeyPressed) {
        bulXspeed = 0;
        bulYpos += -5;
    }

}

function colorRect(x, y, w, h, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, w, h);

}
