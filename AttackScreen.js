class AttackScreen{
	constructor(){
		this.element = this.init();
	}

	init(){
		let main = document.createElement("div");
		main.id = "two";
		main.className = "box";
		main.style = "display:none;";

		main.appendChild(this.initHeader());
		main.appendChild(this.initBody());
		
		return main;
	}

	initHeader(){
		let main = document.createElement("div");
		main.id = "player-wrapper";

		return main;
	}

	initBody(){
		let main = document.createElement("div");
		main.id = "options";

		let sub = document.createElement("button");
		sub.id = "attack-button";
		sub.className = "options-button";
		sub.innerText = "ATTACK";
		sub.onclick = () => {
			MyGame.players[0].attacking(MyGame.players[1]);
		};

		main.appendChild(sub);

		sub = document.createElement("button");
		sub.id = "items-button";
		sub.className = "options-button";
		sub.innerText = "ITEMS";

		main.appendChild(sub);

		sub = document.createElement("button");
		sub.id = "run-button";
		sub.className = "options-button";
		sub.innerText = "RUN";

		main.appendChild(sub);

		sub = document.createElement("button");
		sub.id = "pause-button";
		sub.className = "options-button";
		sub.innerText = "PAUSE";
		sub.onclick = () => {
			console.log("Coming Soon");
			MyGame.changeState("WAITING");
		};

		main.appendChild(sub);


		return main;
	}

	setPlayers(players){
		this.element.firstChild.appendChild(new PlayerCard(MyGame.players[0]).element);
		this.element.firstChild.appendChild(new PlayerCard(MyGame.players[1]).element);
	}

	resetPlayers(){
		while(this.element.firstChild.firstChild){
			this.element.firstChild.firstChild.remove();
		}
	}

}