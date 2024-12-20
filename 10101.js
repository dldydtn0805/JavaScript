const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = []
const INF = Number.MAX_SAFE_INTEGER;
const MOD = 10**9+7
let idx = 0
rl.on('line', (line)=>{
    inputLines.push(line)
}).on('close', ()=> {
    const [X] = inputLines[idx++].split(' ').map(Number)
    const [Y] = inputLines[idx++].split(' ').map(Number)
    const [Z] = inputLines[idx++].split(' ').map(Number)
    if (X === 60 && Y === 60 && Z === 60) {
        console.log('Equilateral')
    } else if (X+Y+Z === 180) {
        if (X === Y || Y === Z || Z === X) {
            console.log('Isosceles')
        } else {
            console.log('Scalene')
        }
    } else {
        console.log('Error')
    }
})
