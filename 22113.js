const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const firstLine = input[0].split(' ').map(Number);
    const N = firstLine[0];
    const M = firstLine[1];

    const busNumber = input[1].split(' ').map(Number);
    const transferFees = [];
    for (let i = 2; i < 2 + N; i++) {
        transferFees.push(input[i].split(' ').map(Number));
    }
    let ans = 0
    for (let i = 1; i < M ; i ++) {
        ans += transferFees[busNumber[i-1]-1][busNumber[i]-1]
    }
    console.log(ans)
});
