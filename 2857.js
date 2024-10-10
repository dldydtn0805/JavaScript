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
    const check = (string) => {
        if (string.includes('FBI')) {return true}
        else {return false}
    }
    let ans = []
    for (let i = 0; i < 5; i ++) {
        const [user] = inputLines[idx++].split(' ').map(String)
        if (check(user)) {ans.push(i+1)}
    }
    if (ans.length) {
        console.log(ans.join(' '))
    } else {
        console.log("HE GOT AWAY!")
    }
})
