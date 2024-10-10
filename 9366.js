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
    const getTriangle = (A, B, C) => {
        if ((A+B) <= C) {return 'invalid!'}
        if (A === B && B === C) {
            return 'equilateral'
        } else if (A === B || B === C || C === A) {
            return 'isosceles'
        } else {
            return 'scalene'
        }
    }
    for (let tc = 0 ; tc < T ; tc ++) {
        const triangle = inputLines[idx++].split(' ').map(Number)
        triangle.sort((X,Y)=>X-Y)
        const [A, B, C] = triangle
        console.log(`Case #${tc+1}: ${getTriangle(A, B, C)}`)
    }
})
