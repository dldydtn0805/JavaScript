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
    const [N, M] = inputLines[idx++].split(' ').map(Number);
    const works = inputLines[idx++].split(' ').map(Number);
    let start = works.slice(0, M).reduce((cnt, cur)=>cnt+cur, 0)
    let ans = start
    let prev = 0
    for (let i = M; i < N; i ++) {
        start = start - works[prev] + works[i]
        prev ++
        ans = Math.max(ans, start)
    }
    console.log(ans)

})
