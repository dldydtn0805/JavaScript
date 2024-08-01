const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let adjList;
let N, M;
let parent
let depth
let inputCount = -1;

function bfs(si) {
    const queue = []
    queue.push(si)
    parent = new Array(N+1).fill().map(()=>-1)
    depth = new Array(N+1).fill().map(()=>-1)
    parent[si] = si
    depth[si] = 0
    while (queue.length) {
        const cur = queue.shift()
        for (let next of adjList[cur]) {
            if (depth[next] === -1) {
                queue.push(next)
                parent[next] = cur
                depth[next] = depth[cur] + 1
            }
        }
    }
}

function findLCA(a, b) {
    while (depth[a] > depth[b]) {
        a = parent[a]
    }
    while (depth[b] > depth[a]) {
        b = parent[b]
    }
    while (a !== b) {
        a = parent[a]
        b = parent[b]
    }
    return a
}

rl.on('line', (line)=> {
    inputCount++
    if (inputCount === 0) {
        [N] = line.split(' ').map(Number)
        adjList = new Array(N+1).fill().map(()=>[])
    } else if (inputCount < N) {
        const [s, e] = line.split(' ').map(Number)
        adjList[s].push(e)
        adjList[e].push(s)
    } else if (inputCount === N) {
        [M] = line.split(' ').map(Number)
        bfs(1)
    } else if (inputCount < N+M+1) {
        const [A, B] = line.split(' ').map(Number)
        console.log(findLCA(A,B))
    } else {
        rl.close()
    }
})
