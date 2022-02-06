class OutcomeCard{
	constructor(player){
		this.element = this.init(player);
	}

	init(player){
		let main = document.createElement("div");
		main.id = player.name;
		main.className = "outcome-card";

		let text = document.createElement("h1");
		text.innerText = player.name;
		main.appendChild(text);

		text = document.createElement("h2");
		text.innerText = "Hits: " + player.hits + "/" + (player.hits + player.misses);
		main.appendChild(text);

		text = document.createElement("h2");
		text.innerText = "Misses: " + player.misses + "/" + (player.hits + player.misses);
		main.appendChild(text);

		return main;
	}

	remove(){
		this.element = null;
	}
}