const fs = require('fs')

let a = fs.readFileSync(process.argv[2]).toString().split('\n').length;

console.log(--a)