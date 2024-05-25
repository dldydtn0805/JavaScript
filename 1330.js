const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 숫자 비교할때 Number 꼭 넣어주기~~~
if (Number(input[0]) < Number(input[1])) {
  console.log('<')
}
else if (Number(input[0]) > Number(input[1])) {
  console.log('>')
}
else {
  console.log('==')
}