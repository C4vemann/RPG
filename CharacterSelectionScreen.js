class CharacterSelectionScreen{

	constructor(characters){
		this.header = new CharacterSelectionHeader("!!!Choose Player 1");
		this.body = this.initBody(characters);

		this.element = this.init(this.header);
	}

	
	init(header){
		let main = document.createElement("div");
		main.id = "characterSelection";
		main.className = "box";

		//use this to display element
		main.style = "display:block;";



		main.appendChild(header.element);



		main.appendChild(this.initBody());

		return main;
	}

	/*initHeader(){
		let header = document.createElement("div");
		header.className = "character-selection-header";
		
		let el = document.createElement("h1");
		el.id = "character-selection-header-text";
		el.innerText = "Choose Player 1";
		
		header.appendChild(el);

		return header;
	}*/

	initBody(c){
		let body = document.createElement("div");
		body.className = "character-selection-body";

		for(let c of characters){
			body.appendChild(new CharacterSelectionOption(c.name,c.image).element);
		}
		
		return body;
	}

	changeHeaderText(x){
		this.header.changeHeaderText(x);
	}

}