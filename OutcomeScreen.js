class OutcomeScreen{
	constructor(){
		this.element = this.init();
	}
 
	init(){
		let main = document.createElement("div");
		main.id = "three";
		main.className = "box";
		main.style = "display:none;";

		main.appendChild(this.initHeader());
		main.appendChild(this.initBody());

		return main;
	}

	initHeader(){
		let main = document.createElement("div");
		main.className = "outcome-header";

		let text = document.createElement("h1");
		text.id  = "outcome-header-text";

		main.appendChild(text);

		let sub = document.createElement("div");
		sub.id = "outcome-header-buttons";

		let button = document.createElement("button");
		button.id = "playAgainButton";
		button.className = "outcome-option-button";
		button.innerText = "Play Again";
		button.onclick = () => {
			MyGame.changeState("READY");
		};

		sub.appendChild(button);

		button = document.createElement("button");
		button.id = "mainMenuButton";
		button.className = "outcome-option-button";
		button.innerText = "Main Menu";
		button.onclick = () => {
			MyGame.changeState("NEW");
		};
		sub.appendChild(button);

		main.appendChild(sub);

		return main;
	}

	initBody(){
		let main = document.createElement("div");
		main.className = "outcome-body";
			
		return main;
	}

	setOutcome(){
		this.element.lastChild.appendChild(new OutcomeCard(MyGame.players[0]).element);
		this.element.lastChild.appendChild(new OutcomeCard(MyGame.players[1]).element);
	}

	resetOutcome(){
		while(this.element.lastChild.firstChild){
			this.element.lastChild.firstChild.remove();
		}
	}
}