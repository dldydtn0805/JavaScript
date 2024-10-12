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
    const [N, K] = inputLines[idx++].split(' ').map(Number)
    const rooms = new Array(5).fill(0)
    for (let i = 0 ; i < N ; i++) {
        const [S, Y] = inputLines[idx++].split(' ').map(Number)
        if (Y === 1 || Y === 2) {
            rooms[0] ++
        } else if (Y=== 3 || Y === 4) {
            if (S === 1) {
                rooms[1] ++
            } else {
                rooms[2] ++
            }
        } else if (Y === 5 || Y === 6) {
            if (S === 1) {
                rooms[3] ++
            } else {
                rooms[4] ++
            }
        }
    }
    const ans = rooms.reduce((cnt, room) => cnt + Math.ceil(room / K), 0);
    console.log(ans)
})
