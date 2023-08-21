// Study -> LinkedList

class Queue {
  store = [];

  enqueue(value) {
    // O(1)
    return this.store.push(value)
  }

  dequeue() {
    // O(1)
    return this.store.shift();
  }

  peak() {
    return this.store.at(0)
  }

  get length() { // -> 공간 O(n)
    return this.store.length;
  }
}

const stack = new Queue();

stack.enqueue(13);
stack.enqueue(1);
stack.enqueue(1);
stack.enqueue(1);
stack.enqueue(1);
stack.enqueue(5);
stack.dequeue();
stack.dequeue();
stack.dequeue();
stack.dequeue();
stack.dequeue();

console.log(stack.length);
console.log(stack.peak());