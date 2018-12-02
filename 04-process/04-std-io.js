var stdin=process.stdin;
var me={},i=1;
const msg=['Name','Email','qq','mobile'];
console.log(msg[0]+':');
stdin.on('data',(data)=>{
	me[msg[i-1]]=data.slice(0,data.length-1).toString('utf8');
	if(i==4){
		console.log(me);
		process.exit();
	}else{
		console.log(msg[i++]+':');
	}
	
});
stdin.on('end',()=>{
	console.log(me);
})
