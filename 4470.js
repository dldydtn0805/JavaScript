const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let S, N;
const arr = []
inputLines = []
const INF = Number.MAX_SAFE_INTEGER;
let idx = 0
rl.on('line', (line)=>{
    inputLines.push(line)
}).on('close', ()=> {
    const [N] = inputLines[idx++].split(' ').map(Number)
    for (let i = 1 ; i < N+1; i ++) {
        console.log(`${i}.`,inputLines[idx++].split('').map(String).join(''))
    }
})
