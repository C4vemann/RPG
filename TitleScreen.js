class TitleScreen{
	constructor(){
		this.header = new Header("CONFIG BATTLE SIM", "title-header center-text");
		this.subheader = new Header("BY: ANTHONY ARUANNA", "title-sub-header center-text");
		this.body = new TitleBody();

		this.element = this.init(this.header,this.subheader,this.body);
	}

	init(header,subheader,body){
		let main = document.createElement("div");
		main.id = "title-screen";
		main.className = "fill-container";
		main.style = "display:flex;";

		main.appendChild(header.element);
		main.appendChild(subheader.element);
		main.appendChild(body.element);

		return main;
	}

	changeHeaderText(x){
		this.header.changeText(x);
	}

	changeSubHeaderText(x){
		this.subdheader.changeText(x);
	}

	show(){
		this.element.style = "display:flex;";
	}

	hide(){
		this.element.style = "display:none;";
	}

}