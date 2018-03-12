// Week 1 - Linked Lists, Part 3 - Tim Knab

// Constructor functions
function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyList() {
  this.head = null;
}

/*
splitOnVal
Create splitOnVal(list, num) that, given number, splits a list in two. The latter half of the list should be returned, starting with node containing num.E.g.: splitOnVal(5) for the list(1 > 3 > 5 > 2 > 4) will change list to(1 > 3) and return value will be(5 > 2 > 4).
  Given: (1) -> (2) -> (3) -> (4), 3
Return: (3) -> (4)
*/

function splitOnVal(list, num) {
  let current = list.head,
    newList = new SinglyList(),
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
      if (!previous) {
        // this is a head node:
        continue;
      } else {
        // set previous to null:
        previous.next = null;
      }
    }
    previous = current;
    current = current.next;
  }
  // now we are on last node, check if val:
  if (current.val === num) {
    // split list at last node:
    newList.head = current;
    previous.next = null; // set previous node's next to null:
  }
  // return latter half of list:
  return newList;
}




/*
partition
Create partition(list, value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved.
  Given: (3) -> (1) -> (2) -> (4) -> (5)
Return: (1) -> (2) -> (3) -> (4) -> (5)
Given: (10) -> (15) -> (11) -> (4) -> (9)
Return: (4) -> (9) -> (10) -> (15) -> (11)
*/

function partition(list, value) {
 let current = list.head,
  found = false,
  oldNext,
  foundNode,
  foundNodePrev,
  previous;

 if (!current) {
   // list is empty:
   console.log(null);
   return null;
 }

 // Loop through list first looking for chosen value (to capture node):
 while (current.next) {

  if (current.val === value) { // find node with value
    foundNode = current;
    found = true;
  } 
  foundNodePrev = current;
  current = current.next;
 }

 // On last node, check if is value:
 if (current.val === value) {
   foundNode = current;
   found = true;
 }

 // Check if node was even found:
 if (!found) {
  console.log("Value not found in any nodes in list.");
  return null;
 }

 // If we got to this point, the node with our value exists and has been captured (including its previous value, if there was one)
 
 // Loop through nodes again, this time comparing for larger and smaller nodes:
 current = list.head; // resets current value to first node again:

 while (current.next) {

   // if val is LESS than value:
   if (current.val < value) {
     if (foundNodePrev) {
       foundNodePrev.next = current;
       current.next = foundNode;
       foundNodePrev = current;
     } else {
      // node with value is at head of list is there's no previous
      foundNodePrev = current; // set previous value to current node
      foundNodePrev.next = foundNode; // point current node's next to the found node (which was the head)
      list.head = foundNodePrev; // sets new list head to value now inserted before head
     }
    }
    
    // if val is GREATER than value:
    if (current.val > value) {
      // store old next value from foundNode:
      oldNext = foundNode.next;
      // set found node's next value to the node that is greater:
      foundNode.next = current;
      // set current's next to the old found node's next:
      current.next = oldNext;
    }
    
    current = current.next; // increment while loop
 }

 if (current.val < value) {
   if (foundNodePrev) {
     foundNodePrev.next = current;
     current.next = foundNode;
     foundNodePrev = current;
   }
 }

  if (current.val > value) {
    // store old next value from foundNode:
    oldNext = foundNode.next;
    // set found node's next value to the node that is greater:
    foundNode.next = current;
    // set current's next to the old found node's next:
    current.next = oldNext;
  }

 console.log(list);
 return list;

}






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

function sNode(val) {
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
