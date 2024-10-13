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
    const [ S] = inputLines[idx++].split(' ').map(Number);
    const englishKorean = []
    for (let i = 0; i < 201; i ++) {
        englishKorean.push([508*i, i])
    }
    for (let i = 1; i < 201; i ++) {
        englishKorean.push([108*i, i])
    }
    englishKorean.sort((a, b) => a - b)

    const mathScience = []
    for (let i = 0; i < 201; i ++) {
        mathScience.push([212*i, i]);
    }
    for (let i = 1; i < 201; i ++) {
        mathScience.push([305*i, i]);
    }
    mathScience.sort((a, b) => a - b)
    let ans = []
    for (let i = 0; i < englishKorean.length; i++) {
        for (let j = 0; j < mathScience.length; j++) {
            if ((englishKorean[i][0]+mathScience[j][0])*4763 === S) {
                ans.push([englishKorean[i][1], mathScience[j][1]])
            }
        }
    }
    ans = Array.from(new Set(ans));
    ans.sort((a, b) => {
        if (a[0] ===b[0]) {
            return a[1]- b[1]
        } else {
            return a[0] - b[0]
        }
    })
    console.log(ans.length)
    ans.forEach(
        (item) => console.log(item.join(' '))
    )

})
