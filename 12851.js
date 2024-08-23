const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let visited
rl.on('line', (line) => {
    const [N, K] = line.split(' ').map(Number)
    visited = new Array(200001).fill().map(()=>[-1,-1])
    queue = []
    function bfs() {
        queue.push(N)
        visited[N] = [0, 1]
        while (queue.length) {
            cur = queue.shift()
            for (let next of [cur+1, cur-1, cur*2]) {
                if (0<=next && next < visited.length) {
                    if (visited[next][0] === -1) {
                        queue.push(next)
                        visited[next][0] = visited[cur][0]+1
                        visited[next][1] = visited[cur][1]
                    } else if (visited[next][0] === visited[cur][0]+1) {
                        visited[next][1] += visited[cur][1]
                    }
                }
            }
        }
    }
    bfs()
    console.log(visited[K][0])
    console.log(visited[K][1])

    rl.close()
})
