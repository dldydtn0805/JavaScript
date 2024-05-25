const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

numbers = []
// numbers 배열에 A:0, B:1, ... Z:25를 체크해준다
for (let i=0; i<26; i++) {
  numbers.push([Number(0)]);
}

// input을 순회하면서 알파벳 개수를 numbers 배열에 반영해준다
for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt()-'A'.charCodeAt() <=26) {
    numbers[input[i].charCodeAt()-'A'.charCodeAt()][0]++
  }
  else {
    numbers[input[i].charCodeAt()-'a'.charCodeAt()][0]++
  }
}

// 최대값 갱신
let max_v = 0
let ans = ''
for (let i = 0 ; i < numbers.length; i++) {
  if (max_v < numbers[i][0]) {
    max_v = numbers[i][0]
    ans = i
  }
}

// 중복 체크
let cnt = 0
for (let i = 0 ; i < numbers.length; i++) {
  if (max_v === numbers[i][0]) {
      cnt++
  }
}
// 중복된게 있으면 ? 출력
if (cnt > 1) {
  console.log('?')
}
// 알파벳으로 다시 만들어주기
else {
  console.log(String.fromCharCode(ans+65))
}