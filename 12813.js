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
    const [A] = inputLines[idx++].split(' ').map(String)
    const [B] = inputLines[idx++].split(' ').map(String)
    const N = A.length
    let Q = ''
    for (let i = 0 ; i < N; i ++) {
        if (A[i] === '1' && B[i] === '1') {
            Q += '1'
        } else {
            Q += '0'
        }
    }
    let W = ''
    for (let i = 0 ; i < N; i ++) {
        if (A[i] === '1' || B[i] === '1') {
            W += '1'
        } else {
            W += '0'
        }
    }
    let E = ''
    for (let i = 0 ; i < N; i ++) {
        if (A[i] !== B[i]) {
            E += '1'
        } else {
            E += '0'
        }
    }
    let R = ''

    for (let i = 0 ; i < N; i ++) {
        if (A[i] !== '1') {
            R += '1'
        } else {
            R += '0'
        }
    }
    let T = ''

    for (let i = 0 ; i < N; i ++) {
        if (B[i] !== '1') {
            T += '1'
        } else {
            T += '0'
        }
    }
    console.log(Q)
    console.log(W)
    console.log(E)
    console.log(R)
    console.log(T)
})
