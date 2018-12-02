const log=console.log;

log('jiagou:',process.arch);
log('platform:',process.platform);

log('process_id:',process.pid);
log('exePath:%s\n',process.execPath);

log('node version:',process.version);
log('user_id:',process.getuid);
log('group_id:',process.getgid);
log('cwd:%s\n',process.cwd());

log('env:',process.env);
log('host name',process.env.HOSTNAME);

