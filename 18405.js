const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let N, K, S, X, Y, visited;
let arr = []
let queue = []
let inputCount = -1

function bfs() {
    while (queue.length) {
        let cur = queue.shift();
        let ci = cur[0]
        let cj = cur[1]
        for (let item of [[1,0],[-1,0],[0,1],[0,-1]]) {
            let ni = ci + item[0]
            let nj = cj + item[1]
            if (0<=ni && ni < N && 0<=nj && nj <N) {
                if (!arr[ni][nj]) {
                    if (visited[ni][nj][0] === -1) {
                        visited[ni][nj][0] = visited[ci][cj][0] + 1
                        visited[ni][nj][1] = visited[ci][cj][1]
                        queue.push([ni,nj])
                    } else if (visited[ni][nj][0] >= visited[ci][cj][0]+1 && visited[ni][nj][1] > visited[ci][cj][1]) {
                        visited[ni][nj][0] = visited[ci][cj][0] + 1
                        visited[ni][nj][1] = visited[ci][cj][1]
                        queue.push([ni,nj])
                    }

                }
            }
        }
    }
}


rl.on('line', (line) => {
    inputCount++
    if (inputCount === 0) {
      [N, K] = line.split(' ').map(Number)
    } else if (inputCount < N+1) {
        arr.push(line.split(' ').map(Number))
    } else if (inputCount === N+1) {
        [S, X, Y] = line.split(' ').map(Number)

        visited = new Array(N).fill().map(()=>
            new Array(N).fill().map(()=> [-1, -1])
        )
        for (let i = 0 ; i < N ; i++) {
            for (let j = 0 ; j < N ; j++) {
                if (arr[i][j]) {
                    queue.push([i, j])
                    visited[i][j] = [0, arr[i][j]]
                }
            }
        }
        bfs()
        if (visited[X-1][Y-1][0] <= S) {
            console.log(visited[X-1][Y-1][1])
        } else {
            console.log(0)
        }
        rl.close()
    }
})

