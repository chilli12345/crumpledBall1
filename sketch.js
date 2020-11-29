
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,side1,side2,side3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
 
	paper = new Paper(100,660,10);
	ground = new Ground(width/2,680,width,20)
	side1 = new Dustbin(545, 620, 10, 80);
	side2 = new Dustbin(620, 660, 140, 10);
	side3 = new Dustbin(695, 620, 10, 80);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  side1.display();
  side2.display()
  side3.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:15, y: -15})
    }
}


