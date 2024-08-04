const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputCounts = -1
let N, M, K
let ans
let arr = []

rl.on('line', (line)=> {
    inputCounts++
    if (inputCounts === 0) {
        [N, M] = line.split(' ').map(Number)
    } else if (inputCounts < N+1) {
        arr.push(line.split(' ').map(Number))
    } else if (inputCounts === N+1) {
        for (let i = 1; i < N; i++) {
            arr[i][0] = arr[i-1][0] + arr[i][0]
        }
        for (let j = 1; j < M; j++) {
            arr[0][j] = arr[0][j-1] + arr[0][j]
        }
        for (let i = 1; i < N; i++) {
            for (let j = 1; j < M; j++) {
                arr[i][j] = arr[i-1][j] + arr[i][j-1] - arr[i-1][j-1] + arr[i][j]
            }
        }
        [K] = line.split(' ').map(Number)
    } else if (inputCounts < N+K+2) {
        let [x1, y1, x2, y2] = line.split(' ').map(Number)
        x1 -= 1
        y1 -= 1
        x2 -= 1
        y2 -= 1
        if (x1 === 0 && y1 === 0) {
            ans = arr[x2][y2]
        } else if (x1 === 0) {
            ans = arr[x2][y2] - arr[x2][y1-1]
        } else if (y1 === 0) {
            ans = arr[x2][y2] - arr[x1-1][y2]
        } else {
            ans = arr[x2][y2] - arr[x2][y1-1] - arr[x1-1][y2] + arr[x1-1][y1-1]
        }
        console.log(ans)
        if (inputCounts === N+K+1) {
            rl.close()
        }
    }

})
