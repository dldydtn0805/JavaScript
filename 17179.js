const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = []
let index = 0
let ans = 0
let cakes
let res = ''

function check (minLen, num) {
    let cnt = 0
    let memo = 0
    let minValue = 1e9
    for (let i = 0; i < cakes.length; i++) {
        if (memo + cakes[i] >= minLen) {
            cnt ++
            minValue = Math.min(memo+cakes[i], minValue)
            memo = 0
        } else {
            memo += cakes[i]
        }
    }
    if (cnt-1 >= num) {
        ans = minValue
        return true
    } else {
        return false
    }
}
function binarySearch(start, end, cnt) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (check(mid, cnt)) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
}

rl.on('line', (line) => {
    inputLines.push(line)
}).on('close', ()=>{
    const [N, M, L] = inputLines[index++].split(' ').map(Number)
    const arr = []
    for (let i = 0; i < M ; i++) {
        const [s] = inputLines[index++].split(' ').map(Number)
        arr.push(s)
    }
    cakes = []
    cakes.push(arr[0])
    for (let i = 1; i < M; i++) {
        cakes.push(arr[i]-arr[i-1])
    }
    cakes.push(L-arr[M-1])
    for (let i = 0; i < N; i ++) {
        const [cur] = inputLines[index++].split(' ').map(Number)
        binarySearch(1, L, cur)
        res += `${ans}\n`
    }
    console.log(res)
})
