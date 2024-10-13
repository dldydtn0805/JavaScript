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
    const [N] = inputLines[idx++].split(' ').map(Number);
    const dp = new Array(N+1).fill(0);
    const visited = new Set();
    dp[0] = 0
    visited.add(0)
    for (let i = 1 ; i < N+1; i ++) {
        if (dp[i-1]-i < 0 || visited.has(dp[i-1]-i)) {
            dp[i] = dp[i-1] + i
            visited.add(dp[i])
        } else {
            dp[i] = dp[i-1] - i
            visited.add(dp[i])
        }
    }
    console.log(dp[N])

})
