class CharacterSelection{
	
	static players = new Array();
	static playerLimit = 2;

	constructor(characters){
		this.element = this.init(characters);
	}
	
	init(characters){
		let output = document.createElement("div");
		output.id = "characterSelection";
		output.className = "box";
		output.style = "display:block;";

		output.appendChild(this.initHeader());
		output.appendChild(this.initBody());

		return output;
	}

	initHeader(){
		let header = document.createElement("div");
		header.className = "character-selection-header";
		
		let el = document.createElement("h1");
		el.id = "character-selection-header-text";
		el.innerText = "Choose Player 1";
		
		header.appendChild(el);

		return header;
	}

	initBody(){
		let body = document.createElement("div");
		body.className = "character-selection-body";

		for(let c of characters){
			body.appendChild(this.createOption(c.name,c.image));
		}
		
		return body;
	}

	createOption(x,y){
		
		let card = document.createElement("div");
		card.id = x;
		card.className = "playerCard";

		card.addEventListener("click", () => {
			console.log(CharacterSelection.players.length);
			if(CharacterSelection.players.length != CharacterSelection.playerLimit){
				
				console.log(this.getElementsByClassName("player-name")[0].innerText);

				//CharacterSelection.players.push(new Player(Player.lookup(this.innerText));


				//CharacterSelection.players.push(new Player(lookup(document.getElementById("player1Name").innerText)));
				document.getElementById("character-selection-header-text").innerText = "Choose Player " + (CharacterSelection.players.length + 1);
				
				if(CharacterSelection.players.length == CharacterSelection.playerLimit){
					CharacterSelection.nextPart(players);
				}
			}
		});

		let el = document.createElement("h1");
		el.className = "player-name";
		el.innerText = x;
		card.appendChild(el);

		el = document.createElement("img");
		el.className = "player-pic";
		el.src = y;
		el.alt = x;
		card.appendChild(el);

		
		
		return card;
	}

	/*document.getElementsByClassName("playerCard")[0].addEventListener("click", () => {
		if(players.length != playerLimit){
			players.push(new Player(Player.lookup(document.getElementById("player1Name").innerText)));
			document.getElementById("character-selection-header-text").innerText = "Choose Player " + (players.length + 1);
		if(players.length == playerLimit){
				nextPart(players);
			}
		}
		
	});*/
}