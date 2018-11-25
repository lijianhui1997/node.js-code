var http=require('http');

var html='<!DOCTYPE html><html>'
http.createServer((req,res){
	if(req.url === '/' && req.method === 'GET'){
		console.log('${req.method}');
		console.log(res.headers);
		req.pipe(process.stdout);
	}else{
		res.statusCode = 404;
	    //res.setHeader('Content-Type', 'text/plain');
	    res.end('ERROR');
	}
}).listen(8080);





