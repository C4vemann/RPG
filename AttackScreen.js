class AttackScreen{

	static attackScreenLock = 0;

	constructor(){
		this.header = new CharacterSelectionHeader();
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

	addPlayerToField(x){
		this.body.addPlayer(x);
	}
	setPlayers(players){

		this.changeHeaderText("TURN: " + players[0].name);
		this.addPlayerToField(players[0]);
		this.addPlayerToField(players[1]);
	}

	removePlayerCards(){
		this.body = new AttackBody();
	}



}