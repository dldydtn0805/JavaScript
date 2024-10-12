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
    const [N] = inputLines[idx++].split(' ').map(String);
    const arr = inputLines[idx++].split('').map(String);
    let bonus = 0
    let ans = 0
    for (let i = 0 ; i < N ; i ++) {
        if (arr[i] === 'O') {
            ans += bonus + i+1;
            bonus ++
        } else {
            bonus = 0
        }
    }
    console.log(ans)
});
