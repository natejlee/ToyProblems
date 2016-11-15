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

LinkedList.prototype.remove(value) {
  var current = this.head;
  var tempHead = null;
  var tempTail = null;

  if(current === null) {
    return console.error('Add a node first using LinkedList.insert("value")');
  }

  while(current !== null) {
    if(current.value !== value) {
      if(tempHead === null) {
        tempHead = new Node(current.value);
        tempTail = tempHead;
      } else {
        tempTail.next = new Node(current.value);
        tempTail = tempTail.next;
      }
    }
    current = current.next;
  }

  this.head = tempHead;
  return current;
}

LinkedList.prototype.forEach(func) {
  var current = this.head;

  while(current !== null) {
    func(current.value);

    current = current.next;
  }
}
