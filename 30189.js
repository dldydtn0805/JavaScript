const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = [];
let idx = 0;
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const [n, m] = inputLines[idx++].split(' ').map(Number);

    const getCnt = (n, m, num) => {
        let cnt = 0
        for (let i = 0; i <= n ; i++) {
            for (let j = 0 ; j <= m ; j++) {
                if (i + j === num) {
                    cnt ++
                }
            }
        }
        return cnt
    }
    let ans = 0
    for (let i = 0; i <= n+m; i++) {
        ans += getCnt(n, m, i)
    }
    console.log(ans)
});
