var code=process.argv[2];
//process.stdout.write(`exit_code:${code}\n`);
if(process.argv.length<3||isNaN(Number(code))){
	console.log('ERROR');
	process.exit(1);
}else{
	console.log('exit_code:',code);
	process.exit(code);
}
