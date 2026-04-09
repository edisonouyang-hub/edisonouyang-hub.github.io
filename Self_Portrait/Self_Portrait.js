function setup() {
  createCanvas(700, 700);
  background(240);
 // Grid
  stroke('rgba(0, 255, 0, 0.60)');
  strokeWeight(1);
 //horizontal
  line(0,100,700,100);
  line(0,200,700,200);
  line(0,300,700,300);
  line(0,400,700,400);
  line(0,500,700,500);
  line(0,600,700,600);
  line(0,700,700,700);
//vertical
  line(100,700,100,0);
  line(200,700,200,0);
  line(300,700,300,0);
  line(400,700,400,0);
  line(500,700,500,0);
  line(600,700,600,0);
  line(700,700,700,0);
  
  describe('grid.');
}

function draw() {

  //body
  fill(8, 25, 30);
rect(280,380,200,400)

//Coat
  stroke('rgba(0, 0, 0, 0)');
  strokeWeight(2);
  fill(8, 25, 30);
 beginShape()
 vertex(200, 380)
vertex(400, 390)
vertex(490, 380)
vertex(480, 490)
vertex(290, 490)
 endShape();

    //Shirt
  fill(200, 200, 200);
rect(340,430,90,300)

fill(230, 180, 90);
rect(340,430,90,25)

  //face
   stroke('rgba(0, 0, 0, 0)');
  strokeWeight(0);
fill(230, 180, 90);
ellipse(390, 300, 260, 290);
  
  
  //jacket 
  fill(16, 14, 14);
rect(400,450,85,300)

 // hat 
    stroke('rgba(0, 0, 0, 255)');
  strokeWeight(4);
  fill(10, 10, 20, 255);
 beginShape()
 vertex(270,250)
 vertex(150,120)
 vertex(550,150)
 vertex(520,270)
 endShape();
  
  //Coat top layer
  stroke('rgba(0, 0, 0, 0)');
  strokeWeight(5);
  fill(16, 14, 14);
 beginShape()
vertex(500, 380)
vertex(320, 400)
vertex(410, 520)
vertex(475, 520)
endShape();


//visor
  stroke('rgba(0, 0, 0, 255)');
  strokeWeight(4);
  fill(1, 1, 20, 255);
 beginShape()
 vertex(300,230)
 vertex(200,300)
 vertex(450,320)
 vertex(500,260)
 vertex(300,230)
 endShape();



//Visor Decor 
  stroke('rgba(255, 255, 255)');
  strokeWeight(4);
  fill(255, 255, 20, 255);
 beginShape()
vertex(270,250)
 vertex(300,220)
  vertex(480,260)
  vertex(470,270)
  vertex(270,250)
 endShape();

fill(245, 245, 20);
ellipse(490, 260, 20, 20);



}
