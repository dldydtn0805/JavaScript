const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputCounts = -1
let N
let tmp = []
let ans = 0
let arr = new Array(1001).fill().map(()=>[])

function calculate() {
    for (let i = 1000; i > 0; i--) {
        if (arr[i].length) {
            for (let j = 0; j < arr[i].length; j++) {
                tmp.push(arr[i][j])
            }
        }
        if (tmp.length) {
            tmp.sort((a,b) => a-b)
            ans += tmp.pop()
        }

    }
}

rl.on('line', (line)=> {
    inputCounts++
    if (inputCounts===0) {
        [N] = line.split(' ').map(Number)
    } else if (inputCounts < N+1) {
        let [d, w] = line.split(' ').map(Number)
        arr[d].push(w)
        if (inputCounts === N) {
            calculate()
            console.log(ans)
            rl.close()
        }
    }
})
