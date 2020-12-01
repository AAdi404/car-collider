var car1;
var wall1;
var separater1;
var car2;
var wall2;
var separater2;
var car3;
var wall3;
function setup(){
createCanvas(1200,1200);
car1=createSprite(50,340,100,50);
car1.shapeColor="green";
wall1=createSprite(1150,215,50,300);
wall1.shapeColor="green";
separater1=createSprite(600,391.666666667,1200,50);
separater1.shapeColor="green";
car2=createSprite(50,757,100,50);
car2.shapeColor="green";
wall2=createSprite(1150,632,50,300);
wall2.shapeColor="green";
separater2=createSprite(600,808.333333334,1200,50);
separater2.shapeColor="green";
car3=createSprite(50,1174,100,50);
car3.shapeColor="green";
wall3=createSprite(1150,1050,50,300);
wall3.shapeColor="green";
}
function draw(){
background(0); 
car1.collide(wall1);
car2.collide(wall2);
car3.collide(wall3);
if(keyDown("1")){
car1.velocityX=60;
}
if(keyDown("2")){
car2.velocityX=50;
}
if(keyDown("3")){
car3.velocityX=45;
}
console.log(car1.x-wall1.x);
if(car1.x-wall1.x<=car1.width/2+wall1.width/2&&wall1.x-car1.x<=car1.width/2+wall1.width/2&&car1.y-wall1.y<=car1.height/2+wall1.height/2&&wall1.y-car1.y<=car1.height/2+wall1.height/2){
car1.shapeColor="red";
wall1.shapeColor="red";
}
else{wall1.shapeColor="green";car1.shapeColor="green";
}
console.log(car2.x-wall2.x);
if(car2.x-wall2.x<=car2.width/2+wall2.width/2&&wall2.x-car2.x<=car2.width/2+wall2.width/2&&car2.y-wall2.y<=car2.height/2+wall2.height/2&&wall2.y-car2.y<=car2.height/2+wall2.height/2){
car2.shapeColor="red";
wall2.shapeColor="red";
}
else{wall2.shapeColor="green";car2.shapeColor="green";
}
console.log(car3.x-wall3.x);
if(car3.x-wall3.x<=car3.width/2+wall3.width/2&&wall3.x-car3.x<=car3.width/2+wall3.width/2&&car3.y-wall3.y<=car3.height/2+wall3.height/2&&wall3.y-car3.y<=car3.height/2+wall3.height/2){
car3.shapeColor="red";
wall3.shapeColor="red";
}
else{wall3.shapeColor="green";car3.shapeColor="green";
}
drawSprites();
}