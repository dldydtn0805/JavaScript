const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, M, arr;

const bfs = (start) => {
  const visited = new Array(N).fill(0);
  const queue = [];
  visited[start] = 1;
  queue.push(start);

  while (queue.length > 0) {
    const cur = queue.shift();
    for (const i of arr[cur]) {
      if (!visited[i]) {
        visited[i] = 1;
        queue.push(i);
      }
    }
  }

  return visited;
};

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M] = input.shift().split(' ').map(Number);
  arr = new Array(N).fill().map(() => []);

  for (let i = 0; i < M; i++) {
    const [a, b] = input[i].split(' ').map((x) => parseInt(x) - 1);
    arr[a].push(b);
  }

  const ans = [];
  for (let i = 0; i < N; i++) {
    ans.push(bfs(i));
  }

  let cnt = 0;
  for (let i = 0; i < ans.length; i++) {
    let flag = true;
    for (let j = 0; j < ans[i].length; j++) {
      if (ans[i][j] === 0 && ans[j][i] === 0) {
        flag = false;
        break;
      }
    }
    if (flag) cnt++;
  }

  console.log(cnt);
  rl.close();
});
