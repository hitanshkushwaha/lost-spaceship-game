class Fuel {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false

      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      World.add(world, this.body);
      this.width = 50;
      this.height = 50;
      this.remove=false
      this.image=loadImage("images/feul.png")
    }
    display(){
      if(this.remove===false){
      var collision=Matter.SAT.collides(this.body,spaceship.body); 
      if(collision.collided){
      flagb=1; 
    } 



      if(flagb==1){
      World.remove(world,this.body);          
      flagb=0;
      pointsound.play()
      gas=gas+10
      this.remove=true;
  } 
 } 
  if(this.remove==false) {
      push(); 
      var pos =this.body.position; 
      imageMode(CENTER); 
      fill("grey");
      image(this.image,pos.x, pos.y, this.width, this.height);
      pop(); 
    }
    
     
    }
  };