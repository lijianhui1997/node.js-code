var code=process.argv[2];
if(isNaN(Number(code))){
	console.log('命令行参数不正确');
	process.exit();
}
process.exit(code);
echo $?