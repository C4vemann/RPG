class Text{
	constructor(x){
		this.element = this.init(x);
	}
	init(x){
		let main = document.createElement("p");
		main.innerText = x;
		return main;
	}
	changeText(x){
		this.element.innerText = x;
	}
}