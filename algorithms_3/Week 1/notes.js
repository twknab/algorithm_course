function Node(value) {
  this.value = value;
  this.next = null;
}
function singlyList() {
  this.head = null;
  this.tail = null;
}
function addBack(node, val) {
  if (node) {
    let temp = node;
    while (temp.next) {
      temp = temp.next
    }
    console.log(temp); // this will be last node
    temp.next = new Node(val); // adds new node to end
  }

  console.log(node1);
  return node1;
}
node1 = new Node(1);
addBack(node1, 2);
