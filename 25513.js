const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let S, N;
const arr = []
inputLines = []
const INF = Number.MAX_SAFE_INTEGER;
let idx = 0
rl.on('line', (line)=>{
    inputLines.push(line)
}).on('close', ()=> {
    const students = []
    for (let i = 0 ; i < 5; i++) {
        students.push(inputLines[idx++].split(' ').map(Number))
    }
    const [R, C] = inputLines[idx++].split(' ').map(Number)

    const bfs = (si, sj, cnt) => {
        const queue = []
        queue.push([si, sj])
        const visited = new Array(5).fill(null).map(()=>
            new Array(5).fill(null).map(()=>0
        ))
        visited[si][sj] = 1
        while (queue.length) {
            const [ci, cj] = queue.shift()
            for (const [di, dj] of [[-1,0],[0,1],[1,0],[0,-1]]) {
                const [ni, nj] = [ci+di, cj+dj]
                if (0 <= ni && ni < 5 && 0 <= nj && nj < 5 && visited[ni][nj] === 0 && students[ni][nj] !== -1) {
                    if (students[ni][nj] === cnt) {
                        return visited[ci][cj]
                    }
                    queue.push([ni, nj])
                    visited[ni][nj] = visited[ci][cj]+1
                }
            }
        }
        return -1

    }
    const solve = () => {
        let ans = 0
        const start = bfs(R, C, 1)
        if (start === -1) {
            return -1
        }
        ans += start
        for (let i = 1; i <= 5; i++) {
            for (let j = 0; j < 5; j ++) {
                for (let k = 0 ; k < 5; k ++) {
                    if (students[j][k] === i) {
                        const cur = bfs(j, k, i+1)
                        if (cur === -1) {
                            return -1
                        }
                        ans += cur
                    }
                }
            }
        }
        return ans
    }
    console.log(solve())
})
