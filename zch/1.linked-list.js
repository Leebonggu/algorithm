class LinkedList {
  length = 0;
  head = null;

  // TODO.2
  // 삽입을 O(1)으로

  add(value) {
    if (this.head) {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new Node(value, current);;
    } else {
      this.head = new Node(value, null);
    }
  
    this.length += 1;
    return this.length;
  }

  

  search(index) {
    /**
     * index 번째의 값을 찾아서 리턴
     */
   this.#search(index).current?.value;
  }

  remove(index) {
    const { prev, current } = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length -= 1;
      return this.length;
    } else if (current) {
      // index === 0
      this.head = current.next;
      this.length -= 1;
      return this.length;
    } 
      // 삭제하고자 하는 대상이 없을 때
    return null

  }

  last() {
    return this.#search(this.length - 1).current;
  }

  first() {
    return this.head
  }

  #search(index) {
    let count = 0;
    let prev = null;
    let current = this.head;

    if (!current)  {}

    while(count < index)  {
      prev = current;
      current = current?.next;
      count += 1;
    }

    return { prev, current };
  }

  printAll() {
    let current = this.head;
    while(current) {
      console.log(current);
      current = current.next;
    }
  }
}

class Node {
  prev = null;
  next = null;

  constructor(value, prev)  {
    this.value = value;
    this.prev = prev || null;
  }
}

const ll = new LinkedList();
console.log(ll.length)
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
// console.log(ll.search(3));
// console.log(ll.search(5));
// ll.remove(3);
// ll.remove(3);
// ll.search(3);
// ll.search(1);

// console.log(ll.printAll())
// // console.log(ll.first())
// console.log(ll.last())
// console.log(ll.last().prev.value)