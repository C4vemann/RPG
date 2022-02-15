class StateArray{
	constructor(){
		this.states = [];
		this.top = 0;
	}
	addState(state){
		this.states[this.top] = state;
		this.top++;
	}
	removeStateByIndex(index){
		if(this.top != 0){
			if(index >= this.top){
				console.error("INDEX SELECTED IS NOT POSSIBLE");
				return "INDEX SELECTED IS NOT POSSIBLE";
			} else {
				for(var i = index; i < this.top; i++){
					this.states[i] = this.states[i+1];
				}
				this.top--;
			}
			return "Index: " + index + " has been removed";	
		} else {
			console.log("THERE IS NOTHING IN THE ARRAY TO DELETE");
			return "THERE IS NOTHING IN THE ARRAY TO DELETE";
		}
	}

	removeStateByName(name){
		let pointer = 0;
		if(this.top != 0){
			for(var i = 0; i <= this.top; i++){
				if(i == this.top){
					console.error("NAME SELECTED IS NOT POSSIBLE");
					return "NAME SELECTED IS NOT POSSIBLE";
				}
				if(name == this.states[i]){
					pointer = i;
					break;
				}
			}

			for(var i = pointer; i < this.top; i++){
				this.states[i] = this.states[i+1];
			}
			this.top--;
			return "Name: " + name + " has been removed";
		} else {
			console.log("THERE IS NOTHING IN THE ARRAY TO DELETE");
			return "THERE IS NOTHING IN THE ARRAY TO DELETE";
		}
	}

	print(){
		for(var i = 0; i < this.top; i++){
			console.log(this.states[i]);
		}
	}
}