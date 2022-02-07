//states = NEW, READY, RUNNING, WAITING, TERMINATED

class MyGame{

	static states = ["NEW","READY","RUNNING","WAITING","TERMINATED"];
	
	static currentState;
	static currentScreen;

	static currentRound;
	static currentTurn;

	static players;
	static playerLimit;

	static titleScreen;
	static characterSelectionScreen;
	static attackScreen;
	static outcomeScreen;
	static pauseScreen;

	static interval;
	static running;

	constructor(){
		MyGame.players = [];
		MyGame.playerCount = 0;
		MyGame.playerLimit = 2;
		MyGame.currentState = MyGame.states[0];

		MyGame.titleScreen = new TitleScreen();
		MyGame.characterSelectionScreen = new CharacterSelectionScreen(characters);
		MyGame.attackScreen = new AttackScreen();
		MyGame.outcomeScreen = new OutcomeScreen();
		MyGame.pauseScreen = new PauseScreen();

		MyGame.currentScreen = MyGame.titleScreen;
		MyGame.running = 0;

		this.element = this.init();
	}

	init(){
		var main = document.createElement("div");
		main.id = "game-wrapper";

		main.appendChild(MyGame.titleScreen.element);
		main.appendChild(MyGame.characterSelectionScreen.element);
		main.appendChild(MyGame.attackScreen.element);
		main.appendChild(MyGame.outcomeScreen.element);
		main.appendChild(MyGame.pauseScreen.element);

		return main;
	}

	static changeState(state){
		if(state == MyGame.states[0]){
			MyGame.currentState = state;
			MyGame.currentScreen.hide();
			MyGame.currentScreen = MyGame.titleScreen;
			MyGame.currentScreen.show();
		} else if(state == MyGame.states[1]){
			MyGame.currentRound = 0;
			MyGame.currentTurn = MyGame.currentRound%MyGame.playerLimit;
			MyGame.attackScreen.changeHeaderText("");

			if(MyGame.playerCount != 0){
				MyGame.attackScreen.removePlayerCards(MyGame.players);
				MyGame.outcomeScreen.removeOutcomeCards(MyGame.players);
				MyGame.players = [];
				MyGame.playerCount = 0;
			}

			MyGame.currentState = state;
			MyGame.currentScreen.hide();
			MyGame.currentScreen = MyGame.characterSelectionScreen;

			MyGame.currentScreen.changeHeaderText("Choose Player " + (MyGame.playerCount+1));

			MyGame.currentScreen.show();

		} else if(state == MyGame.states[2]){
			MyGame.currentState = state;
			MyGame.currentScreen.hide();
			MyGame.currentScreen = MyGame.attackScreen;
			MyGame.currentScreen.updatePlayer1Card(MyGame.players[0].name,MyGame.players[0].health,MyGame.players[0].pic);
			MyGame.currentScreen.updatePlayer2Card(MyGame.players[1].name,MyGame.players[1].health,MyGame.players[1].pic);

			MyGame.currentScreen.show();
		} else if(state == MyGame.states[3]){

		} else if(state == MyGame.states[4]){
			MyGame.running = 0
			MyGame.currentState = state;
			MyGame.currentScreen.hide();
			MyGame.currentScreen = MyGame.outcomeScreen;
			MyGame.currentScreen.addOutcomeCards(MyGame.players);
			MyGame.currentScreen.show();
		} else{
		}
	}

	static setCurrentTurn(){
		MyGame.currentRound++;
		MyGame.currentTurn = MyGame.currentRound%MyGame.playerLimit;
		MyGame.attackScreen.changeSubHeaderText("TURN: Player " + (MyGame.currentTurn + 1));
		MyGame.attackScreen.updatePlayer1Card(MyGame.players[0].name,MyGame.players[0].health,MyGame.players[0].pic);
		MyGame.attackScreen.updatePlayer2Card(MyGame.players[1].name,MyGame.players[1].health,MyGame.players[1].pic);
	}


}