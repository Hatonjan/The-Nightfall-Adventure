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