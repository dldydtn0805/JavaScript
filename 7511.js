const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = []
let visited, tmp, adjList;
let ans = ''
let index = 0

function dfs(si) {
    if (!visited[si]) {
        visited[si] = tmp
        for (let ni of adjList[si]) {
            dfs(ni)
        }
    }
}

rl.on('line', (line) => {
    inputLines.push(line)
}).on('close', ()=>{
    const [T] = inputLines[index++].split(' ').map(Number)
    for (let tc = 0 ; tc < T; tc++) {
        const [n] = inputLines[index++].split(' ').map(Number)
        const [k] = inputLines[index++].split(' ').map(Number)
        adjList = new Array(n).fill().map(()=>[])
        for (let i = 0 ; i < k ; i++) {
            const [a, b] = inputLines[index++].split(' ').map(Number)
            adjList[a].push(b)
            adjList[b].push(a)
        }
        visited = new Array(n).fill().map(()=>0)
        tmp = 1

        for (let i = 0 ; i < n ; i++) {
            if (!visited[i]) {
                dfs(i)
                tmp ++
            }
        }

        const [m] = inputLines[index++].split(' ').map(Number)
        ans += (`Scenario ${tc+1}:\n`)
        for (let i = 0; i < m ; i++) {
            const [u, v] = inputLines[index++].split(' ').map(Number)
            if (visited[u] === visited[v]) {
                ans += '1\n'
            } else {
                ans += '0\n'
            }
        }
        ans += '\n'
    }
    console.log(ans)
})
