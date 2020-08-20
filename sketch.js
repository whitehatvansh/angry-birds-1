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
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,220,70,70);
    
    ground = new Ground(600,height,1200,20)

    pig1 = new Pig(810,320)
    pig2 = new Pig(810,230)

    log1 = new Log(810,260,300,PI/2)
    log2 = new Log(810,220,300,PI/2)


    bird1 = new Bird(50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    log2.display();
    pig2.display();
    box5.display();

}