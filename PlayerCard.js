class PlayerCard{

	constructor(name,health,pic){
		this.name = new Header(name, "player-name");
		this.health = new Header(health + " / 100", "player-health");
		this.image = new Image(pic, "player-pic");

		this.element = this.init(this.name,this.health,this.image);
	}

	init(name,health,image){
		let main = document.createElement("div");
		console.log(name);
		console.log(name.text.element.innerText);
		main.id = name.text.element.innerText;
		main.className = "player-box";

		main.appendChild(name.element);
		main.appendChild(health.element);
		main.appendChild(image.element);

		return main;
	}

	remove(){
		this.element = null;
	}

	updatePlayerCard(name,health,src){
		this.changeId(name);
		this.changePlayerName(name);
		this.changePlayerHealth(health);
		this.changePlayerImage(src);
	}

	changeId(name){
		console.log(this.element.id);
		this.element.id = name;
	}

	changePlayerName(name){
		this.name.changeText(name);
	}

	changePlayerHealth(health){
		this.health.changeText(health + " / 100");
	}

	changePlayerImage(src){
		this.image.changeSource(src);
	}
}