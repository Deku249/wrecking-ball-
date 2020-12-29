class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    
    fly()
    {
      this.rope.bodyA = null
    }
    display(){
    if(this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB
        push ();
        strokeWeight(5);
        stroke("black");
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop ();
       }
    }
    
}