class Header{
	constructor(x, style){
		this.text = new Text(x);
		this.element = this.init(this.text);
		this.element.className = style;
	}

	init(x){
		let main = document.createElement("div");
		main.appendChild(x.element);
		return main;
	}

	changeText(x){
		this.text.changeText(x);
	}
}