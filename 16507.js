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
    const [ R, C, Q ] = inputLines[idx++].split(' ').map(Number);
    const pictures = []
    for (let i = 0; i < R; i ++) {
        pictures.push(inputLines[idx++].split(' ').map(Number));
    }
    const prefix = new Array(R).fill().map(()=>
        new Array(C).fill().map(()=>0)
    )
    prefix[0][0] = pictures[0][0]
    for (let i = 1; i < C; i ++) {
        prefix[0][i] = prefix[0][i-1] + pictures[0][i]
    }
    for (let i = 1 ; i < R; i++) {
        prefix[i][0] = prefix[i-1][0] + pictures[i][0]
    }
    for (let i = 1; i < R; i++) {
        for (let j = 1; j < C; j++) {
            prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1] + pictures[i][j]
        }
    }
    for (let tc = 0; tc < Q; tc++) {
        const [r1, c1, r2, c2] = inputLines[idx++].split(' ').map(Number);
        let tmp
        if (r1 === 1 && c1 === 1) {
            tmp = prefix[r2-1][c2-1]
        } else if (r1 === 1) {
            tmp = prefix[r2-1][c2-1] - prefix[r2-1][c1-2]
        } else if (c1 === 1) {
            tmp = prefix[r2-1][c2-1] - prefix[r1-2][c2-1]
        } else {
            tmp = prefix[r2-1][c2-1] - prefix[r2-1][c1-2] - prefix[r1-2][c2-1] + prefix[r1-2][c1-2]
        }
        let cnt = (r2-r1+1) * (c2-c1+1)
        console.log(Math.floor(tmp/cnt))
    }
})

