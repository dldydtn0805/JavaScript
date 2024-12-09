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
    const [X, Y] = inputLines[idx++].split(' ').map(Number)
    if (X+Y < 0 || X-Y < 0 || (X+Y)%2 ) {
        console.log(-1)
    } else {

        const A = Math.floor((X+Y) / 2)
        const B = X - A
        console.log(Math.max(A,B), Math.min(A, B))
    }
})
