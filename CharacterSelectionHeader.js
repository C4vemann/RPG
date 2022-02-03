class CharacterSelectionHeader{
	constructor(x){
		this.text = new CharacterSelectionHeaderText(x);
		this.element = this.init(this.text);
		this.element.className = "character-selection-header"
	}

	init(x){
		let main = document.createElement("div");
		main.appendChild(x.element);
		return main;
	}

	changeHeaderText(x){
		this.text.changeHeaderText(x);
	}
}