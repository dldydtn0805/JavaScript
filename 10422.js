const fs = require('fs')
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt"
).toString().trim().split('\n');

const INF = Number.MAX_SAFE_INTEGER
const MOD = 1000000007
const solve = (inputLines) => {
    let idx = 0
    const [T] = inputLines[idx++].split(' ').map(Number)
    const dp = dynamicProgram()
    let ans = ''
    for (let tc = 0; tc < T; tc ++) {
        const [L] = inputLines[idx++].split(' ').map(Number)
        // console.log(dp[L])
        ans += `${dp[L][0]}\n`
    }
    return ans
}

const dynamicProgram = () => {
    const N = 5001
    // dp[인덱스][열린괄호의개수] = 괄호문자열의 개수
    const dp = new Array(N).fill(null).map(()=>
        new Array(N).fill(null).map(()=>0)
    )
    dp[0][0] = 1
    dp[1][1] = 1
    for (let i = 2; i < N; i ++) {
        for (let j = 0; j <= i; j++) {
            if (j+1 < N && j-1 >= 0) {
                dp[i][j] += dp[i-1][j+1] + dp[i-1][j-1]
            } else if (j+1 < N) {
                dp[i][j] += dp[i-1][j+1]
            } else if (j-1 >= 0) {
                dp[i][j] += dp[i-1][j-1]
            }
            dp[i][j] %= MOD
        }
    }
    return dp
}

console.log(solve(input))
