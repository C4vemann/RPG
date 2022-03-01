//states = NEW, READY, RUNNING, WAITING, TERMINATED

class MyGame{

	static stateArray;

	static currentRound;
	static currentTurn;

	static players;
	static playerCount;
	static playerLimit;

	static interval;
	static running;

	constructor(){
		MyGame.players = [];
		MyGame.playerCount = 0;
		MyGame.playerLimit = 2;

		MyGame.stateArray = new StateArray();
		MyGame.stateArray.addState("NEW",new TitleScreen());
		MyGame.stateArray.addState("READY",new CharacterSelectionScreen(characters));
		MyGame.stateArray.addState("RUNNING",new AttackScreen());
		MyGame.stateArray.addState("WAITING",new PauseScreen());
		MyGame.stateArray.addState("TERMINATED",new OutcomeScreen());

		MyGame.running = 0;

		MyGame.currentRound = 0;
		MyGame.currentTurn = 0;

		this.element = this.init(MyGame.stateArray);
	}

	init(stateArray){
		var main = document.createElement("div");
		main.id = "game-wrapper";

		for(let state of stateArray.states){
			main.appendChild(state.screen.element);
		}
		
		return main;
	}

	/*static changeState(state){
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
	*/
	static setCurrentTurn(){
		MyGame.currentRound++;
		MyGame.currentTurn = MyGame.currentRound%MyGame.playerLimit;
		MyGame.stateArray.states[MyGame.stateArray.current].screen.changeSubHeaderText("TURN: Player " + (MyGame.currentTurn + 1));
		MyGame.stateArray.states[MyGame.stateArray.current].screen.updatePlayer1Card(MyGame.players[0].name,MyGame.players[0].health,MyGame.players[0].pic);
		MyGame.stateArray.states[MyGame.stateArray.current].screen.updatePlayer2Card(MyGame.players[1].name,MyGame.players[1].health,MyGame.players[1].pic);
	}


}