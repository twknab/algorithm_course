// Week 1 - Linked Lists, Part 3 - Tim Knab

// Constructor functions
function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyList() {
  this.head = null;
}

/********************/
/**** SPLIT ON ******/
/********************/
/*
splitOnVal
Create splitOnVal(list, num) that, given number, splits a list in two. The latter half of the list should be returned, starting with node containing num.E.g.: splitOnVal(5) for the list(1 > 3 > 5 > 2 > 4) will change list to(1 > 3) and return value will be(5 > 2 > 4).
  Given: (1) -> (2) -> (3) -> (4), 3
Return: (3) -> (4)
*/

function splitOnVal(list, num) {
  let current = list.head,
    newList = new SinglyList(),
    found = false,
    previous;
  if (!current) {
    // list is empty, return null:
    console.log(null);
    return null;
  }
  // loop through list:
  while (current.next) {
    if (current.val === num) {
      // num found, split list:
      newList.head = current;
      // Set previous node's next to null (since node before this is now an end node):
      if (previous) {
        // set previous to null:
        previous.next = null;
      }
      found = true;
    }
    previous = current;
    current = current.next;
  }
  // now we are on last node, check if val:
  if (current.val === num) {
    // split list at last node:
    newList.head = current;
    previous.next = null; // set previous node's next to null:
    found = true;
  }

  if (!found) {
    console.log("Value does not exist in list.");
    return null;
  }

  // return latter half of list:
  console.log(newList);
  return newList;
}



/********************/
/**** PARTITION *****/
/********************/
/*
partition
Create partition(list, value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved.
  Given: (3) -> (1) -> (2) -> (4) -> (5)
Return: (1) -> (2) -> (3) -> (4) -> (5)
Given: (10) -> (15) -> (11) -> (4) -> (9)
Return: (4) -> (9) -> (10) -> (15) -> (11)
*/

function partition(list, value) {
 // Strategy: loop through list creating seperate head and tail lists, relative to value. Then join all together and return it.

 let current = list.head,
  found = false,
  smaller = new SinglyList(), // we'll add smaller valued nodes here
  larger = new SinglyList(), // we'll add larger valued nodes here
  fNode, // found node
  node, // use when creating new nodes while looping
  temp, // temp store a head while looping
  smallest;

  // if no list head:
  if (!current) {
    console.log("This list is empty.");
    return null;
  }

  // Loop through nodes comparing values:
  while (current.next) {
    if (current.val === value) { // if value is found
      found = true;
      fNode = current;
    }

    if (current.val < value) { // if less
      node = new Node(current.val); // create new node w/ curr val
      if (smaller.head) { // if head exists
        temp = smaller.head; // store former head
        smaller.head = node; // set created node as new head
        node.next = temp; // set new node's next to stored former head
      } else { // if no head
        smaller.head = node; // set new node to list head
        smallest = smaller.head;
      }
    }

    if (current.val > value) { // if greater
      node = new Node(current.val);
      if (larger.head) {
        temp = larger.head;
        larger.head = node;
        node.next = temp;
      } else {
        larger.head = node;
      }
    }

    current = current.next;
  }

  // Check our last nodes:
  if (current.val < value) {
    node = new Node(current.val); // create new node w/ curr val
    if (smaller.head) { // if head exists
      temp = smaller.head; // store former head
      smaller.head = node; // set created node as new head
      node.next = temp; // set new node's next to stored former head
    } else { // if no head
      smaller.head = node; // set new node to list head
      smallest = smaller.head;
    }
  }

  if (current.val > value) { // if greater
    node = new Node(current.val);
    if (larger.head) {
      temp = larger.head;
      larger.head = node;
      node.next = temp;
    } else {
      larger.head = node;
    }
  }

  // before joining lists together, check if value was found:
  if (!found) {
    console.log("Value not within list.");
    return null;
  }

  
  // if we're here, than the value was found, let's join lists:
  smallest.next = fNode;
  fNode.next = larger.head;
 
  console.log(smaller);
  return smaller; // this will be our full list joind with chosen value in center
}





/********************/
/*** DELETE GIVEN ***/
/********************/
/*
deleteGivenNode
Create listNode method removeSelf() to disconnect(remove) itself from linked lists that include it.Note: the node might be the first in a list, and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by.next.

  Hint:
function sList() {
  this.head = null;
  this.____ = function () { ....}
}
function sNode(val) {
  this.val = val;
  this.next = null;
  this.removeSelf = function () { ... }
}
*/

function NodeWithMethods(val) {
  this.val = val;
  this.next = null;
  this.removeSelf = function(list) {
    /*
    Removes self node from list.
    Parameters:
    -`list`: The list to which this node belongs and to which it will be removed.
    */

    // setup variables we'll use for our algorithm:
    let current = list.head,
      previous,
      newHead;

    // make sure an empty list is not given, if so, return null:
    if (!current) { 
      console.log("List is empty!");
      return null; 
    }

    // loop through list looking for node:
    while (current.next) {
      if (current.val === this.val) {
        if (!previous) {
          // this is list head if no prev value:
          newHead = this.next;
          list.head = newHead;
        } else {
          // previous has been found:
          previous.next = this.next; // sets last value's next to the next node (skipping our existing node and dropping it from the list);
        }
      }
      previous = current; // sets previous to existing node
      current = current.next; // increments current to next node
    }

    // on our last node:
    if (current.val === this.val) {
      if (!previous) {
        // this is list head with no next node set, if no previous value is found:
        list.head = null; // set list head to nothing, as our found node is deleted
      } else {
        // previous has been found:
        previous.next = null; // set our last node's next to null, since we've removed last node now
      }
    }

    // return updated list:
    console.log(list);
    return list;
  };
 }




// Test our functions:
// Create some nodes and one list:
let node1 = new Node(1), 
  node2 = new Node(2), 
  node3 = new Node(3), 
  node4 = new Node(4), 
  node5 = new Node(5),
  myList = new SinglyList();

// Link them up:
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
myList.head = node1;


/***************************/
/** TEST - SPLIT ON VAL  ***/
/***************************/
// Test split on val:
console.log("$$ SPLIT ON VAL $$");
let mySpecialList = splitOnVal(myList, 3); // 3 --> 4 --> 5 --> null
splitOnVal(myList, 12); // => null
console.log(myList); // 1 --> 2 --> null
console.log(mySpecialList); // 3 --> 4 --> 5

/***************************/
/*** TEST - PARTITION   ****/
/***************************/
// Test partition:
console.log("$$ PARTITION $$");
node1 = new Node(10);
node2 = new Node(12);
node3 = new Node(6);
node4 = new Node(3);
node5 = new Node(2);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
let toBePartitioned = new SinglyList();
toBePartitioned.head = node1;
partition(toBePartitioned, 6);


/****************************/
/*** TEST - DELETE SELF  ****/
/****************************/
// Test delete self
console.log("$$ DELETE SELF $$");
// Create another list and set of nodes and link them:
node1 = new NodeWithMethods(1);
node2 = new NodeWithMethods(2);
node3 = new NodeWithMethods(3);
node4 = new NodeWithMethods(4);
node5 = new NodeWithMethods(5);
anotherList = new SinglyList();

// Link them up:
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
anotherList.head = node1;

node1.removeSelf(anotherList);
node3.removeSelf(anotherList);



