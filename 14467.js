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
    const [N] = inputLines[idx++].split(' ').map(Number);
    const dict = {}
    let ans = 0
    for (let i = 0; i < N; i++) {
        const [cow, pos] = inputLines[idx++].split(' ').map(Number);
        if (dict.hasOwnProperty(cow)) {
            if (dict[cow] !== pos) {
                dict[cow] = pos
                ans ++
            }
        } else {
            dict[cow] = pos
        }
    }
    console.log(ans)
});
