const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N
function check(mid, arr, ans) {
    let tmp = 0
    for (let i = 0; i < N; i++) {
        tmp += Math.abs(arr[i]-arr[mid])
    }
    if (tmp <= ans[0]) {
        ans[0] = tmp
        ans[1] = mid
        return true
    }
    return false
}

function binarySearch(start, end, arr) {
    const ans = [1e9, -1]
    while (start <= end) {
        let mid = (start + end) // 2
        if (check(mid, arr, ans)) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return arr[ans[1]]
}

const inputLines = []

rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    [N] = inputLines[0].split(' ').map(Number);
    const arr = inputLines[1].split(' ').map(Number);
    arr.sort((a, b) => a - b)
    console.log(binarySearch(0, N-1, arr))

})
