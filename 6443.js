const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = []
let N, arr, alphabets, check, visited

function getAnagram(res){
    if (res.length === alphabets.length) {
        console.log(res)
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
    if (inputLines.length === Number(inputLines[0]) + 1) {
        rl.close()
    }
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
})
