const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
// const input = fs.readFileSync("input.txt").toString().trim();

let num = Number(input)

ans = ''
for (i=0; i < num; i++) {
  ans += (i+1)+'\n'
}
console.log(ans)