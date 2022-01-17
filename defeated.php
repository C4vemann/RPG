<!DOCTYPE>
<html>
	<head>
		<style>
			*{
				margin: 0;
				padding: 0;
			}
			#mainScene{
				display: flex;
				justify-content: space-around;
				border: 1px solid black;
			}
			#options{
				display: flex;
				justify-content: space-around;
				border: 1px solid black;
			}
			.player-box{
				height: 400px;
				width: 300px;
				border: 1px solid black;
				text-align: center;
			}
			.player-box h1{
			}
			#attack-button{
				font-size: 32px;
				border: 1px solid black;
				background: black;
				color: white;
			}
			#header{
				text-align: center;
				border: 1px solid black;
			}
		</style>
	</head>
	<body>
		<div id="header">
			<h1 id="header-text"></h1>
		</div>
		<div id="mainScene">
			<div id="player1" class="player-box">
				<h1 id="player1Name" class="player-name"></h1>
				<h2 id="player1Health" class="player-health"></h2>
				<h2 id="player1Attack" class="player-attack"></h2>
				<img id="player1pic" class="player-pic" src=""/>
			</div>
			<div id="player2" class="player-box">
				<h1 id="player2Name" class="player-name"></h1>
				<h2 id="player2Health" class="player-health"></h2>
				<h2 id="player2Attack" class="player-attack"></h2>
				<img id="player2pic" class="player-pic" src=""/>
			</div>
		</div>
		<div id="options">
			<button id="attack-button" onclick="attack()">ATTACK</button>
		</div>

		<script>
			window.onload = () =>{
				setScene();
			}
			document.getElementById("attack-button").onclick = () => {
				attack(player1,player2);
				setScene();
			}
			function setScene(){
				setBanner("BATTLE");
				setPlayer(document.getElementById("player1"),player1);
				setPlayer(document.getElementById("player2"),player2);
			}
			function setBanner(text){
				document.getElementById("header-text").innerText = text;
			}
			function setPlayer(place, player){
				place.getElementsByClassName("player-name")[0].innerText = player.name;
				place.getElementsByClassName("player-health")[0].innerText = "Health:" + player.health + "/" + player.maxHealth;
				place.getElementsByClassName("player-attack")[0].innerText = "Attack: " + player.attack + "/" + player.attack;
				if(player.health > 50){
					place.getElementsByClassName("player-pic")[0].src = "./full_health.png";
				}
				if(player.health <= 50 && player.health > 0){
					place.getElementsByClassName("player-pic")[0].src = "./half_health.png";
				}
				if(player.health == 0){
					place.getElementsByClassName("player-pic")[0].src = "./empty_health.png";
				}

			}
			var player1 = {
				name:"Anthony Aruanna",
				health: 100,
				maxHealth:100,
				attack: 10
			}
			var player2 = {
				name:"Joseph Aruanna",
				health: 100,
				maxHealth:100,
				attack: 10
			}
			function attack(p1, p2){
				p2.health = p2.health - p1.attack;
			}
		</script>
	</body>
</html>