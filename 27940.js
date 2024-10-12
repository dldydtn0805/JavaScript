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
    const [N, M, K] = inputLines[idx++].split(' ').map(Number);
    let land = 0;
    let ans = -1
    for (let i = 0; i < M ; i++) {
        const [t, r] = inputLines[idx++].split(' ').map(Number);
        land += r
        if (land > K && ans === -1) {
            ans = i+1
        }

    }
    if (ans === -1) {
        console.log(-1)
    } else {
        console.log(ans, 1)
    }
});
