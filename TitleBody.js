class TitleBody{
	constructor(){
		this.element = this.init();
	}

	init(){
		let main = document.createElement("div");
		main.className = "title-body center-text";

		main.appendChild(new PlayButton("PLAY", "title-option-button").element);
		main.appendChild(new OptionButton("OPTIONS", "title-option-button").element);

		return main;
	}
}