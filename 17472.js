// https://www.acmicpc.net/problem/17472
/* 해설

세가지의 절차를 밟아야한다

1. 그래프 탐색을 사용해서 각 섬의 영역을 확인한다.
2. 완전 탐색을 사용해서 각 섬간의 최단 거리를 확인한다.
3. 백트래킹을 사용해서 가장 짧은 다리의 길이를 확인한다.

* */

/*입력
7 8
0 0 0 0 0 0 1 1
1 1 0 0 0 0 1 1
1 1 0 0 0 0 0 0
1 1 0 0 0 1 1 0
0 0 0 0 0 1 1 0
0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1
* */

/*출력
9
* */

let fs = require('fs');
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt"
).toString().trim().split('\n');

const INF = Number.MAX_SAFE_INTEGER
const directions = [
    [-1,0],[0,1],[1,0],[0,-1]
]

const getIslands = (si, sj, visited, fields, key, N, M) =>  {
    const queue = []
    queue.push([si, sj])
    visited[si][sj] = key
    while (queue.length > 0) {
        const [ci, cj] = queue.shift()
        for (const [di, dj] of directions) {
            const [ni, nj] = [ci+di, cj+dj]
            if (0<=ni && ni<N && 0<=nj && nj<M && visited[ni][nj] === 0 && fields[ni][nj] === 1) {
                queue.push([ni, nj])
                visited[ni][nj] = key
            }
        }
    }
}

const getDistance = (si, sj, fields, N, M, distance, visited) => {
    for (let [di, dj] of directions) {
        let [ci, cj] = [si+di, sj+dj]
        let dist = 0
        while (0<= ci && ci < N && 0 <= cj && cj < M && fields[ci][cj] === 0) {
            ci+=di
            cj+=dj
            dist++
        }
        if (0 <= ci && ci < N && 0 <= cj && cj < M && visited[ci][cj] !== visited[si][sj]) {
            const cross = `${visited[ci][cj]},${visited[si][sj]}`
            if (dist > 1) {
                if (!distance.hasOwnProperty(cross)) {
                    distance[cross] = dist
                } else {
                    distance[cross] = Math.min(distance[cross], dist)
                }
            }
        }
    }
}
const backtracking = (ci, check, distance, K, bridges) => {
    let res = INF
    let flag = true
    for (let i = 1; i < K+1; i++) {
        if (check[i] === 0) {
            flag = false
        }
    }
    if (flag) {
        return 0
    }
    for (let ni = 1; ni < K+1; ni++) {
        const A = `${ci},${ni}`
        if (check[ni] === 0  && distance.hasOwnProperty(A)) {
            check[ni] = 1
            // console.log('현재, 다음, 다리개수, 값', ci, ni, bridges, value+distance[A])
            res = Math.min(res, distance[A]+backtracking(ni, check, distance, K, bridges+1))
            res = Math.min(res, distance[A]+backtracking(ci, check, distance, K, bridges+1))
            check[ni] = 0
        }
    }
    return res

}

const solve = (inputLines) => {
    let idx = 0
    let ans = INF
    const [N, M] = inputLines[idx++].split(' ').map(Number)
    const fields = []
    for (let i = 0; i < N; i ++) {
        fields.push(inputLines[idx++].split(' ').map(Number))
    }
    const visited = new Array(N).fill(null).map(()=>
        new Array(M).fill(null).map(()=>0)
    )
    const distance = {}
    let key = 1
    for (let i = 0; i < N; i ++) {
        for (let j = 0; j < M; j++) {
            if (visited[i][j] === 0 && fields[i][j] === 1) {
                getIslands(i, j, visited, fields, key++, N, M)
            }
        }
    }
    for (let i = 0; i < N; i ++) {
        for (let j = 0; j < M; j ++) {
            if (fields[i][j] === 1) {
                getDistance(i, j, fields, N, M, distance, visited)
            }
        }
    }
    const K = key-1
    const check = new Array(K+1).fill(null).map(()=>0)
    for (let i = 1; i < K+1; i++) {
        check[i] = 1
        ans = Math.min(ans, backtracking(i, check, distance, K, 1))
        check[i] = 0
    }
    return ans === INF ? -1 : ans
}

console.log(solve(input))
