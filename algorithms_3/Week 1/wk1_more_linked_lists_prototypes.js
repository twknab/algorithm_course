// In this version, we'll try using protoypes:

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyList {
  constructor() {
    this.head = null;
  }
}

// length:
SinglyList.prototype.length = function(list) {
  let length = 0,
    currentHead = list.head;

  if (!currentHead) {
    return 0;
  } else {
    while (currentHead.next) {
      length += 1;
      currentHead = currentHead.next;
    }
    length += 1; // as we'll be on last node here
  }

  console.log(list);
  return length;
};

// average:
SinglyList.prototype.average = function(list) {
  let length = 0,
    sum  = 0,
    currentHead = list.head,
    average;

  if (!currentHead) {
    return null;
  }

  while (currentHead.next) {
    length += 1;
    sum += currentHead.val;
    currentHead = currentHead.next;
  }

  length += 1;
  sum += currentHead.val;
  average = ( sum / length);

  console.log(average);
  return average;
}

// min:
SinglyList.prototype.min = function(list) {
  let currentNode = list.head,
    min = currentNode.val;

  if (!currentNode) {
    return null;
  }

  while (currentNode.next) {
    if (currentNode.val < min) {
      min = currentNode.val;
    }
    currentNode = currentNode.next;
  }

  if (currentNode.val < min) {
    min = currentNode.val;
  }

  console.log(min);
  return min;
};

// max:
SinglyList.prototype.max = function(list) {
  let currentNode = list.head,
    max = currentNode.val;

  if (!currentNode) {
    return null;
  }

  while (currentNode.next) {
    if (currentNode.val > max) {
      max = currentNode.val;
    }
    currentNode = currentNode.next;
  }

  if (currentNode.val > max) {
    max = currentNode.val;
  }

  console.log(max);
  return max;
};


// display:
SinglyList.prototype.display = function(list) {
  let currentHead = list.head,
    displayStr = "";

  if (!currentHead) {
    return null;
  }

  while (currentHead.next) {
    displayStr += currentHead.val;
    currentHead = currentHead.next;
  }

  displayStr += currentHead.val;

  console.log(displayStr);
  return displayStr;
};


// prepend
SinglyList.prototype.prepend = function(list, val, before) {
  let currentNode = list.head,
    previous,
    node;
  
  // internal function
  function __prepend() {
    if (!previous) {
      node.next = currentNode;
      list.head = node;
    } else {
      node.next = currentNode;
      previous.next = node;
    }
  }

  // create node
  node = new Node(val);

  // if no list head, set as new head
  if (!currentNode) {
    list.head = node;
  }

  // loop through nodes
  while (currentNode.next) {
    if (currentNode.val === before) {
      __prepend();
    }
    previous = currentNode;
    currentNode = currentNode.next;
  }

  // Check last value:
  if (currentNode.val === before) {
    __prepend();
  }
  
  // return list
  console.log(list);
  return list;
};

// removeVal
SinglyList.prototype.removeVal = function(list, value) {
  let currentNode = list.head,
    previous;

  if (!currentNode) {
    return null;
  }

  while (currentNode.next) {
    if (currentNode.val === value) {
      if (!previous) {
        list.head = currentNode.next;
      } else {
        previous.next = currentNode.next;
      }
    }
    previous = currentNode;
    currentNode = currentNode.next;
  }

  // check last value (or first value if list only one node long):
  if (currentNode.val === value) {
    if (!previous) {
      list.head = null;
    } else {
      previous.next = null;
    }
  }

  console.log(list);
  return list;

};

// append:
SinglyList.prototype.append = function(list, val, after) {
  let currentHead = list.head,
    node,
    formerNext;
    
  // create new node
  node = new Node(val);

  // if no list head, set new node as head
  if (!currentHead) {
    list.head = node;
  }

  // loop through nodes looking for after value
  while (currentNode.next) {
    if (currentNode.val === after) {
      formerNext = currentNode.next;
      currentNode.next = node;
      node.next = formerNext;
    }
    currentNode = currentNode.next;
  }

  // check if last value (or first value if list only one node long) matches after:
  if (currentNode.val === after) {
    currentNode.next = node; // set next value to the new node
  }

  // return list:
  console.log(list);
  return list;
};