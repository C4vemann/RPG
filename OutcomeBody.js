class OutcomeBody{
	constructor(){
		this.element = this.init(MyGame.players);
	}

	init(players){

		let main = document.createElement("div");
		main.className = "outcome-body";

		for(let player of players){
			main.appendChild(player.element);
		}

		return main;
	}

	addOutcomeCard(player){
		this.element.appendChild(new OutcomeCard(player).element);
	}

	removeOutcomeCard(x){
		for(let childnode of this.element.childNodes){
			if(childnode.id == x.name){
				childnode.remove();
			}
		}
	}
}