//Create variables here
var dog, happyDog, database, foodS, foodStock,dog1; 
function preload()
{
  //load images here
 dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog1 = createSprite(250,250,10,10);
  dog1  = addImage(dog); 
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);  
}


function draw() {  

  drawSprites();
  Text("NOTE: Press UP_ARROW Key to feed Drago Milk!",250,100)
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  //add styles here
   textSize(15);
   fill(red);

}



