/*
 * @description Enemies our player must avoid
 * @constructor function
 * @param {number} x - the x-axis position of a enemy
 * @param {number} y - the y-axis position of a enemy
 * @param {number} speedX - the speed of a enemy
 */
var Enemy = function(x, y, speedX) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speedX = speedX;
};

/*
 * @description Update the enemy's position
 * @param {number} dt - a time delta between ticks
 */
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speedX * dt);
};

/*
 * @description  Draw the enemy on the screen
 */
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
 * @description Enemies our player must avoid
 * @constructor function
 * @param {array} allEnemies - the array of all enemies
 */
var Player = function(allEnemies) {
    this.sprite = 'images/char-horn-girl.png';
    // set the start player's position 
    this.x = 200;
    this.y = 375;
    this.allEnemies = allEnemies;
};

/*
 * @description  Collision detection between a player and enemies
 */
Player.prototype.update = function() {
    // Check Collision a player's position and every enemy's position
    for (let i = 0; i < this.allEnemies.length; i++) {
        // if a player collide with an enemy
        if (this.x < this.allEnemies[i].x + 60 &&
            this.x + 60 > this.allEnemies[i].x &&
            this.y < this.allEnemies[i].y + 80 &&
            80 + this.y > this.allEnemies[i].y
        )
        // the player moves back to start position and score equal 0
        {
            this.x = 200;
            this.y = 375;
            score = 0;
        }
    }
};

/*
 * @description  Draw the player on the screen
 */
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
 * @description Handle keyboard input from the user when move the player
 */
Player.prototype.handleInput = function(keyboardInput) {
    // the player reaches the water, the player move back to start position instantly
    // and increase the score
    setTimeout(getScore, 0);

    // Press left arrow, the player moves to the left and can not move out of screen
    if (keyboardInput === 'left' && this.x > 99) {
        this.x += -100;
    }
    // Press right arrow, the player moves to the right and can not move out of screen
    if (keyboardInput === 'right' && this.x < 400) {
        this.x += 100;
    }
    //Press up arrow, the player moves to the up and can not move out of screen
    if (keyboardInput === 'up' && this.y > -25) {
        this.y -= 80;
    }
    //Press down arrow, the player moves to the down and can not move out of screen
    if (keyboardInput === 'down' && this.y < 375) {
        this.y += 80;
    }
};

/*
 * @description The player reaches the water, then move back to start position and get scores
 */
function getScore() {
    if (player.y < 55) {
        player.x = 200;
        player.y = 375;
        score += 100;
    }
}

/*
 * Create a number of score
 */
let score = 0;

/*
 * Instantiate enemy objects.
 * Place all enemy objects in an array called allEnemies
 */
let allEnemies = [];
// number of enemies
let cntEnemy = 500;
// set the position and speed for each enemy
for (let i = 0; i < cntEnemy; i++) {
    // random x-axis enemy's position
    const xEnemyPos = -250 * getRndPosition(0, 500);

    // random y-axis enemy's position
    const randomYPos = getRndPosition(1, 3);

    const yEnemyPos = (randomYPos === 1) ? (55) : (randomYPos === 2) ? (135) : (215);

    // random speed of the enemy
    const speed = getRndPosition(150, 550);

    // create a enemy object
    const enemy = new Enemy(xEnemyPos, yEnemyPos, speed);

    // push a enemy object in an array
    allEnemies.push(enemy);
}

/**
 * @description Random number between min and max (both included)
 * @param {number} min
 * @param {number} max
 */
function getRndPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
 * Place the player object in a variable called player
 */
const player = new Player(allEnemies);

/*
 * @description This listens for key presses and sends the keys to your
 * Player.handleInput() method. You don't need to modify this.
 */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});