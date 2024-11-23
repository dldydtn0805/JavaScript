const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = []
const INF = Number.MAX_SAFE_INTEGER;
let idx = 0
rl.on('line', (line)=>{
    inputLines.push(line)
}).on('close', ()=> {
    const words = inputLines[idx++].split('').map(String)
    const sets = new Set(['a','e','i','o','u'])
    let ans = 0
    for (let i = 0 ; i < words.length; i++) {
        if (sets.has(words[i])) {
            ans ++
        }
    }
    console.log(ans)
})
