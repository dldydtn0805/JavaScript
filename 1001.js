const input = require('fs').readFileSync('input.txt').toString().split(' ');
console.log(Number(input[0]) - Number(input[1]));