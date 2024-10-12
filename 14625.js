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
    const [H1, M1] = inputLines[idx++].split(' ').map(Number);
    const [H2, M2] = inputLines[idx++].split(' ').map(Number);
    const [N] = inputLines[idx++].split(' ').map(String);
    let ans = 0;
    for (let i = M1; i < 60; i ++) {
        if (H1 === H2) {break}
        let currentH = H1 < 10 ? `0${H1}` : `${H1}`
        let currentI = i < 10 ? `0${i}` : `${i}`
        if (currentH.includes(N) || currentI.includes(N)) {
            ans ++
        }
    }
    for (let i = H1+1; i < H2; i ++) {
        if (H1 === H2) {break}
        for (let j = 0; j < 60; j ++) {
            let currentI = i < 10 ? `0${i}` : `${i}`
            let currentJ = j < 10 ? `0${j}` : `${j}`
            if (currentI.includes(N) || currentJ.includes(N)) {
                ans ++
            }

        }
    }
    for (let i = 0 ; i <= M2; i++) {
        if (H1 === H2) {break}
        let currentH = H2 < 10 ? `0${H2}` : `${H2}`
        let currentI = i < 10 ? `0${i}` : `${i}`
        if (currentH.includes(N) || currentI.includes(N)) {
            ans ++
        }

    }
    for (let i = M1 ; i <= M2; i++) {
        if (H1 !== H2) {break}
        let currentH = H2 < 10 ? `0${H1}` : `${H1}`
        let currentI = i < 10 ? `0${i}` : `${i}`
        if (currentH.includes(N) || currentI.includes(N)) {
            ans ++
        }

    }
    console.log(ans)
});
