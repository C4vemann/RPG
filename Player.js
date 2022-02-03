class Player{
	constructor(player){
		this.name = player.name;
		this.pic = player.image;

		this.health = 100;

		this.hits = 0;
		this.misses = 0;
		this.maxHit = 0;
		this.minHit = 0;

		this.element = this.init(player);
	}

	attacking(player){
		player.health = player.health - 100;
		this.hits++;

		if(player.health <= 0){
			MyGame.changeState("TERMINATED");
		} 

		
	}

	init(player){
		let main = document.createElement("div");
		main.className = "player-box";

		let text = document.createElement("h1");
		text.className = "player-name";
		text.innerText = player.name;
		main.appendChild(text);

		text = document.createElement("h2");
		text.className = "player-health";
		text.innerText = this.health + "/ 100";
		main.appendChild(text);

		text = document.createElement("img");
		text.className = "player-pic";
		text.src = player.image;
		main.appendChild(text);

		return main;
	}

	updateCard(){
		console.log(this);
	}

	static lookup(c,chs){
		for(let char of chs){
			if(char.name == c){
				return char;
			}
		}
	};

}