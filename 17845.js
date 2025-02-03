// https://www.acmicpc.net/problem/2136
/* 해설

공부 시간의 한계를 초과하지 않으면서 과목의 중요도 합이 최대가 되도록 몇개만 선택하기로 했다

중요도가 최대가 되도록 과목을 선택했을때 최대가 되는 중요도를 출력하라

얻을 수 있는 최대 중요도를 출력한다


*/
/* 입력
80 3
650 40
700 60
60 40
//
*/
/* 출력
710
*/

const fs = require('fs')
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt"
).toString().trim().split('\n');

const INF = Number.MAX_SAFE_INTEGER
const solve = (inputLines) => {
    let idx = 0
    const [N, K] = inputLines[idx++].split(' ').map(Number)
    // N : 최대 공부 시간, K : 과목 수
    // dp[i][j] : i 과목, j 공부 시간 까지 들었을 때 최대 중요도
    const dp = new Array(K).fill(null).map(()=>
        new Array(N+1).fill(null).map(()=>0)
    )
    const subjects = []
    for (let i = 0; i < K; i ++) {
        // I : 중요도, T : 시간
        const [I, T] = inputLines[idx++].split(' ').map(Number)
        subjects.push([I, T])
    }
    dp[0][subjects[0][1]] = subjects[0][0]
    for (let i = 1; i < K; i ++) {
        for (let j = 1; j < N+1; j ++) {
            if (j-subjects[i][1] >= 0) {
                dp[i][j] = Math.max(dp[i-1][j-subjects[i][1]]+subjects[i][0], dp[i][j], dp[i-1][j], dp[i][j-1])
            } else {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j], dp[i][j-1])
            }
        }
    }

    return dp[K-1][N]
}
console.log(solve(input))
