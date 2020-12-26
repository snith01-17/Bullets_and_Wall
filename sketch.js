var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);

  wall = createSprite(1200,200, thickness, height/2);
  wall.shapecolor = color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(100, 200, 50, 15);
  bullet.shapecolor = color(255,255,255);
  bullet.velocityX = speed;

  //drawSprites();
}

function draw() {
  background("black");  

  
  //calling function
  //hasCollided(bullet,wall);

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    console.log(damage);
    if(damage>10)
    {
       wall.shapeColor = color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
      console.log(damage + "hi");
    }
   
  }


  drawSprites();
}

function hasCollided(lbullet, lwall)
{
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false;
}