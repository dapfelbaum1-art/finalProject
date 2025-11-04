
let sky
let shoppingCart 
var message = 'Welcome to your shopping experience: Add to Cart or Skip';
var index = 0;
var lastMillis = 0;
let b
let d
let dg
let os
let r4
let r1
let rS
let r3
let r2

function preload(){
	sky = loadImage('sky.jpg')
b = loadImage('bBlouse.png')
d = loadImage('dbShoe.png')
dg = loadImage ('dGuizio.png')
os = loadImage('offShoulder.png')
r4 = loadImage('rFour.png')
r1 = loadImage('rOne.png')
rS = loadImage('rShoe.png')
r3 = loadImage('rThree.png')
r2 = loadImage('rTwo.png')
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	textAlign(LEFT, TOP);
	textSize(40);
	shoppingCart= createButton('Add to Cart')
 shoppingCart.mousePressed()

skipButton = createButton('Skip')
 skipButton.mousePressed()
}

function draw() {
	background(255);
	image(sky, windowWidth/2, windowHeight/2, windowWidth,windowHeight)
	text(message.substring(0, index), 0, 0, width, height);
	
	
	if (millis() > lastMillis + 100) {
		index = index + 1;
		//ONE WORD AT A TIME
		// while(message.charAt(index) != ' ' &&
		// 		 index < message.length){
		// 	index = index + 1;
		// }
		lastMillis = millis();
	}
}

