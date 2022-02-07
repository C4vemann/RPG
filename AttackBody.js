class AttackBody{
	constructor(){

		this.player1 = new PlayerCard();
		this.player2 = new PlayerCard();

		this.element = this.init(this.player1,this.player2);

	}

	init(player1,player2){

		let main = document.createElement("div");
		main.className = "attack-body";

		main.appendChild(player1.element);
		main.appendChild(player2.element);
		
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

	updatePlayer1Card(name,health,src){
		this.player1.updatePlayerCard(name,health,src);
	}

	updatePlayer2Card(name,health,src){
		this.player2.updatePlayerCard(name,health,src);
	}

}