
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,500);

monkey = createSprite(50,450,20,450);
monkey.addAnimation("running", monkey_running);
monkey.scale=0.1;
  
ground = createSprite(200,490,600,20);
ground.x = ground.width /2;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }  

score = 0;
  
  obstaclesGroup = createGroup();
  bananasGroup = createGroup();

}


function draw() {
background("blue");
  
textSize(30);
text("Survival: "+ score, 200,50);

ground.velocityX = -(4 + 3* score/400)
 if (ground.x < 300){
      ground.x = ground.width/2;
    }
    
    score = score + Math.round(getFrameRate()/60);  
  
if(keyDown("space")&& monkey.y >= 400) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.5

  monkey.collide(ground);
  
  spawnObstacles();
  spawnBanana();
  
drawSprites();
}

function spawnObstacles() {
  if (frameCount % 350 === 0) {
    var obstacle = createSprite(600,470,40,10);
    obstacle.addImage("obstacle",obstacleImage); 
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    obstaclesGroup.add(obstacle);
  }
}

function spawnBanana() {
  if (frameCount % 200 === 0) {
    var banana = createSprite(600,470,40,10);
    banana.y = Math.round(random(480,350));
    banana.addImage("banana",bananaImage); 
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 200;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananasGroup.add(banana);
  }
}

