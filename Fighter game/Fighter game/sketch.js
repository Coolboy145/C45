var blackBackground
var bridge
var enemy
var ally
var enemyGroup

function preload(){
  blackBackground = loadImage("Black background 1.jpeg")
  bridge = loadImage("brige.jpeg")
  enemyImg = loadImage("Enemy 2.jpeg")
  ally = loadImage("your fighter 2.png")
}

function setup() {
  createCanvas(1520, 750);
  fighter = createSprite(mouseX,700,50,50)
  fighter.addImage(ally)
  fighter.scale = 0.45

  enemyGroup = new Group()
}

function draw() {
  background("black");
  if(fighter.x >= 1450){
    fighter.velocityX = 0
  }
  if(keyDown(LEFT_ARROW)){
    fighter.x -= 2
  }
  if(keyDown(RIGHT_ARROW)){
    fighter.x += 2
  }
  if(keyDown(UP_ARROW)){
    fighter.y -= 2
  }
  if(keyDown(DOWN_ARROW)){
    fighter.y += 2
  }
  spawnEnemy()
  drawSprites()

}

function spawnEnemy(){
  if(frameCount%200===0){
  enemy = createSprite(1500,random(50,700),50,50)
  enemy.addImage(enemyImg)
  enemy.scale=0.45
  enemy.velocityX = -2
  enemy.lifetime = 750
  enemyGroup.add(enemy)
  
}
}

