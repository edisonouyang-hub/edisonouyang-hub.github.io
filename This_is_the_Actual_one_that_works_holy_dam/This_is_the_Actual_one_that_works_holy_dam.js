var ballx = 300;
var bally = 300; 
var ballSize = 40; 
var score = 0;
var gameState = "L1";

let restartBtn;
let bombSize = 30;
let bombs = [];

function preload() {
  img1 = loadImage('https://edisonouyang-hub.github.io/Port/lizard.gif');
  img2 = loadImage('https://edisonouyang-hub.github.io/Port/button.png');
  BOMB = loadImage('https://edisonouyang-hub.github.io/Port/bomb.jpg');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER); 
  textSize(20); 

  spawnBombs("L1");

  restartBtn = createButton("Restart Game");
  restartBtn.position(250, 350);
  restartBtn.mousePressed(resetGame);
  restartBtn.hide();
}

function draw() {
  background(220);

  if(gameState !== "WIN"){
    restartBtn.hide();
  }

  if(gameState == "L1") levelOne();
  if(gameState == "L2") levelTwo();
  if(gameState == "L3") levelThree();
  if(gameState == "L4") levelFour();
  if(gameState == "L5") levelFive();
  if(gameState == "WIN") winScreen();

  text("Score: " + score, width/2, 40);
}

function spawnBombs(level){
  bombs = [];

  let numBombs = 0;

  if(level == "L1") numBombs = 0;
  if(level == "L2") numBombs = 1;
  if(level == "L3") numBombs = 3;
  if(level == "L4") numBombs = 5;
  if(level == "L5") numBombs = 7;

  for(let i = 0; i < numBombs; i++){
    bombs.push({
      x: random(width),
      y: random(height)
    });
  }
}

function checkBombs(){
  for(let i = 0; i < bombs.length; i++){
    let d = dist(mouseX, mouseY, bombs[i].x, bombs[i].y);
    if(d < bombSize){
      resetGame(); // lose → restart
    }
  }
}

function drawBombs(){
  for(let i = 0; i < bombs.length; i++){
    image(BOMB, bombs[i].x, bombs[i].y, 40, 40);
  }
}

function drawPlayerAndGoal(){
  image(img2, ballx-5, bally-5, 60, 60);
  line(ballx, bally, mouseX, mouseY);
  image(img1, mouseX-40, mouseY-60, 75, 75);
}

function levelOne(){
  text("Level 1", width/2, height-20);

  checkBombs();

  if(dist(ballx, bally, mouseX, mouseY) < ballSize){
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if(score > 10){
    gameState = "L2";
    spawnBombs("L2");
  }

  drawPlayerAndGoal();
  drawBombs();
}

function levelTwo(){
  background(34,139,34);
  text("Level 2", width/2, height-20);

  checkBombs();

  if(dist(ballx, bally, mouseX, mouseY) < ballSize){
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if(score > 20){
    gameState = "L3";
    spawnBombs("L3");
  }

  drawPlayerAndGoal();
  drawBombs();
}

function levelThree(){
  background(173,216,230);
  text("Level 3", width/2, height-20);

  checkBombs();

  if(dist(ballx, bally, mouseX, mouseY) < ballSize){
    ballx = random(width);
    bally = random(height);
    ballSize--;
    score++;
  }

  if(score > 30){
    gameState = "L4";
    spawnBombs("L4");
  }

  drawPlayerAndGoal();
  drawBombs();
}

function levelFour(){
  background(200,200,50);
  text("Level 4", width/2, height-20);

  checkBombs();

  if(dist(ballx, bally, mouseX, mouseY) < ballSize){
    ballx = random(width);
    bally = random(height);
    ballSize--;
    score++;
  }

  if(score > 40){
    gameState = "L5";
    spawnBombs("L5");
  }

  drawPlayerAndGoal();
  drawBombs();
}

function levelFive(){
  background(120,0,120);
  text("FINAL LEVEL", width/2, height-20);

  checkBombs();

  if(dist(ballx, bally, mouseX, mouseY) < ballSize){
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if(score > 100){
    gameState = "WIN";
  }

  drawPlayerAndGoal();
  drawBombs();
}

function winScreen(){
  background(0,200,0);

  restartBtn.show();

  fill(255);
  textSize(40);
  text("YOU WIN 🦎", width/2, height/2 - 40);

  textSize(20);
  text("Final Score: " + score, width/2, height/2);
}

function resetGame(){
  score = 0;
  ballSize = 40;
  ballx = random(width);
  bally = random(height);
  gameState = "L1";
  spawnBombs("L1");
}
