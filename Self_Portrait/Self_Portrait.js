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
  // Grid
  stroke('rgba(0, 255, 0, 0.25)');
  strokeWeight(1);

fill(230, 180, 90, 10);
ellipse(400, 300, 300, 300);

  stroke('rgba(100, 0, 0, 0.60)');
  strokeWeight(4);
 beginShape()
 vertex(300,200)
 vertex(200,300)
 endShape();

  describe('grid.');
}
