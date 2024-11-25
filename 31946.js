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
    const [N] = inputLines[idx++].split(' ').map(Number)
    const [M] = inputLines[idx++].split(' ').map(Number)
    const blocks = []
    for (let i = 0 ; i < N ; i ++) {
        blocks.push(inputLines[idx++].split(' ').map(Number))
    }
    const [X] = inputLines[idx++].split(' ').map(Number)
    const bfs = () => {
        const queue = []
        const visited = new Array(N).fill(null).map(()=>
            new Array(M).fill(null).map(()=>0)
        )
        queue.push([0,0])
        visited[0][0] = 1
        while (queue.length) {
            const [ci, cj] = queue.shift()
            for (let i = ci-X ; i <= ci+X; i++) {
                for (let j = cj-X; j <= cj+X; j++) {
                    if (0 <= i && i < N && 0<= j && j < M) {
                        if (Math.abs(ci-i)+Math.abs(cj-j) <= X) {
                            if (visited[i][j] === 0 && blocks[ci][cj] === blocks[i][j]) {
                                visited[i][j] = 1
                                queue.push([i,j])
                            }
                        }
                    }
                }
            }
        }
        return visited
    }
    const res = bfs()
    console.log(res[N-1][M-1] === 0 ? 'DEAD' : 'ALIVE')
})
