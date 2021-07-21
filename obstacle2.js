class Obstacle2{
    constructor(x,y){
        var options={
            restitution:0.4,
            isStatic:false
           
        }
       
      
       this.body = Bodies.rectangle(x,y,200,100,options);
       World.add(world,this.body);
       this.h=200;
       this.w=100;
       
       this.image=loadImage("images/asteroid21.png")
     


    }
    display(){
        var pos = this.body.position;
        push();
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.h,this.w);
        pop();
       
        
       



     var collision=Matter.SAT.collides(spaceship.body,this.body)
     if(collision.collided){
       flag=1

       crashsound.play()


     
    }
if(flag===1){
    gameState="END"
   

}



    }

   

}

