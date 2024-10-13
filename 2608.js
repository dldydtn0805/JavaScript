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
    const [ Q] = inputLines[idx++].split(' ').map(String);
    const [ W] = inputLines[idx++].split(' ').map(String);

    const normal = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }

    const dual = {
        'IV' : 4,
        'IX' : 9,
        'XL' : 40,
        'XC' : 90,
        'CD' : 400,
        'CM' : 900
    }

    const multi = {
        'II' : 2,
        'III' : 3,
        'XX' : 20,
        'XXX' : 30,
        'CC' : 200,
        'CCC' : 300,
        'MM' : 2000,
        'MMM' : 3000,
    }

    function getRoman (A) {
        let num = 0
        let cur = A[0]
        for (let i = 1; i < A.length; i++) {
            if (dual.hasOwnProperty(cur+A[i]) || multi.hasOwnProperty(cur+A[i])) {
                cur += A[i]
            } else {
                if (dual.hasOwnProperty(cur)) {
                    num += dual[cur]
                } else if (multi.hasOwnProperty(cur)) {
                    num += multi[cur]
                } else {
                    num += normal[cur]
                }
                cur = A[i]
            }
        }
        if (dual.hasOwnProperty(cur)) {
            num += dual[cur]
        } else if (multi.hasOwnProperty(cur)) {
            num += multi[cur]
        } else {
            num += normal[cur]
        }
        return num
    }

    const q = (getRoman(Q))
    const w = (getRoman(W))
    const numbers = []

    for (let key in normal) {
        numbers.push([normal[key], key])
    }

    for (let key in dual) {
        numbers.push([dual[key], key])
    }

    for (let key in multi) {
        numbers.push([multi[key], key])
    }
    numbers.sort((a, b) => b[0] - a[0])

    function getHindu (X) {
        let cur = X
        let string = ''
        for (let i = 0; i < numbers.length; i++) {
            if (cur >= numbers[i][0]) {
                cur -= numbers[i][0]
                string += numbers[i][1]
            }
        }
        return string
    }
    console.log(q+w)
    console.log(getHindu(q+w))
})

