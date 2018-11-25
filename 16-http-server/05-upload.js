var http=require('http');
http.createServer((req,res)=>{
	if(req.url === '/' && req.method === 'POST'){
		console.log('${req.method}');
		console.log(res.headers);
		req.pipe(process.stdout);
	}else{
		res.statusCode = 404;
	    //res.setHeader('Content-Type', 'text/plain');
	    res.end('ERROR');
	}
	
}).listen(8080);
