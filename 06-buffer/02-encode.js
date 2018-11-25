//从命令行参数获取登录网站的用户名和密码信息
const user_name=process.argv[2];
const password=process.argv[3];
console.log(user_name,password)
var str=user_name+':'+password;
var buf=new Buffer(str,'Base64');
console.log(buf);