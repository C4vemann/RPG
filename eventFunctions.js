	document.getElementById("playAgainButton").addEventListener("click", () => {
		players = new Array();
		document.getElementById("character-selection-header-text").innerText = "Choose Player " + (players.length + 1);
		outcomeScreen.style.display = "none";
		characterSelection.style.display = "block";
	});

	document.getElementById("play").addEventListener("click", () => {
		title.style.display = "none";
		characterSelection.style.display = "block";
	});

	document.getElementById("attack-button").onclick = () => {
		//attack(players[0],players[1]);
		players[0].attacking(players[1]);

		setPlayers(players);
	};

	document.getElementsByClassName("playerCard")[0].addEventListener("click", () => {
		if(players.length != playerLimit){
			players.push(new Player(lookup(document.getElementById("player1Name").innerText)));
			document.getElementById("character-selection-header-text").innerText = "Choose Player " + (players.length + 1);
		if(players.length == playerLimit){
				nextPart(players);
			}
		}
		
	});

	document.getElementsByClassName("playerCard")[1].addEventListener("click", () => {
		if(players.length != playerLimit){
			players.push(new Player(lookup(document.getElementById("player2Name").innerText)));
			document.getElementById("character-selection-header-text").innerText = "Choose Player " + (players.length + 1);	
			
			if(players.length == playerLimit){
				nextPart();
			}
		} 
	});

	document.getElementsByClassName("playerCard")[2].addEventListener("click", () => {
		if(players.length != playerLimit){
			players.push(new Player(lookup(document.getElementById("player3Name").innerText)));
			document.getElementById("character-selection-header-text").innerText = "Choose Player " + (players.length + 1);
			
			if(players.length == playerLimit){
				nextPart();
			}
		} 
	});

	document.getElementById("mainMenuButton").addEventListener("click", () => {
		players = new Array();
		document.getElementById("character-selection-header-text").innerText = "Choose Player " + (players.length + 1);

		outcomeScreen.style.display = "none";
		title.style.display = "flex";
	});