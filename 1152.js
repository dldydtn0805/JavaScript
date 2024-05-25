
const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(" ");
let cnt = 0
for (let i = 0; i < input.length; i++) {
    if (input[i] !== '') {
        cnt++
    }
}
console.log(input)
console.log(cnt)
