var user_name=process.argv[2];
var psw=process.argv[3];
if(process.argv.length!==3){
	console.error('you should write like this:cmd base64_string');
	process.exit(1);
}

const buf=Buffer.from(process.argv[2],'base64');
const info=buf.toString('utf8').split(':');

if(info.length!==2){
	console.error('Error message!');
	process.exit(2);
}
console.log('user name:%s\npassword:%s',info[0],info[1]);
