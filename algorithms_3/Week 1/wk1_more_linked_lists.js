function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyList() {
  this.head = null;
}

// Create a list with some nodes to play with in our functions:
let node1 = new Node(1),
node2 = new Node(2),
node3 = new Node(3),
node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Create list and set our singly linked nodes as head:
let myList = new SinglyList();
myList.head = node1;


//****************/
// length()
//****************/
// Return average value of list provided:
function length(list) {
  // If no head, send null:
  if (!list.head) {
    return null;
  }

  let currentNode = list.head,
    length = 0;

  // If there's no next, list is only one value long.
  // Return length of 1:
  if (!currentNode.next) {
    return 1;
  }

  // Loop through nodes:
  while (currentNode.next) {
    length += 1;
    currentNode = currentNode.next;
  }

  // We are now on the last node, increase counter by one:
  length += 1;

  console.log(length);
  return length;
}
// Test
console.log("$$$$ LENGTH $$$$");
length(myList);




//****************/
// average()
//****************/
// Return average value of list provided:
function average(list) {
  let currentNode = list.head,
  sum = 0,
  length = 0,
  average;

  // If there's no next, list is only one value long.
  // Return that value:
  if (!currentNode.next) {
    return currentNode.val;
  }

  while (currentNode.next) {
    length += 1;
    sum += currentNode.val;
    currentNode = currentNode.next;
  }

  // We are now on the last node, add this value to the sum:
  length += 1;
  sum += currentNode.val;

  // Produce average and return:
  average = (sum / length);

  console.log(average);
  return average;
}
// Test
console.log("$$$$ AVERAGE $$$$");
average(myList);






//****************/
// min()
//****************/
// Return min value of list provided:
function min(list) {
  if (!list.head) {
    return null;
  }

  let currentNode = list.head,
    min = currentNode.val; // set min to first node value

  // If there's no next, list is only one value long.
  // Return that value:
  if (!currentNode.next) {
    return currentNode.val;
  }
  // Loop through nodes:
  while (currentNode.next) {
    if (currentNode.val < min) {
      min = currentNode.val;
    }
    currentNode = currentNode.next;
  }

  // We are now on the last node, check if smaller than min:
  if (currentNode.val < min) {
    min = currentNode.val;
  }
  
  console.log(min);
  return min;
}
// Test
console.log("$$$$ MIN $$$$");
min(myList);







//****************/
// max()
//****************/
// Return max value of list provided:
function max(list) {
  if (!list.head) {
    return null;
  }

  let currentNode = list.head,
    max = currentNode.val; // set max to first node value

  // If there's no next, list is only one value long.
  // Return that value:
  if (!currentNode.next) {
    return currentNode.val;
  }
  // Loop through nodes:
  while (currentNode.next) {
    if (currentNode.val > max) {
      max = currentNode.val;
    }
    currentNode = currentNode.next;
  }

  // We are now on the last node, check if larger than min:
  if (currentNode.val > max) {
    max = currentNode.val;
  }
  
  console.log(max);
  return max;
}
// Test
console.log("$$$$ MAX $$$$");
max(myList);






//****************/
// display()
//****************/
// Return string with all values:
function display(list) {
  if (!list.head) {
    console.log(null);
    return null;
  }

  let currentNode = list.head,
    valStr = "";

  // If there's no next, list is only one value long.
  // Return that value as a string:
  if (!currentNode.next) {
    valStr += currentNode.val;
    console.log(valStr);
    return valStr;
  }
  // Loop through nodes, adding to string
  while (currentNode.next) {
    valStr += currentNode.val;
    currentNode = currentNode.next;
  }

  // We are now on the last node, add to string:
  valStr += currentNode.val;
  
  console.log(valStr);
  return valStr;
}
// Test
console.log("$$$$ DISPLAY $$$$");
display(myList);

let newNode = new Node(78);
let newList = new SinglyList();
newList.head = newNode;
display(newList);






//****************/
// prependVal()
//****************/
// Insert a new list node with a new value before chosen node:
function prependVal(list, val, before) {
  // If no head, make new node and set as head:
  if (!list.head) {
    let node = new Node(val);
    list.head = node;
    console.log(list);
    return list;
  }

  // Create variables we'll need for looping:
  let currentNode = list.head,
    previous,
    node,
    found = false;

  // If there's no next, list is only one value long.
  // Create new node and set to head:
  if (!currentNode.next) {
    node = new Node(val); // create new node
    node.next = currentNode; // set node's next to former head
    list.head = node; // set list head to node (new head)
    console.log(list);
    return list;
  }

  // If first value is "before":
  if (currentNode.val === before) {
    node = new Node(val); // create new node
    node.next = currentNode; // set node's next to current head
    list.head = node; // set list head to new node
    found = true;
  }

  // Loop through nodes, until before is found:
  while (currentNode.next) {
    previous = currentNode;
    currentNode = currentNode.next; // because we advance counter we must check first node value above
    if (currentNode.val === before) {
      node = new Node(val); // create new node
      node.next = currentNode; // set new node's next to current head
      previous.next = node;// set previous's next to new node
      found = true;
    }
  }

  // We are now on the last node, check in case it matches before value:
  if (currentNode.val === before) {
    node = new Node(val);
    node.next = currentNode;
    previous.next = node; // previous will have been defined in our second to last iteration (and will be 2nd to last node)
    found = true;
  }
  // If before value is not found, add node to end of list:
  if (!found) {
    node = new Node(val);
    currentNode.next = node;
    console.log(list);
    return list;
  } 

  // Return list
  console.log(list);
  return list;
}
// Test
console.log("$$$$ PREPEND $$$$");
prependVal(myList, 0, 1);
prependVal(myList, 1, 2);
prependVal(myList, 3, 4);






//****************/
// removeVal()
//****************/
// Remove node from list with given value:
function removeVal(list, val) {
  // if list is empty return null:
  if (!list.head) {
    console.log(null);
    return null;
  }

  // Store head value and build a few variables:
  let currentNode = list.head, 
    found = false,
    previous;

  // If head matches value:
  if (currentNode.val === val) {
    list.head = currentNode.next; // set list head to next value
    console.log(list);
    return list;
  }

  // Loop through nodes looking for value:
  while (currentNode.next) {
    previous = currentNode;
    currentNode = currentNode.next;
    if (currentNode.val === val) {
      previous.next = currentNode.next; // set previous node's next to the next node (bypassing our matching node);
      found = true;
    }
  }

  // Now on last node, check if last node contains value:
  if (currentNode.val === val) {
    previous.next = null; // set previous node's next value to null
    found = true;
  }

  // If value is not found, return null:
  if (!found) {
    console.log("Value not found.");
    return null;
  }

  // Return the list:
  console.log(list);
  return list;
}
// Test
console.log("$$$$ REMOVE $$$$");
removeVal(myList, 0);
removeVal(myList, 1);
removeVal(myList, 1);
removeVal(myList, 2);
removeVal(myList, 5); // if value not found, return null






//****************/
// appendVal()
//****************/
// Insert new node with value after chosen node:
function appendVal(list, val, after) {
  // if list is empty return null:
  if (!list.head) {
    console.log(null);
    return null;
  }

  // Store head value and build a few variables:
  let currentNode = list.head, 
    found = false,
    next,
    node;

  // If head matches after value:
  if (currentNode.val === after) {
    node = new Node(val); // create new node
    oldNext = currentNode.next; // store old next value (we're inserting between here & current node)
    currentNode.next = node; // set current head's next value to our new node
    node.next = oldNext; // set our new node's next value to the oldNext node
    list.head = node;
    console.log(list);
    return list;
  }

  // Loop through nodes looking for value:
  while (currentNode.next) {
    if (currentNode.val === after) { // if after value is found
      node = new Node(val); // create new node
      oldNext = currentNode.next; // store the old next value
      currentNode.next = node; // set the current node's next to our new node
      node.next = oldNext; // set our new node's next to the oldNext (this closes our insertion)
      console.log(list);
      return list;
    }
    currentNode = currentNode.next; // increment counter
  }

  // Now on last node, check if last node contains value:
  if (currentNode.val === after || !found) {
    // insert node after:
    node = new Node(val);
    currentNode.next = node;
  }

  // Return the list:
  console.log(list);
  return list;
}
// Test
console.log("$$$$ APPEND $$$$");
appendVal(myList, 0, 3); // after value after 3
appendVal(myList, 8, 3); // add value after 3
removeVal(myList, 0); // remove one node 
removeVal(myList, 3); // remove another
appendVal(myList, 500, 20); // add a value looking for an after that is out of range
removeVal(myList, 8); // remove another value (and we see 500 at the end)



