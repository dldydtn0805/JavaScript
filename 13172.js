// https://www.acmicpc.net/problem/13172
/* 해설

M개의 주사위가 있고, i번째 주사위가 N[i]면체 주사위,

모든 면에 적힌 숫자를 더한 값이 S[i]일 때,

각 주사위에 대해서 주사위를 던졌을때 주사위의 각 면이 나올 확률이 동일하다면,

모든 주사위를 한번씩 던졌을때 나온 숫자들의 합의 기댓값을 구하자

문제의 조건에서 기대값을 출력할 때 기약 분수를 모듈러 곱셈의 역을 이용해서 출력해야한다.

*/
/*입력
1
3 7
* */

/*출력
333333338
* */

let fs = require('fs');
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt"
).toString().trim().split('\n');

const INF = Number.MAX_SAFE_INTEGER
const directions = [
    [-1,0],[0,1],[1,0],[0,-1]
]
const MOD = BigInt(1000000007)
const solve = (inputLines) => {
    let idx = 0
    const [M] = inputLines[idx++].split(' ').map(Number)
    let ans = BigInt(0)
    const divide = (x, e) => {
        if (e === BigInt(1)) {
            return BigInt(x) % MOD
        }
        if (e % BigInt(2)) {
            return (x * divide(x, e-BigInt(1))) % MOD
        }
        const X = (divide(x, e/BigInt(2))) % MOD
        return (X * X) % MOD
    }
    for (let i = 0; i < M; i ++) {
        const [N, S] = inputLines[idx++].split(' ').map(Number)
        const inverse = (divide(BigInt(N), MOD-BigInt(2)))% MOD
        const Q = (BigInt(S) * inverse) % MOD
        ans += Q
        ans %= MOD
    }
    return ans.toString()
}


console.log(solve(input))
