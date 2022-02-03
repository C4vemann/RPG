class AttackBody{
	constructor(){
		this.element = this.init();
	}

	init(){
		let main = document.createElement("div");
		main.id = "player-wrapper";

		return main;
	}

	addPlayer(x){
		this.element.appendChild(x.element);
	}

	removePlayers(){
		for(var i = this.element.childNodes.length-1; i >= 0 ; i--){
			console.log(this.element);
		}
		/*for(let childnode of this.element.childNodes){
			 console.log(this.element.childNodes);
			childnode.remove();
		}*/
	}

}