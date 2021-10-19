//s1: rotate circle around point
let s1 = {
  color: 10,
  translationX: 200,
  translationY: 100,
  posX: 80,
  posY: 80,
  width: 302,
  height: 218,
  speed: 0,
  angle: 0

};


//rect01: rotate circle around point
let rect01 = {
  color: 220,
  translationX: 225,
  translationY: 105,
  posX: 0,
  posY: 0,
  speed: 0,
  angle: 0

};


// s2: rotate circle around point
let s2 = {
  color: 200,
  translationX: 300,
  translationY: 100,
  posX1: 110,
  posY1: 415,
  posX2: 410,
  posY2: 415,
  posX3: 420,
  posY3: 410,
  posX4: 100,
  posY4: 410,
  speed: 0,
  angle: 0

};


// quad01: move back and forth
let quad01 = {
  color: 'blue',
  quadposX: 100,
  quadposY: 400,
  quadposXa: 420,
  quadposYa: 400,
  quadposXb: 518,
  quadposYb: 320,
  quadposXc: 220,
  quadposYc: 320,
  speed: 1.5,
  speeda: 1.5,
  speedb: 1.5,
  speedc: 1.5

};


// quad02: rotate rect around point
let quad02 = {
  color: 220,
  translationX: 400,
  translationY: 800,
  posX1: 100,
  posY1: 200,
  speed: 0,
  angle: 0

};


// quad03: rotate rect around point
let quad03 = {
  action: 'rotate',
  color: 220,
  translationX: 200,
  translationY: 100,
  posX1: 100,
  posY1: 100,
  speed: 0,
  angle: 0

};


// quad04: scale box
// Setting up global variables for quad04
let quad04 = {
  color: 200,
  width: 300,
  Scale: 1,
  widtha: 330,
  Scalea: 1

};


// quad05: move in x and y directions
let quad05 = {
  action: 'move',
  color: 'red',
  quadposX: 438,
  quadposY: 372,
  quadposXa: 490,
  quadposYa: 330,
  quadposXb: 220,
  quadposYb: 330,
  quadposXc: 161,
  quadposYc: 372,
  speedX: 1,
  speedY: 1,
  speedXa: 1,
  speedYa: 1,
  speedXb: 1,
  speedYb: 1,
  speedXc: 1,
  speedYc: 1

};


// let shapesArray = [quad01, s1, quad02, rect01, quad03, s2];
let shapesArray = [quad01, s1, quad02, rect01, quad03, s2];



//CODE START
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  // song = loadSound("rainbow.mp3");
  // slider = createSlider(0, 1, 0.5, 0.01);
  // song.play();
}

// function loaded() {
//   song.play();
// }

function draw() {
  background(220);
  // song.setVolume(slider.value());


  //s1
  //laptop screen
  rotates1();
  rotateQuad(s1);

  //back of laptop screen
  fill(40)
  rect(220, 100, 300, 220, 5);


  //rect01
  rotateRect01();


  //s2
  //laptop base
  rotates2();


  //base top
  fill(240)
  quad(110, 415, 410, 415, 518, 320, 220, 320);


  //base bottom
  fill(200)
  quad(100, 410, 420, 410, 516, 330, 220, 320);


  //quad01
  //top base
  moveQuad01(quad01);


  //quad02
  //front base
  rotateQuad(quad02);


  //quad03
  //side base
  rotateQuad(quad03)


  //quad04
  //mouse pad
  scaleQuad(quad04);


  //quad05
  //keyboard
  moveQuad(quad05);

  for (i = 0; i < shapesArray.length; i++) {
    objectTranslate(shapesArray[i]);
  }

}


function objectTranslate(incomingGeometry) {
  // if i know i just want to rotate a quad, then use function rotateQuad()
  if (incomingGeometry.action === 'rotate') {
    rotateQuad(incomingGeometry);
  } else if (incomingGeometry.action === 'move') {
    moveQuad(incomingGeometry);
  }
}

function rotates1() {
  fill(s1.color);
  push();
  translate(s1.translationX, s1.translationY);
  rotate(s1.angle);
  rect(s1.posX, s1.posY, s1.width, s1.height);
  pop();

  s1.angle = s1.angle + 1;
}


function rotateRect01() {
  fill(rect01.color)
  push();
  translate(rect01.translationX, rect01.translationY);
  rotate(rect01.angle);
  rect(rect01.posX, rect01.posY, 290, 200);
  pop();

  rect01.angle = rect01.angle + 1;
}


function rotates2() {
  fill(s2.color);
  push();
  translate(s2.translationX, s2.translationY);
  rotate(s2.angle);
  quad(s2.posX1, s2.posY1, s2.posX2, s2.posY2, s2.posX3, s2.posY3, s2.posX4, s2.posY4);
  pop();

  s2.angle++;
}


function moveQuad01(incomingGeometry) {
  fill(incomingGeometry.color);

  if (incomingGeometry.quadposX > 100 || incomingGeometry.quadposX < 0) {
    incomingGeometry.speed = incomingGeometry.speed*-1;
  }
  incomingGeometry.quadposX = incomingGeometry.quadposX + incomingGeometry.speed;


  if (incomingGeometry.quadposXa > 420 || incomingGeometry.quadposXa < 320) {
    incomingGeometry.speeda = incomingGeometry.speeda*-1;
  }
  incomingGeometry.quadposXa = incomingGeometry.quadposXa + incomingGeometry.speeda;


  if (incomingGeometry.quadposXb > 518 || incomingGeometry.quadposXb < 418) {
    incomingGeometry.speedb = incomingGeometry.speedb*-1;
  }
  incomingGeometry.quadposXb = incomingGeometry.quadposXb + incomingGeometry.speedb;


  if (incomingGeometry.quadposXc > 220 || incomingGeometry.quadposXc < 120) {
    incomingGeometry.speedc = incomingGeometry.speedc*-1;
  }
  incomingGeometry.quadposXc = incomingGeometry.quadposXc + incomingGeometry.speedc;


  quad(incomingGeometry.quadposX, 400, incomingGeometry.quadposXa, 400, incomingGeometry.quadposXb, 320, incomingGeometry.quadposXc, 320);
}


function rotateQuad(incomingGeometry) {
  fill(incomingGeometry.color);
  push();
  translate(incomingGeometry.translationX, incomingGeometry.translationY);
  rotate(incomingGeometry.angle);
  // rect(incomingGeometry.posX1, incomingGeometry.posY1, 320, 10);
  rect(incomingGeometry.posX1, incomingGeometry.posY1, incomingGeometry.width, incomingGeometry.height);
  pop();


  incomingGeometry.angle++;
}


function rotateQuad(incomingGeometry) {
  fill(incomingGeometry.color);
  push();
  translate(incomingGeometry.translationX, incomingGeometry.translationY);
  rotate(incomingGeometry.angle);
  //quad(420, 410, 420, 400, 518, 320, 518, 330);
  rect(incomingGeometry.posX1, incomingGeometry.posY1, 320, 10);
  pop();


  incomingGeometry.angle++;
}


function scaleQuad(incomingGeometry) {
  fill(incomingGeometry.color)
  //quad(220, 395, 300, 395, 330, 375, 250, 375);

  if (incomingGeometry.width > 570 || incomingGeometry.width < 300) {
    incomingGeometry.Scale = incomingGeometry.Scale*-1;
  }
  incomingGeometry.width = incomingGeometry.width + incomingGeometry.Scale;

  if (incomingGeometry.widtha > 600 || incomingGeometry.widtha < 330) {
    incomingGeometry.Scalea = incomingGeometry.Scalea*-1;
  }
  incomingGeometry.widtha = incomingGeometry.widtha + incomingGeometry.Scalea;

  quad(220, 395, incomingGeometry.width, 395, incomingGeometry.widtha, 375, 250, 375);
}


function moveQuad(incomingGeometry) {
  fill(incomingGeometry.color)
  //quad(438, 372, 490, 330, 220, 330, 161, 372);

  //X1_Y1
  if (incomingGeometry.quadposX > 500 || incomingGeometry.quadposX < 0) {
    incomingGeometry.speedX = incomingGeometry.speedX*-1;
  }
  incomingGeometry.quadposX = incomingGeometry.quadposX + incomingGeometry.speedX;

  if (incomingGeometry.quadposY > 500 || incomingGeometry.quadposY < 0) {
    incomingGeometry.speedY = incomingGeometry.speedY*-1;
  }
  incomingGeometry.quadposY = incomingGeometry.quadposY + incomingGeometry.speedY;

  //X2_Y2
  if (incomingGeometry.quadposXa > 500 || incomingGeometry.quadposXa < 0) {
    incomingGeometry.speedXa = incomingGeometry.speedXa*-1;
  }
  incomingGeometry.quadposXa = incomingGeometry.quadposXa + incomingGeometry.speedXa;

  if (incomingGeometry.quadposYa > 500 || incomingGeometry.quadposYa < 0) {
    incomingGeometry.speedYa = incomingGeometry.speedYa*-1;
  }
  incomingGeometry.quadposYa = incomingGeometry.quadposYa + incomingGeometry.speedYa;

  //X3_Y3
  if (incomingGeometry.quadposXb > 500 || incomingGeometry.quadposXb < 0) {
    incomingGeometry.speedXb = incomingGeometry.speedXb*-1;
  }
  incomingGeometry.quadposXb = incomingGeometry.quadposXb + incomingGeometry.speedXb;

  if (incomingGeometry.quadposYb > 500 || incomingGeometry.quadposYb < 0) {
    incomingGeometry.speedYb = incomingGeometry.speedYb*-1;
  }
  incomingGeometry.quadposYb = incomingGeometry.quadposYb + incomingGeometry.speedYb;

  //X4_Y4
  if (incomingGeometry.quadposXc > 500 || incomingGeometry.quadposXc < 0) {
    incomingGeometry.speedXc = incomingGeometry.speedXc*-1;
  }
  incomingGeometry.quadposXc = incomingGeometry.quadposXc + incomingGeometry.speedXc;

  if (incomingGeometry.quadposYc > 500 || incomingGeometry.quadposYc < 0) {
    incomingGeometry.speedYc = incomingGeometry.speedYc*-1;
  }
  incomingGeometry.quadposYc = incomingGeometry.quadposYc + incomingGeometry.speedYc;

  quad(incomingGeometry.quadposX, incomingGeometry.quadposY, incomingGeometry.quadposXa, incomingGeometry.quadposYa, incomingGeometry.quadposXb, incomingGeometry.quadposYb, incomingGeometry.quadposXc, incomingGeometry.quadposYc);
}
