

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box,wind1,wind2,door;
var log;
var hitter;

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  
  
  ground = new Ground(600,380,1200,30);

  box =  new Box(300,height/1.5,200,200)
  wind1 = new Box(350,height/1.9,30,50);
  wind2 = new Box(250,height/1.9,30,50)
  door = new Box(300,height/1.2,50,70)

 

}

function draw() {
  background("lightblue"); 
  Engine.update(engine);
 ground.display();
box.display();
wind1.display();
wind2.display();
door.display();





strokeWeight(10);
line(170,200,300,50);
line(300,50,440,200);

if(keyCode === 32){
  background("black");
  
}

drawSprites();

textSize(20);
fill("RED")
text("PRESS SPACE BAR TO VANISH THE HOUSE", 100,30)
}

