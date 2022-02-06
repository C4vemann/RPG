class CharacterSelectionScreen{

	constructor(characters){
		this.header = new Header("Choose Player 1", "character-selection-header");
		this.body = new CharacterSelectionBody(characters);

		this.element = this.init(this.header, this.body);
	}
	
	init(header,body){
		let main = document.createElement("div");
		main.id = "character-selection-screen";
		main.className = "fill-container";

		//use this to display element
		main.style = "display:none;";

		main.appendChild(header.element);

		main.appendChild(body.element);

		return main;
	}

	changeHeaderText(x){
		this.header.changeText(x);
	}

	addCharacterOption(x,y){
		this.body.addCharacterCard(x,y);
	}

	removeCharacterOption(x){
		this.body.removeCharacterCard(x);
	}

	show(){
		this.element.style = "display:flex;";
	}

	hide(){
		this.element.style = "display:none;";
	}

}