class Boggie
{
    constructor(x,y,width,height)
    {
       var options = {isStatic:false}        
        
        
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld, this.body);
      this.height= height;
      this.width=width;
      this.image = loadImage("images/coach.png");
      Matter.Body.setMass(this.body,  this.body.mass*5);
    }

    show()
    {
        
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.height,this.width)
        
        
        

     
    }
}