/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  if (!list.head) {
    return list;
  }

  const x_next = x.next;
  const x_prev = list.findWithPrevious((node) => node === x)[1];
  const y_prev = list.findWithPrevious((node) => node === y)[1];

  x.next = y.next;
  y.next = x_next;
  if (x_prev) {
    x_prev.next = y;
  } else {
    list.head = y;
  }

  if (y_prev) {
    y_prev.next = x;
  } else {
    list.head = x;
  }

  return list;
}

module.exports = swap;
