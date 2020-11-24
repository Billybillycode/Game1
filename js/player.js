// need to do import export

const _MAXLIFE = 99;

export const chevalier = {
    element:  document.getElementById("chevalier"),
    life: _MAXLIFE,
    position: {
        x: x,
        y: y
    },
}
//moving the player




// arrrow up = 38
// arrow down = 40
// arrow left = 37
// arrow right = 39

let moveUp = moveUp () {
    this.position = 
}

let moveDown =  () {
    this.position = 
}

let moveLeft =  () {
    this.position = 
}

let moveRight () {
    this.position = 
}


if (KeyboardEvent === 39) {
    return moveUp()
}

if (KeyboardEvent === 39) {
    return moveDown(40)
}

if (KeyboardEvent === 37) {
    return moveLeft()
}

if (KeyboardEvent === 39) {
    return moveRight()
}


function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }
  
  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
  }
  
  function moveup() {
    myGamePiece.speedY -= 1;
  }
  
  function movedown() {
    myGamePiece.speedY += 1;
  }
  
  function moveleft() {
    myGamePiece.speedX -= 1;
  }
  
  function moveright() {
    myGamePiece.speedX += 1;
