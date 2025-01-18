const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = []
let idx = 0
const INF = Number.MAX_SAFE_INTEGER
rl.on('line', (line)=>{
    inputLines.push(line)
}).on('close', ()=> {
    const [N] = inputLines[idx++].split(' ').map(Number)
    const children = []
    for (let i = 0 ; i < N ; i ++) {
        const [child] = inputLines[idx++].split(' ').map(Number)
        children.push(child)
    }
    const dp = new Array(N).fill(null).map(()=>1)
    for (let i = 1; i < N; i ++) {
        for (let j = 0 ; j < i; j ++) {
            if (children[i] > children[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    console.log(N-Math.max(...dp))
})
