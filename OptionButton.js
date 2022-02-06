class OptionButton{
	constructor(text, style){
		this.element = this.init(text,style);
	}
	init(text,style){
		let main = document.createElement("button");
		main.className = style;
		main.innerText = text;

		main.onclick = () => {
			console.error("Main Menu Options Button: Not Defined Yet");
		};

		return main;
	}
}