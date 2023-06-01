const myFunctions = require("./myFunctions");

describe("Empty Test", () => {
  it("tests that the framework is running", () => {
    //code
    expect("abc").toEqual("abc");
  });

  it("fails when it should", () => {
    expect("abc").not.toEqual("def");
  });
});

describe("testing gredyGame", () => {
  it("works ok under 100", () => {
    expect(myFunctions.greedyGame(20, 30)).toEqual(50);
  });

  // works over 100
  it("works ok over 100", () => {
    expect(myFunctions.greedyGame(100, 30)).toEqual(0);
    expect(myFunctions.greedyGame(100, 30)).not.toEqual(130);
  });
});

describe("Tests for API call", () => {
  it("mocks API", () => {
    expect(myFunctions.shortenString("abc")).toEqual("abc");
    expect(myFunctions.shortenString("12345678901")).not.toEqual("12345678901");
    expect(myFunctions.shortenString("12345678901")).toEqual("1234567...");
  });
});
