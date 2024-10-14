const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return max;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _bubbleDown(index) {
        const lastIndex = this.heap.length - 1;
        while (true) {
            let smallestIndex = index;
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;

            if (leftIndex <= lastIndex && this.heap[leftIndex][0] < this.heap[smallestIndex][0]) {
                smallestIndex = leftIndex;
            }
            if (rightIndex <= lastIndex && this.heap[rightIndex][0] < this.heap[smallestIndex][0]) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}

const dictionary = {};
let res = 0;

rl.question('', (Q) => {
    let count = 0;
    rl.on('line', (line) => {
        if (count < parseInt(Q)) {
            const data = line.split(' ');
            const info = data.slice(0, 3);

            if (info[0] === '1') {
                try {
                    for (let i = 0; i < parseInt(info[2]); i++) {
                        if (!dictionary[info[1]]) {
                            dictionary[info[1]] = new MaxHeap();
                        }
                        const value = parseInt(data[3 + i]);
                        dictionary[info[1]].push([-value, value]);
                    }
                } catch (error) {
                    dictionary[info[1]] = new MaxHeap();
                    for (let i = 0; i < parseInt(info[2]); i++) {
                        const value = parseInt(data[3 + i]);
                        dictionary[info[1]].push([-value, value]);
                    }
                }
            } else {
                try {
                    for (let i = 0; i < parseInt(info[2]); i++) {
                        res += dictionary[info[1]].pop()[1];
                    }
                } catch (error) {
                    // pass
                }
            }
            count++;
        }

        if (count === parseInt(Q)) {
            console.log(res);
            rl.close();
        }
    });
});
