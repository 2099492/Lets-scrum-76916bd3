var canvas, canvasContext;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    setInterval(mainLoop, 1000 / 62);
}


//Player
var pXpos = 300;
var pYpos = 660;
var pXspeed = 5;
var pYspeed = 3;
const P_SIZE = 50;
var pSrc = new Image();
pSrc.src = 'gun.png';


//enemy
// var enemyXpos = 40;
// var enemyYpos = 0;
// const enemy_SIZE = 20;
// var enemyXspeed = 5;
// var enemyYspeed = 5;


var leftKeyPressed = false;
var rightKeyPressed = false;
var spaceKeyPressed = false;


const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const SPACE_KEY = 32;

var player = new Player(pSrc, pXpos, pYpos, P_SIZE, P_SIZE, pXspeed, pYspeed);

var bullets = [];

var enemies = [];

var setUp = true;
var totalEnemies = 10;
var hitting = false;

var wSetup = true;
var walls = [];
var totalWalls = 10;
var wallHit = false;

// var ship = new Image();
// ship.src = 'gun.png'
// cheemsX = pXpos - 12;
// cheemsY = 560;
// cheemsXs = 5;
// cheemsYs = 5;

var score = 0;

var canvasBackGround = new Image();
canvasBackGround.src = 'cheems.jpg';


function mainLoop() {
    drawImg(canvasBackGround, 0, 0, canvas.width, canvas.height);
    // var cheems = drawImg(ship, cheemsX, cheemsY, 50, 50);


    if (setUp == true) {
        for (i = 0; i < totalEnemies; i++) {
            makeEnemy();
        }
        setUp = false;
    }

    if (wSetup == true) {
        for (j = 0; j < totalWalls; j++) {
            makeWall();
        }
        wSetup = false;
    }
    // cheemsMove();

    player.draw();
    player.move();



    if (bullets.length > 0) {
        bullets.forEach(function(bullet, i) {
            bullet.draw();
            bullet.move();


            if (bullet.outOfBounds()) {
                delete bullets[i];
            }
            if (bullet.hasCollided()) {
                delete bullets[i];
                score++;
                console.log(score);
            }
        });
        bullets = bullets.filter(item => item !== undefined);
    }

    if (enemies.length > 0) {
        hitting = enemies.some(enemy => enemy.hitWall());

        enemies.forEach(function(enemy, i) {
            enemy.draw();
            if (hitting) {
                enemy.specialMove();
            } else {
                enemy.normalMove();
            }
        });
    }
    if (bullets.length > 0) {
        bullets.forEach(function(bullet, i) {
            bullet.draw();
            bullet.move();

            if (bullets.length > 3) {
                delete bullets[i];
            }
        });
        bullets = bullets.filter(item => item !== undefined);
    }

    canvasContext.font = "30px Comic Sans MS";
    canvasContext.fillStyle = "red";
    canvasContext.fillText("Jouw   score is: " + score, 10, 50);
}


function keyPressed(evt) {
    if (evt.keyCode == LEFT_KEY) {
        leftKeyPressed = true;
    }
    if (evt.keyCode == RIGHT_KEY) {
        rightKeyPressed = true;
    }
    if (evt.keyCode == SPACE_KEY) {
        makeBullet();
    }
}


function keyReleased(evt) {
    if (evt.keyCode == LEFT_KEY) {
        leftKeyPressed = false;
    }
    if (evt.keyCode == RIGHT_KEY) {
        rightKeyPressed = false;
    }
}

// function cheemsMove() {
//     if (leftKeyPressed) {
//         cheemsX -= cheemsXs;
//     }
//
//     if (rightKeyPressed) {
//         cheemsX += cheemsXs;
//     }
//     if (cheemsX <= 0) {
//         cheemsX += cheemsXs;
//     }
//     if (cheemsX >= canvas.width) {
//         cheemsX -= cheemsXs;
//     }
//
// }


function makeBullet() {
    const BULLET_SIZE = 5;
    var bulletXpos = player.x + player.w / 2 - BULLET_SIZE / 2;
    var bulletYpos = player.y - BULLET_SIZE;
    var bulletYspeed = 10;

    var bullet = new Bullet(bulletXpos, bulletYpos, BULLET_SIZE, BULLET_SIZE, 'white', bulletYspeed);

    bullets.push(bullet);
}

var enemyCounter = 1;

function makeEnemy() {
    const ENEMY_SIZE = 20;
    const gap = 30;
    var enemyXpos = enemyCounter * ENEMY_SIZE + gap * enemyCounter;
    var enemyYpos = 150;
    var enemyYpos2 = 100;
    var enemyYpos3 = 50;
    var enemyYpos4 = 1;
    var enemyXspeed = 1;
    var enemyYspeed = 30;
    var enemySrc = new Image();
    enemySrc.src = 'cheems.jpg';

    enemyCounter++;

    var enemy = new Enemy(enemySrc, enemyXpos, enemyYpos, ENEMY_SIZE, ENEMY_SIZE, enemyXspeed, enemyYspeed);
    var enemy2 = new Enemy(enemySrc, enemyXpos, enemyYpos2, ENEMY_SIZE, ENEMY_SIZE, enemyXspeed, enemyYspeed);
    var enemy3 = new Enemy(enemySrc, enemyXpos, enemyYpos3, ENEMY_SIZE, ENEMY_SIZE, enemyXspeed, enemyYspeed);
    var enemy4 = new Enemy(enemySrc, enemyXpos, enemyYpos4, ENEMY_SIZE, ENEMY_SIZE, enemyXspeed, enemyYspeed);

    enemies.push(enemy, enemy2, enemy3, enemy4);

}

// var walls = [];
// var wSetup = true;
// var totalWalls = 10;
// var wallHit = false;

var wallCounter = 1;

function makeWall() {
    const WALL_SIZE = 10;
    const wallGap = 5;
    var wallXpos = wallCounter * WALL_SIZE + wallGap * wallCounter;
    var wallYpos = 550;
    var wallSrc = new Image();
    wallSrc.src = 'wall.png';

    wallCounter++;

    var wall = new Wall(wallSrc, wallXpos, wallYpos, WALL_SIZE, WALL_SIZE);

    walls.push(wall);
}

function drawImg(src, x, y, w, h) {
    canvasContext.drawImage(src, x, y, w, h);
}

function colorRect(x, y, w, h, c) {
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}