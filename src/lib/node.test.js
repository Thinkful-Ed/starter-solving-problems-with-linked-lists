const Node = require("./node");

describe("Node", () => {
  it("should instantiate a new Node", () => {
    const n = new Node();
    expect(n).toBeDefined();
  });

  it("should instantiate a new Node with undefined value and null next", () => {
    const n = new Node();
    expect(n.value).not.toBeDefined();
    expect(n.next).toBeNull();
  });

  it("should instantiate a new Node with given value and null next", () => {
    const n = new Node(5);
    expect(n.value).toEqual(5);
    expect(n.next).toBeNull();
  });

  it("should instantiate a new Node with given value and next", () => {
    const n = new Node(5, new Node());
    expect(n.value).toEqual(5);
    expect(n.next).not.toBeNull();
  });
});
