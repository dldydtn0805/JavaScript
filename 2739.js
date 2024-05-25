const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
// const input = fs.readFileSync("input.txt").toString().trim();

let num = Number(input[0])

for (let i = 1; i < 10 ; i ++) {
  console.log(String(num) + ' * ' + String(i) + ' =', num*i)
}