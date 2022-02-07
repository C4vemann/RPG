class AttackButton{
	constructor(text, style){
		this.element = this.init(text,style);
	}
	init(text,style){
		let main = document.createElement("button");
		main.className = style;
		main.innerText = text;

		main.onclick = () => {
			MyGame.players[MyGame.currentTurn].attack(MyGame.players[(MyGame.currentTurn + 1)%MyGame.playerLimit]);
			MyGame.setCurrentTurn();
			
		};

		return main;
	}
}