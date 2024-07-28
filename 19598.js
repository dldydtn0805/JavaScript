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

    push(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyUp(i) {
        while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    heapifyDown(i) {
        const size = this.heap.length;
        let minIndex = i;

        while (true) {
            const left = this.leftChild(i);
            const right = this.rightChild(i);

            if (left < size && this.heap[left] < this.heap[minIndex]) {
                minIndex = left;
            }

            if (right < size && this.heap[right] < this.heap[minIndex]) {
                minIndex = right;
            }

            if (minIndex === i) break;

            this.swap(i, minIndex);
            i = minIndex;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }
}

const inputLines = [];

rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const [N] = inputLines[0].split(' ').map(Number);
    const arr = inputLines.slice(1).map(line => line.split(' ').map(Number));
    // 시작 시간 기준으로 정렬
    arr.sort((a, b) => a[0] - b[0]);

    const heap = new MinHeap();
    let ans = 0;

    for (const [start, end] of arr) {
        while (heap.size() > 0 && heap.peek() <= start) {
            heap.pop();
        }
        heap.push(end);
        ans = Math.max(ans, heap.size());
    }

    console.log(ans);
});
