class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    size() {
        return this.queue.length;
    }
}

let diffQueue = new Queue;
console.log(diffQueue);
diffQueue.enqueue(1);
diffQueue.enqueue(2);
diffQueue.enqueue(3);
console.log(diffQueue);
console.log(diffQueue.peek());
console.log(diffQueue.size());
diffQueue.dequeue();
console.log(diffQueue);