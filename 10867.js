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
    const [N] = inputLines[idx++].split(' ').map(Number);
    const arr = inputLines[idx++].split(' ').map(Number);
    const ans = Array.from(new Set(arr));
    ans.sort((A, B)=> A-B);
    console.log(ans.join(' '))
})
