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
    const [N] = inputLines[idx++].split(' ').map(Number);
    const colors = {}
    for (let i = 0 ; i < N ; i ++) {
        const [y, x] = inputLines[idx++].split(' ').map(Number);
        if (!colors.hasOwnProperty(x)) {colors[x] = []; colors[x].push(y)}
        else {colors[x].push(y)}
    }
    let ans = 0
    for (let key in colors) {
        colors[key].sort((a, b)=>a-b);
        for (let i = 0; i < colors[key].length; i ++) {
            let v = 1e9
            for (let di of [-1, 1]) {
                let ni = i + di
                if (0 <= ni && ni <colors[key].length) {
                    v = Math.min(v, Math.abs(colors[key][ni]-colors[key][i]))
                }
            }
            ans += v
        }
    }
    console.log(ans)
})
