const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let M, N, queenBee
let inputCount = -1;
let grows
rl.on('line', (line) => {
    inputCount++
    if (inputCount === 0) {
        [M, N] = line.split(' ').map(Number)
        grows = new Array(2*M-1).fill().map(()=>1)
    } else if (inputCount < N + 1) {
        [zero, one, two] = line.split(' ').map(Number)
        for (let i = zero; i < zero+one; i++) {
            grows[i] += 1
        }
        for (let j = zero+one; j < 2*M-1; j++) {
            grows[j] += 2
        }
        if (inputCount === N) {
            for (let i = M-1; 0 <= i; i--) {
                console.log(grows[i]+' '+ grows.slice(M).join(' '))
            }
            rl.close()
        }
    }

})

/*
1. N은 100만이 최대입니다.
2. M은 700이 최대입니다.
3. grows에 바깥 여왕벌들의 크기를 담습니다
4. N번의 입력동안 grows를 갱신합니다
5. 입력 값은 [0, 1, 2]의 개수로 이루어집니다
6. 따라서 grows 배열의 범위를 다음과 같이 나눌 수 있습니다.
	- [0의 갯수 ~ (0의 갯수 + 1의 갯수)] : 이 경우는 1만큼 성장합니다
    - [(0의 갯수 +1의 갯수) ~ (0의 갯수 + 1의 갯수 + 2의 갯수)] : 이 경우는 2만큼 성장합니다
7. 바깥 여왕벌들을 다 구했다면 안쪽 여왕벌은 구한것과 다름이 없습니다.
8. 안쪽 여왕벌의 성장은 각 열의 맨 위 여왕벌의 성장과 같습니다.
9. 9시 11시 12시 여왕벌 성장의 영향을 받는 다는 조건이 있습니다.
10. 바깥 여왕벌의 성장은 줄어들지 않는다는 조건이 있습니다.
11. 따라서 12시 여왕벌의 성장에만 영향을 받습니다.
12. 결국 안쪽 여왕벌의 성장은 각 열의 맨 위 여왕벌의 성장과 같습니다.
13. 따라서 바깥 여왕벌의 성장인 grows를 적절히 슬라이싱해서 출력해준다면, 정답입니다.
*/
