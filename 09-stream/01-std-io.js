var stdin=process.stdin,
    stdout=process.stdout;

stdin.on('data',(data)=>{
	stdout.write(data);
});

stdin.push('i love nodejs');

for(var c='a'.charCodeAt(0);c<='z'.charCodeAt(0);c++){
	stdout.write(String.fromCharCode(c))
}

stdout.write('\n');
