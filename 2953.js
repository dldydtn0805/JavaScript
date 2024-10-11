const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = [];
let idx = 0;
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    let ans = 0
    let ans_idx = 0
    for (let i = 0 ; i < 5; i ++) {
        const arr = inputLines[idx++].split(' ').map(Number);
        const num = arr.reduce((sum, cur) => sum + cur, 0 );
        if (ans < num) {
            ans = num;
            ans_idx = i;
        }
    }
    console.log(ans_idx+1, ans)
});
