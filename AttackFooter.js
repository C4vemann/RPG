class AttackFooter{
	constructor(){
		this.element = this.init();
	}

	init(){
		let main = document.createElement("div");
		main.id = "options";

		let sub = document.createElement("button");
		sub.id = "attack-button";
		sub.className = "options-button";
		sub.innerText = "ATTACK";
		sub.onclick = () => {
			MyGame.players[0].attacking(MyGame.players[1]);
		};

		main.appendChild(sub);

		sub = document.createElement("button");
		sub.id = "items-button";
		sub.className = "options-button";
		sub.innerText = "ITEMS";

		main.appendChild(sub);

		sub = document.createElement("button");
		sub.id = "run-button";
		sub.className = "options-button";
		sub.innerText = "RUN";

		main.appendChild(sub);

		sub = document.createElement("button");
		sub.id = "pause-button";
		sub.className = "options-button";
		sub.innerText = "PAUSE";
		sub.onclick = () => {
			console.log("Coming Soon");
			MyGame.changeState("WAITING");
		};

		main.appendChild(sub);


		return main;
	}
}