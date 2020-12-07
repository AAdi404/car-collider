var speed1;
var speed2;
var speed3;
var deformation1;
var deformation2;
var deformation3;
var separater1;
var car1;
var wall1;
var separater2;
var car2;
var wall2;
var separater3;
var car3;
var wall3;
var separater4;
function setup(){
createCanvas(1200,1200);
speed1=random(55,90);
speed2=random(55,90);
speed3=random(55,90);
weight=random(400,1500);
car1=createSprite(50,337.5,200,100);
car1.shapeColor="blue";
car1.velocityX=speed1;
wall1=createSprite(1100,193.75,50,387.5);
wall1.shapeColor="blue";
separater1=createSprite(600,0,1200,25);
separater1.shapeColor="white";
separater1.depth=wall1.depth+1;
car2=createSprite(50,737.5,200,100);
car2.shapeColor="blue";
car2.velocityX=speed2;
wall2=createSprite(1100,600,50,387.5);
wall2.shapeColor="blue";
separater2=createSprite(600,400,1200,25);
separater2.shapeColor="white";
separater2.depth=wall2.depth+1;
car3=createSprite(50,1137.5,200,100);
car3.shapeColor="blue";
car3.velocityX=speed3;
wall3=createSprite(1100,1000,50,387.5);
wall3.shapeColor="blue";
separater3=createSprite(600,800,1200,25);
separater3.shapeColor="white";
separater3.depth=wall3.depth+1;
separater4=createSprite(600,1200,1200,25);
separater4.shapeColor="white";
separater4.depth=wall3.depth+1;
}
function draw(){
background("black");
if(wall1.x-car1.x<(car1.width+wall1.width)/2){
car1.velocityX=0;
deformation1=0.5*weight*speed1*speed1/22509;
if(deformation1<180||deformation1===100){
car1.shapeColor="green"
}
if(deformation1<180&&deformation1>100||deformation1===180){
car1.shapeColor="yellow"
}
if(deformation1>180){
car1.shapeColor="red"
}
console.log(deformation1);
}
if(wall2.x-car2.x<(car2.width+wall2.width)/2){
car2.velocityX=0;
deformation2=0.5*weight*speed2*speed2/22509;
if(deformation2<180||deformation2===100){
car2.shapeColor="green"
}
if(deformation2<180&&deformation2>100||deformation2===180){
car2.shapeColor="yellow"
}
if(deformation2>180){
car2.shapeColor="red"
}
console.log(deformation2);
}
if(wall3.x-car3.x<(car3.width+wall3.width)/2){
car3.velocityX=0;
deformation3=0.5*weight*speed3*speed3/22509;
if(deformation3<180||deformation3===100){
car3.shapeColor="green"
}
if(deformation3<180&&deformation3>100||deformation3===180){
car3.shapeColor="yellow"
}
if(deformation3>180){
car3.shapeColor="red"
}
console.log(deformation3);
}
drawSprites();
}