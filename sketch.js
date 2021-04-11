
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var box1,box2,box3;
var ground;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
    
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
 }
 var object_options ={
	isStatic: true
}

ground= Bodies.rectangle(200,650,1200,10,object_options);
World.add(world,ground);
 options={
	 restitution:0.4
 }
 
 ball=Bodies.circle(100,200,20,options)
 World.add(world,ball);
	//Create the Bodies Here.
 box1=new Box(500,640,200,40)
 box2=new Box(400,640,40,100)
 box3=new Box(600,640,40,100)
   
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  keypressed();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,10);
  drawSprites();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}
function keypressed()
{
	if(keyCode===UP_ARROW)
	{
		Body.applyForce(ball,{x:20,y:50},0.3)
	}
}