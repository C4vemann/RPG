class Image{
	constructor(src, style){
		this.element = this.init(src,style);
	}

	init(src,style){
		let main = document.createElement("img");
		main.className = style;

		if(src == null){
			main.src = "";
		} else{
			main.src = src;
		}
		
		return main;
	}

	changeSource(src){
		this.element.src = src;
	}
}