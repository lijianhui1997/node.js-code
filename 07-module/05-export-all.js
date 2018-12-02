var circle=require('./02-export-function.js');
var pi=require('./02-export-var.js');
var obj=require('./02-export-object.js');
var obj_all={
	p:pi,
	c:circle,
	o:obj,
};
module.exports=obj_all;

