var EventEmitter=require('event').EventEmitter;
function Dog(name,energy){
	this.name=name;//����ǹ�����
	var _name=name;//�����˽�е�
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