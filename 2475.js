const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

ans1 = Number(input[0])**2
ans2 = Number(input[1])**2
ans3 = Number(input[2])**2
ans4 = Number(input[3])**2
ans5 = Number(input[4])**2
console.log((ans1+ans2+ans3+ans4+ans5)%10)
