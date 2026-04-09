var ballx = 300;
var bally = 300; 
var ballSize = 40; 
var score =0;
var gameState = "L1"

function preload() {

  img1 = loadImage('https://edisonouyang-hub.github.io/Port/lizard.gif'); //lizard
  img2 = loadImage('https://edisonouyang-hub.github.io/Port/button.png'); //button
  BOMB = loadImage('https://edisonouyang-hub.github.io/Port/bomb.jpg');//bomb
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER); 
  textSize(20); 
}// end of setup 


function draw() {
  background(220); 
  if(gameState== "L1"){ 
levelOne(); 
  }
if (gameState== "L2"){
    levelTwo(); 
}
 if (gameState=="L3"){
   levelThree(); 
  }
      
    
 text(("Score: " + score), width/2, 40);  

} //end of draw

function levelOne(){
 text("level 1", width/2, height-20); 
var distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall <ballSize/2){
ballx = random(width); 
bally = random(height); 
score = score + 1

} //end if...
   if(score>5){
    //  background(random(255));  
    gameState- "L2"; 
}   
         image (img2, ballx-5, bally-5, 60, 60); 
line (ballx, bally, mouseX, mouseY);
  image(img1, mouseX-40, mouseY-60, 75, 75);

   
} //end of level 1 


function levelTwo(){
  background(69,42,0) 
  text("level 2", width/2, height-20); 
   var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
     ballx = random(width); 
     bally = random(height); 
     score = score +1;
 } // ends if......
 if(score>15){
 gameState = "L3";  
} 
  
    ellipse (ballx, bally, ballSize, ballSize); 
 line (ballx, bally, mouseX, mouseY);
  }
  

function levelThree(){
    background(200, 100, 200);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){
// level 4
//   gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level three 
