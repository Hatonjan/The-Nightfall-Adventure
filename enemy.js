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