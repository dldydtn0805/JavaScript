const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = []
let idx = 0
const INF = Number.MAX_SAFE_INTEGER
rl.on('line', (line)=>{
    inputLines.push(line)
}).on('close', ()=> {
    const [N,M] = inputLines[idx++].split(' ').map(Number)
    const signal = []
    for (let i = 0; i < N; i++) {
        signal.push(inputLines[idx++].split('').map(String))
    }
    let [PR, PC] = inputLines[idx++].split(' ').map(Number)
    PR --
    PC --
    // ci : curIndex / visited : visitedSet

    const directions = [
        [-1, 0], // 0 : U
        [0, 1], // 1 : R
        [1, 0], // 2 : D
        [0, -1] // 3 : L
    ]

    const getDir = (dir, style) => {
        if (style === '\\') {
            if (dir === 0) {
                return 3
            } else if (dir === 1) {
                return 2
            } else if (dir === 2) {
                return 1
            } else {
                return 0
            }
        } else {
            if (dir === 0) {
                return 1
            } else if (dir === 1) {
                return 0
            } else if (dir === 2) {
                return 3
            } else {
                return 2
            }
        }
    }

    const dfs = (si, sj, dir) => {
        const stack = []
        const visited = new Set()
        visited.add(`${si},${sj},${dir}`)
        stack.push([si, sj, dir, 1])
        let res = 1
        while (stack.length > 0) {
            const [ci, cj, curDir, cTime] = stack.pop()
            const [di, dj] = directions[curDir]
            const [ni, nj] = [ci+di, cj+dj]
            if (0<= ni && ni < N && 0<=nj && nj < M) {
                if (signal[ni][nj] === '/' || signal[ni][nj] === '\\') {
                    const nextDir = getDir(curDir, signal[ni][nj])
                    if (!visited.has(`${ni},${nj},${nextDir}`)) {
                        visited.add(`${ni},${nj},${nextDir}`)
                        stack.push([ni, nj, nextDir, cTime+1])
                        res = Math.max(res, cTime+1)
                    } else {
                        return INF
                    }
                } else if (signal[ni][nj] === 'C') {
                    continue
                } else {
                    if (!visited.has(`${ni},${nj},${curDir}`)) {
                        visited.add(`${ni},${nj},${curDir}`)
                        stack.push([ni, nj, curDir, cTime+1])
                        res = Math.max(res, cTime+1)
                    } else {
                        return INF
                    }
                }
            }
        }
        return res
    }
    let ansValue = -1
    let ansKey = -1
    for (let i = 0 ; i < 4; i ++) {

        const curValue = dfs(PR, PC, i)
        if (curValue > ansValue) {
            ansValue = curValue
            ansKey = i
        }
    }
    console.log(['U','R','D','L'][ansKey])
    console.log(ansValue === INF ? 'Voyager' : ansValue)
})
