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
    const [N, M] = inputLines[idx++].split(' ').map(Number)
    const exam = []
    for (let i = 0 ; i < 3*N; i++) {
        const arr = inputLines[idx++].split('').map(String);
        exam.push(arr);
    }
    const directions = [
        [
            [-1, -1],
            [-1,0],
            [-1,1],
            [-1,2],
            [-1,3],
            [0,-2],
            [0,4],
            [1,-1],
            [1,0],
            [1,1],
            [1,2],
            [1,3]
        ],
        [
            [-1, -1],
            [-1,0],
            [-1,1],
            [-1,2],
            [-1,3],
            [-1,4],
            [0,-2],
            [0,5],
            [1, -1],
            [1,0],
            [1,1],
            [1,2],
            [1,3],
            [1,4]
        ],
        [
            [-1, 1],
            [0,0],
            [1, -1]
        ],
    ]
    for (let i = 0; i < 3*N; i++) {
        for (let j = 0; j < 8 * M; j++) {
            if (exam[i][j] === '+') {
                const A = exam[i][j - 1]
                const B = exam[i][j + 1]
                const C = exam[i][j + 4] !== '.' ? exam[i][j + 3] + exam[i][j + 4] : exam[i][j + 3]
                if (Number(A) + Number(B) === Number(C)) {
                    if (Number(C) < 10) {
                        for (const [di, dj] of directions[0]) {
                            const ni = i + di
                            const nj = j + dj
                            exam[ni][nj] = '*';
                        }
                    } else {
                        for (const [di, dj] of directions[1]) {
                            const [ni, nj] = [i + di, j + dj]
                            exam[ni][nj] = '*';
                        }
                    }
                } else {
                    for (const [di, dj] of directions[2]) {
                        const [ni, nj] = [i + di, j + dj]
                        exam[ni][nj] = '/';
                    }
                }
            }
        }
    }
    exam.forEach((elem)=>console.log(elem.join('')))
})
