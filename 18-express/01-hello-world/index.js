var express=require('express');
const app=express();
//app.get('/',function(req,res){
//	res.sendFile(__dirname+'/index.html')
//	res.end('hello world');
//});
//app.use(express.static('./public'))  //上面的路由就不用分配
//app.get('/getData',function(req,res){
//  var result = req.query; //这个是前台穿过来的表单数据
    // Do something
  //  res.send(obj) //返回数据
//});
app.use(express.static('.'));

app.listen(8080);
