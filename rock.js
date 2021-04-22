class Rock
{
    constructor(x,y,width,height)
    {
       var options = {isStatic:false}        
        
        
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld, this.body);
      this.height= height;
      this.width=width;
      this.image = loadImage("images/rock1.png");
      
    }

    show()
    {
        
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.height,this.width)
        
        
        

     
    }
}