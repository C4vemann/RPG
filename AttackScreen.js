class AttackScreen{

	static attackScreenLock = 0;

	constructor(){
		this.header = new AttackHeader();
		this.body = new AttackBody();
		this.footer = new AttackFooter();

		this.element = this.init(this.header, this.body, this.footer);
	}

	init(header,body,footer){
		let main = document.createElement("div");
		main.id = "two";
		main.className = "box";
		main.style = "display:none;";

		main.appendChild(header.element);
		main.appendChild(body.element);
		main.appendChild(footer.element);
		
		return main;
	}

	changeHeaderText(x){
		this.header.changeHeaderText(x);
	}

	addPlayerCards(players){
		this.changeHeaderText("TURN: Player 1");
		for(let player of players){
			this.body.addPlayer(player);
		}
	}
	removePlayerCards(players){
		for(let player of players){
			this.body.removePlayerCard(player);
		}
	}



}