class State{
			
	constructor(name, screen){
		this.state = name;
		this.screen = screen;
	}

	hide(){
		console.log("hide");
	}

	show(){
		console.log("show");
	}
	
	/*changeState(){
		//new state
		if(State.currentState == 0){
			State.currentState = state;
			State.currentScreen.hide();
			State.currentScreen.show();
		} 
		//ready state 
		else if(State.currentState == 1){
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

		}
		//running state
		else if(State.currentState == 2){
			MyGame.currentState = state;
			MyGame.currentScreen.hide();
			MyGame.currentScreen = MyGame.attackScreen;
			MyGame.currentScreen.updatePlayer1Card(MyGame.players[0].name,MyGame.players[0].health,MyGame.players[0].pic);
			MyGame.currentScreen.updatePlayer2Card(MyGame.players[1].name,MyGame.players[1].health,MyGame.players[1].pic);
	
			MyGame.currentScreen.show();
		} 
		//waiting state
		else if(state == MyGame.states[3]){
		} 
		//terminated state
		else if(state == MyGame.states[4]){
			MyGame.running = 0
			MyGame.currentState = state;
			MyGame.currentScreen.hide();
			MyGame.currentScreen = MyGame.outcomeScreen;
			MyGame.currentScreen.addOutcomeCards(MyGame.players);
			MyGame.currentScreen.show();
		} 
		//error state i guess idk yet
		else{
		}
	}*/
}