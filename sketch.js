const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine,world;
var ground, box1, box2, box3, box4, box5, pig1, pig2, bird;
function setup() {
  createCanvas(1200,800);
  engine= Engine.create();
  world= engine.world;
  box1= new Box(700,750,60,60);
  box2= new Box(900,750,60,60);
  box3= new Box(700,690,60,60);
  box4= new Box(900,690,60,60);
  box5= new Box(800,630,60,60);
  pig1= new Pig(800,750);
  pig2= new Pig(800,690);
  bird= new Bird(400,500);
  ground= new Ground(600,780,1200);
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  bird.display();
  ground.display();
}