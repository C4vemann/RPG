class AttackBody{
	constructor(){
		this.element = this.init(MyGame.players);
	}

	init(players){

		let main = document.createElement("div");
		main.id = "player-wrapper";

		for(let player of players){
			console.log(player);
			main.appendChild(player.element);
		}

		return main;
	}

	addPlayer(player){
		this.element.appendChild(new PlayerCard(player.name, player.pic, player.health).element);
	}

	removePlayerCard(x){
		for(let childnode of this.element.childNodes){
			if(childnode.id == x.name){
				childnode.remove();
			}
		}
	}

}