var path = require('path');
var os   = require('os');

let fullpath = 'D:/Studies/Year 4/lab18/NodeTwitterApi/app.js';

console.log(path.basename(fullpath));
console.log(path.dirname(fullpath));
console.log(path.extname(fullpath));

let cpuArray = os.cpus();
console.log(cpuArray);
console.log(cpuArray.length);
