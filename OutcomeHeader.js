class OutcomeHeader{
	constructor(x){
		this.text = new OutcomeHeaderText(x);
		this.element = this.init(this.text);
		this.element.className = "outcome-header";
	}

	init(x){
		let main = document.createElement("div");
		main.appendChild(x.element);



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

	changeHeaderText(x){
		this.text.changeHeaderText(x);
	}
}