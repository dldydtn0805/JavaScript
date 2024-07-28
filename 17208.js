const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const [N, M, K] = inputLines[0].split(' ').map(Number);
    const orders = inputLines.slice(1).map(line => line.split(' ').map(Number));
    const dp = Array(N+1).fill().map(()=>
        Array(M+1).fill().map(()=>
            Array(K+1).fill(0)
        )
    );
    for (let i = 1; i <= N; i++) {
        for (let j = 0; j <= M; j++) {
            for (let k = 0; k <= K; k++) {
                // i번째 주문을 처리하지 않는 경우
                dp[i][j][k] = dp[i-1][j][k];

                // i번째 주문을 처리할 수 있는 경우
                if (j >= orders[i-1][0] && k >= orders[i-1][1]) {
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i-1][j-orders[i-1][0]][k-orders[i-1][1]] + 1);
                }
            }
        }
    }

    let maxOrders = 0;
    for (let j = 0; j <= M; j++) {
        for (let k = 0; k <= K; k++) {
            maxOrders = Math.max(maxOrders, dp[N][j][k]);
        }
    }
    console.log(maxOrders);

});
