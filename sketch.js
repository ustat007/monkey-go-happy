
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var bg;
var jump=true;
var survival_time=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  bg=createSprite(0,0,10000,700);
  bg.shapeColor="cyan"
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
 
 ground=createSprite(400,350,900,10);
 ground.velocityX=-4;
 
 FoodGroup=new Group();
 obstacleGroup=new Group();
}


function draw() {

  
  ground.x=ground.width/2;
  //gravity
 
  monkey.collide(ground);
   
    monkey.y=monkey.y+8
  
  if(keyDown("space")&&jump===true){
    monkey.y=monkey.y-20;
    console.log(monkey.y)
  }
  if (monkey.y<166){
    jump=false;
  }
  if(monkey.y>313){
    jump=true;
  }
  if (World.frameCount%80===0){
    banana()
  }
  if (World.frameCount%300===0){
    obstacle()
  }  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survival_time=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survival_time,100,50);
  
  
  
}

function banana(){
  fruit=createSprite(600,Math.round(random(120,200)),20,20);
  fruit.addImage(bananaImage);
  fruit.scale=0.1;
  fruit.velocityX=-4;
  fruit.lifetime=200;
  FoodGroup.add(fruit);
}

function obstacle(){
  stone=createSprite(600,324,20,20);
  stone.addImage(obstaceImage);
  stone.scale=0.12;
  stone.velocityX=-4;
  stone.lifetime=200;
  obstacleGroup.add(stone);
}
   


