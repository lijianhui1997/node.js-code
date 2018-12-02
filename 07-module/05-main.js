var obj=require('./05-export-all.js');
console.log(obj.p);
console.log(obj.c(10).area(),obj.c(10).circumference());
console.log(obj.o.d(10),obj.o.area(10),obj.o.circumference(10));
console.log(__dirname);

