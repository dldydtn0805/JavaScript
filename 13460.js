const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function move(cri, crj, cbi, cbj, di, dj, visited, arr) {
    let red = true
    let blue = true
    let flag = false
    let nri = cri
    let nrj = crj
    let nbi = cbi
    let nbj = cbj
    for (let i = 0; i < 20; i++) {
        if (red) {
            nri = nri + di
            nrj = nrj + dj
            if (arr[nri][nrj] === 'O') {
                flag = true
            }
        }
        if (blue) {
            nbi = nbi + di
            nbj = nbj + dj
            if (arr[nbi][nbj] === 'O') {
                return [cri, crj, cbi, cbj]
            }
        }
        if (arr[nri][nrj] === '#') {
            nri = nri - di
            nrj = nrj - dj
            red = false
        }
        if (arr[nbi][nbj] === '#') {
            nbi = nbi - di
            nbj = nbj - dj
            blue = false
        }
        if (nri === nbi && nrj === nbj) {
            if (red) {
                nri = nri - di
                nrj = nrj - dj
                red = false
            }
            if (blue) {
                nbi = nbi - di
                nbj = nbj - dj
                blue = false
            }
        }
    }
    if (flag) {
        if (visited[cri][crj][cbi][cbj] + 1 <= 10) {
            console.log(visited[cri][crj][cbi][cbj] + 1)
            process.exit()
        }
    }
    return [nri, nrj, nbi, nbj]
}
function bfs(ri, rj, bi, bj, ei, ej, N, M, arr) {
    const queue = []
    queue.push([ri, rj, bi, bj])
    const visited = new Array(N).fill().map(()=>
        new Array(M).fill().map(()=>
            new Array(N).fill().map(()=>
                new Array(M).fill(-1)
            )
        )
    )
    visited[ri][rj][bi][bj] = 0
    while (queue.length > 0) {
        const [cri, crj, cbi, cbj] = queue.shift()
        for ([di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const [nri, nrj, nbi, nbj] = move(cri, crj, cbi, cbj, di, dj, visited, arr)
            if (visited[nri][nrj][nbi][nbj] === -1) {
                queue.push([nri, nrj, nbi, nbj])
                visited[nri][nrj][nbi][nbj] = visited[cri][crj][cbi][cbj] + 1
            }
        }
    }
}

const inputLines = []
rl.on('line', (line)=> {
    inputLines.push(line);
}).on('close', ()=> {
    const [N, M] = inputLines[0].split(' ').map(Number)
    const arr = inputLines.slice(1).map(line => line.split(''))
    let ri, rj, bi, bj, ei, ej
    for (let i=0; i < N ; i++) {
        for (let j = 0 ; j < M; j++) {
            if (arr[i][j] === 'R') {
                ri = i
                rj = j
            } else if (arr[i][j] === 'B') {
                bi = i
                bj = j
            } else if (arr[i][j] === 'O') {
                ei = i
                ej = j
            }
        }
    }
    bfs(ri, rj, bi, bj, ei, ej, N, M, arr)
    console.log(-1)
})
