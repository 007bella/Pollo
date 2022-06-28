
const Engine = Matter.Engine;
// Mecanismos o metods. Lo que tiene que pensar la maquina.
const World = Matter.World;
// El mundo 
const Bodies = Matter.Bodies;
// La forma
const Body = Matter.Body;
// El curpo

let engine;
// Let es para llamra las. 
let world;
var ball;
var ground;
var rock;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   var rock_options = { 
restitution: 0.25,
   }
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  wall = Bodies.rectangle (300,200,200,20,ground_options);
World.add (world,wall);

rock = Bodies.circles (250,10,40, rock_options);
World.add(world,rock);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
  ellipse(rock.position.x,rock.position.y,20);
  rect (wall.position.x, wall.position.y,200,20);
  
}

