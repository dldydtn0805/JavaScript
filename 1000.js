const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split(' ').map(Number);
    rl.close();
}).on('close', () => {
    const A = input[0];
    const B = input[1];
    const sum = A + B ;
    console.log(sum);
    process.exit();
});