// Apparently, this code is needed to not break the tests. No difference found
// with or without so far:

/**
 * @jest-environment jsdom
 */

// IMPORT FUNCTION:
const buttonClick = require("../button");

// JEST DIRECTIVE THAT RUNS BEFORE EACH TEST IS RUN:
// jsdom mock dom creation. This is needed because we are not loading an actual
// HTML page.

beforeEach(() => {
  document.body.innerHTML = "<p id='par'></p>";
});

// ACTUAL TESTS:

// DEFINE SUITE:
describe("DOM Tests", () => {
  // TEST:
  test("expects p content to change", () => {
    // CALL THE FUNCTION:
    buttonClick();
    // EXPECTATION:
    // Checks the content of the innerHTML of the given element.
    expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
  });
});
