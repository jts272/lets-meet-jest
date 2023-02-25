// Import the function we are testing:

const addition = require("../calc");

// FIRST TEST

// Top level parent describe:

describe("Calculator", () => {
  // Second level describe (C&P for other calculator functions):
  describe("Addition function", () => {
    // TEST:
    test("should return 42 for 20 + 22", () => {
      // EXPECTATION:
      expect(addition(20, 22)).toBe(42);
    });
  });
  describe("Subtraction function", () => {});
  describe("Multiplication function", () => {});
  describe("Division function", () => {});
});
