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
    const [N] = inputLines[idx++].split(' ').map(Number)
    const princess = []
    for (let i = 0 ; i < N ; i ++) {
        const item = inputLines[idx++].split('').map(String)
        princess.push(item)
    }
    const [K] = inputLines[idx++].split(' ').map(Number)
    const mirror = (K, arr) => {
        let ans = ''
        if (K === 1) {
            for (let i = 0 ; i < N ; i ++) {
                for (let j = 0 ; j < N ; j++) {
                    ans += (arr[i][j])
                }
                ans += '\n'
            }
        } else if (K === 2) {
            for (let i = 0 ; i < N ; i ++){
                for (let j = N-1 ; j >= 0 ; j--) {
                    ans +=(arr[i][j])
                }
                ans += '\n'
            }
        } else if (K===3) {
            for (let i = N-1; i >= 0; i-- ) {
                for (let j = 0; j < N ; j++) {
                    ans += (arr[i][j])
                }
                ans += '\n'
            }
        }
        return ans
    }
    console.log(mirror(K, princess))
})
