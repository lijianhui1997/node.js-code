console.log(process.pid);
process.stdin.resume();
//һ��ָ�� ��׼������(stdin) �Ŀɶ���(Readable Stream)
//��׼������Ĭ������ͣ (pause) �ģ����Ա���Ҫ���� process.stdin.resume() ���ָ� (resume) ����

process.on('SIGINT', () => {
  console.log('you press ctrl-c');
  process.exit();
});

process.on('SIGTSTP', () => {
  console.log('you press ctrl-z, stop running');
  process.exit();
});