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
    const [A, B, C] = inputLines[idx++].split(' ').map(Number)
    const [Q, W] = inputLines[idx++].split(' ').map(Number)
    const [E, R] = inputLines[idx++].split(' ').map(Number)
    const [T, Y] = inputLines[idx++].split(' ').map(Number)
    let s = 1
    let ans = 0
    const getPrice = (time) => {
        let cnt = 0
        if (Q <= time && time < W) {
            cnt ++
        }
        if (E <= time && time < R) {
            cnt ++
        }
        if (T <= time && time < Y) {
            cnt ++
        }
        if (cnt === 3) {
            return 3 * C
        } else if (cnt === 2) {
            return 2 * B
        } else if (cnt === 1) {
            return A
        } else {
            return 0
        }
    }
    while (s < 100) {
        ans += getPrice(s)
        s++
    }
    console.log(ans)
})
