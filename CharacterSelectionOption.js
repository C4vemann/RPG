class CharacterSelectionOption{
	constructor(x,y){
		this.element = this.init(x,y);
	}

	init(x,y){
		
		let card = document.createElement("div");
		card.id = x;
		card.className = "player-card";

		card.onclick = () => {
			if(MyGame.playersCount != MyGame.playerLimit){
				console.log(this.id);
				MyGame.players[MyGame.playerCount] = new Player(Player.lookup(this.element.id,characters));
				MyGame.playerCount++;
				if(MyGame.playerCount == MyGame.playerLimit){
					MyGame.stateArray.changeToStateByIndex(2);
					MyGame.stateArray.states[MyGame.stateArray.current].screen.updatePlayer1Card(MyGame.players[0].name,MyGame.players[0].health,MyGame.players[0].pic);
					MyGame.stateArray.states[MyGame.stateArray.current].screen.updatePlayer2Card(MyGame.players[1].name,MyGame.players[1].health,MyGame.players[1].pic);
				} else{
					MyGame.stateArray.states[MyGame.stateArray.current].screen.changeHeaderText("Choose Player " + (MyGame.playerCount + 1));
				}
			}
		};

		let el = document.createElement("h1");
		el.className = "player-name";
		el.innerText = x;
		card.appendChild(el);

		el = document.createElement("img");
		el.className = "player-pic";
		el.src = y;
		el.alt = x;
		card.appendChild(el);
		
		return card;
	}

	remove(){
		this.element = null;
	}

}