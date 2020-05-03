class Pendulum extends BaseClass{
  
  constructor(x,y){
   
    super(x,y,50,50,);
    
    
    
  }
  display(){
   this.body.position.x = mouseX;
   this.body.position.y = mouseY;
   strokeWeight(4);
   stroke("blue");
   fill("red");
    super.display();
  }
}