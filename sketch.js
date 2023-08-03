let bg;
let carImage;
let busImage;
let trainImage;
let motoImage;
let bicycleImage;

let carSound;
let busSound;
let trainsound;
let motoSound;
let bicycleSound;

let carX, carY;
let busX, busY;
let trainX, trainY;
let motoX, motoY;
let bicycleX, bicycleY;
let cloudX;
let cloudY;

let carSpeed = 2;
let busSpeed = 1.5;
let trainSpeed = 2;
let motoSpeed = 3;
let bicycleSpeed = 1;
let cloudSpeed = 0.5;

function preload() {
  bg = loadImage("assets/image/background.png");
  carImage = loadImage("assets/image/mobil.png");
  busImage = loadImage("assets/image/bus.png");
  trainImage = loadImage("assets/image/kereta api.png");
  motoImage = loadImage("assets/image/motor.png");
  bicycleImage = loadImage("assets/image/sepeda.png")

  carSound = loadSound("assets/sound/Mobil.mp3");
  busSound = loadSound("assets/sound/Buss.mp3");
  trainSound = loadSound("assets/sound/Kereta.mp3");
  motoSound = loadSound("assets/sound/Motor.mp3");
  bicycleSound = loadSound("assets/sound/Sepeda.mp3");
  
}

function setup() {
  createCanvas(700, 400);
  
  cloudX = -100;
  cloudY = 40;

  carX = width / 4;
  carY = 280;

  busX = width / 2;
  busY = 260;
  
  trainX = width / 2;
  trainY = 190;
  
  motoX = width / 2;
  motoY = 220;
  
  bicycleX = width / 2;
  bicycleY = 320;
}

function draw() {
  background(bg);
  
  //membuat gambar berjalan
  cloudX += cloudSpeed;
  if (cloudX > 800) {
    cloudX = -200;
  }
  
  trainX += trainSpeed;
  if (trainX > width) {
    trainX = -150;
  }
  
  motoX += motoSpeed;
  if (motoX > width) {
    motoX = -150;
  }
  
  carX -= carSpeed;
  if (carX < -200) {
    carX = width + 150;
  }

  busX -= busSpeed;
  if (busX < -300) {
    busX = width + 250;
  }
  
  bicycleX -= bicycleSpeed;
  if (bicycleX < -200) {
    bicycleX = width + 200;
  }
  
  // Menampilkan Awan
  Cloud(cloudX, cloudY);
  // Menampilkan Gambar
  image(trainImage, trainX, trainY, 150, 70)
  image(motoImage, motoX, motoY, 100, 70)
  image(carImage, carX, carY, 150, 75);
  image(busImage, busX, busY, 250, 140);
  image(bicycleImage, bicycleX, bicycleY, 70, 70);
  
  
}

// Fungsi saat diklik gambar akan mengeluarkan bunyi
function mouseClicked() {
  if (
    mouseX >= carX &&
    mouseX <= carX + 150 &&
    mouseY >= carY &&
    mouseY <= carY + 150
  ) {
    carSound.play();
  } else if (
    mouseX >= busX &&
    mouseX <= busX + 200 &&
    mouseY >= busY &&
    mouseY <= busY + 100
  ) {
    busSound.play();
  } else if (
    mouseX >= trainX &&
    mouseX <= trainX + 200 &&
    mouseY >= trainY &&
    mouseY <= trainY + 100
  ) {
    trainSound.play();
  } else if (
    mouseX >= motoX &&
    mouseX <= motoX + 200 &&
    mouseY >= motoY &&
    mouseY <= motoY + 100
  ) {
    motoSound.play();
  } else if (
    mouseX >= bicycleX &&
    mouseX <= bicycleX + 200 &&
    mouseY >= bicycleY &&
    mouseY <= bicycleY + 100
  ) {
    bicycleSound.play();
  }
}

// Fungsi untuk membuat awan
function Cloud(x, y) {
  noStroke();
  fill(255);
  // ellipse(x + 10, y + 10, 80, 60);
  ellipse(x, y, 60, 50);
  ellipse(x - 20, y + 10, 65, 50);
  ellipse(x + 40, y, 70, 50);
  ellipse(x - 40, y, 50, 50);
}
