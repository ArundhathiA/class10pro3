
var sea1,sea2,ship1,ship2;


function preload(){
  sea1=loadImage("sea.png");
  ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea2=createSprite(0,0,400,400);
  sea2.addImage(sea1);
  ship2=createSprite(160,160,100,100);
  ship2.addAnimation("running",ship1);
  ship2.scale=0.2;
  
}

function draw() {
  background("white");
  sea2.velocityX=-2;
  if(sea2.x<0){
    sea2.x=sea2.width/2;
    drawSprites();
  }
 
}