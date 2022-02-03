class CharacterSelectionOption{
	constructor(x,y){
		this.element = this.init(x,y);
	}

	init(x,y){
		
		let card = document.createElement("div");
		card.id = x;
		card.className = "playerCard";

		card.onclick = () => {
			if(MyGame.players.length != MyGame.playerLimit){
				MyGame.players[MyGame.players.length] = new Player(Player.lookup(this.element.id,characters));
				
				if(MyGame.players.length == MyGame.playerLimit){
					MyGame.changeState("RUNNING");
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