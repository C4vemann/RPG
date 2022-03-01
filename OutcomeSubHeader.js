class OutcomeSubHeader{
	constructor(){
		this.element = this.init();
	}

	init(){
		let main = document.createElement("div");
		main.className = "outcome-subheader";

		main.appendChild(new PlayButton("Play Again?", "outcome-option-button").element);
		main.appendChild(new MainMenuButton("Main Menu", "outcome-option-button").element);

		return main;
	}
}