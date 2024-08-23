const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let N
const arr = []
let inputCounts = -1
rl.on('line', (line) => {
    inputCounts++
    if (inputCounts === 0) {
        [N] = line.split(' ').map(Number)
    } else if (inputCounts < N+1) {
        arr.push(line.split(' ').map(Number))
        if (inputCounts === N) {
            function getPosition (size) {
                const babyShark = [0, 0]
                const fishes = []
                for (let i = 0; i < N ; i ++) {
                    for (let j = 0 ; j < N ; j ++) {
                        if (arr[i][j] === 9) {
                            babyShark[0] = i
                            babyShark[1] = j
                        } else if (0 < arr[i][j] && arr[i][j] < size) {
                            fishes.push([i, j])
                        }
                    }
                }
                return [babyShark, fishes]
            }

            function getFish(si, sj, size) {
                queue = []
                queue.push([si, sj])
                const visited = new Array(N).fill().map(()=>
                    new Array(N).fill().map(()=>-1)
                )
                visited[si][sj] = 0
                while (queue.length) {
                    let [ci, cj] = queue.shift()
                    for (let [di, dj] of [[1,0],[-1,0],[0,1],[0,-1]]) {
                        let [ni, nj] = [ci+di, cj+dj]
                        if (0<=ni && ni<N && 0<=nj && nj < N) {
                            if (visited[ni][nj]===-1) {
                                if (arr[ni][nj] <= size) {
                                    visited[ni][nj] = visited[ci][cj] + 1
                                    queue.push([ni, nj])
                                }
                            }
                        }

                    }
                }
                let curFishes = []
                let curTime = 0
                for (let [fi, fj] of fishes) {
                    if (visited[fi][fj] !== -1) {
                        curFishes.push([visited[fi][fj], [fi, fj]])
                    }
                }
                if (curFishes.length) {
                    curFishes.sort((a, b)=>a[0]-b[0])
                    let [qt, [qi, qj]] = curFishes[0]
                    arr[si][sj] = 0
                    arr[qi][qj] = 9
                    curTime += qt
                    return [true, curTime]
                } else
                    return [false, curTime]

            }

            let flag = true
            let time = 0
            let size = 2
            let eatCnt = 0
            while (flag) {
                [babyShark, fishes] = getPosition(size)
                let [available, next] = getFish(babyShark[0], babyShark[1], size)
                time += next
                if (!available) {
                    flag = false
                } else {
                    eatCnt++
                    if (eatCnt === size) {
                        size++
                        eatCnt = 0
                    }
                }

            }
            console.log(time)
            rl.close()
        }
    }

})
