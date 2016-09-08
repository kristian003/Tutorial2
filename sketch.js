var circleX = 0;

function setup() {
  createCanvas (900,900);
  background (0);
}

function draw() {
  //background (200);
  noStroke();
  fill(250,200,255,100);
  ellipse (mouseX,mouseY,25,25);

}

function mousePressed () {
background (200);
}