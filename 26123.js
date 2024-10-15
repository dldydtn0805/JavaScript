const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let idx = 0
const inputLines = []
rl.on('line', (line) => {
    inputLines.push(line)
}).on('close',()=>{
    const [N, D] = inputLines[idx++].split(' ').map(Number)
    const users = inputLines[idx++].split(' ').map(Number)
    const dict = {}
    let start = 0
    users.forEach((user) => {
        if (dict.hasOwnProperty(user)) {
            dict[user]++
        } else {
            dict[user] = 1
            start = Math.max(start, user)
        }
    })

    let ans = 0
    for (let i = 0; i < D; i++) {
        let cur = dict[start]
        ans += cur
        if (dict.hasOwnProperty(start-1)) {
            dict[start-1] += cur
        } else {
            dict[start-1] = cur
        }
        start --
        if (start === 0) {
            break
        }
    }
    console.log(ans)
})

