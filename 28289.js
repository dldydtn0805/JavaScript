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
    const [P] = inputLines[idx++].split(' ').map(Number);
    let ans = [0, 0, 0, 0]
    for (let i = 0 ; i < P ; i ++) {
        const [G, C, N]  = inputLines[idx++].split(' ').map(Number);
        if (G !== 1) {
            if (C === 1 || C === 2) {
                ans[0]++
            } else if (C === 3) {
                ans[1]++
            } else if (C === 4) {
                ans[2]++
            }
        } else {
            ans[3]++
        }
    }
    ans.forEach((ele)=>console.log(ele));
});
