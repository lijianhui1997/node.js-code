var PI=Math.PI;
module.exports=function(r){
	function circumference(){
		return PI*2*r;
	}

	function area(){
		return PI*r*r;
	}
	return {
		area:area,
		circumference:circumference
		};
};

//console.dir(module);
