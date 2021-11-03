const LinkedList = require("./linkedList");

describe("Linked List", () => {
  describe("constructor", () => {
    it("should create empty list", () => {
      const list = new LinkedList();
      expect(list).toBeDefined();
      expect(list.length).toEqual(0);
    });

    it("should create a list from an array", () => {
      const list = new LinkedList([1, 2]);
      const expected = new LinkedList();
      expected.insertAtHead(2);
      expected.insertAtHead(1);
      expect(expected).toEqual(list);
    });
  });

  describe("insertAtHead()", () => {
    it("should insert node on empty list", () => {
      const list = new LinkedList();
      list.insertAtHead(5);
      expect(list.length).toEqual(1);
      expect(list.head.value).toEqual(5);
    });
  });
});
