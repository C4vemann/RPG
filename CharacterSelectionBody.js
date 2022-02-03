class CharacterSelectionBody{
	constructor(characters){
		this.element = this.init(characters);
	}

	init(characters){					
		let body = document.createElement("div");
		body.className = "character-selection-body";

		for(let character of characters){
			body.appendChild(new CharacterSelectionOption(character.name,character.image).element);
		}
		return body;
	}

	addCharacterCard(x,y){
		this.element.appendChild(new CharacterSelectionOption(x,y).element);
	}

	removeCharacterCard(x){
		for(let childnode of this.element.childNodes){
			if(childnode.id == x){
				childnode.remove();
			}
		}
	}
}