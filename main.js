var Peter_Pan_Song="";
var Hogwards_Theme_Song="";

function Preload()
{
}

function play()
{
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center(); 

    video = createCapture(VIDEO);
    video.hide();
}
 
function draw(){
    image(video, 0, 100, 600, 500);
}