class CharacterSelectionScreen{

	constructor(characters){
		this.header = new CharacterSelectionHeader("Choose Player 1");
		this.body = new CharacterSelectionBody(characters);

		this.element = this.init(this.header, this.body);
	}
	
	init(header,body){
		let main = document.createElement("div");
		main.id = "characterSelection";
		main.className = "box";

		//use this to display element
		main.style = "display:block;";



		main.appendChild(header.element);

		main.appendChild(body.element);

		return main;
	}

	changeHeaderText(x){
		this.header.changeHeaderText(x);
	}

	addCharacterOption(x,y){
		this.body.addCharacterCard(x,y);
	}

	removeCharacterOption(x){
		this.body.removeCharacterCard(x);
	}

}
