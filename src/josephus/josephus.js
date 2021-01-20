function josephus(list, m) {
  let node = list.head;
  const tail = list.find((node) => !node.next);
  tail.next = list.head;
  while (node.next != node) {
    for (let i = 1; i < m; i++) {
      node = node.next;
    }
    if (node.next === list.head) {
      list.head = list.head.next;
    }
    node.next = node.next.next;
    node = node.next;
  }
  return node.value;
}

module.exports = josephus;
