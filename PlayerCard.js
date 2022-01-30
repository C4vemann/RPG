class PlayerCard{
	constructor(player){
		this.element = this.init(player);
	}

	init(player){
		console.log(player);
		let main = document.createElement("div");
		main.className = "player-box";

		let text = document.createElement("h1");
		text.className = "player-name";
		text.innerText = player.name;
		main.appendChild(text);

		text = document.createElement("h2");
		text.className = "player-health";
		text.innerText = player.health + "/" + player.maxHealth;
		main.appendChild(text);

		text = document.createElement("h2");
		text.className = "player-attack";
		text.innerText = player.attack;
		main.appendChild(text);

		text = document.createElement("img");
		text.className = "player-pic";
		text.src = player.pic;
		main.appendChild(text);

		return main;
	}

}