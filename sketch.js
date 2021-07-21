const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1;
var bike;
var obstacle=[]
var obstacle2=[]
var obstacle3=[]
var fuel=[]
var gas=100;
var score=0
var flag=0
var flagb=0
var force=0
var speed=10
var lowfeul
var obsx,obsy;
var lowfeulImg;
var gameState="PLAY"

function preload() {
  
  backgroundImg = loadImage("images/space.png")
  lowfeulImg=loadImage("images/lowfuel.png")
  crashsound=loadSound("sound/DeathFlash.flac")
  pointsound=loadSound("sound/pointsound.wav")
  crashImg=loadImage("images/crash.png")
}




function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  
 
spaceship=new Spaceship(700,550,120,120)




speed=10;
y1=0;
y2=-displayHeight;

}




function draw() {
  Engine.update(engine);
  
  background("black")

  image(backgroundImg,0,y1,displayWidth,displayHeight+20);
  image(backgroundImg,0,y2,displayWidth,displayHeight+20);
  
  console.log(y2)
 



   if (gameState=="PLAY"){


    if(frameCount%200===0){
      speed=speed+1
    
    
    
    }

    if(y1>displayHeight){
      y1=-displayHeight+60
    }
    if(y2>displayHeight){
      y2=-displayHeight+60}
  
      y1+=speed;
      y2+=speed;
    
      spaceship.display();


if(frameCount%60===0){
  score=score+1
}
      

//for obstacle

if(frameCount%60===0){
  obstacle.push(new Obstacle(random(50,displayWidth-100),-10))
 }

for (var j = 0; j < obstacle.length;j++ ){
  Matter.Body.applyForce(obstacle[j].body,{x:obstacle[j].body.position.x,y:obstacle[j].body.position.y},{x:0,y:0.00001});
  obstacle[j].display()
}


if(score%100==0&&score>0){
  force=force+0.0001


}


//for obstacle2


if(frameCount%180===0){
  obstacle2.push(new Obstacle2(random(200,displayWidth-200),-100))
}


 for (var a = 0; a < obstacle2.length;a++ ){
  Matter.Body.applyForce(obstacle2[a].body,{x:obstacle2[a].body.position.x,y:obstacle2[a].body.position.y},{x:0,y:0.00001});
  obstacle2[a].display()
}


if(score%250==0&&score>0){
  force=force+0.0001


}



//for obstacle3

if(frameCount%180===0){
  obstacle3.push(new Obstacle3(random(400,displayWidth-200),-10))
}


 for (var b = 0; b < obstacle3.length;b++ ){
  Matter.Body.applyForce(obstacle3[b].body,{x:obstacle3[b].body.position.x,y:obstacle3[b].body.position.y},{x:0,y:0.00001});
  obstacle3[b].display()
}


if(score%100==0&&score>0){
  force=force+0.0001


}



    //for feul

    if(frameCount%40===0){
      fuel.push(new Fuel(random(50,displayWidth-100),-10))
     }


     for (var b = 0; b < fuel.length;b++ ){
   
      fuel[b].display()
   
  
   
   
   
   
   
   
   
    }


   if(frameCount%60===0){
    gas=gas-10
  }
  
   if(gas==20){
     lowfeul=createSprite(140,150,5,5)
     lowfeul.scale=0.5
     lowfeul.addImage(lowfeulImg) 


    

   }
  // else{  }




if(gas===0){
  gameState="END"
  crashsound.play()
}



     
 if(keyDown(LEFT_ARROW)){
  Matter.Body.translate(spaceship.body,{x:-10,y:0})
  
}
  

if(keyDown(RIGHT_ARROW)){

Matter.Body.translate(spaceship.body,{x:10,y:0})


}



   }



if(gameState=="END"){


textAlign(CENTER)
textSize(70)
fill('white')
text("GAME OVER",displayWidth/2,displayHeight/2)

imageMode(CENTER)
image(crashImg,spaceship.body.position.x,spaceship.body.position.y)



}



   textSize(20)
   fill("white")
   text(' feul =  '+gas,80,80)



   //for score


   textSize(20)
   fill("white")
   text(' score =  '+score,250,80)






drawSprites()
  
 

}








