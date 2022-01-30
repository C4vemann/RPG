//states = NEW, READY, RUNNING, WAITING, TERMINATED

class MyGame{

	static states = ["NEW","READY","RUNNING","WAITING","TERMINATED"];
	
	static currentState;
	static currentScreen;

	static players;
	static playerLimit;

	static titleScreen;
	static characterSelectionScreen;
	static attackScreen;
	static outcomeScreen;
	static pauseScreen;

	constructor(){
		MyGame.players = [];
		MyGame.playerLimit = 2;
		MyGame.currentState = MyGame.states[0];

		MyGame.titleScreen = new TitleScreen();
		MyGame.characterSelectionScreen = new CharacterSelectionScreen(characters);
		MyGame.attackScreen = new AttackScreen();
		MyGame.outcomeScreen = new OutcomeScreen();
		MyGame.pauseScreen = new PauseScreen();

		MyGame.currentScreen = MyGame.titleScreen;

		this.element = this.init();
	}

	init(){
		var main = document.createElement("div");
		main.className = "wrapper";

		main.appendChild(MyGame.titleScreen.element);
		main.appendChild(MyGame.characterSelectionScreen.element);
		main.appendChild(MyGame.attackScreen.element);
		main.appendChild(MyGame.outcomeScreen.element);
		main.appendChild(MyGame.pauseScreen.element);

		return main;
	}

	static changeState(state){
		console.log(MyGame.currentState);
		if(state == MyGame.states[0]){
			MyGame.currentState = state;
			MyGame.currentScreen.element.style = "display:none;";
			MyGame.currentScreen = MyGame.titleScreen;
			MyGame.currentScreen.element.style = "display:flex;";
		} else if(state == MyGame.states[1]){
			MyGame.players = [];
			MyGame.currentState = state;
			MyGame.currentScreen.element.style = "display:none;";
			MyGame.currentScreen = MyGame.characterSelectionScreen;
			MyGame.currentScreen.element.style = "display:block;";
		} else if(state == MyGame.states[2]){
			MyGame.currentState = state;
			MyGame.currentScreen.element.style = "display:none;";
			MyGame.currentScreen = MyGame.attackScreen;
			MyGame.currentScreen.resetPlayers();
			MyGame.currentScreen.setPlayers(MyGame.players);
			MyGame.currentScreen.element.style = "display:block;";
		} else if(state == MyGame.states[3]){
			/*MyGame.currentState = state;
			MyGame.currentScreen.element.style = "display:none;";
			MyGame.currentScreen = MyGame.pauseScreen;
			MyGame.currentScreen.element.style = "display:block;";*/
		} else if(state == MyGame.states[4]){
			MyGame.currentState = state;
			MyGame.currentScreen.element.style = "display:none;";
			MyGame.currentScreen = MyGame.outcomeScreen;
			MyGame.currentScreen.resetOutcome();
			MyGame.currentScreen.setOutcome(MyGame.players);
			MyGame.currentScreen.element.style = "display:block;";
		} else{
		}
		console.log(MyGame.currentState);
	}


}