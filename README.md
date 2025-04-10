***The Nightfall Adventure***
The journey to return the light to the world.

**Project description**
The Nightfall Adventure is a video game developed as part of the Introduction to Programming class. It is intended to be both fun and challenging for the user. I have implemented everything I have learned in the class and a little extra to make it more visually appealing, such as the rotating collectables. That was a challenge, but I was able to complete what I had in mind.

**Table of content**
Global variables............2-63
preload()...................65-90
setup().....................92-97
startGame().................99-293
draw()......................295-381
cameraEffect()..............383-394
characterInteractions().....396-446
enemyInteractions().........448-462
titleScreen()...............464-487
titleScreenSound()..........489-494
drawGround()................496-510
drawMoon()..................512-520
drawStars().................522-537
drawMountains().............539-579
drawClouds()................581-606
drawRock()..................608-633
drawTrees().................635-670
createPlatforms()...........672-704
drawCollectable()...........706-775
drawCanyon()................777-787
drawFlagpole()..............789-835
drawTreasureChest().........837-873
Sing()......................875-904
drawJumpingLeft()...........906-971
drawJumpingRight()..........973-1043
drawWalkigLeft()............1045-1107
drawWalkingRight()..........1109-1175
drawJupingForwards()........1177-1282
drawFrontFacing()...........1284-1374
drawFightingRight().........1376-1445
drawFightingLeft()..........1446-1511
Enemy().....................1513-1696
checkCollectable()..........1698-1713
checkCanyon()...............1715-1723
checkFlagpole().............1725-1742
checkPlayerDie()............1744-1763
huDisplay().................1765-1811
keyPressed()................1813-1843
keyReleased()...............1845-1858

**Controls**
`a` Moves to the left
`d` Moves to the right
`w` Jumps

*I include a fighting mode to allow the game character to interact with enemies*
`Arrow left` Activates fighting mode to the left
`Arrow right` Activates fighting mode to the right
`Arrow left` + `a` Strike to the left
`Arrow right` + `d` Strike to the right


**References**
-p5.js references (2024). available at https://p5js.org/reference/
-Code Spell Checker Visual Studio Extension (2016). From streetsidesoftware.com

** Microsoft Copilot AI **
-I use Microsoft Copilot AI to supplement my learning process while working on my game project, verifying every 
 piece of information independently. Not a single line of this code was copied and pasted from any AI model.
 *Examples:
-I'm working with javascript and the p5.js library and I have this error in the console. "Uncaught ReferenceError: X is not defined"
 what can I do to correct the error?
-Is this the correct syntax for an if statement?
-I'm working with JavaScript and the p5.js library in my video game project, and I make my collectable rotate 
 but rotate too fast. How can I make it rotate slower?

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
