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
    const [ L, P] = inputLines[idx++].split(' ').map(Number)
    const men = inputLines[idx++].split(' ').map(Number)
    const ans = men.map((man)=> man-L*P)
    console.log(ans.join(' '))
})
