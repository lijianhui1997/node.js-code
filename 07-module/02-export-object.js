var pi=Math.PI;

var Circle={
	d:function(r){
		return 2*r;
	},
	area:function(r){
		return pi*r*r;
	},
	circumference:function(r){
		return 2*pi*r;
	}
}

module.exports=Circle;
//console.dir(module);
