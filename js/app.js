// Enemies our player must avoid
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

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   
     this.x += (this.speedX * dt);
     //console.log(this.x)
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (allEnemies) {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 375;
    this.allEnemies = allEnemies;
};

Player.prototype.update = function() {
    // Check Collision
    for (let i = 0; i < this.allEnemies.length; i++){

        if (this.x < this.allEnemies[i].x + 60 &&
        this.x + 60 > this.allEnemies[i].x &&
        this.y < this.allEnemies[i].y + 80 &&
        80 + this.y > this.allEnemies[i].y
        ) 
        {   
           this.x = 200;
           this.y = 375;
           score = 0;
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyboardInput) {
   
    setTimeout(getScore,0);
    
    
    if (keyboardInput === 'left' && this.x > 99) {
        this.x += -100;
    }
    if (keyboardInput === 'right' && this.x < 400) {
        this.x += 100;
    }
    if (keyboardInput === 'up' && this.y > -25) {
        this.y -= 80;
    }
    if (keyboardInput === 'down' && this.y < 375) {
        this.y += 80;
    }
    console.log(this.x, this.y);
    //return[this.x, this.y];
};

function getScore() {
    if (player.y < 55) {
        player.x = 200;
        player.y = 375;
        score += 100;
    }
}

let score = 0;

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
cntEnemy = 100;//200;
for (i = 0; i < cntEnemy; i++){
    //debugger
    const xEnemyPos = -200*getRndPosition(0, 350)

    const randomYPos = getRndPosition(1, 3);

    let yEnemyPos = (randomYPos===1)?(55):(randomYPos===2)?(135):(215);
    //console.log(xPos, yPos);


    const speed = getRndPosition(150,550);
    //console.log(xEnemyPos, yEnemyPos,speed);

    const enemy = new Enemy(xEnemyPos,yEnemyPos,speed);

    allEnemies.push(enemy);

}

// random number between min and max (both included)
function getRndPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Place the player object in a variable called player


const player = new Player(allEnemies);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

