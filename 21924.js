const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(element) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyUp(i) {
        while (i > 0 && this.heap[this.parent(i)][0] > this.heap[i][0]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    heapifyDown(i) {
        let minIndex = i;
        const left = this.leftChild(i);
        const right = this.rightChild(i);

        if (left < this.heap.length && this.heap[left][0] < this.heap[minIndex][0]) {
            minIndex = left;
        }
        if (right < this.heap.length && this.heap[right][0] < this.heap[minIndex][0]) {
            minIndex = right;
        }

        if (i !== minIndex) {
            this.swap(i, minIndex);
            this.heapifyDown(minIndex);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


function prim (N, adjList, totalCost, si) {
    const visited = new Array(N).fill(0)
    visited[si] = 1
    const candidate = new MinHeap();
    adjList[si].forEach(item=>candidate.push(item))
    const mst = []
    let distance = 0
    while (!candidate.isEmpty()) {
        const [cw, ci, ni] = candidate.pop()
        if (!visited[ni]) {
            visited[ni] = 1
            mst.push([ci, ni])
            distance += cw
            adjList[ni].forEach(item=>{
                if (!visited[item[2]]) {
                    candidate.push(item)
                }
            })
        }
    }
    for (check of visited) {
        if (!check) {
            return -1
        }
    }
    return totalCost - distance
}

let N, M;
let adjList;
let totalCost = 0;
let inputCount = 0;

rl.on('line', (line)=>{
    if (inputCount === 0) {
        [N, M] = line.split(' ').map(Number);
        adjList = new Array(N).fill().map(()=> []);
        inputCount++;
    } else {
        let [a, b, cost] = line.split(' ').map(Number);
        totalCost += cost;
        a -= 1
        b -= 1
        adjList[a].push([cost, a, b]);
        adjList[b].push([cost, b, a]);
        inputCount++;
        if (inputCount === M + 1) {
            console.log(prim(N, adjList, totalCost, 0))
            rl.close();
        }
    }
})
