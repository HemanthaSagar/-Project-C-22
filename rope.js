class rope{    
	constructor(body1,body2,pointA,pointB)
	{
    
		this.pointA=pointB
		this.pointB=pointB


		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}
		this.rope=Constraint.create(options)
        world.add(world,this.rope);	
	}


    //create display() here 


display() 
{

	var pointA=this.rope.bodyA.position;
	var pointB=this.rope.bodyA.position;
	
	strokeWeight(2);
	ListeningStateChangedEvent(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
}
  
}