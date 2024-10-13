const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let idx = 0
const inputLines = []
rl.on('line', (line) => {
    inputLines.push(line)
}).on('close', ()=>{
    const [N, M, K] = inputLines[idx++].split(' ').map(Number);
    const learns = []
    for (let i = 0 ; i < N ; i++) {
        const [s , p] = inputLines[idx++].split(' ').map(String);
        learns.push([s, p])
    }
    const open = new Set()
    for (let i = 0 ; i < K ; i ++) {
        const [t] = inputLines[idx++].split(' ').map(String);
        open.add(t)
    }
    let cross = 0
    const rest = learns.map(
        ([title, score]) => {
            if (open.has(title)) {
                cross += Number(score)
                return null
            } else {
                return Number(score)
            }
        }
    ).filter((item)=> item !== null)
    rest.sort((a,b)=>a-b);
    let minV = cross
    let maxV = cross
    for (let i = 0 ; i < M-K; i++) {
        minV += rest[i]
    }
    for (let i = rest.length-1; i > rest.length-1-(M-K); i-- ) {
        maxV += rest[i]
    }
    console.log(minV, maxV)

})
