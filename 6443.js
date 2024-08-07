const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = []
let N, alphabets, check, visited
let ans = ''
function getAnagram(res){
    if (res.length === alphabets.length) {
        ans += `${res}\n`
        return true
    } else {
        for (let i = 0 ; i < alphabets.length; i++) {
            let next = res+alphabets[i]
            if (!visited[i] && !check[next]) {
                check[next] = 1
                visited[i] = 1
                getAnagram(next)
                visited[i] = 0
            }
        }
    }
}
rl.on('line', (line) => {
    inputLines.push(line)
}).on('close', ()=> {
    [N] = inputLines[0].split(' ').map(Number)
    for (let tc = 1;  tc < inputLines.length; tc ++) {
        alphabets = inputLines[tc].split('').map(String)
        alphabets.sort()
        visited = new Array(alphabets.length).fill().map(()=>0)
        check = {}
        for (let i = 0 ; i < alphabets.length; i++) {
            if (!visited[i]) {
                check[alphabets[i]] = 1
                visited[i] = 1
                getAnagram(alphabets[i])
                visited[i] = 0
            }
        }
    }
    console.log(ans)
    rl.close()
})
