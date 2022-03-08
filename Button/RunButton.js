class RunButton{
	constructor(text, style){
		this.element = this.init(text,style);
	}
	init(text,style){
		let main = document.createElement("button");
		main.className = style;
		main.innerText = text;

		main.onclick = () => {
			MyGame.players[MyGame.currentTurn].end();
		};

		return main;
	}
}
