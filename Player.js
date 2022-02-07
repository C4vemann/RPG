class Player{
	constructor(player){
		this.name = player.name;
		this.pic = player.image;

		this.health = 100;

		this.hits = 0;
		this.misses = 0;
		this.maxHit = 0;
		this.potionsUsed = 0;

	}

	attack(player){
		let rand = Math.floor(Math.random() * 10);
		let hit = 1 * rand;

		if(hit > this.maxHit){
			this.maxHit = hit;
		}

		if(hit == 0){
			this.misses++;
		} else{
			player.health = player.health - hit;
			this.hits++;
		}



		if(player.health <= 0){
			MyGame.loser = player.name;
			MyGame.changeState("TERMINATED");
			MyGame.currentScreen.changeHeaderText(player.name + " DIED");
			if(MyGame.interval != null){
				clearInterval(MyGame.interval);
			}
		} 

		MyGame.attackScreen.changeHeaderText(this.name + " HIT " + player.name + " FOR " + hit + " DAMAGE");
	}

	heal(){
		this.health = this.health + 10;
		this.potionsUsed++;

		if(this.health >= 100){
			this.health = 100;
		}

		MyGame.attackScreen.changeHeaderText(this.name + " REVIVED 10 HEALTH");
		
	}

	end(){
		MyGame.changeState("TERMINATED");
		MyGame.currentScreen.changeHeaderText(this.name + " RAN");
		if(MyGame.interval != null){
			clearInterval(MyGame.interval);
		}

		MyGame.attackScreen.changeHeaderText(this.name + " RAN LIKE A COWARD");
	}

	static lookup(c,chs){
		for(let char of chs){
			if(char.name == c){
				return char;
			}
		}
	};

}