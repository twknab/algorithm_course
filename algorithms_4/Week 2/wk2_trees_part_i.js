function BTNode(value) {
  this.val = value;
  this.left = null;
  this.right = null;
  this.add = function(newNode) {
    // if new node is greater than or equal:
    if (newNode.val >= this.val) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.add(newNode); // recursion
      }
    }
    // if new node is less:
    if (newNode.val < this.val) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.add(newNode);
      }
    }

    return this;
  };
}

function BST() {
 this.root = null;
 this.add = function(val) {
  // This function uses another function built into the tree nodes to help us navigate recursively. A more simple version is defined as the method beneath this one.
   let newNode = new BTNode(val), // create new node
    current = this.root;

  if (!current) {
    this.root = newNode;
  } else {
    current.add(newNode);
  }
  // console.log(this);
  return this;
 };
 this.nonrecursiveAdd = function(val) {
   // In this example we'll create an add function that doesn't use recursive pieces:
   let newNode = new BTNode(val), // create new node
    current = this.root;
  
  if (!current) {
    this.root = newNode;
    return this;
  }

  while (current) {
    // If new node is less:
    if (newNode.val >= current.val) {
      if (!current.right) {
        current.right = newNode;
        return this;
      } else {
        current = current.right;
      }
    }
    // If new node is greater than:
    if (newNode.val < current.val) {
      if (!current.left) {
        current.left = newNode;
        return this;
      } else {
        current = current.left;
      }
    }
  }
 };
 this.contains = function(val) {
   let current = this.root;
   if (!this.root) {
     return null; // empty tree
   }
   while(current) {
     if(val === current.val) {
       return true;
     } else {
       if (val >= current.val) {
         if (current.right) {
          if (current.right.val === val) {
            return true;
          } else {
            current = current.right;
          }
         } else {
           return false;
         }
       } else {
         if (current.left) {
           if (current.left.val === val) {
             return true;
           } else {
             current = current.left;
           }
         } else {
           console.log(false);
           return false; // val not found
         }
       }
     }
    }
    return this;
 };
 this.min = function() {
  let current = this.root,
    min;

  if (!current) {
    console.log(null);
    return null;
  } else {
    min = current.val;
    while (current) {
      if (current.left) {
        if (current.left.val < min) {
          min = current.left.val;
        } else {
          current = current.left;
        }
      } else {
        console.log(min);
        return min; // if root node has no left nodes return min now
      }
    }
    console.log(min);
    return min;
  }
 };
 this.max = function() {
   let current = this.root,
    max;

  if (!current) {
    return null;
  } else {
    max = current.val;
    while (current) {
      if (current.right) {
        if (current.right.val > max) {
          max = current.right.val;
        } else {
          current = current.right;
        }
      } else {
        console.log(max);
        return max; // if root node has no right nodes return max now
      }
    }
    console.log(max);
    return max;
  }
 };
}

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("$$$$$$$$$         TEST        $$$$$$$$");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
// let's test our add function:
console.log("======== ADD TO TREE ========");
let myTree = new BST();

myTree.add(1);
myTree.add(2);
myTree.add(3);
myTree.add(4);
myTree.add(-1);
console.log(myTree);

// Test our non-recursive method of doing this:
// myTree.nonrecursiveAdd(1);
// myTree.nonrecursiveAdd(2);
// myTree.nonrecursiveAdd(3);
// myTree.nonrecursiveAdd(4);
myTree.nonrecursiveAdd(-2);
console.log(myTree);

console.log("======== CONTAINS ========");
console.log(myTree.contains(0));


console.log("======== MIN ========");
myTree.min(); // => -2
myTree.add(-100);
myTree.min(); // => -100

console.log("======== MAX ========");
myTree.max(); // => 4
myTree.add(5); 
myTree.max(); // => 5