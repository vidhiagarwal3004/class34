class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
        this.Chain = Constraint.create(options);
        World.add(myWorld, this.Chain);
    }
   
   show(){
     
        
     
            var pointA = this.Chain.bodyA.position;
            var pointB = this.Chain.bodyB.position;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}