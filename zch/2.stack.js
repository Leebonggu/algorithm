// Study -> LinkedList

class Stack {
  store = [];

  push(value) {
    // O(1)
    return this.store.push(value)
  }

  pop() {
    // O(1)
    return this.store.pop();
  }

  top() {
    return this.store.at(-1)
  }

  get length() { // -> 공간 O(n)
    return this.store.length;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);

console.log(stack.length);
console.log(stack.top());