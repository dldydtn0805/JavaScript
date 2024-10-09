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
    const strings = inputLines[idx++].split('').map(String)
    const ans = ['U', 'C', 'P', 'C']
    for (let i = 0 ; i < strings.length; i ++) {
        if (ans[0] === strings[i]) {ans.shift()}
    }
    if (!(ans.length)) {console.log('I love UCPC')}
    else {console.log("I hate UCPC")}

})
