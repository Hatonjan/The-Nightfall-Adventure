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