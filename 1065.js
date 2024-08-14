const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function check(num) {
    let tmp = String(num)
    if (tmp.length > 1) {
        let memo = Number(tmp[1]) - Number(tmp[0])
        for (let i = 2 ; i < tmp.length ; i++) {
            if (Number(tmp[i]) - Number(tmp[i-1]) !== memo) {
                return false
            }
        }
    }
    return true
}

rl.on('line', (line)=>{
    const ans = new Array(1001).fill().map(()=>0)
    ans[1] = 1
    for (let i = 2; i < 1001; i++) {
        if (check(i)) {
            ans[i] = ans[i-1] + 1
        } else {
            ans[i] = ans[i-1]
        }
    }
    [N] = line.split(' ').map(Number)
    console.log(ans[N])
    rl.close()
})
