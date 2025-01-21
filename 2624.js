// https://www.acmicpc.net/problem/2624
/* 해설
DP[N] : 금액 N의 동전 교환 방법 경우의 수
*/
/* 입력
20
3
5 3
10 2
1 5
//
*/

const fs = require('fs')
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt"
).toString().trim().split('\n');
const MOD = 123456789

const solve = (inputLines) => {
    let idx = 0
    const [T] = inputLines[idx++].split(' ').map(Number)
    const [k] = inputLines[idx++].split(' ').map(Number)
    const coins = []
    const dp = new Array(T+1).fill(null).map(()=>0)
    dp[0] = 1
    for (let i = 0 ; i < k; i++) {
        const [p, n] = inputLines[idx++].split(' ').map(Number)
        coins.push([p,n])
    }

    for (const [coin, cnt] of coins) {
        for (let money = T; money > 0; money--) {
            for (let i = 1 ; i < cnt+1; i++) {
                if (money - coin*i >= 0) {
                    dp[money] += dp[money-coin*i]
                }
            }
        }
    }
    return dp[T]

}

console.log(solve(input))
