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
    const [A, B, C, N] = inputLines[idx++].split(' ').map(Number)
    const rooms = new Array(3).fill(0);
    let ans = 0;
    for (let i = 0 ; i < Math.floor(301 / A) ; i++ ) {
        for (let j = 0 ; j < Math.floor( 301 / B); j ++) {
            for (let k = 0 ; k < Math.floor(301 / C); k ++) {
                if (A*i + B*j + C*k === N) {
                    ans = 1
                }
            }
        }
    }
    console.log(ans)
})
