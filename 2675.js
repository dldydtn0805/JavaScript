const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

T = Number(input[0])
let ans = ''
for (tc=1; tc < T+1; tc++) {
  let arr = input[tc].split(' ');
  let num = Number(arr[0]);
  let str = String(arr[1]); 
  for (let j = 0; j < str.length; j++) {
    ans += str[j].repeat(num);
  }
  ans += '\n'
}
console.log(ans)