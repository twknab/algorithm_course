// Week 2, Doubly Linked Lists, Tim K

/***********************/
/***   CONSTRUCTORS  ***/
/***********************/
function DLNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DList() {
  this.head = null;
  this.tail = null;
}

/***********************/
/***  PREPEND VALUE  ***/
/***********************/
/*
Prepend Value
Given dList, new value, and existing value, insert new val into dList immediately before existing val.
prependValue(list, 9, 4)
Given: (1) <--> (2) <--> (3) <--> (4)
Return: (1) <--> (2) <--> (3) <-->(9) <--> (4)
*/
function prependVal(DList, newVal, existVal) {
  let current = DList.head,
    found = false,
    newNode = new DLNode(newVal),
    fPrev;

  // Check if empty list
  if (!current) { console.log("List empty!"); return null; }

  while (current.next) {
    if (current.val === existVal) {
      found = true;
      if (!current.prev) {
        current.prev = newNode;
        newNode.next = current;
        DList.head = newNode;
      } else {
        fPrev = current.prev;
        fPrev.next = newNode;
        newNode.prev = fPrev;
        newNode.next = current;
        current.prev = newNode;
      }
    }
    current = current.next; // increment
  }

  // Now on last node:
  if (current.val === existVal) {
    found = true;
    if (!current.prev) {
      // List is only one node long
      current.prev = newNode;
      newNode.next = current;
      DList.head = newNode;
    } else {
      fPrev = current.prev;
      fPrev.next = newNode;
      newNode.next = current;
      current.prev = newNode;
    }
  }

  // Check if not found:
  if (!found) { return null; }

  // Return new list
  console.log(DList);
  return DList;
}


// Let's test our function by making a new list and some new nodes and linking them all up:
let myList = new DList(),
  node1 = new DLNode(1),
  node2 = new DLNode(2),
  node3 = new DLNode(3),
  node4 = new DLNode(4),
  node5 = new DLNode(5);

node1.next = node2;
node2.next = node3;
node2.prev = node1;
node3.next = node4;
node3.prev = node2;
node4.next = node5;
node4.prev = node3;
node5.prev = node4;

myList.head = node1;
myList.tail = node5;

console.log("$$$$ TESTING PREPEND VAL $$$$");
prependVal(myList, 9, 3);







/***********************/
/***   KTH TO LAST   ***/
/***********************/
/*
Kth To Last Value
Given k, return the value ‘k’ from a dList’s end. (K from last meaning # of nodes away from the last node.)
kthToLast(list, k)
Given: (1) <--> (2) <--> (3) <--> (4) , 2
(last node being (4), return the node 2 positions before the last node, in this case the node (2))
Return: (2)
*/
function kthToLast(list, k) {
  // note: this may not be the most efficient strategy

  let current = list.head,
    len = 1, // initiliaze length counter
    pos; // holds kth-to-end val position

  // Check if list is empty:
  if (!current) {
    console.log("List is empty.");
    return null;
  }

  // Loop through list and get length:
  while (current.next) {
    len += 1;
    current = current.next;
  }

  // We are now on last node, but because we initialized our length @ 1, our last node is already accounted for

  // Get kth-to-end position of list:
  pos = len - k;

  // Make sure K is not out of bounds:
  if (pos < 1 || pos > len) {
    console.log("K value is out of list bounds.");
    return null;
  }

  // We loop again, but must:
  // Reset current for next looping:
  current = list.head;
  // Reset the length counter:
  len = 1;

  // Loop looking for node matching position:
  while (current.next) {
    if (len === pos) {
      console.log(current);
      return current;
    }
    len += 1;
    current = current.next;
  }

  // Now we're on the last node:
  if (counter === pos) {
    console.log(current);
    return current;
  }
}

// Test our function by using the same list we did in our last function:
console.log("$$$$$ KTH TO LAST $$$$$");
kthToLast(myList, 5);
kthToLast(myList, 6);
kthToLast(myList, 1);





/***********************/
/***  IS VALID DLIST  **/
/***********************/
/*
Is Valid dList
Determine whether given dList is well-formed and valid: whether next and prev pointers match, etc.
Given: (1) <--> (2) <--> (3) <--> (4)
Return: true
Given:  (1) <--> (2) <--> (3)  x--> (4) (Node 4 is missing it’s prev pointer)
Return: false
*/
function isValid(dList) {
  let current = dList.head,
    prev;

  if (!current) { // check if empty
    console.log("List is empty.");
    console.log(false);
    return false;
  }

  while (current.next) { // loop through nodes examining validity

    // If no prev value, we should be on first node. If first node has prev, send false:
    if (!prev) {
      if (current.prev) { //
        console.log("Node has previous value when none should be present.");
        console.log(false);
        return false;
      }
    } else {
      // If actual prev value is different than node's stored prev value, send false:
      if (prev.val !== current.prev.val) {
        console.log("Node's previous value does not match last node,");
        console.log(false);
        return false;
      }
    }


    prev = current; // store value as previous before we increment
    current = current.next; // increment
  }

  // We're now on the last node
  // If there's no prev, than our list is only one node long
  if (!prev) {
    // If no previous was recorded but node has prev set, send false:
    if (current.prev) {
      console.log("Node has previous value when none should be present.");
      console.log(false);
      return false;
    }
  } else {
    // If captured prev value does not match current prev value, send false:
    if (prev.val !== current.prev.val) {
      console.log("Node's previous value does not match last node,");
      console.log(false);
      return false;
    }
  }

  console.log("List is valid.");
  console.log(true);
  return true;

}

// Let's test our function using the same list we've used before:
console.log("$$$$$ IS VALID $$$$$");
isValid(myList); // => true

// Let's create a junk list with some bad values and see if it catches:
let brokenList = new DList(),
  brokeNode1 = new DLNode(1),
  brokeNode2 = new DLNode(2),
  brokeNode3 = new DLNode(3),
  brokeNode4 = new DLNode(4),
  brokeNode5 = new DLNode(5);

// Associate nodes wrongly:
brokeNode1.next = brokeNode2;
// brokeNode1.prev = brokeNode3; // bad association
brokeNode2.prev = brokeNode3; // bad association
brokeNode2.next = brokeNode3;
brokeNode3.prev = brokeNode2;
brokeNode3.next = brokeNode5; // bad association
brokeNode4.next = brokeNode5;
brokeNode4.prev = brokeNode3;
brokeNode5.prev = brokeNode4;
brokenList.head = brokeNode1;

isValid(brokenList); // => false




/***********************/
/***    PALINDROME   ***/
/***********************/
/*
Palindrome
Determine whether a dList is a palindrome
Given: (1) <--> (2) <--> (3) <--> (2) <--> (1)
Return: true
Given: (1) <--> (2) <--> (2) <--> (1)
Return: true
Given: (1) <--> (2) <--> (3) <--> (1)
Return: false
*/







/***********************/
/***    LOOP START   ***/
/***********************/
/*
Loop Start
Given a dList that may contain a loop, return a pointer to the node where the loop begins (or null if no loop).
Given: (1) <--> (2) <--> (3) <--> (node (3) points back to the first node)
Return: (3) (return the node, which starts the loop, in this case, node 3 is starting the loop because it points back to node1)
*/







/***********************/
/***     REPAIR      ***/
/***********************/
/*
Repair
Combine previous work with a function that fixes errors found by isValid and breaks loops.
*/







/***********************/
/***   APPEND VALUE  ***/
/***********************/
/*
Append Value
Given dList, new value, and existing value, insert new val into dList immediately after existing val.
*/







/***********************/
/***  DELETE MIDDLE  ***/
/***********************/
/*
Delete Middle Node
Given a node in the middle of a dList, remove it.
*/







/***********************/
/***     REVERSE     ***/
/***********************/
/*
Reverse
Create function to reverse nodes in a dList.
*/







/***********************/
/***    PARTITION    ***/
/***********************/
/*
Partition
Given dList and partition value, perform a simple partition (no need to return the pivot index).
*/







/***********************/
/***    BREAK LOOP   ***/
/***********************/
/*
Break Loop
Given dList that may contain a loop, break the loop while retaining original node order.
*/