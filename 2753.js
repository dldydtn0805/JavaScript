const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
// const input = fs.readFileSync("input.txt").toString().trim();

let n = Number(input)
let flag = false
if (n%4 === 0 && n%100 !== 0) {
  flag = true
}

if (n%400 === 0) {
  flag = true
}

if (flag) {
  console.log(1)
}
else {
  console.log(0)
}