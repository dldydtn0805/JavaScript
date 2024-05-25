const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
max_v = 0
max_i = 0
for (i=0 ; i < input.length; i++){
  if (max_v < Number(input[i])) {
    max_v = Number(input[i])
    max_i = i
  }
}
console.log(max_v)
console.log(max_i+1)