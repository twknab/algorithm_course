// Week 4, Linked Lists, Basics Part 2 - Tim K

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

// Add a method to quickly add a new node:
SinglyLinkedList.prototype.addNode = function(value) {
  let node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.tail = node;
    this._length++;
  } else {
    formerHead = this.head;
    node.next = this.head;
    this.head = node;
    this._length++;
  }
}


/*********************
 1. Length
 Create a function that accepts a pointer to first list node, and returns number of nodes in sList.
 length(node) => counter
 *********************/

let myList = new SinglyLinkedList();
SinglyLinkedList.prototype.getLength = function() {
  return this.__length;
};

myList.addNode("Sept 26 1984");

console.log("$$ length $$");
console.log(myList);





/*********************
2. Average
Create a standalone function average(node) that returns(…wait
  for it…) the average of all values contained in that list.
average(node) => value
function listNode(value) {
  this.val = value;
  this.next = null;
}
*********************/
SinglyLinkedList.prototype.average = function() {
  let currentNode = this.head;
  let sum = 0;
  // add values of all nodes to sum except for last node:
  while (currentNode.next) {
    sum += currentNode.value;
    currentNode = currentNode.next;
  }
  // get last node (which does not have a node value):
  // note that `currentNode` variable is no longer the first node, but our last node after our looping:
  sum += currentNode.value;

  console.log(`SUM:  ${sum / this._length}`);
  return (sum / this._length);
};


let avgList = new SinglyLinkedList();

// add some nodes:
avgList.addNode(1);
avgList.addNode(2);
avgList.addNode(3);
avgList.addNode(4);
avgList.addNode(5);

console.log("$$ average $$");
// average nodes:
avgList.average();
console.log(avgList);




/*********************
3. Min, Max
Create function min(node) and max(node) to returning smallest and largest values in the list.
min(node) => minValue
max(node) => maxValue
*********************/
SinglyLinkedList.prototype.minMax = function() {
  let currentNode = this.head,
    min = currentNode.value, // set to first node val
    max = currentNode.value; // set to first node val

  // loop through nodes
  while(currentNode.next) {

    // examine for max and min:
    if (currentNode.value > max) { max = currentNode.value; }
    if (currentNode.value < min) { min = currentNode.value; }

    // move while loop forwards to next node:
    currentNode = currentNode.next;
  }

  // Also examine last node (or only node) after while loop:
  if (currentNode.value > max) { max = currentNode.value; }
  if (currentNode.value < min) { min = currentNode.value; }

  console.log(`MIN: ${min} MAX: ${max}`);
  return min, max;

};

// create new list:
let minMaxList = new SinglyLinkedList();

// add some nodes:
minMaxList.addNode(100);
minMaxList.addNode(25);
minMaxList.addNode(5);
minMaxList.addNode(500);
minMaxList.addNode(350);

console.log("$$ min, max $$");
minMaxList.minMax();
console.log(minMaxList);





/*********************
4. Display
Create display(node) for debugging that returns a string containing all list values.Build what you wish console.log(myList) did!
display(node) => String(contains list values)
*********************/
SinglyLinkedList.prototype.display = function() {
  let currentNode = this.head,
    string = ``; // notice use of string literal

  while (currentNode.next) {
    string += `${currentNode.value}
  `; // add in a line break for next iteration (notice we are using string literals)
  // notice also that the tab/spacing left of the final back tick is also included.
  // if you wanted the output not to include indentation, just remove this spacing (as goofy as it may look/appear)
    currentNode = currentNode.next;
  }

  string += `${currentNode.value}`;

  console.log(string);
  return string;
};


// make a list:
let displayList = new SinglyLinkedList();
// add some nodes:
displayList.addNode(500);
displayList.addNode(250);
displayList.addNode(100);
displayList.addNode(850);
displayList.addNode("A string, a string, a beautiful thing");
displayList.addNode("Born a string always immutable");

console.log("$$ display $$");
displayList.display();

