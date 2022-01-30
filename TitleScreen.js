class TitleScreen{
	constructor(){
		this.element = this.init();
	}

	init(){
		let main = document.createElement("div");
		main.id = "one";
		main.className = "box";
		main.style = "display:flex;";

		main.appendChild(this.initHeader());
		main.appendChild(this.initBody());

		return main;
	}

	initHeader(){
		let main = document.createElement("div");
		main.className = "title-header";

		let sub = document.createElement("div");
		sub.id = "oneh1";
		sub.className = "innerbox";

		let text = document.createElement("p");
		text.innerText = "Config Battle Sim";

		sub.appendChild(text);
		main.appendChild(sub);

		sub = document.createElement("div");
		sub.id = "oneh2";
		sub.className = "innerbox";

		text = document.createElement("p");
		text.innerText = "By: Anthony Aruanna";

		sub.appendChild(text);
		main.appendChild(sub);

		return main;
	}

	initBody(){
		let main = document.createElement("div");
		main.className = "title-options";

		let sub = document.createElement("div");
		sub.id = "oneo1";
		sub.className = "innerbox";

		let button = document.createElement("button");
		button.id = "play";
		button.innerText = "PLAY";
		button.onclick = () => {
			MyGame.changeState("READY");
		};
		
		sub.appendChild(button);

		button = document.createElement("button");
		button.innerText = "OPTIONS";

		sub.appendChild(button);

		main.appendChild(sub);

		return main;
	}
}