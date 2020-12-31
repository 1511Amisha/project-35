//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dog=loadImage("images/Dog.png");
  happyDog=loadImage("images/happydog.png");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(250,250,10,10);
  dog.addImage(dog);
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here
  textSize=20;
  fill("white");
  stroke(4);
  text("Note : Press UP_ARROW Key To Feed The Dog",200,300);

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
x=x-1;
}

database.ref("/").update({
  Food:x
})
}




