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
    const [ T] = inputLines[idx++].split(' ').map(Number);
    for (let tc = 0 ; tc < T; tc++) {
        const [N] = inputLines[idx++].split(' ').map(Number);
        const arr = []
        let cnt = 0
        for (let i = 0 ; i < N ; i++ ) {
            const tmp = inputLines[idx++].split(' ').map(Number);
            arr.push(tmp)
        }
        const dp = new Array(N).fill().map(()=>1);
        for (let i = 1 ; i < dp.length; i++) {
            const [cur_w, cur_c] = arr[i]
            for (let j = 0; j < i ; j ++) {
                const [prev_w, prev_c] = arr[j]
                if (cur_w > prev_w && cur_c < prev_c) {
                    dp[i] = Math.max(dp[i], dp[j]+1)
                }
            }
        }
        console.log(Math.max(...dp))
    }
})
