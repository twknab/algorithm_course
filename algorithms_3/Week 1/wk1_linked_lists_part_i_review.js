// Week 1 - Singly Linked Lists / Review, Part 1 - Tim K

/*
Note: In the last week of the last algorithms course, we went into singly linked lists. We're going to repeat some of the functions we covered last week, to iron down these concepts further, and then extend beyond them.
*/

// Let's start by creating some constructor functions, just primarily to review the anatomy of singly linked lists, but also to possibly utilize in our solutions below (although we'll try not to):

function Node(value) {
  this.value = value;
  this.next = null;
}

function singlyList() {
  this.head = null; // a list would be a node (which contains pointers to all other nodes in the list)
  this.tail = null;
}

//********************/
// addFront():
//********************/
// Given head node and value, create new node with value, and insert at head. Return the new head:
function addFront(node, value) {
  newHeadNode = new Node(value);
  newHeadNode.next = node;
  console.log(newHeadNode);
  return newHeadNode;
}
// Create 3 nodes:
let node2 = new Node(2),
  node3 = new Node(3),
  node4 = new Node(4);
// Link our nodes up:
node2.next = node3;
node3.next = node4;
// Test our addFront() method:
let newNode = addFront(node2, 1);

//********************/
// removeFront():
//********************/
// Given a head node, remove the head node, and return the new list head node. If list is empty, return null:
function removeFront(node) {
  // if list is only 1 node long, return null:
  if (!node.next) {
    return null;
  } else {
    let modified = node.next;
    console.log(modified);
    return modified;
  }
}
// Let's test our function by modifying the nodes from our algorithm above:
removeFront(newNode); // => shoudl remove the 1 value we just added above

//********************/
// contains()
//********************/
// Given pointer to a node and value, determine if the value exists in any node within the list (return true or false):
function contains(node, value) {
  if (!node.next) {
    console.log(null);
    return null;
  }

  let currentNode = node;
  while(currentNode.next) {
    if (currentNode.value === value) {
      // value has been found:
      console.log(true);
      return true;
    }
    currentNode = currentNode.next;
  }
  // Now `currentNode` is the last value, let's check it, if it doesn't match, than value has NOT been found:
  if (currentNode.value === value) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
 }

// Let's test our function using the same nodes from our first exercise:
contains(newNode, 3); // => true
contains(newNode, 421); // => false

//********************/
// front()
//********************/
// Given a node, return the value at the head of the list. If the list is empty, return null.
function front(node) {
  if (!node.value) {
    console.log(null);
    return null;
  }
  console.log(node.value);
  return node.value;
}
// Test our function using the same nodes from our first exercise:
front(newNode);
front({});

// Bonus:
//********************/
// removeLast()
//********************/
// Given a head node, remove the last value in the list and return the head node. If the list is empty, return null:
function removeLast(node) {
  // if no next value, return null since this node will be gone (or if given an empty list):
  if (!node.next) {
    return null;
  }
  // Loop through nodes to end, storing previous values:
  let currentNode = node,
    previous; // will hold prev node
  while (currentNode.next) {
    previous = currentNode;
    currentNode = currentNode.next;
  }
  // we now are on the last node, with `previous` holding the 2nd to last node. to remove last node, simply set `previous.next` to null, and return the node:
  previous.next = null;
  console.log(node);
  return node;
}

// Test our function using the same data we assembled in our first exercise:
removeLast(newNode);
