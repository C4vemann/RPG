class AttackScreen{

	constructor(){
		this.header = new Header("", "attack-header");
		this.subheader = new Header("TURN: Player 1", "attack-sub-header");
		this.body = new AttackBody();
		this.footer = new AttackFooter();

		this.element = this.init(this.header, this.subheader, this.body, this.footer);
	}

	init(header,subheader,body,footer){
		let main = document.createElement("div");
		main.id = "attack-screen";
		main.className = "fill-container";
		main.style = "display:none;";

		main.appendChild(header.element);
		main.appendChild(subheader.element);
		main.appendChild(body.element);
		main.appendChild(footer.element);
		
		return main;
	}

	changeHeaderText(x){
		this.header.changeText(x);
	}

	changeSubHeaderText(x){
		this.subheader.changeText(x);
	}

	addPlayerCards(players){
		for(let player of players){
			this.body.addPlayer(player);
		}
	}
	removePlayerCards(players){
		for(let player of players){
			this.body.removePlayerCard(player);
		}
	}

	show(){
		this.element.style = "display:flex;";
	}

	hide(){
		this.element.style = "display:none;";
	}

	updatePlayer1Card(name,health,pic){
		this.body.updatePlayer1Card(name,health,pic);
	}

	updatePlayer2Card(name,health,pic){
		this.body.updatePlayer2Card(name,health,pic);
	}
}