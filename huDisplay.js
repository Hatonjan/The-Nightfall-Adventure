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