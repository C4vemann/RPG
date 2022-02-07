# RPG
DOCUMENTATION:

	I. Starts with the application file (i.e. the html file with the name of the most recent date)
		- Sets the foundation for the entire game
		- .html file that includes
			1. <head>
				* <meta> tags that set:
					a. charset
					b. cache option
					c. viewport
					d. title
					e. links to style sheets
			2. <body>
				* <script> tags that set:
					a. all objects that are included within the game
					b. outside data (i.e. .json files)
					c. the driver for the game and the linking between the game script and the html graphic rendering

		- loads the game
		- links the backend game code to the front end html graphics

	II. MyGame Script (i.e. MyGame.js)
		- sets global variables for the game to operate
			1. states array of strings
				* Describes the different states within the game. This game is technically a DFA, where a Regular Language can describe it with states.
					a. NEW: represents the title screen, because when the game first loads it creates a new game thus being the in the new state, however I also used this state to tell the game to change back to the title screen
					b. READY: represents the player selection screen, because by the time this screen appears all game elements should be loaded putting the game into the ready state, at this point we are waiting for user input and after thats finished then it would really be in the ready state, technically the game is already ready and could go to the attack state with 0 players if it wanted to but this would break the game due to no players being set
					c. RUNNING: represents the attack screen, because at this point the game has the ability to iterate over itself, it pumps up, basically in this state it continues to be in the attack state until something breaks that loop, I used the setInterval() javascript function to implement this
					d. WAITING: haven't done anything with this yet, however I plan on making it a pause screen, I don't know if this fits into CONFIG BATTLE SIM but I am leaving it in for now
					e. TERMINATED: represents the outcome screen, because after the running state has been broken it goes into the terminated state which kills process, 
			2. currentState string
				* stores the current state of the machine
			3. currentScreen object
			4. currentRound int
			5. currentTurn int
			6. players array of objects
			7. playerLimit int
			8. titleScreen object
			9. characterSelectionScreen object
			10. attackScreen object
			11. outcomeScreen object
			12. pauseScreen object
			13. interval
			14. running

		- sets MyGame object related methods
			1. constructor()
			2. init()
			3. changeState(state)
			4. setCurrentTurn()
