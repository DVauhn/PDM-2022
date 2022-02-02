function setup() {
  createCanvas(1440, 757);
  strokeWeight(5);
  background(250);
  brushColor = color(0);
}

function draw() {
  drawVColorPane();
  
  
  
    if (mouseIsPressed){
    stroke(brushColor);
    line(mouseX, mouseY, pmouseX, pmouseY);
    }
  } 

  function mousePressed(){
    if (mouseX <=30){
      if (mouseY <=30) brushColor = color(255, 0, 0);
      else if(mouseY <= 60) brushColor = color(255, 127, 0);
      else if(mouseY <= 90) brushColor = color(255, 255, 0);
      else if(mouseY <= 120) brushColor = color(0, 200, 0);
      else if(mouseY <= 150) brushColor = color(0, 255, 255);
      else if(mouseY <= 180) brushColor = color(50, 50, 255);
      else if(mouseY <= 210) brushColor = color(255, 0, 255);
      else if(mouseY <= 240) brushColor = color(150, 80, 0);
      else if(mouseY <= 270) brushColor = color(255);
      else if(mouseY <= 300) brushColor = color(0);
      
    } 
  }

  function drawVColorPane(){
    noStroke();
    fill(255, 0, 0);  //Red
    rect(0, 0, 30, 30);
  
    fill(255, 127, 0);  //Orange
    rect(0, 30, 30, 30);
  
    fill(255, 255, 0);  //Yellow
    rect(0, 60, 30, 30);
  
    fill(0, 200, 0);  //Green
    rect(0, 90, 30, 30);
  
    fill(0, 255, 255);  //Cyan
    rect(0, 120, 30, 30);
  
    fill(50, 50, 255);  //Blue
    rect(0, 150, 30, 30);
  
    fill(255, 0, 255);  //Magenta
    rect(0, 180, 30, 30);
  
    fill(150, 80, 0); //Brown
    rect(0, 210, 30, 30);
  
    fill(255);      //White
    rect(0, 240, 30, 30);
  
    fill(0);
    rect(0, 270, 30, 30);//Black
  }

