const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob,bob2,bob3,bob4,bob5,rope,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	bob1 =bodies.circle(300,380,20,bob_option);
	  world.add(world,bob1);
	  
	bob2 =bodies.circle(340,380,20,bob_option);
	world.add(world,bob2);
	
	bob3 =bodies.circle(400,380,20,bob_option);
	  world.add(world,bob3);
	  
	bob4 =bodies.circle(440,380,20,bob_option);
	world.add(world,bob4);
	
	bob5 =bodies.circle(480,380,20,bob_option);
	  world.add(world,bob5);

	


  
	rope1=new rope(bob,roof,-80,0);
	rope2=new rope(bob2,roof,-80,0);
	rope3=new rope(bob3,roof,-80,0);
	rope4=new rope(bob4,roof,-80,0);
	rope5=new rope(bob5,roof,-80,0);

;
	

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var roof_options={
		isStatic:true			
	}
	Engine.run(engine);

  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();   

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawsprites();
  
  

  


  
  //create ellipse shape for multiple bobs here
elipse()



 
}
function keyPressed(){
	if (keyCode === UP_Arrow){
		Matter.Body.applyForce(bob1.body,bob1.Body.position,{x:-30,y:155})

	}
}

