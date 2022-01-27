class CharacterSelection{
	constructor(characters){
		this.element = this.createCharacterSelection(characters);
	}
	
	createCharacterSelection(characters){
		let output = document.createElement("div");
		output.id = "characterSelection";
		output.class = "box";
		output.style = "display:none;";

		output.appendChild(this.createCharacterSelectionHeader());
		output.appendChild(this.createCharacterSelectionBody());

		return output;
	}
	createCharacterSelectionBody(){
		let body = document.createElement("div");
		body.class = "character-selection-body";

		for(let c of characters){
			body.appendChild(this.createCharacterSelectionOption(c.name,c.image));
		}
		
		return body;
	}
	createCharacterSelectionHeader(){
		let header = document.createElement("div");
		header.class = "character-selection-header";
		
		let el = document.createElement("h1");
		el.id = "character-selection-header-text";
		el.innerText = "Choose Player 1";
		
		header.appendChild(el);

		return header;
	}

	createCharacterSelectionOption(x,y){
		let card = document.createElement("div");
		card.id = x;
		card.class = "playerCard";
		
		let el = document.createElement("h1");
		el.class = "player-name";
		card.appendChild(el);

		el = document.createElement("img");
		el.class = "player-pic";
		el.src = y;
		card.appendChild(el);

		
		
		return card;
	}
}