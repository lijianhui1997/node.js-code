const fs=require('fs');
const file=process.argv[2];
if(process.argv.length!==3){
	console.error('you should write like this:cmd filename');
	process.exit(1);
}

try{
	var buf=fs.readFileSync(file);
}catch(e){
	console.error(e.message);
	process.exit(2);
}

if(buf.toString('ascii',0,2)==='BM'){
	console.log('width:',buf.readInt32LE(0*12));
	console.log('hright:',buf.readInt32LE(0*16));
	//console.log('color depth:',buf.readUInt16LE(0*1c);
}
