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
   * The `append` function adds a new node with a given value to the end of a linked list.
   * @param value - The `value` parameter in the `append` function represents the data that you want to
   * add to the linked list as a new node. This value will be stored in the `Node` object and added to
   * the end of the linked list.
   */
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  /**
   * The insert function adds a new node with a specified value at a given index in a linked list.
   * @param value - The `value` parameter in the `insert` function represents the value that you want to
   * insert into the linked list at a specific index.
   * @param index - The `index` parameter in the `insert` function refers to the position at which you
   * want to insert a new node with the specified value in a linked list. It represents the location
   * within the linked list where the new node should be inserted.
   * @returns If the index is less than 0 or greater than the size of the linked list, the function will
   * return without making any changes to the linked list.
   */
  insert(value, index) {
    const node = new Node(value);
    if (index < 0 || index > this.size) {
      return;
    }
    if (this.isEmpty()) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
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
console.log("is List Empty? ", list.isEmpty());
list.prepend(10);
list.append(20);
list.insert(30, 2);
list.append(40);
list.insert(50, 4);
list.print();
console.log("Size of the list is: ", list.getSize());
