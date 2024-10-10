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
    const [N, M] = inputLines[idx++].split(' ').map(Number)
    const eggs = []
    for (let i = 0 ; i < M ; i ++) {
        const [P] = inputLines[idx++].split(' ').map(Number)
        eggs.push(P)
    }
    eggs.sort((X, Y)=>Y-X)
    let ans = 0
    let ans_idx = 0
    for (let i = 0; i < N && i < M; i ++ ) {
        const cur = eggs[i]*(i+1)
        if (ans <= cur) {
            ans = cur
            ans_idx = eggs[i]
        }
    }
    console.log(ans_idx, ans)
})
