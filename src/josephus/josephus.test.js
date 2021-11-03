const LinkedList = require("../lib/linkedList");
const josephus = require("./josephus");

describe("The Josephus Problem", () => {
  it("should work with 1 node", () => {
    const list = new LinkedList(["Arsames"]);
    const actual = josephus(list, 10);
    expect(actual).toEqual("Arsames");
  });

  it("should work with several nodes", () => {
    const list = new LinkedList([
      "Arsames",
      "Bagaeus",
      "Cyrus",
      "Darius",
      "Eurythenes",
    ]);
    const actual = josephus(list, 7);
    expect(actual).toEqual("Arsames");
  });

  it("should work when m is 1", () => {
    const list = new LinkedList([
      "Arsames",
      "Bagaeus",
      "Cyrus",
      "Darius",
      "Eurythenes",
    ]);
    console.log(1);
    const actual = josephus(list, 1);
    expect(actual).toEqual("Cyrus");
  });
});
