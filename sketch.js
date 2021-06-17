var bg,bgimg;
var caveman,cavemanimg;
var title,titleimg;

function preload(){
bgimg = loadImage("Images/bg.jpg");
cavemanimg = loadAnimation("Images/caveman 1.png","Images/caveman 2.png","Images/caveman 3.png","Images/caveman 4.png","Images/caveman 5.png","Images/caveman 6.png")  
titleimg = loadImage("Images/title.png");
}



function setup() {
  createCanvas(800, 600);
  
 bg = createSprite(450,250);
 bg.addImage("background",bgimg);
 bg.velocityX = -3;

 caveman = createSprite(100,500);
 caveman.addAnimation("Player",cavemanimg);
 caveman.scale = 0.9;

 title = createSprite(130,100);
 title.addAnimation("Title",titleimg);
 title.scale = 0.7;
}

function draw() {
 background(0);
 if (bg.x < 70){
  bg.x = bg.width/2;
 }

  drawSprites();
 
}


