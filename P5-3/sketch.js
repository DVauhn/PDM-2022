function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0, 0, 0);
  strokeWeight(0);

  fill(255, 255, 75);
  circle(200, 200, 300);

  fill(0,0,0);
  triangle(200,200, 50,325, 50,25);

  fill(255, 75, 50)
  arc(550, 200, 300, 300, PI, 0);
  rect(400, 200, 300, 150);

  fill(255,255,255);
  circle(475,200,75);
  circle(625,200,75);

  fill(0,0,255);
  circle(475,200,50);
  circle(625,200,50);  
}