var bg,issImg,scImg1,scImg2,scImg3,scImg4,hasDocked=false,iss,spacecraft;

function preload(){
bg=loadImage("Image/spacebg.jpg");
issImg=loadImage("Image/iss.png");
scImg1=loadImage("Image/spacecraft1.png");
scImg2=loadImage("Image/spacecraft2.png");
scImg3=loadImage("Image/spacecraft3.png");
scImg4=loadImage("Image/spacecraft4.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
 spacecraft=createSprite(400, 200, 50, 50);
 spacecraft.addImage(scImg1);
 spacecraft.scale=0.25;
  iss=createSprite(800,300,10,10)
  iss.addImage(issImg);
  
}



function draw() {
  background(bg); 
  if(!hasDocked){
    spacecraft.x=random(200,500)
   
    if(keyDown("UP_ARROW")){
spacecraft.y=spacecraft.y-2;
 }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y=spacecraft.y+2;
      
          }
          if(keyDown(LEFT_ARROW)){
            spacecraft.x=spacecraft.x-2;
            
                }
                if(keyDown(RIGHT_ARROW)){
                  spacecraft.x=spacecraft.x+2;
                  
                      }

  } 
  drawSprites();
}