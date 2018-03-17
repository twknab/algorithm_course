// Week 2, Doubly Linked Lists, Part 2, Tim K

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
/***     REPAIR      ***/
/***********************/
/*
Repair
Combine previous work with a function that fixes errors found by isValid and breaks loops.
*/
function repair(list) {
  let current = list.head,
    prev;

  if (!current) { // check if empty
    console.log("List is empty.");
    console.log(null);
    return null;
  }

  while (current.next) { // loop through nodes examining validity

    // If no prev value, we should be on first node. If first node has prev, send false:
    if (!prev) {
      if (current.prev) { //
        console.log("Node has previous value when none should be present.");
        // console.log(false);
        current.prev = null;

        // return false;
      }
    } else {
      // If actual prev value is different than node's stored prev value, send false:
      if (!current.prev || prev.val !== current.prev.val) {
        console.log("Node's previous value is mismatched.");
        // console.log(false);
        current.prev = prev;
        // return false;
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
      current.prev = null;
      // console.log(false);
      // return false;
    }
  } else {
    // If captured prev value does not match current prev value, send false:
    if (prev.val !== current.prev.val) {
      console.log("Node's previous value does not match last node,");
      // console.log(false);
      current.prev = prev;
      // return false;
    }
  }
  console.log(list);
  return list;

}

// Let's test our function using the same list we've used before:
console.log("$$$$$ REPAIR $$$$$");

// Let's create a junk list with some bad values and see if it catches:
let brokenList = new DList(),
  brokeNode1 = new DLNode(1),
  brokeNode2 = new DLNode(2),
  brokeNode3 = new DLNode(3),
  brokeNode4 = new DLNode(4),
  brokeNode5 = new DLNode(5);

// Associate nodes wrongly:
brokeNode1.next = brokeNode2;
brokeNode1.prev = brokeNode3; // bad association
brokeNode2.prev = brokeNode3; // bad association
brokeNode2.next = brokeNode3;
brokeNode3.prev = brokeNode2;
brokeNode3.next = brokeNode4; // bad association
brokeNode4.next = brokeNode5;
brokeNode4.prev = brokeNode2; // bad association
brokeNode5.prev = brokeNode4;

brokenList.head = brokeNode1;
brokenList.tail = brokeNode5;

brokenList = repair(brokenList); // => 1 -> 2 -> 3 -> 4 -> 5






/***********************/
/***   APPEND VALUE  ***/
/***********************/
/*
Append Value
Given dList, new value, and existing value, insert new val into dList immediately after existing val.
*/
function append(list, value, existingValue) {
  let current = list.head, // grab list head
    newNode = new DLNode(value), // make new node
    found = false, // found is false
    oldNext; // create var to use later

  if (!current) {
    console.log("List is empty.");
    return null;
  }

  while (current.next) {
    if (current.val === existingValue) {
      found = true;
      oldNext = current.next;
      current.next = newNode;
      newNode.prev = current;
      newNode.next = oldNext;
    }
    current = current.next; // increment
  }

  // check last node:
  if (current.val === existingValue) {
    found = true;
    current.next = newNode;
    newNode.prev = current;
    list.tail = newNode;
    // this is all we have to do as last node and new node both have null for next value
  }

  // if existing value never found, send null and say so
  if (!found) {
    console.log("Existing value is not contained in list.");
    return null;
  } else { // otherwise return the list
    console.log(list);
    return list;
  }

}

// Test our function by appending something to the list:
// Let's test our function using the same list we've used before:
console.log("$$$$$ APPEND $$$$$");

// Let's create a junk list with some bad values and see if it catches:
append(brokenList, 1.5, 1); // 1->1.5->2->3->4->5
append(brokenList, 0, 1); // 1->0->1.5->2->3->4->5
append(brokenList, 6, 5); // 1->0->1.5->2->3->4->5->6
append(brokenList, 6, 15); // => null





/***********************/
/***  DELETE MIDDLE  ***/
/***********************/
/*
Delete Middle Node
Given a node in the middle of a dList, remove it.
*/
function deleteMiddle(middleNode) {
  let mNext, // holds middle's next node
    mPrev; // holds middle's prev node
  
  if (!middleNode) {
    console.log("Must supply a valid node.");
    return null;
  }

  // link up our nodes excluding supplied middle node:
  mNext = middleNode.next;
  mPrev = middleNode.prev;

  mPrev.next = mNext;
  mNext.prev = mPrev;

  // show node relationships now that middle is removed:
  console.log(mPrev);
  return mPrev;
}
console.log("$$$$$ DELETE MIDDLE $$$$$");
deleteMiddle(brokeNode3);







/***********************/
/***     REVERSE     ***/
/***********************/
/*
Reverse
Create function to reverse nodes in a dList.
*/
function reverse(list) {
  let revList = new DList(),
    current = list.tail,
    formerNext,
    formerPrev;

  if (!current || !list.head) {
    console.log("List must have a valid head and tail.");
    return null;
  }

  // Loop backwards
  while (current.prev) {
    if (!revList.head) {
      // set as head:
      revList.head = current;
    }

    // Capture former next value
    formerNext = current.next;
    // Set next value to former prev
    current.next = current.prev;

    // Capture former prev value
    formerPrev = current.prev;
    // Set prev value to former next
    current.prev = formerNext;

    // Increment counter to last node (moving backwards)
    current = formerPrev;
  }

  // Now on last node:
  // Store former next value
  formerNext = current.next;
  // Set next to null (this is last node)
  current.next = null;
  // Set previous value to former next
  current.prev = formerNext;
  // Set former next's next value to current node
  formerNext.next = current;
  // Set list tail to be current node
  revList.tail = current;
  // Clear head prev value
  revList.head.prev = null;

  // Return reversed list
  console.log(revList);
  return revList;
}
console.log("$$$$$ REVERSE $$$$$");
reverse(brokenList);





/***********************/
/***    PARTITION    ***/
/***********************/
/*
Partition
Given dList and partition value, perform a simple partition (no need to return the pivot index).
*/
function partition(list, value) {
  let current = list.head;

  while (current.next) {
    if (current.val === value) {
      current.prev = null; // set prev to null
      list.head = current;
      console.log(list);
      return list;
    }
    current = current.next;
  }
  // on last node:
  if (current.val === value) {
    current.prev = null; // set prev to null
    list.head = current;
    console.log(list);
    return list;
  }

  console.log("Value not found in list");
  return null;
}
console.log("$$$$$ PARTITION $$$$$");
partListTest = new DList();
pNode1 = new DLNode(1);
pNode2 = new DLNode(2);
pNode3 = new DLNode(3);
pNode4 = new DLNode(4);
pNode5 = new DLNode(5);

pNode1.next = pNode2;
pNode2.next = pNode3;
pNode2.prev = pNode1;
pNode3.next = pNode4;
pNode3.prev = pNode2;
pNode4.next = pNode5;
pNode4.prev = pNode3;
pNode5.prev = pNode4;

partListTest.head = pNode1;
partListTest.tail = pNode5;

partition(partListTest, 3);






/***********************/
/***    BREAK LOOP   ***/
/***********************/
/*
Break Loop
Given dList that may contain a loop, break the loop while retaining original node order.
*/
function breakLoop(list) {
  let current = list.head,
    previous;

  if (!current) {
    console.log("List is empty.");
    return null;
  }

  if (list.tail.next) { // tail should never have next property, clear it if detected
    list.tail.next = null;
  }

  while (current.next) {
    if (!previous) { // this is the head node
      if (current.prev) { // if prev value set (it shouldnt be), set to null
        current.prev = null;
      }
    } else {
      if (previous !== current.prev) { // prev value bad loop found
        current.prev = previous;
      }
    }
    previous = current;
    current = current.next;
  }


  // Now on last node:
  if (current.next) { // if next is found, bad loop, set to null
    current.next = null; // last node shouldn't have next
  }
  if (previous) {
    if (previous !== current.prev) { // prev value bad loop found
      current.prev = previous;
    }
  } else { // if not previous, our list is only one node long
    if (current.prev) { // if prev value set, set to null (1 node long should have no prev)
      current.prev = null; 
    }
  }
  
  list.tail = current;

  console.log(list);
  return list;
}
console.log("$$$$$ BREAK LOOP $$$$$");
bLoopTest = new DList();
bNode1 = new DLNode(1);
bNode2 = new DLNode(2);
bNode3 = new DLNode(3);
bNode4 = new DLNode(4);
bNode5 = new DLNode(5);

bNode1.next = bNode2;
bNode1.prev = bNode5;
bNode2.next = bNode3;
bNode2.prev = bNode1;
bNode3.next = bNode4;
bNode3.prev = bNode2;
bNode4.next = bNode5;
bNode4.prev = bNode3;
bNode5.prev = bNode4;
bNode5.next = bNode1;

bLoopTest.head = bNode1;
bLoopTest.tail = bNode5;

breakLoop(bLoopTest);
