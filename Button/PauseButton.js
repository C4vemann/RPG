class PauseButton{
	constructor(text, style){
		this.element = this.init(text,style);

	}
	init(text,style){
		let main = document.createElement("button");
		main.className = style;
		main.innerText = text;

		main.onclick = () => {
			if(MyGame.running == 0){
				MyGame.interval = setInterval(this.action,50);
				MyGame.running = 1;
			} else{
				MyGame.running = 0;
				clearInterval(MyGame.interval);
			}

		};

		return main;
	}

	action(){
		let rand = Math.random();
		console.log(rand);

		if(rand < .0001){
			MyGame.players[MyGame.currentTurn].end();
		} else if(rand >= .01 && rand <=.9){
			MyGame.players[MyGame.currentTurn].attack(MyGame.players[(MyGame.currentTurn + 1)%MyGame.playerLimit]);
		} else{
			MyGame.players[MyGame.currentTurn].heal();
		}
		MyGame.setCurrentTurn();
	}
}
