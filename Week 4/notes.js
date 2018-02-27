// Linked Lists:

/*
Linked lists allow us to store data similar to an array, but more easily allows for empty places to be stored, or for certain data to be stored at certain positions. We can also manipulate data, based upon what happens within the list. These are some very basic exampes of how / why linked lists can benefit us to store data over arrays.
*/

// Here's a typical object:
let arr = [
  {x : 1},
  {x : 2},
  {x : 3},
  {x : 4},
];

// In array we might store empty values this way:
let stuff = [undefined, undefined, undefined, "my", "important", "data", undefined, undefined];

// But this ain't so pretty, jah?

// Another example of ways to store data without linked-lists:

let obj1 = {
  x: 1,
  obj2: {
    x: 2,
    obj3: {
      x: 3,
      obj4: {
        x: 4,
        obj5: {
          x:5,
        }
      }
    }
  }
}

console.log(obj1);
console.log(obj1.obj2);
console.log(obj1.obj2.obj3);

let object1 = {x: 1, next: null};
let object2 = {x: 1, next: null};
let object3 = {x: 1, next: null};
let object4 = {x: 1, next: null};
let object5 = {x: 1, next: null};

console.log(object1);
// Store object 2:
object1.next = object2;
object2.next = object3;
object3.next = object4;
object4.next = object5;
// In linked lists, this example above  does not actually store the actual variable there(`object2`), but rather the memory location of `object2`.

// If we did this manually, building objects like we did here above, we would be copying data. Instead, with linkedLists, we just store a reference to the memory value. This allows linked lists to be faster and take up less memory when dealing with large data sets. This also allows us to link data, or move data around on a linked list.

// --[DATA]--[DATA]--[DATA]--Linked--On--And--On

// How can we add a node to this series of linked objects?

function addNode(firstNode, newNode) {

  // How do we handle if we didn't receive a firstNode?
  // We would want to set the firstNode to be the newNode that we were given.
  // AKA a list doesn't exist, and our newNode will the first @ it's head.

  // Set a variable to store the list so we don't modify the orignal data:
  let currentNode = firstNode;
  // Let's loop through our set of objects while .next exists:
  while (currentNode.next) {
    // This will set the node's next property to the next node:
    currentNode = currentNode.next;
  }
  console.log(currentNode); // will be last item in our assoc array
  // Set the new node as the .next for the `currentNode`:
  currentNode.next = newNode;
}
addNode(object1);


// How do we deal with head and tail?
// Let's use the same example above but this time setup a tail.
// Note that `next` is going always point forwards.
// We don't have a way to point backwards.
// So the `tail` property will help solve that problem:

let node = {val: 1, next: null};
let myList = {
  head: null,
  counter: 0,
}
// How can I store the first node in this list?
myList.head = node;

console.log(myList);

//*********************/
//*** HELPFUL NOTE ****/
//*********************/
// Why not take a look at your old python assignments to better understand?


// This will make nodes:
// Could also give this a second value of "null":
function NodeBluePrint(value) {
  this.val = value;
  this.next = null;
}

// Let's create 2 nodes:
let node1 = new NodeBluePrint(1);
let node2 = new NodeBluePrint(2);
console.log(node1);
console.log(node2);
// Let's link our nodes (1 => 2):
node1.next = node2;