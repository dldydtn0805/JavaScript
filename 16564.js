const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let S, N;
const arr = []
inputLines = []
let idx = 0
rl.on('line', (line)=>{
    inputLines.push(line)
}).on('close', ()=> {
    const [N, K] = inputLines[idx++].split(' ').map(Number)
    const levels = []
    for (let i = 0 ; i < N ; i ++) {
        const [level] = inputLines[idx++].split(' ').map(Number)
        levels.push(level)
    }
    // x : 목표 레벨 / K : 사용 가능 레벨
    const check = (x) => {
        let interval = 0
        for (let i = 0; i < N; i++) {
            if (levels[i] < x) {
                interval += x - levels[i]
                if (interval > K) {return false}
            }
        }
        return true
    }

    const binarySearch = (s, e) => {
        let ans = s
        while (s <= e) {
            let mid = Math.floor((s+e)/2)
            if (check(mid)) {
                s = mid + 1
                ans = Math.max(ans, mid)
            } else {
                e = mid - 1
            }
        }
        return ans
    }
    const minValue = Math.min(...levels)
    const maxValue = minValue + K
    console.log(binarySearch(minValue, maxValue))
})
