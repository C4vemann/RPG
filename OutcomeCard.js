class OutcomeCard{
	constructor(player){
		this.element = this.init(player);
	}

	init(player){
		console.log(player);
		let main = document.createElement("div");
		main.className = "outcome-body-elements";

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
}