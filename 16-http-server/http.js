var http=require('http');
http.createServer((req,res)=>{
			console.log(req.headers);
console.log(req.headers.host);//在请求头对象里面找host主机
console.log(req.headers['user-agent']);//在请求头对象里面找代理
}).listen(8080);