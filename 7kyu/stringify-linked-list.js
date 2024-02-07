class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function stringify(list) {
  let result = "";
  let current = list;
  while (current != null) {
    result += current.data + " -> ";
    current = current.next;
  }
  result += " null";
  return result;
}

console.log(
  stringify(new Node(1, new Node(2, new Node(3)))),
  "1 -> 2 -> 3 -> null"
);
console.log(
  stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))),
  "0 -> 1 -> 4 -> 9 -> 16 -> null"
);
console.log(stringify(null), "null");
