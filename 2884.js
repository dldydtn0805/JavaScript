const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let H = Number(input[0])
let M = Number(input[1])


if (M < 45) {
  M += 15
  H -= 1
  if ( H === -1 ) {
    H = 23
  }
}
else {
  M -= 45
}

console.log(H, M)