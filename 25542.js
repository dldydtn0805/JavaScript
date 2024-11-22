const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let S, N;
const arr = []
inputLines = []
let idx = 0
rl.on('line', (line)=>{
    inputLines.push(line)
}).on('close', ()=> {
    const [N, L] = inputLines[idx++].split(' ').map(Number)
    const memories = []
    for (let i = 0 ; i < N; i ++) {
        memories.push(inputLines[idx++].split('').map(String))
    }
    const ans = []
    for (let i = 0; i < N; i ++) {
        for (let j = 0; j < L ; j++) {
            for (let k = 0; k < 26; k++) {
                let candidate = [...memories[i]]
                const alphabet = String.fromCharCode(65+k)
                candidate[j] = alphabet
                let flag = true
                for (let k = 0; k < N; k++) {
                    let cnt = 0
                    for (let l = 0; l < L; l ++) {
                        if (i === k) {
                            continue
                        }
                        if (candidate[l] !== memories[k][l]) {
                            cnt ++
                        }
                    }
                    if (cnt > 1) {
                        flag = false
                    }
                }
                if (flag) {
                    ans.push(candidate.join(''))
                }
            }
        }
    }
    if (ans.length === 0) {
        console.log('CALL FRIEND')
    } else {
        console.log(ans[0])
    }
})
