/* The Node class represents a node in a linked list with a value and a reference to the next node. */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* The `LinkedList` class represents a linked list data structure with methods for checking if it's
empty, getting its size, prepending nodes, and printing its values. */

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * The function checks if the size property of an object is falsy and returns true if it is.
   * @returns The `isEmpty()` function is returning `undefined` if the condition `if (!this.size)` is not
   * met.
   */
  isEmpty() {
    if (!this.size) {
      return true;
    }
  }

  /**
   * The getSize() function returns the size property of the object it is called on.
   * @returns The `size` property of the object that the `getSize()` method belongs to is being returned.
   */
  getSize() {
    return this.size;
  }

  /**
   * The `prepend` function adds a new node with the given value at the beginning of a linked list.
   * @param value - The `prepend` function you provided seems to be a method of a linked list class. It
   * is used to add a new node with the given value at the beginning of the linked list.
   */
  prepend(value) {
    const node = new Node(value);
    if (list.isEmpty()) {
      this.head = node;
      this.next = null;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  /**
   * The `print()` function iterates through a linked list and logs the values of each node to the
   * console.
   */
  print() {
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listValues);
  }
}

// Operations
const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(50);
console.log(list.getSize());
list.print();
