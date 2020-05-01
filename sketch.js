var wall,thickness;
var bullet,speed,weight;
var bulletRightEdge,wallLeftEdge


function setup() {
  createCanvas(1600,400);
  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));

  wall = createSprite(1200, 200, thickness,height/2);
  wall.shapeColor = 80,80,80 

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";

  
  bullet.velocityX = speed;

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
}

function draw() {
  background("black");  

    if(wall.x-bullet.x < (bullet.width+wall.width)/2){
      bullet.velocityX = 0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

      if(damage <= 10){
      wall.shapeColor = "green";
    }

    if(damage > 10){
      wall.shapeColor = "red";
    }
  }

console.log(speed);

  drawSprites();
}


