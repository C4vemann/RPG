class Player{
	constructor(playerinfo){
		this.name = playerinfo.name;
		this.health = playerinfo.health;
		this.maxHealth = playerinfo.health;
		this.attack = playerinfo.attack;
		this.pic = playerinfo.image;

		this.hits = 0;
		this.misses = 0;
	}

	attacking(player){
		if(this.attack > 0){
			if((player.health = player.health - this.attack) <= 0){
				outcome(this,player);
			}
			this.hits++;
		} else{
			this.misses++;
		}
	}
}