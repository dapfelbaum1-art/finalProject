

let modemSound 
let canvas

let audioButton 
let videoButton
let modemSlider 

let modemRateSlider
let modemAmplitude
let mappedAmplitude
let micInput
let videoPlaying = false
let t1000Vid 
let urbanShadowScrpit

function preload (){
modemSound = loadSound ('ModemSound.mp3')
urbanShadowScrpit= loadFont('UrbanShadowSansSerif.otf')
}

function setup (){
 canvas = createCanvas(windowWidth, windowHeight)
 canvas.position (0,0)
 canvas.style ('z-index', '-1')

 audioButton = createButton('Play Modem')
 audioButton.mousePressed(playAudio)

 videoButton = createButton('Play Video')
 videoButton.mousePressed(playVideo)

 modemAmplitude= new p5.Amplitude()

 //micInput = new p5.AudioIn()
 modemVolSlider = createSlider(0,3,1,0.01)
 modemRateSlider = createSlider(0,2,1,0.01)
 t1000Vid = createVideo(['T1000Reforming.mp4'])
 t1000Vid.style('width','540px')
 t1000Vid.style('height','540px')
 t1000Vid.position(200,100)
 t1000Vid.hide()

}

function playAudio (){
	if(!modemSound.isPlaying()){
	modemSound.loop()
	audioButton.html('Pause Modem')
}else{
	modemSound.pause()
	audioButton.html('PlayModem')

	}
}

function playVideo(){
	 t1000Vid.show()
	if(!videoPlaying){
		t1000Vid.loop()
		videoButton.htm;('Pause Video')
	}else{
		t1000Vid.pause()
		videoButton.html('Play Video')
		videoButton.position(100,100)
	}
}

function draw (){
	background(120)
	textFont(urbanShadowScrpit)
	textSize(35)
	modemSound.setVolume(modemVolSlider.value())
	modemSound.rate(modemRateSlider.value())
text('UrbanShadowsSansSerif.otf', windowWidth/2, windowHeight/2, )


	mappedAmplitude= modemAmplitude.getLevel()* 1000
	fill(map(mappedAmplitude,0,300,0,255))
	ellipse(windowWidth/2,windowHeight/2, mappedAmplitude, mappedAmplitude)


}