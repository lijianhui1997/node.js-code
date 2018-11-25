console.log(process.pid);
process.stdin.resume();
//一个指向 标准输入流(stdin) 的可读流(Readable Stream)
//标准输入流默认是暂停 (pause) 的，所以必须要调用 process.stdin.resume() 来恢复 (resume) 接收

process.on('SIGINT', () => {
  console.log('you press ctrl-c');
  process.exit();
});

process.on('SIGTSTP', () => {
  console.log('you press ctrl-z, stop running');
  process.exit();
});