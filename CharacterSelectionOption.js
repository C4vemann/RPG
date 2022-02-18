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