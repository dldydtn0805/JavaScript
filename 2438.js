const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
N = Number(input)
for (i = 1 ; i < N+1 ; i ++) {
  console.log('*'.repeat(i))
}