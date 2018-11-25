if(process.argv.length !== 3) {
  console.error('�����и�ʽ��cmd base64_string');
  process.exit(1);
}

const buf = new Buffer(process.argv[2], 'base64');
const info = buf.toString('utf8').split(':');

if(info.length !== 2) {
  console.error('��Ϣ����');
  process.exit(2);
}

console.log('user name: %s\npassword: %s', info[0], info[1]);