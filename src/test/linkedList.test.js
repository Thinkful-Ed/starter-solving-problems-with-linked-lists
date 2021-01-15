const LinkedList = require("../lib/linkedList");

describe("Linked List", () => {
  describe("constructor", () => {
    it("should create empty list", () => {
      const list = new LinkedList();
      expect(list).toBeDefined();
      expect(list.length).toEqual(0);
    });
  });

  describe("insertAtHead()", () => {
    let list;
    before(() => {
      list = new LinkedList();
    });

    it("should insert node on empty list", () => {
      list.insertAtHead(5);
      expect(list.length).toEqual(1);
      expect(list.head.value).toEqual(5);
    });
  });
});
