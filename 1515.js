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
    const num = inputLines[idx++].split('').map(Number)
    let i = 1;
    while (num.length > 0) {
        const cur = String(i).split('').map(Number)
        for (let j = 0; j < cur.length; j++) {
            if (cur[j] === num[0] && num.length > 0) {
                num.shift()
            }
        }
        if (num.length === 0) {
            break
        }
        i ++
    }
    console.log(i)
})
