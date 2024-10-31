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
    const [N, M] = inputLines[idx++].split(' ').map(Number)
    const expense = []
    for (let i = 0; i < N ; i ++) {
        const [cash] = inputLines[idx++].split(' ').map(Number)
        expense.push(cash)
    }
    const check = (x) => {
        let cnt = 0
        let wallet = 0
        for (let i = 0; i < expense.length; i++) {
            if (x < expense[i]) {
                return false
            }
            if (wallet >= expense[i]) {
                wallet -= expense[i]
            } else {
                cnt += 1
                if (cnt > M) {
                    return false
                }
                wallet = x
                wallet -= expense[i]
            }
        }
        return true
    }

    const binarySearch = (s, e) => {
        let ans = e
        while (s <= e) {
            let mid = Math.floor((s + e)/2)
            if (check(mid)) {
                ans = Math.min(ans, mid)
                e = mid - 1
            } else {
                s = mid + 1
            }
        }
        return ans
    }
    console.log(binarySearch(1, 10000000000))

})

