class Log extends BaseClass{
  constructor(x,y,width,height){
    super(x,y,width,height);
  }
  display(){
    strokeWeight(4);
   stroke("brown");
   fill("lightblue");
    super.display();
  }
}
  