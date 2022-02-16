class StateArray{
	constructor(){
		this.states = [];
		this.top = 0;
		this.current = 0;
	}

	addState(state){
		this.states[this.top] = state;
		this.top++;
		return 1;
	}

	changeToStateByIndex(index){
		if(this.top != 0){
			this.states[this.current].hide();
			this.current = index;
			this.states[this.current].show();
			return 1;
		} else {
			return 0;
		}
	}

	changeToStateByName(name){
		if(this.top != 0){
			for(var i = 0; i <= this.top; i++){
				if(i == this.top){
					return 0;
				}
				if(this.states[i] == name){
					this.states[i].hide();
					this.current = i;
					this.states[this.current].show();
					return 1;
				}
			}
			return 1;
		} else{
			return 0;
		}
	}

	nextState(){
		if(this.current != this.top){
			this.current++;
			return 1;
		} else {
			return 0;
		}
	}

	previousState(){
		if(this.top != 0){
			this.current--;
			return 1;
		} else {
			return 0;
		}
	}

	replaceStateByIndex(index, state){
		if(this.top != 0){
			this.states[index] = state;	
			return 1;
		} else {
			return 0;
		}
	}

	replaceStateByName(name, state){
		if(this.top != 0){
			for(var i = 0; i <= this.top; i++){
				if(i == this.top){
					return 0;
				}
				if(this.states[i] == name){
					this.states[i] = state;
					return 1;
				}
			}
		} else {
			return 0;
		}
	}

	removeStateByIndex(index){
		if(this.top != 0){
			if(index >= this.top){
				return 0;
			} else {
				for(var i = index; i < this.top; i++){
					this.states[i] = this.states[i+1];
				}

				this.top--;
				return 1;
			}
		} else {
			return 0;
		}
	}

	removeStateByName(name){
		let gate = false;
		if(this.top != 0){
			for(var i = 0; i <= this.top; i++){
				if(i == this.top){
					return 0;
				}
				if(name == this.states[i]){
					gate = true;
				}
				if(gate){
					this.states[i] = this.states[i+1];				
				}
			}

			this.top--;
			return 1;
		} else {
			return 0;
		}
	}

	print(){
		for(var i = 0; i < this.top; i++){
			console.log(this.states[i]);
		}
	}
}