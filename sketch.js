//Create variables here

var milkImg;
var dogImg,dogImg2;
var database;
var food = 20;
var button;

function preload(){
dogImg=loadImage("dog.png")
dogImg2=loadImage("happydog.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
 
 dog = createSprite(250,350,10,10);
 dog.addImage(dogImg)
 dog.scale=0.3
 
 button = createSprite(400,80,30,30);
button.shapeColor="red"

 var food=database.ref('food');
food.on("value",readFood);
 





}


function draw() {  
background("Aqua")
  drawSprites();
  //add styles here

textSize(30)
  fill("Ligthblue")
text("click red box to Feed The dog",15,50);

text("Food = "+food,+15,90)




if (mousePressedOver(button)){
  food=food-1
}

}



function readFood(data){
  food=data.val();
  food=20
}

function writePosition(food){
  database.ref('food').set(
      {
         food:20-1
      }
  )
  
   
} 
