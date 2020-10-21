
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var line1,line2,line3;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,350);
	
	

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	paper = new Paper(100,250,30,30);

	line1=createSprite(900,350,200,20);
	line1.shapeColor=color("red");
	
	line1=Bodies.rectangle(900,350,200,20,{isStatic:true});
    World.add(world,line1);

	line2=createSprite(800,320,20,100);
	line2.shapeColor=color("red");

	line2=Bodies.rectangle(800,320,20,100,{isStatic:true});
	World.add(world,line2);

	line3=createSprite(1000,320,20,100);
	line3.shapeColor=color("red");
 
	line3=Bodies.rectangle(1000,220,20,100,{isStatic:true}); 
	World.add(world,line3);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  paper.display();
 

  drawSprites();
 
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
	}
	}
	
