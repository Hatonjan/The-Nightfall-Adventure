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