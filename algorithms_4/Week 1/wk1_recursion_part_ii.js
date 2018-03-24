/*=========================
Flood Fill

Most graphical“ paint” applications, have a‘ paintcan fill’
function that floods part of an image with a certain color.We change the image as
if we painted a canvas: a two - dimensional array of integers, where each integer represents a color
for that pixel.The canvas Array.length is the Y dimension of our canvas;
each spot in the canvas array is a row in our image, with a length equal to our convas’ X dimension.You are given a cnvas(2 - dimensional array of integers), starting coordinate(2 - element array), and the color to flood(integer value).Build floodFill(canvas2D, startXY, newColor) !Replace a pixel’ s color value only
if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change.Note: diagonally related pixels are not considered adjacent.

Given canvas2D of ...

  [
    [3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0],
    [7, 3, 3, 4, 1],
    [6, 5, 3, 4, 1],
    [1, 2, 3, 3, 3]
  ]

  ...plus startXY of [2, 2] and newColor of 1…

… we examine the cells that are directly(not diagonally) adjacent to startXY, which is[2, 2].If any have a value of 3(the original value at startXY), we change its value to 1(newColor) and repeat the process with its directly adjacent neighbor cells.We repeat this until the entire zone of similarly - colored cells is changed.

Our canvas2D becomes...

  [
    [3, 2, 1, 4, 3],
    [2, 1, 1, 4, 0],
    [7, 1, 1, 4, 1],
    [6, 5, 1, 4, 1],
    [1, 2, 1, 1, 1]
  ]

=========================*/



/*=========================
rListLength

Given the first node of a singly linked list, create a recursive
function that returns the number of nodes in that list.You can assume the list contains no loops, and that it is short enough that you will not‘ blow your stack’.
=========================*/
function recursiveListLength(node, counter=0) {
  if (!node) {
    console.log("A node is required.");
  }

  if (!node.next) { // at end of list OR single node list w/ no other nodes
    counter++;
    console.log(counter);
    return counter;
  }

  counter++; // increment count
  node = node.next; // move to next node
  recursiveListLength(node, counter);
}

function Node(val) {
  this.val = val;
  this.next = null;
} 
// Test our function:
console.log("$$$$$ rListLength $$$$$");
let node1 = new Node(1),
  node2 = new Node(2),
  node3 = new Node(3),
  node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

recursiveListLength(node1);



/*=========================
Recursive“ Tribonacci”

Write a
function rTrib(num) that mimics the Fibonacci sequence, but adds the previous three values instead of the previous two values. Consider the first three(num = 0, num = 1, num = 2) Tribonacci numbers to be 0, 0 and 1. Thus, rTrib(3) = 1(0 + 0 + 1);
rTrib(4) = 2(0 + 1 + 1);
rTrib(5) = 4(1 + 1 + 2);
rTrib(6) = 7(1 + 2 + 4).Handle negatives and non - integers appropriately and inexpensively.
=========================*/
function recursiveTrib(n, idx = 3, arr = [0, 0, 1]) {
  if (typeof (n) !== 'number') { // input check
    console.log("Numbers only please.");
    return null;
  }
  if (n < 0) { // if n is negative
    console.log("Fibonacci sequence is for positive numbers only.");
    return null; // (base case)
  }
  if (n === 0) { // if n is 0
    console.log(0);
    return 0; // (base case)
  }
  if (n === 1) { // if n is 1
    console.log(0);
    return 0; // (base case)
  }
  if (n === 2) { // if n is 2
    console.log(1);
    return 1; // (base case)
  }

  arr[idx] = arr[idx - 1] + arr[idx - 2] + arr[idx - 3]; // Add last 3 array values

  if (idx === n) { // If idx is same as n, return last value (this is fib sequence number for n)
    console.log(arr[idx]);
    return arr[idx]; // (base case)
  }

  idx++; // Otherwise, increment and recursively continue:
  recursiveTrib(n, idx, arr);
}
// Test our function:
console.log("$$$$$ recursiveTrib $$$$$");
recursiveTrib(0);
recursiveTrib(1);
recursiveTrib(2);
recursiveTrib(3);
recursiveTrib(4);
recursiveTrib(5);
recursiveTrib(6);