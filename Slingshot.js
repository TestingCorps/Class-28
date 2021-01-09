class Slingshot{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var PA = this.sling.bodyA.position;
        var PB = this.pointB;
        strokeWeight(5);
        line(PA.x,PA.y,PB.x,PB.y);
        }

    }
};
  