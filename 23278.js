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
    const [N, L, H ] = inputLines[idx++].split(' ').map(Number);
    const scores = inputLines[idx++].split(' ').map(Number);
    scores.sort((a, b) => a - b);
    const newScores = scores.slice(L, N-H);
    const total = newScores.reduce((cnt, newScore)=> cnt + newScore, 0);
    console.log(total/(N-L-H))
});
