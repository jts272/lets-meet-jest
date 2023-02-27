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
    // TEST 2:
    test("should return 73 for 42 + 31", () => {
      // EXPECTATION:
      expect(addition(42, 31)).toBe(73);
    });
    // TEST 3 (idea):
    test("should return error for 42 + 'donkey'", () => {
      //  EXPECTATION:
      expect(addition(42, "donkey")).toBe(Error);
    });
    // ANSWERS FOR FURTHER TEST SCENARIOS:
    // 1. No params
    // 2. Missing param
    // 3. String as one or both params
    // 4. Null as one or both params
    // 5. Undefined as a param
    // 6. Use floats
    // 7. Use negatives
    // TEST (idea 6):
    test("should return 3.5 for 1.5 + 2", () => {
      //  EXPECTATION:
      expect(addition(1.5, 2)).toBe(3.5);
    });
    // TEST (idea 7):
    test("should return -9 for -3 + -6", () => {
      //  EXPECTATION:
      expect(addition(-3, -6)).toBe(-9);
    });
    // TEST (idea 5):
    test("should return null for null + null", () => {
      //  EXPECTATION:
      expect(addition(null, null)).toBe(null);
    });
  });
  // ---------------------------------------------------------------- //
  describe("Subtraction function", () => {});
  describe("Multiplication function", () => {});
  describe("Division function", () => {});
});
