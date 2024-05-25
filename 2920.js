const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// const input = fs.readFileSync("input.txt").toString().trim().split(" ");


let ans = ''
let mixed1 = false
let mixed2 =  false
for (i=1; i<8; i++) {
  if (input[i-1] < input[i]) {
    ans = 'ascending'
    mixed1 = true
  }
  else if (input[i-1] > input[i]) {
    ans = 'descending'
    mixed2 = true
  }
}
if (mixed1 && mixed2) {
  ans = 'mixed'
}

console.log(ans)