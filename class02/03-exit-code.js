var code=process.argv[2];
if(isNaN(Number(code))){
	console.log('�����в�������ȷ');
	process.exit();
}
process.exit(code);
echo $?