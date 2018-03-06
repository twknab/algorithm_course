// Week 4 -- Linked Lists, Basic -- Tim Knab
/********************************/
/**   CONSTRUCTOR FUNCTIONS    **/
/********************************/

// Create new nodes (class):
function Node(value, next) {
  this.value = value;
  this.next = next;
}

// Create new list (class):
function SinglyLinkedList() {
  this._length = 0; // set length to 0
  this.head = null; // set head to null
  this.tail = null; // set tail to null
}

/********************/
/**   ADD FRONT    **/
/********************/
// 1. Add Front
SinglyLinkedList.prototype.addFront = function (value) {

  // Create new node with value:
  let newNode = new Node(value);

  // If no head, set added node's next property to itself, and set this same node to be both list head and tail:
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this._length++;
    // console.log(this);
    // will return the updated list
    return this;
  }

  // Otherwise, store the old head, create the new node and set to head
  // set the new node's next to be the current head:
  else {
    // Store old head:
    let currentHead = this.head;
    // Set new node's next value to be the current head value:
    newNode.next = currentHead;
    // Set the head to now be the new node:
    this.head = newNode;
    this._length++;
    // console.log(this);
    // will return the updated list
    return this;
  }
}

/*********************/
/**   REMOVE FRONT  **/
/*********************/
// 2. Remove Front
SinglyLinkedList.prototype.removeFront = function() {
  // If list is empty, return null:
  if (!this.head) {
    return null;
  }

  // Store current head node:
  removed = this.head;
  
  // Set the list head to `removed`'s `next`:
  this.head = removed.next;

  // Return the old head (which is no longer current):
  this._length--;
  console.log(removed);
  return removed;
}

/**********************/
/**   LIST CONTAINS  **/
/**********************/
// 3. Contains
SinglyLinkedList.prototype.listContains = function(value) {
  // If list is empty, return null:
  if (!this.head) {
    console.log(null);
    return null;
  }

  // Loop through nodes looking for value:
  // Set current node as head node (and we'll work down the chain)
  let currentNode = this.head;

  // Loop through all nodes containing a next varibable and check if their values matches value being sought:
  while (currentNode.next) {
    // Check if value is contained in current node:
    if (currentNode.value === value) {
      console.log(true);
      return true;
    } else {
      currentNode = currentNode.next;
    }
  }

  // Check if current Node value matches sought after value, in the event that there is only one node, or we're at the end:
  if (currentNode.value === value) {
    console.log(true);
    return true;
  } 
  // Otherwise our value is not contained in any nodes, return false:
  else {
    console.log(false);
    return false;
  }
}
/**********************/
/**       FRONT      **/
/**********************/
// 4. Front
SinglyLinkedList.prototype.getFront = function() {
  // If list is empty, return null:
  if (!this.head) {
    console.log(null);
    return null;
  }

  console.log(this.head.value);
  return this.head.value;
  
}

/**********************/
/**       TESTING    **/
/**********************/
// Let's now test our various methods:
// First create a list:
let list = new SinglyLinkedList();

console.log('---- ADD FRONT ----');
console.log(list); // empty
list.addFront(456); // add a value
list.addFront(123); // add another value
console.log(list); // see how our list has grown

console.log('---- REMOVE FRONT ----');
list.removeFront(); // remove the first node 
console.log(list); // list is now missing 1st node

console.log('---- CONTAINS ----');
list.listContains(123); // does list contain any node w/ val of 123?
// => false

list.listContains(456); // how about 456?
// => true

// Add some more values:
list.addFront(123);
list.addFront(-321);
list.addFront(-456);

// Does updated list contain this value?
list.listContains(-321);
// => true
// Yes it does

console.log(list); // list does contain -321

console.log("----- GET FRONT -----");
list.getFront(); // gets first value in node (does NOT change it, just gets)
// => -456

list.addFront(333); // add new value to front
list.getFront();
// => 333

list.addFront(10000000000000000000001); // add new value to front
list.getFront();
// => 1e+22









/*-------------------------------*/
/** WITHOUT PROTOTYPE FUNCTIONS **/
/*-------------------------------*/
// This is another way to do it, without using constructor functions, and just manually creating some linked objects.

// Create a few generic nodes and one list for use with functions below:
let node2 = {
  "value": 456,
  "next": null,
}
let node1 = {
  "value": 123,
  "next" : node2,
}
// Create a list:
var mySinglyList = {
  head: node1,
  tail: node2,
}

// 1. Add to Front:
function addFrontList(head, value) {
  // Create new node with value:
  newNode = new Node(value);

  // If no head, set new node to be head:
  if (!head) {
    // Set list head and tail to new node:
    mySinglyList.head = newNode;
    mySinglyList.tail = newNode;
    console.log(mySinglyList.head);
    return mySinglyList.head;
  }
  else {
    // Store current head:
    currentHead = head;
    // Set next value of new node to the current head:
    newNode.next = currentHead;
    // Set list head value to new value:
    mySinglyList.head = newNode;
    console.log(mySinglyList.head);
    return mySinglyList.head;
  }
}

// 2. Remove from Front:
function removeFrontList (head) {
  // Store current head node:
  headToRemove = head;
  
  // Set the list head to `headtoRemove`'s `next`:
  mySinglyList.head = headToRemove.next;
  
  // Return the old head (which is no longer current):
  console.log(headToRemove);
  return headToRemove;
}

// 3. Contains
function containsList (head, value) {
  // Store current head node:
  currentHead = head;
  
  while (currentHead.next) {
    if (currentHead.value === value) {
      console.log(true);
      return(true); // value has been found
    } 
    else {
      currentHead = currentHead.next; // move current head forwards to next node
    }
  }

  if (currentHead.value === value) {
    console.log(true);
    return true; // value was found in last or only node
  } 
  else {
    console.log(false);
    return false; // value has not been found
  }
}

// 4. Front
function front() {
  if (!mySinglyList.head) {
    console.log(null);
    return null;
  }
  else {
    console.log(mySinglyList.head.value);
    return mySinglyList.head.value;
  }
}

// Add something to front of list:
console.log('---- ADD FRONT NON-PROTO ----');
addFrontList(mySinglyList.head, 20);
console.log(mySinglyList);

console.log('---- REMOVE FRONT NON-PROTO ----');
console.log(mySinglyList);
removeFrontList(mySinglyList.head);
console.log(mySinglyList);


console.log('---- CONTAINS ----');
// Add a few more values:
addFrontList(mySinglyList.head, 60);
addFrontList(mySinglyList.head, 80);
addFrontList(mySinglyList.head, 90);
addFrontList(mySinglyList.head, 120);
addFrontList(mySinglyList.head, 140);
console.log(mySinglyList);

// is 140 in list?
containsList(mySinglyList.head, 140);
// => true
containsList(mySinglyList.head, 422);
// => false
containsList(mySinglyList.head, 928);
// => false
containsList(mySinglyList.head, 90);
// => true

front();