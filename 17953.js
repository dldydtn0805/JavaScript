// https://www.acmicpc.net/problem/17953
/* 해설

창호의 만족감의 최대값을 찾아야한다.

창호는 하루에 한가지 디저트만 먹는다.

창호는 전날에 먹은 디저트와 같은 걸 먹으면 만족감이 절반으로 감소한다.

dp[j][i] = i 일에 j 디저트를 먹었을때 느끼는 최대 만족감

2 6 7
3 8 5

2 + 8 + 7로 먹어야 최대 만족감을 얻는다.
* */

/*입력
3 2
2 6 7
3 8 5
* */

/*출력
17
* */

let fs = require('fs');
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt"
).toString().trim().split('\n');

const INF = Number.MAX_SAFE_INTEGER
const directions = [
    [-1,0],[0,1],[1,0],[0,-1]
]
const MOD = 1000007
const solve = (inputLines) => {
    let idx = 0
    const [N, M] = inputLines[idx++].split(' ').map(Number)
    const desserts = []
    desserts.push(new Array(N+1).fill(null).map(()=>0))
    for (let i = 0; i < M; i ++) {
        const dessert = inputLines[idx++].split(' ').map(Number)
        dessert.unshift(0)
        desserts.push(dessert)
    }
    const dp = new Array(M+1).fill(null).map(()=>
        new Array(N+1).fill(null).map(()=>0)
    )
    for (let i = 1; i < M+1; i++) {
        dp[i][1] = desserts[i][1]
    }
    // console.log(dp)
    for (let i = 2; i < N+1; i ++) {
        for (let j = 1; j < M+1; j ++) {
            for (let k = 1; k < M+1; k ++) {
                const w = j === k ? Math.floor(desserts[j][i] / 2) : desserts[j][i]
                dp[j][i] = Math.max(dp[j][i], dp[k][i-1]+w)
            }
        }
    }

    let ans = 0
    for (let i = 1; i < M+1; i ++ ) {
        ans = Math.max(ans, dp[i][N])
    }
    return ans
}


console.log(solve(input))
