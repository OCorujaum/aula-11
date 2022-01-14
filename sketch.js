var mar, marImg;
var navio,navioImg
var gaivota, gaivotaImg;






function preload(){
 marImg = loadImage("sea.png") ;
 navioImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png");
gaivotaImg = loadAnimation("Gaivota1-removebg-preview.png","Gaivota2-removebg-preview.png","Gaivota3-removebg-preview.png","Gaivota4-removebg-preview.png");

  


}
function setup(){
 createCanvas(400,400);
 background("blue");
 




 

 
 mar=createSprite(400,200);
 mar.addImage(marImg);
 mar.scale=0.3;
 mar.velocityX=-3;

 navio = createSprite(100,250,50,50);
navio.addAnimation("navioAndando",navioImg);
navio.scale=0.30;














}
function draw(){
  if(mar.x<-500){
    mar.x=mar.x=200;




  }
  

  drawSprites();


}
