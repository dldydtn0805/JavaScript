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
    const maze = inputLines[idx++].split(' ').map(Number);
    const dp = new Array(N).fill(1e9);
    dp[0] = 0
    for (let i = 0; i < maze.length; i++) {
        for (let j = i; j <= i+maze[i]; j++) {
            if (j < N) {
                dp[j] = Math.min(dp[j], dp[i]+1)
            }
        }
    }
    console.log(dp[N-1] !== 1e9 ? dp[N-1] : -1)

})
