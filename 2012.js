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
    const [N ] = inputLines[idx++].split(' ').map(Number);
    const arr = []
    for (let i = 0 ; i < N ; i ++) {
        const [rank] = inputLines[idx++].split(' ').map(Number);
        arr.push(rank);
    }
    arr.sort((a, b) => a-b);
    let ans = 0

    for (let i = 0 ; i < N ; i ++) {
        ans += Math.abs(arr[i] - (i+1))
    }
    console.log(ans)
});
