const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let S, N;
const arr = []
inputCounts = -1
rl.on('line', (line)=>{
    inputCounts++
    if (inputCounts === 0) {
        S = line
    } else if (inputCounts === 1) {
        [N] = line.split(' ').map(Number)
    } else if (inputCounts < N+2) {
        arr.push(line)
        if (inputCounts === N+1) {
            const dp = new Array(S.length+1).fill().map(()=>0)
            dp[0] = 1
            for (let i = 0; i < S.length+1; i++) {
                for (let word of arr) {
                    if (i >= word.length && dp[i - word.length] && S.slice(i - word.length, i) === word) {
                        dp[i] = 1
                    }
                }
            }
            console.log(dp[S.length])
            rl.close()
        }
    }
})
