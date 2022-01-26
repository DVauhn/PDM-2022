function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(255,255,255);
  strokeWeight(5)
  background(30, 0, 125);

  fill(0, 125, 0)
  circle(200, 200, 200)
  
  fill(255,0,0)
  beginShape();
    vertex(200, 100);
    vertex(225, 175);
    vertex(300, 175);
    vertex(235, 215);
    vertex(260, 280);
    vertex(200, 240);
    vertex(140, 280);
    vertex(165, 215);
    vertex(100, 175);
    vertex(175, 175);
  endShape(CLOSE);

}