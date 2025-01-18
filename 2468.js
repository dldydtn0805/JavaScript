let fs = require('fs');
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt"
).toString().trim().split('\n');

const solve = (inputLines) => {
    let idx = 0
    const [N] = inputLines[idx++].split(' ').map(Number)
    const boundary = []
    for (let i = 0; i < N; i ++) {
        boundary.push(inputLines[idx++].split(' ').map(Number))
    }

    let ans = 0
    for (let k = 0; k < 101; k ++) {
        const visited = new Array(N).fill(null).map(()=>
            new Array(N).fill(null).map(()=> 0
        ))
        let cnt = 0
        for (let i = 0; i < N; i ++) {
            for (let j = 0; j < N; j++) {
                if (visited[i][j] === 0 && boundary[i][j] > k) {
                    cnt ++
                    bfs(boundary, visited, N, k, i, j)
                }
            }
        }

        ans = Math.max(ans, cnt)
    }
    return ans
}

const directions = [
    [-1,0],[0,1],[1,0],[0,-1]
]
const bfs = (boundary, visited, N, K, si, sj) => {
    const queue = []
    if (boundary[si][sj] > K) {
        queue.push([si, sj])
        visited[si][sj] = 1
    }
    while (queue.length > 0) {
        const [ci, cj] = queue.shift()
        for (let [di, dj] of directions) {
            const [ni, nj] = [ci+di, cj+dj]
            if (0<=ni && ni < N && 0<=nj && nj < N && visited[ni][nj] === 0) {
                if (boundary[ni][nj] > K) {
                    queue.push([ni, nj])
                    visited[ni][nj] = 1
                }
            }
        }
    }
}

console.log(solve(input))
