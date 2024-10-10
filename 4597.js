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
    const N = inputLines.length-1
    for (let tc = 0; tc < N ; tc ++) {
        const string = inputLines[idx++].split('').map(String)
        const num = string.reduce((cnt, cur) => cur === '1' ? cnt + 1 : cnt, 0)
        const M = string.length-1
        const last = string[M]
        if (last === 'e') {
            if (num % 2) {
                string[M] = '1'
            } else {
                string[M] = '0'
            }
        } else {
            if (num % 2) {
                string[M] = '0'
            } else  {
                string[M] = '1'
            }
        }
        console.log(string.join(''))
    }
})
