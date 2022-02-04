class Player{
	constructor(player){
		this.name = player.name;
		this.pic = player.image;

		this.health = 100;

		this.hits = 0;
		this.misses = 0;
		this.maxHit = 0;
		this.minHit = 0;

	}

	attacking(player){
		player.health = player.health - 100;
		this.hits++;

		if(player.health <= 0){
			MyGame.changeState("TERMINATED");
		} 
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