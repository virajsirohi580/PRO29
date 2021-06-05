const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21;
var block22;
var ground1, ground2, ground3;
var sling;
var polygon;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //first stand
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//second stand

//level one

  block17 = new Block(640,175,30,40);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);

  //level two
  block23 = new Block(700,110,30,40);
  block22 = new Block(670,150,30,40);
  block24 = new Block(730,150,30,40);
  block25 = new Block(700,150,30,40);

 
 

  ball = new Polygon(80,170,30,30);
  sling = new slingShot(ball.body, {x:80, y:170});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
 
  fill("grey");
  block16.display();
  fill("blue")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("pink")
  block22.display();
  
  
  block24.display();

 
  block25.display();
  fill("yellow")
  block23.display();
  ball.display();
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX , y:mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32){
    Matter.Body.setPosition(ball.body, {x:80 , y:170});
		sling.attach(ball.body);
	}
}
