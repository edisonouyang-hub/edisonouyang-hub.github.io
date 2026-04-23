//note: use ctrl/Cmd + t to auto format your code (indentations)

var img;
//var img2;
//var img3;
var initials ='ED'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

let button; //https://p5js.org/reference/p5/createButton/

function preload() {
  // preload() runs once, it may make you wait
  //  img = loadImage('cat.png');  // cat.jpg needs to be next to this .js file
  // you can link to an image on your github account
  img = loadImage('https://edisonouyang-hub.github.io/Port/Banana.jpg');
  //  img2 = loadImage('https://arao-sjsu.github.io/images/round.png');
  //  img3 = loadImage('https://veryprofessional3d.github.io/images/rainbow.gif');
}

function setup() {
  createCanvas(800, 600);  // canvas size
  background(screenbg);   // use our background screen color

  button = createButton('clear canvas');
  button.position(500, 645);
  //call clear_print() when the button is pressed
  button.mousePressed(clear_print);

  button = createButton('save img');
  button.position(500, 620);
  //call clear_print() when the button is pressed
  button.mousePressed(saveme);
  
  button = createButton('help text');
  button.position(500, 670);
  //call clear_print() when the button is pressed
  button.mousePressed(helpText);
  
  //want to style your buttons?? https://editor.p5js.org/msboyles/sketches/Vdfl8pLCB_
  //use css - https://editor.p5js.org/kjhollen/sketches/58WL8zYu1
  
  helpText();
  
  
}


function draw() {
 let brush = 5;
  
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
  }
  if (mouseIsPressed) {
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic functionx



//size 1
  if (toolChoice == '1' ) {  // fine print
    strokeWeight(4);
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
 
//size 2
} else if (key == '2') { // second tool
    strokeWeight(40);
    stroke(155, 155, 155, 100);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
// Red 
} else if (toolChoice == '3') {
    stroke(230, 0, 0, 50); 
    strokeWeight(20);        
    line(mouseX, mouseY, pmouseX, pmouseY);

// Yellow
} else if (toolChoice == '4') {
    stroke(255, 255, 0, 50);  
    strokeWeight(20);         
    line(mouseX, mouseY, pmouseX, pmouseY);
                    
// Turquoise
} else if (toolChoice == '5') {
    stroke(64, 255, 180, 50); 
    strokeWeight(20);             
    line(mouseX, mouseY, pmouseX, pmouseY);
    
// make testbox do something! 
// line(mouseX, mouseY, pmouseX, pmouseY); 
} else if (toolChoice == '6') { // this tool calls a function 
stroke(10, 30, 255); 
 testbox(255, 192, 203, 30); // pink 
 testbox(200, 160, 255, 30);  // light purple
 testbox(255, 200, 150, 30);  // pastel orange
 
      //glint7
} else if (toolChoice == '7') {
    stroke(255, 255, 255, 10);
    strokeWeight(1);
    fill(255, 255, 255, 20);
    square(mouseX-10, mouseY-10, 20, 20);
 
     //shade
} else if (toolChoice == '8') {
    stroke(0);
    strokeWeight(0);
    fill(0, 0, 0, 20);
    square(mouseX-10, mouseY-10, 20, 25);

 //eraser
} else if (toolChoice == '9') {
    stroke(250, 250, 250);
    strokeWeight(1);
    fill(250, 250, 250);
    square(mouseX-10, mouseY-10, 35, 35);

// It's my hat 
} else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));

noStroke();
fill(8, 25, 30);

  beginShape();
  vertex(mouseX - 10, mouseY);
  vertex(mouseX + 20, mouseY);
  vertex(mouseX + 20, mouseY + 10);
  vertex(mouseX -30, mouseY +10);
  endShape(CLOSE);

// visor
    fill(10, 10, 20);
beginShape();
vertex(mouseX - 25, mouseY);
vertex(mouseX - 40, mouseY - 30, mouseX + 40, mouseY - 30, mouseX + 25, mouseY);
vertex(mouseX + 15, mouseY - 10, mouseX - 15, mouseY - 10, mouseX - 25, mouseY);
endShape(CLOSE);

    fill(10, 10, 20);
beginShape();
vertex(mouseX + 25, mouseY);
vertex(mouseX - 20, mouseY);
vertex(mouseX - 40, mouseY -20);
vertex(mouseX + 25, mouseY -15);
endShape(CLOSE);

// button
fill(245, 245, 20);
ellipse(mouseX + 18, mouseY + 8, 8, 8);
       
// Lace
fill(200, 210, 90);
rect(mouseX - 15, mouseY - 3, 36, 8);


  } else if (toolChoice == 'K' || toolChoice == 'k') { // oddly Helpful Banana 
    image(img, mouseX, mouseY, mouseX*0.5, mouseX*0.15); //what does this do?
    //  } else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    //    image(img2, mouseX-25, mouseY-25, 50, 50,20);
    //  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    //    image(img3, mouseX-25, mouseY-25, 50, 50,20);
  } //else if (toolChoice == 'x' || key == 'X') {

 
    
  //clearflag = 1;

  //} 
  else if (key == 'p' || key == 'P') {

    saveme();  // call saveme which saves an image of the screen
  }

  function testbox(r, g, b) {
  stroke(r, g, b, 250);
  strokeWeight(2)
  for (let i = 5; i < 20; i++) {
    point(mouseX + random(-50, 50), mouseY + random(-50, 50));
  }
}
}

function clear_print() {
  // clears the screen by resetting the background
  background(screenbg); // set the screen back to the background color
}

function saveme() {
  //this will save the name as the intials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}

function keyPressed() { //https://p5js.org/reference/p5/keyPressed/
  if (key === 'x' || key === 'X') {
    clear_print();
  } else if (key === 'p' || key === 'P') {
    saveme();
  }
}

function helpText(){
  fill("black");
  strokeWeight(0.1);
  textSize(12);
  text('press numerical keys from 1 - 0 for different strokes', 60, 30);
  text('use buttons to save or clear canvas, or press x or p', 60, 45);
  text('try g for secret bonus', 60, 60);
  
}
