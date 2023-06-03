const myFunctions = require("./myFunctions.js");

describe("Test", () => {
  it("should work", () => {
    expect("asdasd").toEqual("asdasd");
  });
  it("should not return false values", () => {
    expect("asdasd").not.toEqual("fdgdfg");
  });
});

describe("myGame", () => {
  it("works with normal slices", () => {
    expect(myFunctions.myGame(10, 20)).toEqual(30);
  });
  it("failse when more than 100", () => {
    expect(myFunctions.myGame(100, 20)).toEqual(0);
  });
});

describe("getFirstCharacter", () => {
  jest.spyOn(myFunctions.dataGrip, "getData").mockReturnValue(["abc"]);

  it("works", () => {
    expect(myFunctions.getFirstCharacter()).toEqual("abc");
  });
});
