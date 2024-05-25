const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.on('line', (line)=>{
    inputs.push(line.trim().split(' ').map(Number));
}).on('close', ()=>{
    const N = inputs.shift();

    for (let i = 0; i < N; i++) {
        const [x1, y1, r1, x2, y2, r2] = inputs[i];
        const distance = Math.sqrt((x1-x2) ** 2  + (y1-y2) ** 2);

        if (distance === 0 && r1 === r2) {
            console.log(-1);

        } else if (Math.abs(r1-r2) === distance || r1 + r2 === distance) {
            console.log(1);

        } else if (Math.abs(r1 - r2) < distance && distance < r1 + r2) {
            console.log(2);
        } else {
            console.log(0);
        }
    }
    process.exit();
});