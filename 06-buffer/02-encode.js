//�������в�����ȡ��¼��վ���û�����������Ϣ
const user_name=process.argv[2];
const password=process.argv[3];
console.log(user_name,password)
var str=user_name+':'+password;
var buf=new Buffer(str,'Base64');
console.log(buf);