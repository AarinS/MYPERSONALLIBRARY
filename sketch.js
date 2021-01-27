var fixedRectangle,movingRectangle;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(500, 100, 50, 80);
  fixedRectangle.shapeColor = "green";
  movingRectangle = createSprite(500,200,80,30);
  movingRectangle.shapeColor = "green";

  movingRectangle.velocityY = -5;
  fixedRectangle.velocityY = +5;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
}


function draw() {
  background(0,0,0);
  //movingRectangle.x = World.mouseX;
  //movingRectangle.y = World.mouseY;  
  
  if(isTouching(movingRectangle,gameObject3)){
    gameObject3.shapeColor = 'red';
    movingRectangle.shapeColor = 'red';
  }
  else{
    gameObject3.shapeColor = 'green';
    movingRectangle.shapeColor = 'green';
  }
  
  bounceOff(movingRectangle,fixedRectangle);
  drawSprites();
}

