class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head;

function push(data) {
  let new_node = new Node(data);

  if (head == null) {
    head = new_node;
    return;
  }

  new_node.next = head;
  head = new_node;
}

function append(data) {
  let new_node = new Node(data);

  if (head == null) {
    head = new_node;
    return;
  }
  tail = head;
  while (tail.next != null) {
    tail = tail.next;
  }

  tail.next = new_node;
}

function insertAfter(data, prevNode) {
  if (prevNode == null) {
    document.write("No previous node available.");
    return;
  }
  let new_node = new Node(data);
  new_node.next = prevNode.next;
  prevNode.next = new_node;
}

function deleteNode(data) {
  let tmp = head;
  let prev = null;

  if (tmp != null && tmp.data == data) {
    head = tmp.next;
    return;
  }

  while (tmp != null && tmp.data != data) {
    prev = tmp;
    tmp = tmp.next;
  }

  if (tmp == null) {
    return;
  }
  prev.next = tmp.next;
}

function findSpecificKey(data) {
  let tmp = head;
  if (tmp == null) return false;
  if (tmp.data == data) return true;
  while (tmp !== null) {
    if (tmp.data == data) {
      return true;
    }
    tmp = tmp.next;
  }
  return false;
}

function getLength() {
  let tmp = head;
  let count = 0;
  if (tmp == null) return 0;
  if (tmp.next == null) return 1;
  while (tmp !== null) {
    count++;
    tmp = tmp.next;
  }
  return count;
}

function getLengthRecursive(head) {
  if (head == null) return 0;
  return 1 + getLengthRecursive(head.next);
}

function display() {
  tmp = head;
  while (tmp != null) {
    console.log(tmp.data);
    tmp = tmp.next;
  }
}

append(5);
append(6);
append(7);
append(8);
push(1);
push(3);
insertAfter(100, head.next.next);

console.log(findSpecificKey(100));
console.log("Length => ", getLength());
console.log("Recursive Length => ", getLengthRecursive(head));
display();

// console.log(head);
