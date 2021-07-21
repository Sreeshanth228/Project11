
function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
}

function draw() {
  background(0);

  // moving the background
  path=createSprite(200,200);
  path.addImg(PathImg);
  path.velocityY= -4;
  path.scale =1.2;

//code to reset the background
if(path.Y > 400){

path.y = Height/2;


}

}
