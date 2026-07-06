let ball;
let box;

function setup() {
  // Set up the canvas
  new Canvas(800, 500);
  background("pink"); //background color



  ball = new Sprite();
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 40;
  ball.color = "hotpink"
  
  box = new Sprite();
  box.x = 100;
  box.y = 100;
  box.w = 50
  box.h = 50
  box.color = "hotpink"
  
  // Basic shape testing
  // write your codes here
 
  // End Basic shape testing

   // Create a bouncing ball sprite
   // write your codes here

}

function draw() {
  // write your codes here
  background(240);

  fill(0);
  textSize(16);
  text("Ball: (" + int(ball.x) + "," + int(ball.y)  + ")");
  text("Mouse: (" + mouseX + "," + mouseY  + ")", 10, 40);





}