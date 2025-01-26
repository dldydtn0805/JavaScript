// https://www.acmicpc.net/problem/1495
/* 해설
* */

/*입력
3 5 10
5 3 7
* */

/*출력
10
* */

let fs = require('fs');
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt"
).toString().trim().split('\n');

const INF = Number.MAX_SAFE_INTEGER
const directions = [
    [-1,0],[0,1],[1,0],[0,-1]
]

const solve = (inputLines) => {
    let idx = 0
    const [N, S, M] = inputLines[idx++].split(' ').map(Number)
    const musics = inputLines[idx++].split(' ').map(Number)
    let ans = -1
    const visited = new Set()
    const backtracking = (ci, value) =>  {
        for (const nextValue of [value-musics[ci], value+musics[ci]]) {
            const cur = `${ci},${nextValue}`
            if (0<=nextValue && nextValue <= M && !visited.has(cur)) {
                if (ci+1 === N) {
                    ans = Math.max(ans, nextValue)
                } else {
                    visited.add(cur)
                    backtracking(ci+1, nextValue)
                }
            }
        }
    }
    backtracking(0, S)
    return ans
}


console.log(solve(input))
