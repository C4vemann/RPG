class OutcomeScreen{
	constructor(){
		this.header = new OutcomeHeader();
		this.body = new OutcomeBody();

		this.element = this.init(this.header,this.body);
	}
 
	init(header,body){
		let main = document.createElement("div");
		main.id = "three";
		main.className = "box";
		main.style = "display:none;";

		main.appendChild(header.element);
		main.appendChild(body.element);

		return main;
	}
	
	changeHeaderText(x){
		this.header.changeHeaderText(x);
	}

	addOutcomeCards(players){
		this.changeHeaderText("Player 1 Winner");
		for(let player of players){
			this.body.addPlayer(player);
		}
	}

	removeOutcomeCards(players){
		for(let player of players){
			this.body.removePlayerCard(player);
		}
	}


	initBody(){
		let main = document.createElement("div");
		main.className = "outcome-body";
			
		return main;
	}

}