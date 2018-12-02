var a=process.argv[2];
if(process.argv.length<3||a=='-help'||a=='-h'){
	help();
}else{
	console.log(eval(a));
	
}
function help(){
	console.log('usage help');
	
}
