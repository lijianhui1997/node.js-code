var buf1=new Buffer(256);//在堆外分配内存 实例化buf1
buf1[0]=0;//初始化第一个字节为0
console.log(buf1.length,buf1)//打印长度和内容

for(var i=0;i<256;i++){
	buf1[i]=i;//通过循环初始化每个字节
}
console.log(buf1);//打印buf1
//对buf1做切片操作
var buf2=buf1.slice(246,256);
console.log(buf2,buf2.length);
//对buf2进行填充
buf2.fill(0);
console.log(buf2);
//用数组初始化buf3
var arr=[1,5,'a',"hello"];
var buf3=new Buffer(arr,"utf8");
console.log(buf3);
//用字符串初始化buf4
var arr1=["hello world"];
var buf4=new Buffer(arr1,'utf8');
console.log(buf4);

//拷贝
buf3.copy(buf4);
console.log(buf3)
