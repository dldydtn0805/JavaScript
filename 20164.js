const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getCount(string) {
    let cnt = 0;
    for (let item of string) {
        if (Number(item) % 2) {
            cnt++
        }
    }
    return cnt
}

function divideNumberMax(string) {
    if (string.length === 1) {
        return getCount(string);
    } else if (string.length === 2) {
        let tmp = getCount(string);
        tmp += divideNumberMax(String(Number(string[0])+Number(string[1])));
        return tmp;
    } else {
        let maxV = 0;
        for (let i = 1; i < string.length-1; i++) {
            for (let j = i+1; j < string.length; j++) {
                let tmp = getCount(string);
                tmp += divideNumberMax(String(Number(string.slice(0, i)) + Number(string.slice(i, j)) + Number(string.slice(j))));
                maxV = Math.max(maxV, tmp);
            }
        }
        return maxV;
    }
}

function divideNumberMin(string) {
    if (string.length === 1) {
        return getCount(string);
    } else if (string.length === 2) {
        let tmp = getCount(string);
        tmp += divideNumberMin(String(Number(string[0])+Number(string[1])));
        return tmp;
    } else {
        let minV = 1e9;
        for (let i = 1; i < string.length-1; i++) {
            for (let j = i+1; j < string.length; j++) {
                let tmp = getCount(string);
                tmp += divideNumberMin(String(Number(string.slice(0, i)) + Number(string.slice(i, j)) + Number(string.slice(j))));
                minV = Math.min(minV, tmp);
            }
        }
        return minV;
    }
}

const inputLines = []
rl.on('line', (line)=> {
    inputLines.push(line);
}).on('close', ()=> {
    const [N, M] = inputLines[0].split(' ').map(String)
    console.log(divideNumberMin(String(N)), divideNumberMax(String(N)))
})

