global.PI=Math.PI;

global.objCircle={
	d:function(r){
		return 2*r;
	},
	area:(r)=>{
		return PI*r*r;
	},
	c:(r)=>{
		return 2*PI*r;
	}

}
module.exports=objCircle;
