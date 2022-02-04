class PlayerCard{
	constructor(name,pic,health){
		this.element = this.init(name,pic,health);
	}

	init(name,pic,health){
		let main = document.createElement("div");
		main.id = name;
		main.className = "player-box";

		let text = document.createElement("h1");
		text.className = "player-name";
		text.innerText = name;
		main.appendChild(text);

		text = document.createElement("h2");
		text.className = "player-health";
		text.innerText = health + "/ 100";
		main.appendChild(text);

		text = document.createElement("img");
		text.className = "player-pic";
		text.src = pic;
		main.appendChild(text);

		return main;
	}

	remove(){
		this.element = null;
	}
}