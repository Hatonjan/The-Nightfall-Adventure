// Global variables
var frameCounter = 0;
var coinSpeed = 16;
var collectables;
var enemyContact;
var mountains1;  
var mountains;
var platforms;
var gameScore;
var flagPole;
var enemies;
var canyons;
var clouds;
var lives;
var stars;
var rocks;
var signs;
var rock;
var moon;

// Position related variables
var mountainsCameraX;
var mountains1CameraX;
var gameCharX;   
var gameCharY;  
var cameraX; 
var groundX;
var floorY;  
var treesY;
var treesX;

// Boolean variables
var fightingRight;
var fightingLeft;
var gameChar_die;
var isPlummeting;
var lostFight;
var isFalling;
var coinFront;
var coinState;
var coinSide;
var coinTurn;
var isRight;
var isLeft;
var coin;

// Sound variables
var collectableSound;
var backgroundSound;
var easterEggSound;
var gameOverSound;
var fightingSound; 
var welcomeSong;
var victorySound;
var OrcSound;
var jumpSound;  

// Image variables
var mjsSize = 18;
var welcomeImage;
var mjsFlag;
var mjs;

function preload() {  
	// Load Images
	welcomeImage = loadImage("assets/welcomeImage.png");
	mjsFlag = loadImage("assets/mjsFlag.png");
	mjs = loadImage("assets/mjs.png");

	// Sound formats
	soundFormats('mp3','wav');  

	// Load Sounds
	backgroundSound = loadSound("assets/backgroundSound.wav");
	backgroundSound.setVolume(0.1);
	easterEggSound = loadSound("assets/easterEggSound.mp3"); // Author: Wagna (Freesound)
	gameOverSound = loadSound("assets/gameOverSound.wav");
	gameOverSound.setVolume(0.1);
	fightingSound = loadSound("assets/fightingSound.wav");
	fightingSound.setVolume(0.2)
	collectableSound = loadSound("assets/coinSound.mp3"); // Author: Bradwesson (Freesound)
	victorySound = loadSound("assets/victorySound.wav");
	victorySound.setVolume(0.5);
	welcomeSong = loadSound("assets/welcomeSong.wav"); 
	welcomeSong.setVolume(0.5);
	jumpSound = loadSound("assets/jump.mp3"); // Author: Bastianhallo (Freesound)
	jumpSound.setVolume(0.5); 
	OrcSound = loadSound("assets/Orc.mp3");
}
 
function setup() {   
	createCanvas(1024, 576);   
	floorY = height - 50;  
	lives = 3;
	startGame();
}

function draw() {   
	// Follow the character while moving
	cameraEffect();

	// Beginning the following camera effect
	push();
	translate(-cameraX,0);
	background(30,30,122);  

	// The Moon
	drawMoon();

	// Stars
	drawStars(); 

	// Mountains
	drawMountains();

	// Draw the Ground
	drawGround(); 
	
	// Clouds
	drawClouds();

	// Draw the rocks
	for (var i = 0; i < rocks.length; i++) {
        drawRock(rocks[i]);
    }
	// Trees
	drawTrees(); 

	// Platform
	for(var i = 0; i < platforms.length; i++) {
		platforms[i].draw();
	}
	// Collectable Item 
	drawCollectable(collectables);
	
	// Draw The Canyon 
	drawCanyon(canyons);
	
	// Draw Flag Pole 
	drawFlagpole();

	// treasureChest
	drawTreasureChest();

	// Draw enemies
	enemyInteractions(); 

	// Draw the controls Display
	for(var i = 0; i < signs.length; i++) {
		signs[i].draw();
	}
	// Check player lives
	checkPlayerDie();

	// Hands Up Display
	huDisplay(); 

	// Draw the Game Character
	if(isLeft && (isFalling && gameCharY < floorY)) { // Jumping-left 
		drawJumpingLeft();
	} else if(isRight && (isFalling && gameCharY < floorY)) { // Jumping Right
		drawJumpingRight();
	} else if(isLeft) {  // Walking left (This is part of the provided template).
		drawWalkingLeft();
	} else if(isRight) {  // Walking right (This is part of the provided template.)
		drawWalkingRight();
	} else if(isFalling || isPlummeting) {  // Jumping facing forwards (This is part of the provided template.)
		drawJumpingForwards();			 
	} else if(fightingRight) {// Fighting facing right
		drawFightingRight();
	} else if(fightingLeft) {// Fighting facing left
		drawFightingLeft();
	} else {  
		drawFrontFacing(); // Standing front facing
	}
	// End of the following camera effect
	pop();

	// Character interactions 
	characterInteractions();
	
	// Title screen 
	titleScreen();
}
 
function keyPressed() {   

	// Controls the animation of the character when keys are pressed.
	if(isPlummeting || flagPole.isReached) {
		return; // Exit the function
	}
	if (key === "a" ) { // Moving to the left
		isLeft = true;	 
	} else if (key === "d") { // Moving to the right
		isRight = true; 
	} else if (key === "w" && !isFalling) { // Jump
		gameCharY -= 180;	
		jumpSound.play();
	} else if(keyCode === 39) { // Fight facing right
		fightingRight = true;
		isRight = false; 
	} else if(keyCode === 37) { // Fight facing left
		fightingLeft = true;
		isLeft = false; 
	} else {  
		isFalling = true;
	}
	if(fightingLeft && key === 'a' || fightingRight && key === 'd'){
		fightingSound.play();
	}
	// Initialize the game
	if(key){
		welcomeImage = null;
		welcomeSong.stop();
	}
}

function keyReleased() {   
	// Controls the animation of the character when keys are released.
	if(key === 'a') { // Stop moving left
		isLeft = false;		
	} else if(key === 'd') { // Stop moving left
		isRight = false;
	} else if (key === "w") { // Start falling
		isFalling = true;
	} else if(keyCode === 39) { // Stop fighting right
		fightingRight = false;
	} else if(keyCode === 37) { // Stop fighting left
		fightingLeft = false;
	} 
}

/*

**References**

-p5.js references (2024). available at https://p5js.org/reference/
-Code Spell Checker Visual Studio Extension (2016). From streetsidesoftware.com

 **Sound Effects**
 
-Sound effect: jump.mp3
-Author: Bastianhallo (Freesound)
-Source: Sound effects by www.pixabay.com
-License: Free for use.
-Date: August 4, 2021

-Sound effect: coinSound.mp3
-Author: Bradwesson (Freesound)
-Source: Sound effects by www.pixabay.com
-License: Free for use.
-Date: August 4, 2021

-Sound effect: easterEggSound.mp3
-Author: Wagna (Freesound)
-Source: Sound effects by www.pixabay.com
-License: Free for use.
-Date: August 2, 2021

-Sound effect: welcomeSong.wav, backgroundSound.wav", 
			   Orc.mp3 (My dog), fightingSound.wav, 
			   gameOverSound.wav, victorySound.wav
-Author: Martin Jonathan Scott & Gandalf (My dog)
-Source: Recorded with GarageBand
-License: N/A
-Date: February, 2025

**Avoid the sound to play every frame.**
	if(sound.isPlaying() = false) {
			sound.play();	
		}
-Title: Lesson 3.4 - Adding Sound to p5.js
-Reference: Benjamin Siegel 
-Source: https://www.youtube.com/watch?v=MDX5VaMOzZg
-Date: Nov 15, 2021
*/