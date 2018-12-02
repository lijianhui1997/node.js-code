var user_name=process.argv[2];
var password=process.argv[3];

if(process.argv.length!==4){
	console.error('you should write as this:cmd uername password');
	process.exit(1);
}

console.log('user name:%s\npassword:%s',user_name,password);

const buf=Buffer.from(user_name+':'+password);
console.log('Base64:',buf.toString('Base64'));
