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
    const [N, K] = inputLines[idx++].split(' ').map(Number);
    const users = inputLines[idx++].split(' ').map(Number);
    const num = users.reduce((cnt, user)=> cnt+Math.ceil(user/2), 0);
    if (num >= N) {
        console.log('YES')
    } else {
        console.log('NO')
    }
});
