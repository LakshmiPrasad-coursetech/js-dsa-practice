class Stack {
  constructor() {
    this.items = [];
  }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        if (this.items.length === 0) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }
}

let stack = new Stack();
console.log(stack);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.peek());
stack.pop();
console.log(stack.printStack());