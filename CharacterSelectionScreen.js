class CharacterSelectionScreen{

	constructor(characters){
		this.element = this.init(characters);
	}
	
	init(characters){
		let output = document.createElement("div");
		output.id = "characterSelection";
		output.className = "box";
		output.style = "display:none;";

		output.appendChild(this.initHeader());
		output.appendChild(this.initBody());

		return output;
	}

	initHeader(){
		let header = document.createElement("div");
		header.className = "character-selection-header";
		
		let el = document.createElement("h1");
		el.id = "character-selection-header-text";
		el.innerText = "Choose Player 1";
		
		header.appendChild(el);

		return header;
	}

	initBody(){
		let body = document.createElement("div");
		body.className = "character-selection-body";

		for(let c of characters){
			body.appendChild(new CharacterSelectionOption(c.name,c.image).element);
		}
		
		return body;
	}

}