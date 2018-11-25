var http=require('http');
http.createServer((req,res)=>{
	if(req.url === '/' && req.method === 'GET'){
		var data='';
		
		req.setEncoding('binary');
		req.on('data',(chunk)=>{
			date+=chunk;
		});
		req.on('end',()=>{
			console.log(data);
			var das=data.split('\r\n');
			//var fileName=das[1].split(';')[2].split('=')[1];
			var fileData=das[4];
			console.log(fileData);
		});
		res.end('OK!')
	}else{
		res.statusCode = 404;
	    //res.setHeader('Content-Type', 'text/plain');
	    res.end('ERROR');
	}
	
}).listen(8080);

