var vid;
let mic;
var i;

let xPos, yPos;

function setup() {
  createCanvas(720, 480);
  vid = createCapture(VIDEO);
  vid.size(720,480);
  vid.hide();
  xPos = 0;
  yPos = 0;

  mic = new p5.AudioIn();
  mic.start();
  noStroke();
}
function draw() {
  background(255);
  let vol = mic.getLevel(); //float from 0 and 1.0
  let shiftX = vol * random(-250, 250);
  let shiftY = vol * random(-250, 250);

  //print(vol);
  image(vid, xPos + shiftX, yPos);
    //filter(POSTERIZE, 3);
    //filter(BLUR,5);
}
