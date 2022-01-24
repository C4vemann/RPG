class Player{
	constructor(playerinfo){
		this.name = playerinfo.name;
		this.health = playerinfo.health;
		this.maxHealth = playerinfo.health;
		this.attack = playerinfo.attack;
	}

	attacking(player){
		player.health = player.health - this.attack;
	}
}