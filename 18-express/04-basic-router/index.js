var express=require('express');
var app= express();

function c1(req,res,next){
	console.log('c1');
	next();
}
function c2(req,res,next){
	console.log('c2');
	next();
}
app.get('/',[c1,c2],function(req,res,next){
	console.log('c3');
	next();
},function(req,res){
	console.log('c4');
	res.end('ok!');
});
app.get('/json',function(req,res){
	var a={name:'lijianhui',age:20,qq:'1774407914'};
	res.json(a);
	res.end();
});

app.get('/download',function(req,res){
	res.download('pakage.json');
})
app.get('/course/:id',(req,res)=>{
	console.log('id',req.params.id);
	res.end('ok');
})
app.get('/posts/:year/:month', function(req, res) {
  console.log('year:', req.params.year);
  console.log('month:', req.params.month);
  res.send('ok!');
});
app.listen(8080);
