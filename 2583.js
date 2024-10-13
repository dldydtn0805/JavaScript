const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let idx = 0
const inputLines = []
rl.on('line', (line) => {
    inputLines.push(line)
}).on('close', ()=>{
    const [N, M,K] = inputLines[idx++].split(' ').map(Number);
    const visited = new Array(N).fill().map(()=>
        new Array(M).fill().map(()=>0)
    )
    for (let k = 0 ; k < K ; k ++) {
        const [j1, i1, j2, i2] = inputLines[idx++].split(' ').map(Number);
        for (let i = i1; i < i2; i++) {
            for (let j = j1; j < j2 ; j++) {
                visited[i][j] = 1
            }
        }
    }
    function bfs(si, sj) {
        const queue = []
        queue.push([si, sj])
        visited[si][sj] = 1
        let v = 1
        while (queue.length) {
            const [ci, cj] = queue.shift()
            for (let [di, dj] of [[-1,0],[0,1],[1,0],[0,-1]]) {
                let [ni, nj] = [ci + di, cj+dj]
                if (0<=ni && ni<N && 0<=nj && nj<M) {
                    if (!visited[ni][nj]) {
                        v++
                        queue.push([ni,nj])
                        visited[ni][nj] = 1
                    }
                }
            }
        }
        return v
    }
    const ans = []
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M ; j++) {
            if (!visited[i][j]) {
                const value = bfs(i, j)
                ans.push(value)
            }
        }
    }
    ans.sort((a,b)=>a-b)
    console.log(ans.length)
    console.log(ans.join(' '))

})
