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
    const [N, P] = inputLines[idx++].split(' ').map(Number);
    let cur = N;
    const dict = {}
    let cnt = 1;
    dict[cur] = cnt++;
    while (true) {
        cur *= N;
        cur %= P;
        if (dict.hasOwnProperty(cur)) {
            console.log(cnt - dict[cur]);
            break;
        } else {
            dict[cur] = cnt++;
        }
    }
});
