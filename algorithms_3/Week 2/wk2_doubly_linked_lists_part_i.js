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
function prependVal(dList, newVal, existVal) {
  let current = dList.head,
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
        dList.head = newNode;
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
      dList.head = newNode;
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
  console.log(dList);
  return dList;
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
function kthToLast(dList, k) {
  // note: this may not be the most efficient strategy

  let current = dList.head,
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
  current = dList.head;
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
function palindrome(dList) {
  // This is probably not the best way to do it (esp w/ a very large linked list since I'm basically adding all node values to a string and then assessing it...but alas...must look into improvements/alternative ideas)

  let current = dList.head,
    string = "";

  if (!current) { // if empty list
    console.log("List is empty.");
    return null;
  }

  while (current.next) {
    string += current.val;
    current = current.next;
  }

  // now on last node, add also to string:
  string += current.val;

  // Now that we have a string with all node values, let's loop comparing left and right sides to each other until we meet center. If they don't match, it's not a palindrome, if they do, it's a palindrome.

  for (let idx = 0; idx < (string.length - 1) / 2; idx++) {
    if (string[idx] !== string[(string.length - 1) - idx]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}

// Test
console.log("$$$$$ PALINDROME  $$$$$$");
palindrome(myList); // => false

// Let's create a palindrome list and see if she works:
let shldBePalindrome = new DList(),
  palNode1 = new DLNode("r"),
  palNode2 = new DLNode("a"),
  palNode3 = new DLNode("c"),
  palNode4 = new DLNode("e"),
  palNode5 = new DLNode("c"),
  palNode6 = new DLNode("a"),
  palNode7 = new DLNode("r");

  // Link em up (prob should have added this to my method but trying to fit the methodology shown in lecture etc)

  palNode1.next = palNode2;
  palNode2.next = palNode3;
  palNode3.next = palNode4;
  palNode4.next = palNode5;
  palNode5.next = palNode6;
  palNode6.next = palNode7;
  palNode7.prev = palNode6;
  palNode6.prev = palNode5;
  palNode5.prev = palNode4;
  palNode4.prev = palNode3;
  palNode3.prev = palNode2;
  palNode2.prev = palNode1;

  shldBePalindrome.head = palNode1;
  shldBePalindrome.tail = palNode7;

  // Test it:
  palindrome(shldBePalindrome); // => true




/***********************/
/***    LOOP START   ***/
/***********************/
/*
Loop Start
Given a dList that may contain a loop, return a pointer to the node where the loop begins (or null if no loop).
Given: (1) <--> (2) <--> (3) <--> (node (3) points back to the first node)
Return: (3) (return the node, which starts the loop, in this case, node 3 is starting the loop because it points back to node1)
*/

function loopStart(dList) {
  let current = dList.head,
    next;

  if (!current) { // list is empty, send it back
    console.log(dList);
    return dList;
  }

  // Check to make sure head node doesn't have prev value:
  if (current.prev) {
    console.log(current); 
    return current; // bad loop found, send back bad node
  }

  // Check if we only have one node (if it's setup properly, send back null)
  if (!current.prev && !current.next) { //  means we only have one node & setup OK
    console.log(null);
    return null; // send back null as list passes
  }

  // Loop through nodes looking for any bad loops:
  while (current.next) {
    // If our current node's value does not equal the next node's previous val, we have bad relationship:
    if (current !== current.next.prev) {
      console.log(current);
      return current; // bad node found
    }
    current = current.next; // increment
  }

  console.log(null);
  return null; // if get to this point, list relationships are OK and passed
}

// Test loop function:
let loopyList = new DList(),
  loopNode1 = new DLNode(1),
  loopNode2 = new DLNode(2),
  loopNode3 = new DLNode(3);

loopNode1.next = loopNode2;
loopNode2.next = loopNode3;
loopNode3.next = loopNode1; // bad node relationship should be caught
// loopNode1.prev = loopNode2; // also bad node relationship
loopNode2.prev = loopNode1;
loopNode3.prev = loopNode2;

loopyList.head = loopNode1;

// Test:
console.log("$$$$$ LOOP START $$$$$");
loopStart(loopyList);