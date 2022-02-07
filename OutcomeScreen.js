class OutcomeScreen{
	constructor(){
		this.header = new Header("", "outcome-header");
		this.subheader = new OutcomeSubHeader();
		this.body = new OutcomeBody();

		this.element = this.init(this.header,this.subheader,this.body);
	}
 
	init(header,subheader,body){
		let main = document.createElement("div");
		main.id = "outcome-screen";
		main.className = "fill-container";
		main.style = "display:none;";

		main.appendChild(header.element);
		main.appendChild(subheader.element);
		main.appendChild(body.element);

		return main;
	}
	
	changeHeaderText(x){
		this.header.changeText(x);
	}

	addOutcomeCards(players){
		for(let player of players){
			this.body.addOutcomeCard(player);
		}
	}

	removeOutcomeCards(players){
		for(let player of players){
			this.body.removeOutcomeCard(player);
		}
	}

	show(){
		this.element.style = "display:flex;";
	}

	hide(){
		this.element.style = "display:none;";
	}
}