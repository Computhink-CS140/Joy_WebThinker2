let dojoBG;

function preload() {
    dojoBG = loadImage('assets/dojobackground.png');
}

function setup () {
    newCanvas(800, 600);
    world.gravity.y = 10;
}