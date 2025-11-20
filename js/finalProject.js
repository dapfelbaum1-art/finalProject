
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

let table

let imageArray = []

let imageIndexNum = 0

let customerChoices = []
let adsArray = []

let canvas


let shoppingBool = true
let endingBool = false

function preload(){
	sky = loadImage('sky.jpg')
// b = loadImage('ci/bBlouse.png')
// d = loadImage('ci/dbShoe.png')
// dg = loadImage ('ci/dGuizio.png')
// os = loadImage('ci/offShoulder.png')
// r4 = loadImage('ci/rFour.png')
// r1 = loadImage('ci/rOne.png')
// rS = loadImage('ci/rShoe.png')
// r3 = loadImage('ci/rThree.png')
// r2 = loadImage('ci/rTwo.png')

	 //table = loadTable('js/personalData.csv', 'csv', 'header', loadImageArray);



for(let i = 0; i < 11; i++){
    imageArray[i]=loadImage ('ci/'+ i + '.png')
  }

for(let i = 0; i < 8; i++){
    adsArray[i]=loadImage ('adImages/'+ i + '.png')
  }
  print(imageArray.length)

}

function loadImageArray(){
	 for(let i = 0; i < table.getRowCount (); i++){
    imageArray[i]=loadImage ('images/'+ table.getString(i, 'image'))
  }
}

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	textAlign(LEFT, TOP);
	textSize(40);
	  canvas.position(0,0)
  	canvas.style('z-index', '-1')
	


	shoppingCart= createButton('Add to Cart')
 	shoppingCart.mousePressed(addToCart)
 	shoppingCart.position(windowWidth/2, windowHeight - 100 )

	skipButton = createButton('Skip')
 	skipButton.mousePressed(skipProduct)


 imageMode(CENTER)
}


function addToCart(){
	if(imageIndexNum < imageArray.length -1){
		customerChoices.push(imageArray[imageIndexNum])
		imageIndexNum = imageIndexNum + 1
		
		print(customerChoices)

	}

	

}

function skipProduct(){
	if(imageIndexNum < imageArray.length -1){
		imageIndexNum = imageIndexNum + 1

	}
}


function intro(){
	
	
}

function shopping(){

	background(255);
	image(sky, windowWidth/2, windowHeight/2, windowWidth,windowHeight)

	image(imageArray[imageIndexNum], windowWidth/2, windowHeight/2, imageArray[0].width/2, imageArray[0].height/2)


	text(message.substring(0, index), 0, 0, width, height);

	shoppingCart.position(windowWidth/2 - 300, windowHeight - 100 )
	skipButton.position(windowWidth/2 + 300, windowHeight - 100)

	if (millis() > lastMillis + 100) {
		index = index + 1;
		//ONE WORD AT A TIME
		// while(message.charAt(index) != ' ' &&
		// 		 index < message.length){
		// 	index = index + 1;
		// }
		lastMillis = millis();
	}

	if(imageIndexNum == 10){
		print("End of Shopping!")
		shoppingBool = false
		endingBool = true

	}
}



function ending(){
	shoppingCart.hide()
	skipButton.hide()
	textAlign(CENTER);
	frameRate(15)
	if(customerChoices.length == 0){
		background(0)
		fill(255)
		text("You didn't choose anything, I don't understand you...", windowWidth/2, windowHeight/2)
	}

	if(customerChoices.length > 0){

		//background(0)
		

		for(i = 0; i< adsArray.length; i++){
			let randX = random(windowWidth)
			let randY = random(windowHeight)
			image(adsArray[i], randX, randY, adsArray[i].width/4, adsArray[i].height/4)
		}

		for(i = 0; i< customerChoices.length; i++){
			image(customerChoices[i], i*imageArray[i].width/4+(imageArray[i].width/4+10), windowHeight/2, imageArray[i].width/4, imageArray[i].height/4)
		}

		fill(0)
		text("In the age of digital consumerism, we’re not the customers — we’re the data being harvested.", windowWidth/2-450, windowHeight/2, 900)



	}

}

function draw() {

	if(shoppingBool == true){
		shopping()
	}

	if(endingBool == true){
		ending()
	}
	
}

