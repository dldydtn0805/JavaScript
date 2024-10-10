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
    const [T] = inputLines[idx++].split(' ').map(Number)
    for (let tc = 0 ; tc < T ; tc++) {
        const [num, string] = inputLines[idx++].split(' ').map(String)
        let ans = 0
        if (string === 'kg') {
            ans = `${(num*2.2046).toFixed(4)} lb`
        } else if (string === 'lb') {
            ans = `${(num*0.4536).toFixed(4)} kg`
        } else if (string === 'l') {
            ans = `${(num*0.2642).toFixed(4)} g`
        } else {
            ans = `${(num*3.7854).toFixed(4)} l`
        }
        console.log(ans)
    }
})
