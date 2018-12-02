var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('hello',()=>{
	console.log('hello world!');
});
event.on('bye',()=>{
	console.log('goodbye');
})
 setInterval(()=>{
	event.emit('hello');
},1000);
 setTimeout(()=>{
	event.emit('bye');
},5000);

 
