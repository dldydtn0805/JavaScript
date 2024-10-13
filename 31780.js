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
    const [ X, M ] = inputLines[idx++].split(' ').map(Number);
    let ans = X
    let phoenix = [X]
    for (let i = 0; i < M; i ++){
        let next = []
        for (let j = 0 ; j < phoenix.length; j ++){
            let A = (Math.ceil(phoenix[j]/2))
            let B = (Math.floor(phoenix[j]/2))
            ans += A
            ans += B
            next.push(A)
            next.push(B)
        }
        phoenix = next
    }
    console.log(ans)
})
