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
    const [N] = inputLines[idx++].split(' ').map(Number)
    for (let tc = 0 ; tc < N ; tc++) {
        const [G] = inputLines[idx++].split(' ').map(Number)
        const students = []
        for (let i = 0 ; i < G; i ++) {
            const [student] = inputLines[idx++].split(' ').map(Number)
            students.push(student)
        }
        let ans = 1
        while (true) {
            const prefix = students.map((student)=>student%ans)
            const next = new Set(prefix)
            if (next.size === G) {
                console.log(ans)
                break;
            } else {
                ans ++
            }
        }
    }
})
