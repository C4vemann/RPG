class AttackButton{
	constructor(text, style){
		this.element = this.init(text,style);
	}
	init(text,style){
		let main = document.createElement("button");
		main.className = style;
		main.innerText = text;

		main.onclick = () => {
			MyGame.players[0].attacking(MyGame.players[1]);
		};

		return main;
	}
}