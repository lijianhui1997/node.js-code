const log = console.log,
      err = console.error,
      arg = process.argv[2];

if(typeof(arg) === 'undefined' || isNaN(Number(arg))) {
  err('�����в�������ȷ');
  process.exit(1);
} else {
  log('�˳��룺', arg);
  process.exit(arg);
}