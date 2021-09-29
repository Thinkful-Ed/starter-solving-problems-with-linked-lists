const { reverseIterative, reverseRecursive } = require("./reverse");
const LinkedList = require("../lib/linkedList");

describe("reverse a list", () => {
  describe("Iterative algorithm", () => {
    it("should return empty list for empty list", () => {
      const list = new LinkedList();
      const expected = new LinkedList();
      const actual = reverseIterative(list);
      expect(actual).toEqual(expected);
    });

    it("should return the same list if just one element", () => {
      const list = new LinkedList([1]);
      const expected = new LinkedList([1]);
      const actual = reverseIterative(list);
      expect(actual).toEqual(expected);
    });

    it("should reverse a list of numbers", () => {
      const list = new LinkedList([1, 2, 3, 4, 5]);
      const expected = new LinkedList([5, 4, 3, 2, 1]);
      const actual = reverseIterative(list);
      expect(actual).toEqual(expected);
    });
  });

  describe("Recursive algorithm", () => {
    it("should return empty list for empty list", () => {
      const list = new LinkedList();
      const expected = new LinkedList();
      const actual = reverseRecursive(list);
      expect(actual).toEqual(expected);
    });

    it("should return the same list if just one element", () => {
      const list = new LinkedList([1]);
      const expected = new LinkedList([1]);
      const actual = reverseRecursive(list);
      expect(actual).toEqual(expected);
    });

    it("should reverse a list of numbers", () => {
      const list = new LinkedList([1, 2, 3, 4, 5]);
      const expected = new LinkedList([5, 4, 3, 2, 1]);
      const actual = reverseRecursive(list);
      expect(actual).toEqual(expected);
    });
  });
});
