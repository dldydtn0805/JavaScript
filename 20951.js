const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let S, N;
const arr = []
inputLines = []
const INF = Number.MAX_SAFE_INTEGER;
const MOD = 10**9+7
let idx = 0
rl.on('line', (line)=>{
    inputLines.push(line)
}).on('close', ()=> {
    const [N, M] = inputLines[idx++].split(' ').map(Number)
    const adjList = new Array(N+1).fill(null).map(()=>[])

    for (let i = 0; i < M; i ++) {
        const [u, v] = inputLines[idx++].split(' ').map(Number)
        adjList[u].push(v)
        adjList[v].push(u)
    }

    const dp = new Array(8).fill(null).map(()=>
        new Array(N+1).fill(null).map(()=>0)
    )


    for (let i = 1; i <= 7; i++) {
        for (let j = 0 ; j < N+1; j++) {
            if (i === 1) {
                for (let ni of adjList[j]) {
                    dp[1][j] += 1
                    dp[1][j] %= MOD
                }
            } else {
                for (let ni of adjList[j]) {
                    dp[i][j] += dp[i-1][ni]
                    dp[i][j] %= MOD
                }
            }
        }
    }

    console.log(dp[7].slice(1, N+1).reduce((a, b) => a + b, 0) % MOD)

})
