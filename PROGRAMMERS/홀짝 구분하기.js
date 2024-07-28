const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isEven(num) {
    if (num % 2) {
        return `${num} is odd`;
    }
    else {
        return `${num} is even`;
    }
}

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    console.log(isEven(n));
});
