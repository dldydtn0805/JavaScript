const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = [];
    let idx = 0;
    rl.on('line', (line) => {
        inputLines.push(line);
    }).on('close', () => {
        const [n, k] = inputLines[idx++].split(' ').map(Number);
        const arr = []
        for (let i = 0; i < n ; i++) {
            const [w, s, e] = inputLines[idx++].split(' ').map(Number);
            if (w !== 5) {
                arr.push([w, s, e])
            }
        }
        const visited = new Array(5).fill().map(()=>
        new Array(11).fill().map(()=>0)
    )
    const prefix = new Array(arr.length).fill(0);
    const ans = new Set();
    function dfs (cur, value) {
        if (value === k) {
            ans.add(prefix.join(' '))
            return
        }
        if (cur === arr.length || value > k) {
            return
        }
        for (let i = cur+1 ; i < arr.length ; i ++) {
            const [cur_w, cur_s, cur_e] = arr[i];
            let flag = true
            for (let j = cur_s; j <= cur_e; j++) {
                if (visited[cur_w][j]) {
                    flag = false
                }
            }
            if (flag && !prefix[i]) {
                for (let j = cur_s; j <= cur_e; j++) {
                    visited[cur_w][j] = 1;
                }
                prefix[i] = 1
                dfs(i, value+cur_e-cur_s+1)
                prefix[i] = 0
                for (let j = cur_s; j <= cur_e; j++) {
                    visited[cur_w][j] = 0;
                }
            } else {
                dfs(i+1, value);
            }

        }

    }
    dfs(-1, 0, [])
    console.log(ans.size)
});
