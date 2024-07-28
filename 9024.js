const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = [];

function twoPointer(arr, K) {
    let i = 0;
    let j = arr.length - 1;
    let minValue = 1e9
    let ans = 0;

    while (i < j) {
        let cur = arr[i] + arr[j];
        let value = Math.abs(cur-K)
        if (value < minValue) {
            minValue = value;
            ans = 1
        } else if (value === minValue) {
            ans += 1
        }

        if (cur < K) {
            i += 1
        } else {
            j -= 1
        }
    }
    return ans
}

rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const [T] = inputLines[0].split(' ').map(Number);
    inputLines.shift();

    for (let tc = 0; tc < T; tc ++ ) {
        const [n, K] = inputLines[0].split(' ').map(Number);
        inputLines.shift();
        const arr = inputLines[0].split(' ').map(Number);
        inputLines.shift();

        arr.sort((a, b) => a - b)
        console.log(twoPointer(arr, K))

    }
});
