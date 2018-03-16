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
/***********************/
/***     REPAIR      ***/
/***********************/
/*
Repair
Combine previous work with a function that fixes errors found by isValid and breaks loops.
*/
function repair(dList) {
  let current = dList.head,
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
  console.log(dList);
  return dList;

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

repair(brokenList); // => 1 -> 2 -> 3 -> 4 -> 5






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