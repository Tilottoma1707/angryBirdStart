const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,250,70,70);
    box4 = new Box(920,250,70,70);
    box5 = new Box (810,240,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(810,350);
    pig2 = new pig(810,250);
    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,245,300,PI/2);
    log3 = new log(805,225,220,PI/7);
    log4 = new log(825,230,210,-PI/7);
    bird1 = new bird(100,200);
}
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}


