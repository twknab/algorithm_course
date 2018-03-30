function BTNode(value) {
  this.val = value;
  this.left = null;
  this.right = null;
  this.search = function(val) {
    if (this.val === val) {
      return this;
    } else if (val >= this.val) {
      if (!this.right) {
        return false;
      } else {
        return this.right.search(val);
      }
    } else if (val < this.val) {
      if (!this.left) {
        return false;
      } else {
        return this.left.search(val);
      }
    }
  };
  this.isEmpty = function() {
    if (this.val) {
      return false;
    } else {
      return (this.right.isEmpty() && this.left.isEmpty());
    }
  };
}

function BST() {
  this.root = null;
  this.search = function (val) {
    let current = this.root;
    if (!current) {
      return false;
    } else {
      return current.search(val);
    }
  };
  this.add = function (val) {
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
  this.size = function(current=this.root) {
    // let current = this.root;
  
    if (!current) {
      return null;
    } else {
      if (!current.left && !current.right) {
        return 1;
      } else {
        return (1 + (this.size(current.left) + this.size(current.right)));
      }
    }
  };
  this.removeVal = function (val) {
    // do stuff
  };
  this.isEmpty = function () {
    let current = this.root;
    if (!current) {
      return null;
    } else {
      return (current.isEmpty());
    }
  };
}

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("$$$$$$$$$         TEST        $$$$$$$$");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
// let's test our functions:
let myList = new BST();
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
myList.add(5);
myList.add(-1);
myList.add(-2);
myList.add(-3);
myList.add(4.5);
myList.add(2.5);
myList.add(5.5);
console.log(myList.size()); // => 11


console.log("======== SEARCH (for use with removeAt) ========");
console.log(myList.search(100)); // => false
console.log(myList.search(2)); // => returns node

console.log("======== IS EMPTY ========");
console.log(myList.isEmpty());