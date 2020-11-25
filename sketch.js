const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground1, ground2, ground3;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16, box17, box18;
var ball, slingShot;
var backGround;

var score = 0;

function setup() {
  var canvas = createCanvas(1700,870);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(100,100,50);

  slingShot = new SlingShot(ball.body, {x:200, y:150});
  ground1 = new Ground(0,850,3600,20);
  ground2 = new Ground(660,500,250,20);
  ground3 = new Ground(1280,300,250,20);

  box1 = new Box(580,300,40,40);
  box2 = new Box(620,300,40,40);
  box3 = new Box(660,300,40,40);
  box4 = new Box(660,300,40,40);
  box5 = new Box(620,300,40,40);
  box6 = new Box(660,300,40,40);
  box7 = new Box(700,300,40,40);
  box8 = new Box(700,300,40,40);
  box9 = new Box(740,300,40,40);

  box10 = new Box(1200,100,40,40);
  box11 = new Box(1240,100,40,40);
  box12 = new Box(1240,100,40,40);
  box13 = new Box(1280,100,40,40);
  box14 = new Box(1280,100,40,40);
  box15 = new Box(1280,100,40,40);
  box16 = new Box(1320,100,40,40);
  box17 = new Box(1320,100,40,40);
  box18 = new Box(1360,100,40,40);
}

function draw() {
  getBackgroundImg();
  if(backGround)
  background(backGround);
  
  Engine.update(engine);
  ball.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
 
  slingShot.display();
  ground1.display();
  ground2.display();
  ground3.display();

  drawSprites();

  stroke("cyan");
  fill(0);
  textSize(20);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,100);
  
  //Score
  stroke("yellow");
  fill(0);
  textSize(20);
  text("SCORE : "+ score, 1400, 40);
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(ball.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if (hour>= 6 && hour<=17){
      bg = "white";
  }
  else {
      bg = "black";
  }
  backGround = bg;
  console.log(backGround);
}