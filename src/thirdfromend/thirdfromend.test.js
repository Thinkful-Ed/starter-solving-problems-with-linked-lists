const thirdFromEnd = require("./thirdfromend");
const LinkedList = require("../lib/linkedList");

describe("Third From End", () => {
  it("should return null for empty list", () => {
    const list = new LinkedList();
    const actual = thirdFromEnd(list);
    expect(actual).toBeNull();
  });

  it("should return null for list length < 3", () => {
    const list = new LinkedList([1, 2]);
    const actual = thirdFromEnd(list);
    expect(actual).toBeNull();
  });

  it("should return head for list length == 3", () => {
    const list = new LinkedList([1, 2, 3]);
    const actual = thirdFromEnd(list);
    expect(actual).not.toBeNull();
    expect(actual.value).toEqual(1);
  });

  it("should return third from last for longer lists", () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    const actual = thirdFromEnd(list);
    expect(actual).not.toBeNull();
    expect(actual.value).toEqual(3);
  });
});
