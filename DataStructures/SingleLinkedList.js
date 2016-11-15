function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.insert(value) {
  var node = new Node(value);
  var head = this.head;
  var tail = this.tail;

  if(head === null) {
    head = node;
    tail = head;
  } else {
    tail.next = node;
    tail = tail.next;
  }

}

LinkedList.prototype.exist(value) {
  var current = this.head;

  while(current !== null) {
    if(current.value === value) {
      return true;
    } else {
      current = current.next;
    }
  }

  return false;
}
