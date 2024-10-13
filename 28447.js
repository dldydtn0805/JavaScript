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
    const [ N, K ] = inputLines[idx++].split(' ').map(Number);
    const arr = []
    for (let i = 0; i < N ; i ++) {
        const input = inputLines[idx++].split(' ').map(Number);
        arr.push(input)
    }
    let ans = -1e9
    const visited = new Array(N).fill(0)
    function backtracking (cur, cnt) {
        if (cnt === K) {
            let tmp = 0
            for (let i = 0; i < N ; i++) {
                for (let j = i+1; j < N; j ++) {
                    if (visited[i] && visited[j]) {
                        tmp += arr[i][j]
                    }
                }
            }
            ans = Math.max(ans, tmp)
            return
        }
        for (let i = cur; i < N; i++) {
            if (!visited[i]) {
                visited[i] = 1
                backtracking(i+1, cnt+1)
                visited[i] = 0
            }
        }
    }
    backtracking(0, 0)
    console.log(ans)
})

