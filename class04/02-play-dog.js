var EventEmitter=require('event').EventEmitter;
function Dog(name,energy){
	this.name=name;//这个是公开的
	var _name=name;//这个是私有的
	EventEmitter.call(this);

	var timer=global.ssetInterval(()=>{
		if(energy>0){
			emit(bark);
		energy--;
		}
		else{
		          global.clearInterval(timer);
		}
		
	},500)
}
Dog.prototype=EventEmitter.prototype