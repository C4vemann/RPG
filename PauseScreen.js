class PauseScreen{
	constructor(){
		this.element = this.init();
	}

	init(){
		let main = document.createElement("div");
		main.id = "pause-screen";
		main.style = "display:none";

		let sub = document.createElement("div");
		sub.id = "pause-banner";

		let text = document.createElement("h1");
		text.innerText = "GAME PAUSED";

		sub.appendChild(text);

		main.appendChild(sub);

		return main;
	}
}