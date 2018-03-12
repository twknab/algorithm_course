// Week 1 - Linked Lists, Part 2 - Tim K

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
  let currentNode = list.head,
    length = 0;

  // If no head, send null:
  if (!currentNode) {
    return null;
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

  if (!currentNode) {
    return null;
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
  let currentNode = list.head,
    min = currentNode.val; // set min to first node value

  if (!currentNode) {
    return null;
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
  let currentNode = list.head,
    max = currentNode.val; // set max to first node value

  if (!currentNode) {
    return null;
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
  let currentNode = list.head,
      valStr = "";

  if (!currentNode) {
    console.log(null);
    return null;
  }

  // Loop through nodes, adding to string
  while (currentNode.next) {
    valStr += currentNode.val;
    currentNode = currentNode.next;
  }

  // We are now on the last node, add to string:
  // This will also run if only one node:
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
  // Create variables we'll need for looping:
  let currentNode = list.head,
    found = false,
    node = new Node(val),
    previous;

  // If no head, make new node and set as head:
  if (!currentNode) {
    list.head = node;
    console.log(list);
    return list;
  }

  // Loop through nodes, until before is found:
  while (currentNode.next) {
    if (currentNode.val === before) {
      __addBefore();
    }
    previous = currentNode;
    currentNode = currentNode.next; // because we advance counter we must check first node value above
  }

  // We are now on the last node, check in case it matches before value:
  if (currentNode.val === before) {
    __addBefore();
  }
  // If before value is not found, add node to end of list:
  if (!found) {
    currentNode.next = node;
    console.log(list);
    return list;
  } 
  // Return list
  console.log(list);
  return list;

  function __addBefore() {
    node.next = currentNode; // set new node's next to current head
    // if no previous (meaning this is our first node), set as head:
    if (!previous) {
      list.head = node;
      found = true;
    }
    else {
      previous.next = node; // set previous's next to new node
      found = true;
    }
  }

}
// Test
console.log("$$$$ PREPEND $$$$");
console.log(myList);
let anotherList = new SinglyList();
console.log(anotherList);
prependVal(anotherList, 0, 1);
prependVal(myList, 0, 1);
prependVal(myList, -1, 0);






//****************/
// removeVal()
//****************/
// Remove node from list with given value:
function removeVal(list, val) {
  // Store head value and build a few variables:
  let currentNode = list.head, 
    found = false,
    previous;

  // if list is empty return null:
  if (!currentNode) {
    console.log(null);
    return null;
  }

  // Loop through nodes looking for value:
  while (currentNode.next) {
    if (currentNode.val === val) {
      if (!previous) { // if no previous, than this is list head:
        list.head = currentNode.next;
      } else {
        previous.next = currentNode.next; // set previous node's next to the next node (bypassing our matching node);
      }
      found = true;
    }
    previous = currentNode;
    currentNode = currentNode.next;
  }

  // Now on last node (or a list with ony one node), check if last node contains value:
  if (currentNode.val === val) {
    if (!previous) { // if no previous, than this is list head:
      list.head = null;
    } else {
      previous.next = null; // set previous node's next to null
    }
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
removeVal(myList, -1);
removeVal(myList, 0);
removeVal(myList, 1);
removeVal(myList, 2);
removeVal(myList, 3); 
removeVal(myList, 4); // takes away last value, returning an empty list
removeVal(myList, 5); // if value not found, return null






//****************/
// appendVal()
//****************/
// Insert new node with value after chosen node:
function appendVal(list, val, after) {

  let currentNode = list.head,
    found = false,
    node = new Node(val),
    next;

  // if list is empty add node to end (after value will never be found):
  if (!currentNode) {
    list.head = node;
    console.log(list);
    return list;
  }

  // Loop through nodes looking for value:
  while (currentNode.next) {
    if (currentNode.val === after) { // if after value is found
      oldNext = currentNode.next; // store the old next value
      currentNode.next = node; // set the current node's next to our new node
      node.next = oldNext; // set our new node's next to the oldNext (this closes our insertion)
    }
    currentNode = currentNode.next; // increment counter
  }

  // Now on last node, check if last node contains value:
  if (currentNode.val === after || !found) {
    // insert node after:
    currentNode.next = node;
  }

  // Return the list:
  console.log(list);
  return list;
}
// Test
console.log("$$$$ APPEND $$$$");
appendVal(myList, 4, -1);
appendVal(myList, 5, -1);
appendVal(myList, 6, -1);

// make a new list:
let myAppendList = new SinglyList();
appendVal(myAppendList, 10, -100);


