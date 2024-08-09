const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const inputLines = []
let N, M, testCase, adjList, users, K, value, ans

function floydWarshall() {
    let distance = new Array(N).fill().map(()=>
        new Array(N).fill().map(()=>1e9)
    )
    // 자기 자신으로의 거리는 0으로 초기화
    for (let i = 0 ; i < N ; i++) {
        distance[i][i] = 0
    }


    // 인접 리스트의 정보를 distance 배열에 반영
    for (let i = 0; i < N; i++) {
        for (let [nw, ni] of adjList[i]) {
            distance[i][ni] = Math.min(distance[i][ni], nw)
        }
    }

    // floydWarshall
    for (let k = 0; k < N; k++) {
        for (let i = 0 ; i < N ; i ++) {
            for (let j = 0 ; j < N ; j++) {
                distance[i][j] = Math.min(distance[i][j], distance[i][k]+ distance[k][j])
            }
        }
    }

    return distance
}

rl.on('line', (line) => {
    inputLines.push(line)
}).on('close', ()=> {
    [testCase] = inputLines.shift().split(' ').map(Number)
    for (let tc = 0; tc < testCase; tc++) {
        [N, M] = inputLines.shift().split(' ').map(Number)
        adjList = new Array(N).fill().map(()=>[])
        for (let m = 0; m < M; m++) {
            const [a, b, c] = inputLines.shift().split(' ').map(Number)
            adjList[a-1].push([c, b-1])
            adjList[b-1].push([c, a-1])
        }
        [K] = inputLines.shift().split(' ').map(Number)
        users = inputLines.shift().split(' ').map(Number)
        value = 1e9
        ans = -1
        let res = floydWarshall()
        for ( let i = 0; i < N; i++) {
            let tmp = 0
            for ( let user of users) {
                tmp += res[i][user-1]
            }
            if (value > tmp) {
                value = tmp
                ans = i
            }
        }
        console.log(ans+1)
    }
})
