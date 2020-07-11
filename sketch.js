var mrect,rect;
var box1,box2,box3;

function setup() {
  createCanvas(800,400);
  
  mrect = createSprite(400,350,800,20);
  mrect.shapeColor =  "yellow" ;
o1 = createSprite(100,200,20,20)
o1.shapeColor = "magenta";
box1 = createSprite(600,335,200,15);
  box1.shapeColor =  "white" ;

  box2 = createSprite(700,310,13,70);
  box2.shapeColor =  "white" ;

  box3 = createSprite(500,310,13,70);
  box3.shapeColor =  "white" ;


}

function draw() {
  background("black"); 
o1.x = World.mouseX;
o1.y = World. mouseY;
if(istouching(o1,box1)){
  o1.shapeColor = "blue"
}
else{
  o1.shapeColor = "magenta"
  
  
} 

drawSprites();
}