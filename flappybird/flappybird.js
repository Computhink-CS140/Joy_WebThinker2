// the final game
let bird, floor
let flapMidImg, bg, base

function preload() {
    flapMidImg = loadImage('flappybird/assets/yellowbird-midflap.png') 
    bg = loadImage('flappybird/assets/background-day.png')
    base = loadImage('flappybird/assets/base.png')
}
function setup(){
    new Canvas(400, 600)
    bird = new Sprite
    bird.x = width/2

}