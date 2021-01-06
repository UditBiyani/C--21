var ball;
var green, red, orange, blue;
var edges;


function setup() {
  createCanvas(800,400);
  
  edges = createEdgeSprites();

  ball = createSprite(random(1,800),50,20,20);
  ball.velocityY = random(4,10);
  ball.velocityX = random(4,10);

  green = createSprite(100,375,195,5);
  red = createSprite(300,375,195,5);
  blue = createSprite(500,375,195,5);
  orange = createSprite(700,375,195,5);
  
  green.shapeColor = "green";
  blue.shapeColor = "blue";
  red.shapeColor = "red";
  orange.shapeColor = "orange";



}

function draw() {
  background("black");  
  ball.bounceOff(edges);


  if(Touching(ball,green)){
    ball.shapeColor = "green";
    ball.bounceOff(green);
  }

  if(Touching(ball,blue)){
    ball.shapeColor = "blue";
    ball.bounceOff(blue);
  }

  if(Touching(ball,red)){
    ball.shapeColor = "red";
    ball.bounceOff(red);
  }

  if(Touching(ball,orange)){
    ball.shapeColor = "orange";
    ball.bounceOff(orange);
  }
  

  

  
  drawSprites();
}

