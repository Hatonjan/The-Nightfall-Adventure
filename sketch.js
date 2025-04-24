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

<<<<<<< HEAD
function startGame() {
	// Variables Initialization   
	gameCharY = height - 48;      
	treesY  = height - 150;
	mountains1CameraX = 0;
	gameCharX = width / 3;   
	mountainsCameraX = 0;
	cameraX = 0;
	gameScore = 0;

	// Boolean Variables
	fightingRight = false;
	isPlummeting = false; 
	gameChar_die = false;
	fightingLeft = false;
	lostFight = false;
	isFalling = false;
	coinSide = false;
	coinFront= false;
	isRight = false;
	coinTurn = true;
	isLeft = false;
	coinState = 0;
	coin = true;
	
	// Objects Initialization
	treasureChest = {
		x: -400,
		isFound: false,
		easterEgg: false		
	};
	moon = {
		x_pos: 150,
		y_pos: 50,
		diameter: 70
	};
	rock = {
		x: 600,
		y: floorY,
		size: 50
	};	
	flagPole = {
		x: 6500,
		y: floorY - 100,
		size:50,
		isReached: false	
	};	
	// Arrays Initialization
	treesX = [0, 360, 852, 1534, 2246, 2556, 3068, 3608, 4000, 5330, 5868];
	groundX = [-150, 0, width, width*2, width*3, width*4, width*5, width*6];
	collectables = [ 
		{x:  170, y: floorY -  30, size: 25, isFound: false},
		{x:  210, y: floorY -  30, size: 25, isFound: false},
		{x:  250, y: floorY -  30, size: 25, isFound: false},
		{x: 1090, y: floorY - 130, size: 25, isFound: false},
		{x: 1130, y: floorY - 130, size: 25, isFound: false},
		{x: 1170, y: floorY - 130, size: 25, isFound: false},
		{x: 1210, y: floorY - 130, size: 25, isFound: false},
		{x: 1460, y: floorY - 240, size: 25, isFound: false},
		{x: 1510, y: floorY - 290, size: 25, isFound: false},
		{x: 1550, y: floorY - 300, size: 25, isFound: false},
		{x: 1590, y: floorY - 300, size: 25, isFound: false},
		{x: 1630, y: floorY - 290, size: 25, isFound: false},
		{x: 1680, y: floorY - 240, size: 25, isFound: false},
		{x: 2300, y: floorY -  30, size: 25, isFound: false},
		{x: 2520, y: floorY -  30, size: 25, isFound: false},
		{x: 2900, y: floorY -  30, size: 25, isFound: false},
		{x: 2940, y: floorY -  30, size: 25, isFound: false},
		{x: 2980, y: floorY -  30, size: 25, isFound: false},
		{x: 3020, y: floorY -  30, size: 25, isFound: false},
		{x: 3710, y: floorY -  40, size: 25, isFound: false},
		{x: 3750, y: floorY -  90, size: 25, isFound: false},
		{x: 3790, y: floorY - 110, size: 25, isFound: false},
		{x: 3830, y: floorY - 110, size: 25, isFound: false},
		{x: 3870, y: floorY -  90, size: 25, isFound: false},
		{x: 3910, y: floorY -  40, size: 25, isFound: false},
		{x: 4540, y: floorY - 230, size: 25, isFound: false},
		{x: 4580, y: floorY - 230, size: 25, isFound: false},
		{x: 4620, y: floorY - 230, size: 25, isFound: false},
		{x: 4660, y: floorY - 230, size: 25, isFound: false},
		{x: 4700, y: floorY - 230, size: 25, isFound: false},
		{x: 4740, y: floorY - 230, size: 25, isFound: false},
		{x: 4780, y: floorY - 230, size: 25, isFound: false}
	];
	clouds = [
		{x:-620, y:100, diameter: 40}, {x:-260, y: 80, diameter: 40}, 
		{x:   0, y:100, diameter: 40}, {x: 260, y: 80, diameter: 40}, 
		{x: 520, y:120, diameter: 40}, {x: 780, y: 60, diameter: 40},
		{x:1000, y:100, diameter: 40}, {x:1260, y: 80, diameter: 40}, 
		{x:1520, y:120, diameter: 40}, {x:1780, y: 60, diameter: 40},
		{x:2000, y:100, diameter: 40}, {x:2260, y: 80, diameter: 40}, 
		{x:2520, y:120, diameter: 40}, {x:2780, y: 60, diameter: 40},
		{x:3000, y:100, diameter: 40}, {x:3260, y: 80, diameter: 40}, 
		{x:3520, y:120, diameter: 40}, {x:3780, y: 60, diameter: 40},
		{x:4000, y:100, diameter: 40}, {x:4260, y: 80, diameter: 40}, 
		{x:4520, y:120, diameter: 40}, {x:4780, y: 60, diameter: 40},
		{x:5000, y:100, diameter: 40}, {x:5260, y: 80, diameter: 40}, 
		{x:5520, y:120, diameter: 40}, {x:5780, y: 60, diameter: 40},
		{x:6000, y:100, diameter: 40}, {x:6260, y: 80, diameter: 40}, 
		{x:6520, y:120, diameter: 40}, {x:6780, y: 60, diameter: 40},
	];
	mountains = [
		{x:   50, y: height}, {x:  650, y: height}, 
		{x: 1250, y: height}, {x: 1850, y: height}, 
		{x: 2450, y: height}, {x: 3050, y: height}, 
		{x: 3650, y: height}, {x: 4250, y: height}, 
		{x: 4850, y: height}, {x: 5450, y: height},
		{x: 6050, y: height}, {x: 6650, y: height}
	];
	mountains1 = [
		{x:    0, y: 500},
		{x:  975, y: 500},
		{x: 1700, y: 500},
		{x: 2775, y: 500},
		{x: 3600, y: 500},
		{x: 6125, y: 500}
	];
	canyons = [
		{x:  600, width: 150},
		{x: 2075, width: 150},
		{x: 2600, width: 150},
		{x: 3200, width: 150},
		{x: 4130, width: 1150},
	];
	stars = [
		{x: -450, y: 45}, {x: -150, y: 45}, 
		{x:    0, y: 45}, {x:  115, y: 45}, 
		{x:  355, y: 45}, {x:  600, y: 45}, 
		{x:  780, y: 45}, {x:  900, y: 45}, 
		{x: 1115, y: 45}, {x: 1325, y: 45}, 
		{x: 1600, y: 45}, {x: 1780, y: 45}, 
		{x: 1900, y: 45}, {x: 2115, y: 45}, 
		{x: 2355, y: 45}, {x: 2600, y: 45}, 
		{x: 2780, y: 45}, {x: 2900, y: 45}, 
		{x: 3115, y: 45}, {x: 3355, y: 45}, 
		{x: 3600, y: 45}, {x: 3780, y: 45}, 
		{x: 3900, y: 45}, {x: 4115, y: 45}, 
		{x: 4355, y: 45}, {x: 4600, y: 45}, 
		{x: 4780, y: 45}, {x: 4900, y: 45}, 
		{x: 5115, y: 45}, {x: 5355, y: 45}, 
		{x: 5600, y: 45}, {x: 5780, y: 45}, 
		{x: 5900, y: 45}, {x: 6115, y: 45}, 
		{x: 6355, y: 45}, {x: 6600, y: 45}, 
		{x: 6780, y: 45}, {x: 6900, y: 45},
	];
	platforms = [];
	enemies = [];
	rocks = [];
	signs = [];

	/* The platforms and enemies were created whit the help of the lectures from topic 10 */
	// Generate the platforms 
	platforms.push(createPlatforms(-420, floorY - 100, 200));
	platforms.push(createPlatforms(1055, floorY - 100, 200));
	platforms.push(createPlatforms(1305, floorY - 200, 200));
	platforms.push(createPlatforms(1655, floorY - 200, 200));
	platforms.push(createPlatforms(4180, floorY - 100, 200));
	platforms.push(createPlatforms(4430, floorY - 200, 200));
	platforms.push(createPlatforms(4580, floorY - 200, 200));
	platforms.push(createPlatforms(4730, floorY - 200, 200));
	platforms.push(createPlatforms(5030, floorY - 100, 200));

	// Generate the enemies
	enemies.push(new Enemy(-400, floorY -  98, 150, false, false, false));
	enemies.push(new Enemy(1100, floorY +   2, 200, false, false, false));
	enemies.push(new Enemy(1665, floorY +   2, 300, false, false, false));
	enemies.push(new Enemy(2275, floorY +   2, 300, false, false, false));
	enemies.push(new Enemy(3668, floorY +   2, 250, false, false, false));
	enemies.push(new Enemy(4475, floorY - 198, 375, false, false, false));
	enemies.push(new Enemy(5860, floorY +   2, 300, false, false, false));
	enemies.push(new Enemy(5300, floorY +   2, 400, false, false, false));

	// Generate the Signs
	signs.push(new Sign(-150, floorY - 85, 100,
		'     Fighting Mode ', 
		'← = Fighting Left  ', 
		'← + a = Strike Left'
	));
	signs.push(new Sign(475, floorY - 85, 80, 
		'a = Move Left', 
		'd = Move Right', 
		'w = Jump'
	));
	signs.push(new Sign(920, floorY - 85, 110, 
		'      Fighting Mode ', 
		' → = Fighting Right ', 
		'→ + d = Strike Right'
	));
	// Generate the rocks
	for (var i = 0; i < 10; i++) { 
        rocks.push({ x: 50 + 760*i, y: floorY});
	};
	// PLay the sound for the title Screen
	titleScreenSound();
}

=======
>>>>>>> master
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
<<<<<<< HEAD

function cameraEffect() {
	if(isRight){
		cameraX += 4.5;
		mountainsCameraX += .18;
		mountains1CameraX += .13;
	}
	if(isLeft) {
		cameraX -= 4.5;
		mountainsCameraX -= .1;
		mountains1CameraX -= .05;
	}
}

function characterInteractions() {
	//Conditional statements to move the game character 
	if(gameCharY < floorY) { 
		var platformContact = false;
		for(var i = 0; i < platforms.length; i++) {
			if(platforms[i].checkContact(gameCharX, gameCharY)) { // Check contact with the platforms
				platformContact = true;
				break; 
			}	
		}
		if(!platformContact) { // Creates Gravity
			gameCharY += 4;
			isFalling = true;
		}  

	} else {
		isFalling = false; // Stop falling
	}
	if(isPlummeting) { // Freezing controls
		isRight = false;
		isLeft  = false;
		gameCharY += 6; // Plummeting
		backgroundSound.stop()
	} 
	if(isLeft) { // Moving to the left
		gameCharX -= 4.5;
		moon.x_pos -= 4;
	} else {
		isLeft = false;
	}
	if (isRight) { // Moving to the right
		gameCharX += 4.5;
		moon.x_pos += 4;
	} else {
		isRight = false;
	}
	if(gameCharY < floorY - 150) { // Falling
		isFalling = true;
	} 
	if(platformContact) { // Allows the character to walk on top pf the platforms
		isFalling = false;
	}
	// Falling down the canyon
	for(var i = 0; i < canyons.length; i++) {
		checkCanyon(canyons[i]);
	}
	// Collect the coin
	for(var i = 0; i < collectables.length; i ++) {
		checkCollectable(collectables[i]);
	}	
}

function enemyInteractions() {
	for(var i = 0; i < enemies.length; i++) {
		enemies[i].draw();
		enemyContact = enemies[i].checkContact(gameCharX, gameCharY);

		if(enemyContact){ // Check if the game character lost the fight 
			gameCharY -= 10;
			isPlummeting = true;
			lostFight = true;
		}
		if(enemies[i].checkEnemyDead(gameCharX, gameCharY)) { // Check if the enemy lost the fight
			enemies[i].isDead = true;
		}
	}
}

function titleScreen() {
	// Welcome Image
	if(welcomeImage) { // Display the title Screen
		image(welcomeImage, 0, 0,width, height);
		// Title
		push();
		stroke(0);
		fill(200);
		textSize(90);
		strokeWeight(8);
		textFont('Times New Roman');
		text("The Nightfall Adventure", 65, 220);

		// Start Game 
		textSize(60);
		strokeWeight(8);
		fill(185,165,120);
		text("Press Any Key to Start", 230, 520 );
		pop();
	} 
	if(!welcomeImage && !backgroundSound.isPlaying()) { // Play the background Music
		backgroundSound.play();	
	}
}

function titleScreenSound() { 
	if(welcomeImage) { // Plays the title screen music
		welcomeSong.loop();
		userStartAudio();
	}
}

function drawGround() {
	// Draw the Ground
	for(var i = 0; i<groundX.length; i++) {
		// Ground
		noStroke();
		fill(0,155,0); //Draw some green ground
		rect(groundX[i], floorY, width, 20); 

		fill(120,82,45); // Dirt under the green ground
		rect(groundX[i], floorY + 20, width, 15); 

		fill(160,82,45); // Dirt under the dirt
		rect(groundX[i], floorY + 35, width, 20);  
	}
}
      
function drawMoon() {
	// Draw the moon
	noStroke();
	fill(255,255,255);
	ellipse(moon.x_pos, moon.y_pos, moon.diameter);

	fill(30,30,122); // Draw the crescent moon
	ellipse(moon.x_pos + 15, moon.y_pos, moon.diameter);
}

function drawStars(){
	// Draw the stars
	for(var i = 0; i < stars.length; i++) {
		stroke(255);
		strokeWeight(3);
		point(stars[i].x,stars[i].y); 
		point(stars[i].x + 85,stars[i].y + 20); 
		point(stars[i].x + 170, stars[i].y + 40); 
		point(stars[i].x + 15,stars[i].y + 60); 
		if(isRight) {
			stars[i].x -= .1;
		} else if(isLeft) {
			stars[i].x += .1;
		}
	}
}

function drawMountains() {
	// Draw the background mountains
	push();
	translate(-mountainsCameraX,0); // translate the x position to create the movement effect
	for(var i = 0; i< mountains.length; i ++) {
		noStroke()
		fill(25,75,120,250); // Draw the short height mountains
		ellipse(mountains[i].x + 430 , mountains[i].y, 400,700);

		fill(25,100,120,250); // Draw the medium height mountains
		ellipse(mountains[i].x, mountains[i].y, 400,800);

		fill(50,110,120,250); // Draw the large height mountains
		ellipse(mountains[i].x + 250, mountains[i].y, 400,900);
	}
	pop();	

	// Draw the Brown mountains
	push();
	translate(-mountains1CameraX,0); // translate the x position to create the movement effect
	for(var i = 0; i < mountains1.length; i ++) {
		stroke(0); // Right shade
		strokeWeight(1);
		fill(130,69,19); 
		triangle(mountains1[i].x + 80, floorY, 
				 mountains1[i].x + 380, floorY,  
				 mountains1[i].x + 175, 200);

		fill(145,69,19); // Far left
		triangle(mountains1[i].x, floorY, 
				 mountains1[i].x + 300, floorY,
				 mountains1[i].x + 135, 240);
		
		noStroke(); // Center 	
		fill(145,69,19); 	 
		triangle(mountains1[i].x + 30, floorY, 
				 mountains1[i].x + 325, floorY,
				 mountains1[i].x + 175, 200);
	}
	pop();
}

function   drawClouds() {
	// Draw the clouds in the sky
	for(var i = 0; i < clouds.length; i++) {
		noStroke()
		fill(176,224,230,245);
		ellipse(clouds[i].x, clouds[i].y, 
				clouds[i].diameter, clouds[i].diameter);
		ellipse(clouds[i].x + 30, clouds[i].y, 
				clouds[i].diameter, clouds[i].diameter);
		ellipse(clouds[i].x + 60, clouds[i].y, 
				clouds[i].diameter, clouds[i].diameter);
		ellipse(clouds[i].x, clouds[i].y + 20, 
				clouds[i].diameter, clouds[i].diameter);
		ellipse(clouds[i].x + 30, clouds[i].y + 20, 
				clouds[i].diameter, clouds[i].diameter);
		ellipse(clouds[i].x + 60, clouds[i].y + 20, 
				clouds[i].diameter, clouds[i].diameter);
		ellipse(clouds[i].x - 20, clouds[i].y + 10, 
				clouds[i].diameter, clouds[i].diameter);		
		ellipse(clouds[i].x + 80, clouds[i].y + 10, 
				clouds[i].diameter, clouds[i].diameter);
		// Move the clouds			
		clouds[i].x += 0.1; 	
	}

}

function drawRock(rock) {		
	// Draw the rocks
	fill(130); // Back shadow
	noStroke();
	beginShape();
	vertex(rock.x - 5, rock.y);
	vertex(rock.x + 5, rock.y - 48);
	vertex(rock.x + 28 , rock.y - 65);
	vertex(rock.x, rock.y); 
	endShape(CLOSE);

	fill(120); // Rock shape
	beginShape();
	vertex(rock.x, rock.y);
	vertex(rock.x + 10 , rock.y - 50);
	vertex(rock.x + 30 , rock.y - 65);
	vertex(rock.x + 50 , rock.y - 50);
	vertex(rock.x + 70 , rock.y - 35);
	vertex(rock.x + 80 , rock.y); 
	endShape(CLOSE);
	
	noStroke(); // Front shadow
	fill(50,50,50,68);  
	quad(rock.x + 80, rock.y,rock.x + 70, rock.y,
		rock.x + 30, rock.y - 65,rock.x + 70, rock.y - 35);	
}

function drawTrees() {
	// Draw the trees
	for(var i = 0; i < treesX.length; i++) {
		// Tree Trunk
		stroke(0);
		strokeWeight(1);
		fill(104,44,11);
		rect(treesX[i], treesY,30,100)

		// Branches
		beginShape();
		noStroke();
		vertex(treesX[i] + 10, treesY + 5);
		vertex(treesX[i] - 100, treesY - 50);
		vertex(treesX[i] - 80, treesY - 50);
		vertex(treesX[i] - 30, treesY - 25);
		vertex(treesX[i] + 10, treesY - 50);
		vertex(treesX[i] + 20, treesY - 50);
		vertex(treesX[i] - 20, treesY - 20)
		vertex(treesX[i] + 24, treesY + 3);
		vertex(treesX[i] + 130, treesY - 50);
		vertex(treesX[i] + 110, treesY - 50);
		vertex(treesX[i] + 70, treesY - 30);
		vertex(treesX[i] + 20, treesY - 50);
		vertex(treesX[i] + 10, treesY - 50);
		vertex(treesX[i] + 60, treesY - 25);
		endShape(CLOSE);
	
		// Tree leaves
		fill(0,100,50);
		ellipse(treesX[i] + 15, treesY - 70,325,55);
		ellipse(treesX[i] - 55, treesY - 70,150,65);
		ellipse(treesX[i] + 70, treesY - 70,150,65);
		ellipse(treesX[i] + 15, treesY - 90,150,65);
	}
}

function createPlatforms(x, y, length) {
	var p = {
		x: x,
		y: y,
		length: length,
		// Draw the platforms
		draw: function() {
			fill(0,125,0);
			rect(this.x, this.y, this.length, 8);

			// Dirt underneath the platform
			beginShape();
			fill(100,60,25);
			vertex(this.x, this.y + 8);
			vertex(this.x + 24, this.y + 28);
			vertex(this.x + 100, this.y + 48);
			vertex(this.x + 176, this.y + 28);
			vertex(this.x + 200, this.y + 8);
			endShape(CLOSE);
		},
		checkContact: function(gcX, gcY) { 
			// Check if the game character is on the platform
			if(gcX > this.x && gcX < this.x + this.length) { 
				var d = this.y - gcY;
				if(d >= -5 && d <= 0) {
					return true;
				}
			}
			return false;
		}
	}
	return p;
}

function drawCollectable(tCollectable) {
	// Draw the collectables 
	for(var i = 0; i < tCollectable.length; i ++) {
		if( !tCollectable[i].isFound) {
			push();
			if(coinFront){ //Draw the half turn of the collectable
				stroke(0);
				strokeWeight(1);
				fill(255,215,0);
				ellipse( tCollectable[i].x + 2,  tCollectable[i].y + 2, 
						tCollectable[i].size-8,  tCollectable[i].size);

				image(mjs, tCollectable[i].x - 4,  tCollectable[i].y - 5, mjsSize - 6, mjsSize - 2); 		
				pop();
			} else if(coinSide) { // Draw the side view of the collectable
				push();
				stroke(0);
				strokeWeight(1);
				fill(255,215,0);
				rect( tCollectable[i].x,  tCollectable[i].y - 12, 
						tCollectable[i].size - 20,  tCollectable[i].size);
				pop();		
			} else if(coin) { // Draw the Front of the collectable
				// Base circle
				push();
				stroke(0);
				strokeWeight(1);
				fill(218,165,32);
				ellipse( tCollectable[i].x + 2,  tCollectable[i].y, 
						tCollectable[i].size,  tCollectable[i].size);

				// Front circle
				fill(255,215,0);
				ellipse( tCollectable[i].x + 2,  tCollectable[i].y + 2, 
						tCollectable[i].size,  tCollectable[i].size);

				if(!coinTurn) { // Draw the center mark of the collectable tails	
				image(mjs, tCollectable[i].x - 4,  tCollectable[i].y - 6, mjsSize - 4, mjsSize); 
				} else if(coinTurn) {
					textSize(15);
					strokeWeight(3);
					text('I',tCollectable[i].x,  tCollectable[i].y + 7,)
				}	
			pop();
			}
		} 
	}

	// Frame speed
	frameCounter += 1;
	if(frameCounter >= coinSpeed) { // Alternate through the collectable states
		coinState = ((coinState += 1) %3);
		frameCounter = 0;

		// Collectable motion 
		if(coinState == 0) { // Coin tails
			coin = true;
			coinFront = false;
			coinSide = false;
		} else if(coinState == 1) { // Coin front
			coin = false;
			coinFront = true;
			coinSide = false;
		} else if(coinState == 2) { // Coin Side
			coin = false;
			coinFront = false;
			coinSide = true;
		} 
	}
}

function drawCanyon(tCanyon) {
	// Draw the canyons
	for(var i = 0; i < tCanyon.length; i++) {
		fill(25,100,120);
		rect(tCanyon[i].x, floorY, tCanyon[i].width, height - floorY);

		fill(120,82,45); // Sides lines
		rect(tCanyon[i].x, floorY, 5, height);
		rect(tCanyon[i].x + tCanyon[i].width-5, floorY, 5, height);
	}
}

function drawFlagpole() {
	// Draw the flagpole
	push();
	// Pole
	strokeWeight(10);
	stroke(125,45,15);
	line(flagPole.x, floorY, 
		flagPole.x, floorY - 275);

	stroke(0,155,0); //Grass at the bottom of the pole
	line(flagPole.x - 20, floorY + 5, 
		flagPole.x + 20, floorY + 5);

	// Flag
	noStroke();
	fill(25,100,25);
	rect(flagPole.x - 25, flagPole.y, 
		flagPole.size, flagPole.size + 30);
	triangle(
		flagPole.x - 25, flagPole.y + 80, 
		flagPole.x,      flagPole.y + 80,
		flagPole.x - 25, flagPole.y + 100);
	triangle(
		flagPole.x + 25, flagPole.y + 80, 
		flagPole.x,      flagPole.y + 80,
		flagPole.x + 25, flagPole.y + 100);

	beginShape(); // Outer Shape
	strokeWeight(3);
	stroke(184,134,11);
	vertex(flagPole.x - 25, flagPole.y);
	vertex(flagPole.x + 25, flagPole.y);
	vertex(flagPole.x + 25, flagPole.y + 100);
	vertex(flagPole.x,      flagPole.y + 80);
	vertex(flagPole.x - 25, flagPole.y + 100);
	vertex(flagPole.x - 25, flagPole.y);
	endShape();

	// Add the MJS to the flag
	image(mjsFlag,
		flagPole.x - 19 , flagPole.y + 15,
		mjsSize + 20, mjsSize + 20);
	pop();

	// Check if the flag is reached
	checkFlagpole();
}

function drawTreasureChest() {
	push();
	if(!treasureChest.isFound) { // Draw the treasure chest
		stroke(0);
		strokeWeight(2);
		fill(165,103,23);
		rect(treasureChest.x, floorY - 160, 40, 40,50);
		rect(treasureChest.x, floorY - 140, 40, 40);
	}
	if(treasureChest.isFound) { // Draw the treasure chest open
		stroke(0);
		strokeWeight(2);
		fill(165,103,23);
		rect(treasureChest.x, floorY - 140, 40, 40);
		rect(treasureChest.x-20, floorY - 180, 40, 40, 50);

		noStroke(); // Gives the open lid effect
		fill(30,30,122);
		rect(treasureChest.x, floorY - 180, 25, 40);
	}
	if(treasureChest.isFound && !treasureChest.easterEgg) { // Draw the an extra collectable
		fill(255,255,0);
		ellipse(treasureChest.x+20, floorY - 158, 30);

		fill(30,30,122); // Make the collectable look like a ring
		ellipse(treasureChest.x+20, floorY - 158, 20);
	}	
	if(treasureChest.easterEgg) { // Display text if the collectable is collected
		fill(255);
		textSize(20);
		text("1UP", treasureChest.x, floorY -200);
	}
	pop();
	if(gameCharX <= -250 && gameCharY <= floorY - 95) { // Open the treasure chest
		treasureChest.isFound = true;		
	}
}

function Sign(x, y, size, tx, tx1, tx2) {
	// Variables
	this.x = x;
	this.y = y;
	this.tx = tx;
	this.tx1 = tx1;
	this.tx2 = tx2;
	this.size = size;

	this.draw = function() {
	// Draw the sign
	push();
	strokeWeight(3);
	fill(150,100,63);
	stroke(125,83,13);
	rect(this.x, this.y, this.size, 50, 5);
	strokeWeight(5);
	line(this.x + this.size/2, this.y + 50, 
		this.x  + this.size/2, this.y + 82);

	// Add text to the sign 
	fill(0);	
	noStroke();	
	textSize(10);
	text(tx, this.x + 6, this.y + 13);	
	text(tx1, this.x + 6, this.y + 28);	
	text(tx2, this.x + 6, this.y + 43);	
	pop();
	}
}

function drawJumpingLeft() {
	// Face
	fill(222,184,135);
	rect(gameCharX - 11, gameCharY - 75, 22, 30, 8);

	// Helmet
	fill(128);
	rect(gameCharX - 12, gameCharY - 75, 22, 10, 2);
	rect(gameCharX -  6, gameCharY - 75, 17, 30, 2);

	// Eyes
	fill(255);
	rect(gameCharX - 11, gameCharY - 62, 2, 5);

	fill(0); // Pupil
	ellipse(gameCharX  - 10, gameCharY - 59.5, 2, 3);

	// Mouth
	rect(gameCharX - 11, gameCharY - 51, 4, 2, 1);

	// Sword
	stroke(185);
	strokeWeight(5);
	line(gameCharX + 10, gameCharY - 22,
		 gameCharX - 28, gameCharY - 12);
	
	// Body
	noStroke();
	fill(160,82,45);
	rect(gameCharX - 9, gameCharY - 45, 18, 35, 2);

	// Belt 
	fill(0);
	rect(gameCharX - 9, gameCharY - 25, 19, 2);
	
	// Cape
	fill(60,80,25);
	triangle(gameCharX -  9, gameCharY - 45,
		     gameCharX +  9, gameCharY - 45,
			 gameCharX + 20, gameCharY - 10); 	
	rect(gameCharX - 9, gameCharY - 45, 18, 3);
		  
	// Cape clip
	fill(255,215,0);
	rect(gameCharX - 9, gameCharY - 44, 3, 2);

	// Arm
	fill(222,184,135);
	triangle(gameCharX - 1, gameCharY - 45,
			gameCharX - 12, gameCharY - 23,
			gameCharX -  5, gameCharY - 23);	

	fill(160,82,45); // sleeve
	triangle(gameCharX -  1, gameCharY - 45,
			 gameCharX - 11, gameCharY - 26,
			 gameCharX -  4, gameCharY - 26);			

	// Feet
	fill(0);
	triangle(gameCharX - 6, gameCharY - 10, 
		     gameCharX + 7, gameCharY - 5,
			 gameCharX - 1, gameCharY);
	triangle(gameCharX + 6, gameCharY - 10, 
		     gameCharX + 18, gameCharY - 5,
			 gameCharX + 10, gameCharY);
}

function drawJumpingRight() {

	// Face
	fill(222,184,135);
	rect(gameCharX - 11, gameCharY - 75, 22, 30, 8);

	// Helmet
	fill(128);
	rect(gameCharX - 10, gameCharY - 75, 22, 10, 2);
	rect(gameCharX - 11, gameCharY - 75, 17, 30, 2);

	// Eyes
	fill(255);
	rect(gameCharX + 9, gameCharY - 62, 2, 5);

	fill(0); // Pupil
	ellipse(gameCharX  + 10, gameCharY - 59.5, 2, 3);

	// Mouth
	rect(gameCharX + 7, gameCharY - 51, 4, 2, 1);
	
	// Body
	fill(160,82,45);
	rect(gameCharX - 9, gameCharY - 45, 18, 35, 2);

	// Belt  
	fill(0);
    rect(gameCharX - 9, gameCharY - 25, 19, 2);	 
	
	// Cape
	fill(60,80,25);
	triangle(gameCharX +  9, gameCharY - 45,
		 	 gameCharX -  9, gameCharY - 45,
		  	 gameCharX - 20, gameCharY - 10);	 
	rect(gameCharX - 9, gameCharY - 45, 18, 3);		
	
	// Cape clip
	fill(255,215,0);
	rect(gameCharX + 6, gameCharY - 44, 3, 2);

	// Arm
	fill(222,184,135);
	triangle(gameCharX +  1, gameCharY - 45,
			 gameCharX +  6, gameCharY - 23,
			 gameCharX + 13, gameCharY - 23);

	fill(160,82,45); // sleeve
	triangle(gameCharX +  1, gameCharY - 45,
			 gameCharX +  5, gameCharY - 26,
			 gameCharX + 12, gameCharY - 26);			
	
	// Feet 
	fill(0);
	triangle(gameCharX -  4, gameCharY - 10, 
		     gameCharX - 15, gameCharY - 5,
			 gameCharX -  8, gameCharY);
	triangle(gameCharX +  6, gameCharY - 10, 
		     gameCharX -  6, gameCharY - 5,
			 gameCharX +  2, gameCharY);

	// Sword
	stroke(185);
	strokeWeight(5);
	line(gameCharX + 10,     gameCharY - 22,
		 gameCharX + 28, gameCharY - 12 );

	strokeWeight(3); // Handel	 
	stroke(104,44,11); 
	line(gameCharX + 6, gameCharY - 20,
		gameCharX + 12, gameCharY - 28);
}

function drawWalkingLeft() {
	// Face
	fill(222,184,135);
	rect(gameCharX - 11, gameCharY - 75, 22, 30,8);

	// Helmet
	fill(128);
	rect(gameCharX - 12, gameCharY - 75, 22,10,2);
	rect(gameCharX - 6, gameCharY - 75, 17, 30,2);

	// Eyes
	fill(255);
	rect(gameCharX - 11, gameCharY - 62, 2, 5);

	fill(0); // Pupil
	ellipse(gameCharX  - 10, gameCharY - 59.5, 2, 3);

	// Mouth
	rect(gameCharX - 10, gameCharY - 50, 3, 1, 1);

	// Sword
	stroke(185);
	strokeWeight(5);
	line(gameCharX, gameCharY - 23,
		 gameCharX - 22, gameCharY - 12);
	
	// Body
	noStroke();
	fill(160,82,45);
	rect(gameCharX - 9, gameCharY - 45, 18, 35, 2);
	
	// Cape
	fill(60,80,25);
	rect(gameCharX - 4, gameCharY - 45, 15, 35, 2);		
	rect(gameCharX - 9, gameCharY - 45, 18, 3);	
		 
	// Belt
	fill(0);
	rect(gameCharX - 9, gameCharY - 25, 5, 2);

	fill(255,215,0); // Clip  
	rect(gameCharX -9 , gameCharY - 25, 1.5, 2);    

	// Cape clip
	fill(255,215,0);
	rect(gameCharX - 9, gameCharY - 44, 3, 2);

	// Arm
	fill(222,184,135);
	triangle(gameCharX - 1, gameCharY - 45,
			 gameCharX - 4, gameCharY - 23,
			 gameCharX + 3, gameCharY - 23);
			
	fill(160,82,45); // sleeve
	triangle(gameCharX - 1, gameCharY - 45,
			 gameCharX - 4, gameCharY - 26,
			 gameCharX + 3, gameCharY - 26);			

	//Feet
	fill(0);
	rect(gameCharX - random(3,7), gameCharY - 10, 6, 8,2);
	rect(gameCharX + random(2,6), gameCharY - 10, 6, 8,2);
}

function drawWalkingRight() {
	// Face
	fill(222,184,135);
	rect(gameCharX - 11, gameCharY - 75, 22, 30, 8);

	// Helmet
	fill(128);
	rect(gameCharX - 10, gameCharY - 75, 22, 10, 2);
	rect(gameCharX - 11, gameCharY - 75, 17, 30, 2);

	// Eyes
	fill(255);
	rect(gameCharX + 9, gameCharY - 62, 2, 5);

	fill(0); // Pupil
	ellipse(gameCharX  + 10, gameCharY - 59.5, 2, 3);

	// Mouth
	rect(gameCharX + 7, gameCharY - 50, 3, 1, 1);
	
	// Body
	fill(160,82,45);
	rect(gameCharX - 9, gameCharY - 45, 18, 35, 2);
	
	// Cape
	fill(60,80,25);
	rect(gameCharX - 9, gameCharY - 45, 15, 35, 2);		
	rect(gameCharX - 9, gameCharY - 45, 18,  3, 2);	

	// Belt  
	fill(0);
    rect(gameCharX + 4, gameCharY - 25, 5, 2);

	 fill(255,215,0); // Clip  
	rect(gameCharX + 7.5, gameCharY - 25, 1.5, 2);  	 

	// Cape clip
	fill(255,215,0);
	rect(gameCharX + 6, gameCharY - 44, 3, 2);

	// Arm
	fill(222,184,135);
	triangle(gameCharX + 1, gameCharY - 45,
			 gameCharX - 2, gameCharY - 23,
			 gameCharX + 5, gameCharY - 23);
			
	fill(160,82,45); // sleeve
	triangle(gameCharX + 1, gameCharY - 45,
			 gameCharX - 2, gameCharY - 26,
			 gameCharX + 5, gameCharY - 26);			

	//Feet
	fill(0);
	rect(gameCharX - random(4,8), gameCharY - 10, 6, 8, 2);
	rect(gameCharX + random(0,4), gameCharY - 10, 6, 8, 2);

	// Sword
	stroke(185);
	strokeWeight(5);
	line(gameCharX,     gameCharY - 23,
		 gameCharX + 22, gameCharY - 12 );

	stroke(104,44,11); // Handle
	strokeWeight(3);
	line(gameCharX - 6, gameCharY - 20,
		gameCharX ,    gameCharY - 29);
}

function drawJumpingForwards() {
	// Face 
	fill(222,184,135);
	ellipse(gameCharX, gameCharY - 60, 26, 30);

	// Helmet
	fill(128);
	rect(gameCharX - 13, gameCharY - 75, 26, 10,  4);
	rect(gameCharX - 13, gameCharY - 75,  3, 30, 10);
	rect(gameCharX + 10, gameCharY - 75,  3, 30, 10);

	// Eyes
	if(lostFight) {
		fill(0); // Dying eyes
		text("xx", gameCharX-8, gameCharY - 55); 
	} else {	
		fill(255); // Wake up eyes
		ellipse(gameCharX - 5, gameCharY - 60, 5, 8);
		ellipse(gameCharX + 5, gameCharY - 60, 5, 8);

		fill(0); // Pupil
		ellipse(gameCharX - 5, gameCharY - 60, 3, 6);
		ellipse(gameCharX + 5, gameCharY - 60, 3, 6);
	}

	// Mouth
	fill(0,0,0);
	rect(gameCharX -4, gameCharY - 50, 8, 2,1);
	
	// Body
	fill(160,82,45);
	rect(gameCharX - 11, gameCharY - 45, 22, 35);

	// Belt
	fill(0);
	rect(gameCharX - 11, gameCharY - 25, 22, 2);

	fill(255,215,0); // Clip  
	rect(gameCharX -2.5, gameCharY - 25, 5, 2, 1);  	 
	
	// Cape
	// Left Side
	fill(60,80,25);
	triangle(gameCharX - 11, gameCharY - 45, 
			 gameCharX - 11, gameCharY - 35,
			 gameCharX -  3, gameCharY - 45);	
	triangle(gameCharX - 11, gameCharY - 45,
			 gameCharX - 11, gameCharY - 10,
			 gameCharX - 18, gameCharY - 10);
				
	// Right side
	triangle(gameCharX + 11, gameCharY - 45, 
			 gameCharX + 11, gameCharY - 35,
			 gameCharX +  3, gameCharY - 45);
	triangle(gameCharX + 11, gameCharY - 45, 
			 gameCharX + 11, gameCharY - 10, 
			 gameCharX + 19, gameCharY - 10); 
	
	// Cape Clip
	fill(255,215,0);
	ellipse(gameCharX, gameCharY - 44, 7, 3);

	// Arms
	// Left Arm
	fill(222,184,135);
	triangle(gameCharX - 11, gameCharY - 45,
			 gameCharX - 33, gameCharY - 23,
			 gameCharX - 25, gameCharY - 21);
			
	fill(160,82,45); // sleeve
	triangle(gameCharX - 11, gameCharY - 45,
			 gameCharX - 31, gameCharY - 26,
			 gameCharX - 23, gameCharY - 24);	

	// Right Arm 
	fill(222,184,135);
	triangle(gameCharX + 11, gameCharY - 45, 
			 gameCharX + 33, gameCharY - 23,
			 gameCharX + 25, gameCharY - 21);		

	fill(160,82,45); // sleeve
	triangle(gameCharX + 11, gameCharY - 45, 
			 gameCharX + 31, gameCharY - 26,
			 gameCharX + 23, gameCharY - 24);	

	//Feet
	fill(0);
	triangle(gameCharX - 6, gameCharY - 10, 
			 gameCharX - 17, gameCharY - 5,
		 	 gameCharX - 8, gameCharY);
	triangle(gameCharX + 6, gameCharY - 10, 
			 gameCharX + 18, gameCharY - 5,
			 gameCharX + 10, gameCharY);

	// Sword
	stroke(185);
	strokeWeight(5);
	line(gameCharX - 28, gameCharY - 23,
		 gameCharX - 38, gameCharY );

	strokeWeight(3); // Handle
	stroke(104,44,11);
	line(gameCharX - 33, gameCharY - 24,
		 gameCharX - 23, gameCharY - 22)
 
}

function drawFrontFacing() {
	// Face 
	fill(222,184,135);
	ellipse(gameCharX, gameCharY - 60, 30, 30);

	// Helmet
	fill(128);
	rect(gameCharX - 15, gameCharY - 75, 30, 10,10); 
	rect(gameCharX - 15, gameCharY - 75,  5, 30,10);
	rect(gameCharX + 10, gameCharY - 75,  5, 30,10);

	// Eyes
	fill(255);
	ellipse(gameCharX - 5, gameCharY - 60, 5, 8);
	ellipse(gameCharX + 5, gameCharY - 60, 5, 8);

	fill(0); // Pupil
	ellipse(gameCharX - 5, gameCharY - 60, 3, 6);
	ellipse(gameCharX + 5, gameCharY - 60, 3, 6);

	// Mouth
	rect(gameCharX -4, gameCharY - 50, 8, 1, 1);
	
	// Body
	fill(160,82,45);
	rect(gameCharX - 11, gameCharY - 45, 22, 35);

	// Belt
	fill(0);
	rect(gameCharX - 7, gameCharY - 25, 14, 2);

	fill(255,215,0); // Clip  
	rect(gameCharX -2.5, gameCharY - 25, 5, 2, 1);  
	
	// Cape
	// Left Side	
	fill(60,80,25);
	triangle(gameCharX - 11, gameCharY - 45, 
			gameCharX - 11, gameCharY - 35,
			gameCharX - 3, gameCharY - 45);
	rect(gameCharX - 11, gameCharY - 45, 4, 35);		

	// Right side
	triangle(gameCharX + 11, gameCharY - 45, 
			 gameCharX + 11, gameCharY - 35,
			 gameCharX + 3, gameCharY - 45);
	rect(gameCharX + 7, gameCharY - 45, 4, 35);
	
	// Cape Clip
	fill(255,215,0);
	ellipse(gameCharX, gameCharY - 44, 7, 3);

	// Arms
	// Left Arm
	fill(222,184,135);
	triangle(gameCharX - 11, gameCharY - 45,
			 gameCharX - 23, gameCharY - 23,
			 gameCharX - 15, gameCharY - 21);
			
	fill(160,82,45); // sleeve
	triangle(gameCharX - 11, gameCharY - 45,
			 gameCharX - 22, gameCharY - 26,
			 gameCharX - 14, gameCharY - 24);		

	// Right Arm 
	fill(222,184,135);
	triangle(gameCharX + 11, gameCharY - 45, 
			 gameCharX + 23, gameCharY - 23,
			 gameCharX + 15, gameCharY - 21);

	fill(160,82,45); // sleeve
	triangle(gameCharX + 11, gameCharY - 45, 
			 gameCharX + 22, gameCharY - 26,
			 gameCharX + 14, gameCharY - 24);	

	//Feet
	fill(0);
	rect(gameCharX - 11, gameCharY - 10, 8, 8,2);
	rect(gameCharX +  3, gameCharY - 10, 8, 8,2);

	// Sword
	stroke(185);
	strokeWeight(5);
	line(gameCharX - 19, gameCharY - 23,
			gameCharX - 26, gameCharY );

	strokeWeight(3); // Handle
	stroke(104,44,11);
	line(gameCharX - 24, gameCharY - 25,
			gameCharX - 14, gameCharY - 22)
}

function drawFightingRight() {
	push();
	// Face
	fill(222,184,135);
	rect(gameCharX - 11, gameCharY - 75, 22, 30, 8);

	// Helmet
	fill(128);
	rect(gameCharX - 10, gameCharY - 75, 22, 10, 2);
	rect(gameCharX - 11, gameCharY - 75, 17, 30, 2);

	// Eyes
	fill(255);
	rect(gameCharX + 9, gameCharY - 62, 2, 5);

	fill(0); // Pupil
	ellipse(gameCharX  + 10, gameCharY - 59.5, 2, 3);

	// Mouth
	rect(gameCharX + 7, gameCharY - 51, 4, 2, 1);
	
	// Body   
	fill(160,82,45);
	rect(gameCharX - 9, gameCharY - 45, 18, 35, 2);
	
	// Cape
	fill(60,80,25);
	rect(gameCharX - 9, gameCharY - 45, 15, 35, 2);		
	rect(gameCharX - 9, gameCharY - 45, 18,  3, 2);	

	// Belt  
	fill(0);
    rect(gameCharX + 4, gameCharY - 25, 5, 2);

	fill(255,215,0); // Clip  
	rect(gameCharX + 7.5, gameCharY - 25, 1.5, 2);  	 

	// Cape Clip
	fill(255,215,0);
	rect(gameCharX + 6, gameCharY - 44, 3, 2);

	// Arm
	fill(222,184,135);
	triangle(gameCharX + 1, gameCharY - 45,
			 gameCharX + 9, gameCharY - 27,
			 gameCharX + 16,    gameCharY - 30);
			
	fill(160,82,45); // sleeve
	triangle(gameCharX + 1, gameCharY - 45,
			 gameCharX + 7, gameCharY - 30,
			 gameCharX + 15,     gameCharY - 32);			

	//Feet
	fill(0);
	rect(gameCharX - 6, gameCharY - 10, 6, 8, 2);
	rect(gameCharX + 1, gameCharY - 10, 6, 8, 2);

	// // Sword
	stroke(185);
	strokeWeight(5);
	line(gameCharX + 12,     gameCharY - 31,
		 gameCharX + 34, gameCharY - 40 );

	strokeWeight(3); // Handle	 
	stroke(104,44,11);
	line(gameCharX + 10, gameCharY - 27,
		 gameCharX + 12,    gameCharY - 36);
	pop();
}

function drawFightingLeft() {
	// Face
	fill(222,184,135);
	rect(gameCharX - 11, gameCharY - 75, 22, 30,8);

	// Helmet
	fill(128);
	rect(gameCharX - 12, gameCharY - 75, 22,10,2);
	rect(gameCharX - 6, gameCharY - 75, 17, 30,2);

	// Eyes
	fill(255);
	rect(gameCharX - 11, gameCharY - 62, 2, 5);

	fill(0); // Pupil
	ellipse(gameCharX  - 10, gameCharY - 59.5, 2, 3);

	// Mouth
	rect(gameCharX - 11, gameCharY - 51, 4, 2, 1);

	// Sword
	stroke(185);
	strokeWeight(5);
	line(gameCharX - 12, gameCharY - 37,
		gameCharX - 42, gameCharY - 42);

	stroke(104,44,11); // Handle	 
	rect(gameCharX - 10, gameCharY - 39, 5, 4);

	// Body
	noStroke();
	fill(160,82,45);
	rect(gameCharX - 9, gameCharY - 45, 18, 35, 2);

	// Cape
	fill(60,80,25);
	rect(gameCharX - 4, gameCharY - 45, 15, 35, 2);		
	rect(gameCharX - 9, gameCharY - 45, 18, 3);	
		
	// Belt
	fill(0);
	rect(gameCharX - 9, gameCharY - 25, 5, 2);

	fill(255,215,0); // Clip  
	rect(gameCharX -9 , gameCharY - 25, 1.5, 2);    

	// Cape Clip
	fill(255,215,0);
	rect(gameCharX - 9, gameCharY - 44, 3, 2);

	// Arm
	fill(222,184,135);
	triangle(gameCharX - 1, gameCharY - 45,
			gameCharX - 4, gameCharY - 23,
			gameCharX + 3, gameCharY - 23);
			
	fill(160,82,45); // sleeve
	triangle(gameCharX - 1, gameCharY - 45,
			gameCharX - 4, gameCharY - 26,
			gameCharX + 3, gameCharY - 26);			

	//Feet
	fill(0);
	rect(gameCharX - 4, gameCharY - 10, 6, 8,2);
	rect(gameCharX + 3, gameCharY - 10, 6, 8,2);
}

function Enemy(x, y, range, isDead, isRight, isLeft) {
	// variables
	this.x = x;
	this.y = y;
	this.range = range;
	this.isDead = isDead,
	this.isRight = isRight
	this.isLeft = isLeft
	this.currentX = x;
	this.inc = 1;

	this.update = function(){ // Checks the X position of the enemies
		this.currentX += this.inc;
		if(this.currentX >= this.x + this.range) { // Creates a range for the enemies
			this.isRight = false;
			this.isLeft = true;
			this.inc = -1.5;
		} else if(this.currentX < this.x) {
			this.isLeft = false;
			this.isRight = true
			this.inc = 1.5;
		} 	
}

	this.draw = function() { // Draw the enemy
		this.update();
		if(this.isLeft) {
			// Face
			noStroke();
			fill(65,85,65);
			rect(this.currentX - 11, this.y - 75, 22, 30,8);

			// Helmet
			fill(28);
			rect(this.currentX - 12, this.y - 75, 22,10,2);
			triangle(
				this.currentX - 10, this.y - 75, 
				this.currentX + 12, this.y - 75, 
				this.currentX + 12, this.y - 45, );

			// Eyes
			fill(100,0,0);
			rect(this.currentX - 11, this.y - 62, 2, 5);

			fill(220,220,0); // Pupil
			ellipse(this.currentX  - 10, this.y - 59.5, 2, 3);

			// Mouth
			rect(this.currentX - 10, this.y - 51, 4, 2);

			// Sword
			strokeWeight(5);
			stroke(175,20,20);
			line(this.currentX, this.y - 23,
				this.currentX - 22, this.y - 12);
			
			// Body
			noStroke();
			fill(0);
			rect(this.currentX - 9, this.y - 45, 18, 35, 2);
			
			// Cape
			fill(45,45,75);
			rect(this.currentX - 4, this.y - 45, 15, 35, 2);		
			rect(this.currentX - 9, this.y - 45, 18, 3);	
				
			// Belt
			fill(200);
			rect(this.currentX - 9, this.y - 25, 5, 2);
			fill(255,215,0); // Clip  
			rect(this.currentX -9 , this.y - 25, 1.5, 2);    

			// Arm
			fill(65,85,65);
			triangle(this.currentX - 1, this.y - 45,
					this.currentX - 4, this.y - 23,
					this.currentX + 3, this.y - 23);
					
			fill(0); // sleeve
			triangle(this.currentX - 1, this.y - 45,
					this.currentX - 4, this.y - 26,
					this.currentX + 3, this.y - 26);			

			//Feet
			fill(0);
			rect(this.currentX - random(5, 7), this.y - 10, 6, 8,2);
			rect(this.currentX + random(1, 3), this.y - 10, 6, 8,2);
		}
		if(this.isRight){
			// Face
			fill(65,85,65);
			rect(this.currentX - 11, this.y - 75, 22, 30, 8);

			// Helmet
			fill(28);
			rect(this.currentX - 11, this.y - 75, 22, 11, 2);
			triangle(this.currentX - 11, this.y - 70, 
				this.currentX + 11, this.y - 70, 
				this.currentX - 11, this.y - 45 );

			fill(255); // Helmet mark
			textSize(10);	
			text("X",this.currentX - 7, this.y - 62);	

			// Eyes
			fill(100,0,0);
			rect(this.currentX + 9, this.y - 62, 2, 5);

			fill(220,220,0); // Pupil
			ellipse(this.currentX  + 10, this.y - 59.5, 2, 3);

			// Mouth
			rect(this.currentX + 7, this.y - 50, 4, 2, 1);
			
			// Body
			fill(0);
			rect(this.currentX - 9, this.y - 45, 18, 35, 2);
			
			// Cape
			fill(45,45,75);
			rect(this.currentX - 9, this.y - 45, 15, 35, 2);		
			rect(this.currentX - 9, this.y - 45, 18,  3, 2);	

			// // Belt  
			fill(200);
			rect(this.currentX + 4, this.y - 25, 5, 2);
			
			// Arm
			fill(65,85,65);
			triangle(this.currentX + 1, this.y - 45, 
				this.currentX - 7, this.y - 23, 
				this.currentX ,    this.y - 23);
					
			fill(0); // sleeve
			triangle(this.currentX + 1, this.y - 45, 
				this.currentX - 7, this.y - 26, 
				this.currentX,     this.y - 26);			

			//Feet
			fill(0);
			rect(this.currentX - random(5, 7), this.y - 10, 6, 8, 2);
			rect(this.currentX + random(1, 3), this.y - 10, 6, 8, 2);

			// Sword
			stroke(175,20,20);
			strokeWeight(5);
			line(this.currentX, this.y - 23, 
				this.currentX + 22, this.y - 12 );

			strokeWeight(3); // Handle		
			stroke(139,69,19);
			line(this.currentX - 6, this.y - 20, 
				this.currentX ,    this.y - 29);
			noStroke();
		}
		if(this.isDead){ // Turn the enemy red wen it dies
			noStroke();
			fill(200,0,0,130);
			rect(this.currentX - 11, this.y - 75, 22, 30);
			rect(this.currentX - 9, this.y - 45, 18, 35);
		}
	}

	this.checkEnemyDead = function(gcX, gcY) { // Check if the enemy has die
		var fight = dist(this.currentX, this.y, gcX, gcY)
		if((fight <= 40 && fightingRight) || (fight <=40 && fightingLeft)) {
			this.isDead = true;
			if(!OrcSound.isPlaying()) { // Play the enemy dying sound
				OrcSound.play();
			}
		}
		if(this.isDead) { // Move the enemy out of the screen
			this.inc = 0;
			this.y += 3;
		}
	}
	this.checkContact = function(gcX, gcY) { // Check if the game character touch the enemy 
		var d = dist(gcX, gcY, this.currentX, this.y);
		if(d < 20){
			return true;
		}
	} 
	return false;
}
 
function checkCollectable(tCollectable) {
	// Collect the coin
	var d = dist(gameCharX, gameCharY, tCollectable.x, tCollectable.y,) <= 50
	if(!tCollectable.isFound && d) { 
			collectableSound.play();
		tCollectable.isFound = true; // collectable interaction
		gameScore += 1;
	}
	// Collects the Easter egg
	if(treasureChest.isFound  && !treasureChest.easterEgg && 
		treasureChest.x > gameCharX - 40) { 
		lives += 1;
		easterEggSound.play();
		treasureChest.easterEgg = true; // Easter Egg interaction
	}
}

function checkCanyon(tCanyon){
	// Falling down the canyon
	if((gameCharX > tCanyon.x + 15 &&
		gameCharX < tCanyon.x + tCanyon.width - 15 &&
		gameCharY >= floorY) || 
		gameCharX < - 150 && gameCharY >= floorY) {
		isPlummeting = true;
	}
}

function checkFlagpole() {
	//Check if the flagpole is reached
	if(gameCharX > flagPole.x) {
		flagPole.isReached = true
	}
	if(flagPole.isReached) { // Rase the flag and play the victory music
		backgroundSound.stop()
		flagPole.y = 200;
		isRight = false;
		frameCounter = 0; // Stops the game if the flagpole is reached
		fill(200);
		textSize(50); // Display text if flagpole is reached
		text("Level 1 Complete", flagPole.x - 130, 340); 
		if(!victorySound.isPlaying()) { // Play the end of course sound
			victorySound.play();
		}
	} 
}

function checkPlayerDie() {
	// Keep count of the game character lives 
	if(!gameChar_die && gameCharY >= floorY + 130 && lives > 0) {
			lives -= 1;
			gameChar_die = true; 
	} 
	if((gameChar_die && lives >= 1)) { // Restart the game if the lives are grater than 1
		startGame();
	}
	if(lives == 0 && gameChar_die) { // Display game over to the screen if lives = 0
		fill(200);
		textSize(50);
		text("Game Over", cameraX + 330, height/2);
		frameCounter = 0;
		backgroundSound.stop();
		if(!gameOverSound.isPlaying()) { // Play game over sound
			gameOverSound.play();
		} 
	}
}

function huDisplay() {
	// Collectable Score
	fill(255,215,0);
	ellipse( width - 54 + cameraX, 16, 12, 12);
	image(mjs, width - 57 + cameraX, 12, mjsSize - 11, mjsSize - 10);

	fill(255); // Display the X
	textSize(15);
	text('x '+ gameScore, width - 45 + cameraX, 21);
	
	// Draw the Lives Score
	fill(222,184,135); // Character face
	ellipse(width - 140 + cameraX, 17, 16, 16)

	// Helmet
	fill(128);
	rect(width - 147.5 + cameraX, 9, 15, 5, 5);
	rect(width - 148 + cameraX, 9, 3, 15, 5);
	rect(width - 135 + cameraX, 9, 3, 15,5);

	// Eyes
	fill(255);
	ellipse(width - 143 + cameraX, 18, 2, 4 );
	ellipse(width - 137 + cameraX, 18, 2, 4 );

	// Pupils
	push();
	stroke(0);
	strokeWeight(2);
	point(width - 137 + cameraX, 18);
	point(width - 143 + cameraX, 18);

	// Mouth
	strokeWeight(1);
	line(width - 141 + cameraX, 22, 
		width - 139 + cameraX, 22);

	// Draw the easter egg wen collected
	if(treasureChest.easterEgg){
		fill(255,255,0)
		ellipse(width - 180 + cameraX, 17, 16);
		fill(30,30,122);
		ellipse(width - 180 + cameraX, 17, 10);
	}
	pop();
	text('x '+ lives, width - 120 + cameraX, 21); // Display the X
}

=======
 
>>>>>>> master
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
<<<<<<< HEAD
=======

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
>>>>>>> master
