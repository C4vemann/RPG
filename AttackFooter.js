class AttackFooter{
	constructor(){
		this.element = this.init();
	}

	init(){
		let main = document.createElement("div");
		main.className = "attack-footer";

		main.appendChild(new AttackButton("ATTACK", "attack-option-button").element);

		main.appendChild(new ItemButton("ITEMS", "attack-option-button").element);

		main.appendChild(new RunButton("RUN", "attack-option-button").element);

		main.appendChild(new PauseButton("PAUSE", "attack-option-button").element);


		return main;
	}
}