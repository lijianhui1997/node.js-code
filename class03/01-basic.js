var buf1=new Buffer(256);//�ڶ�������ڴ� ʵ����buf1
buf1[0]=0;//��ʼ����һ���ֽ�Ϊ0
console.log(buf1.length,buf1)//��ӡ���Ⱥ�����

for(var i=0;i<256;i++){
	buf1[i]=i;//ͨ��ѭ����ʼ��ÿ���ֽ�
}
console.log(buf1);//��ӡbuf1
//��buf1����Ƭ����
var buf2=buf1.slice(246,256);
console.log(buf2,buf2.length);
//��buf2�������
buf2.fill(0);
console.log(buf2);
//�������ʼ��buf3
var arr=[1,5,'a',"hello"];
var buf3=new Buffer(arr,"utf8");
console.log(buf3);
//���ַ�����ʼ��buf4
var arr1=["hello world"];
var buf4=new Buffer(arr1,'utf8');
console.log(buf4);

//����
buf3.copy(buf4);
console.log(buf3)
