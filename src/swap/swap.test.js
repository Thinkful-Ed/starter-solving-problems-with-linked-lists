const LinkedList = require("../lib/linkedList");
const Node = require("../lib/node");

const swap = require("./swap");

describe("The Swap Node Problem", () => {
  it("should return empty list if given empty list", () => {
    const list = new LinkedList();
    const actual = swap(list, null, null);
    expect(actual).toEqual(list);
  });

  it("should return empty list even if given Nodes", () => {
    const list = new LinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const actual = swap(list, node1, node2);
    expect(actual).toEqual(list);
  });

  it("should return same list if both nodes are the same", () => {
    const list = new LinkedList([1, 2, 3]);
    const node1 = list.find((node) => node.value === 2);
    const node2 = list.find((node) => node.value === 2);
    const actual = swap(list, node1, node2);
    expect(actual).toEqual(list);
  });

  it("should swap nodes in normal case", () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    const expected = new LinkedList([1, 4, 3, 2, 5]);
    const node1 = list.find((node) => node.value === 2);
    const node2 = list.find((node) => node.value === 4);
    const actual = swap(list, node1, node2);
    expect(actual).toEqual(expected);
  });

  it("should swap with head", () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    const expected = new LinkedList([4, 2, 3, 1, 5]);
    const node1 = list.head;
    const node2 = list.find((node) => node.value === 4);
    const actual = swap(list, node1, node2);
    expect(actual).toEqual(expected);
  });

  it("should swap with tail", () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    const expected = new LinkedList([1, 5, 3, 4, 2]);
    const node1 = list.find((node) => node.value === 5);
    const node2 = list.find((node) => node.value === 2);
    const actual = swap(list, node1, node2);
    expect(actual).toEqual(expected);
  });
});
