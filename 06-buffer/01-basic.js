var buf1=Buffer.alloc(20);
buf1[0]=0;
console.log(buf1.length,buf1);
for(var i=0;i<20;i++){
	buf1[i]=i;
}
console.log(buf1);
var buf2=buf1.slice(10,20);
console.log(buf2.length,buf2);
buf2.fill(0);
console.log(buf2);
var buf3=Buffer.from([1,2,3]);
console.log(buf3.length,buf3);
var buf4=Buffer.from('test');
console.log(buf4.length,buf4);
console.log(buf4.toString());

buf4.copy(buf3,0,0,buf3.length);
console.log(buf3.length,buf3);
