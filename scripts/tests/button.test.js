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

// This first beforeEach method is commented out so that the full DOM mock can
// be used below the dividing line.

// beforeEach(() => {
//   document.body.innerHTML = "<p id='par'></p>";
// });

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
  // ADDITIONAL TEST TO CHECK THE DOM IS BEING READ CORRECTLY:
  test("h1 should exist", () => {
    expect(document.getElementsByTagName("h1").length).toBe(1);
  });
});

//----------------------------------------------------------------------------//

// LOADING THE ENTIRE HTML PAGE AND ATTACHING TO THE MOCK DOM:

beforeEach(() => {
  // Use node.js' built-in file system handling module for opening, reading and
  // writing files:
  let fs = require("fs");
  // Use fs to read the contents of our HTML file and specify encoding to return
  // a string:
  // (File path not specified because by default, the tests run from node's root
  // dir, which is where our index.html file is.)
  let fileContents = fs.readFileSync("index.html", "utf-8");
  // Recommended method of attaching this file to the mock DOM:
  document.open();
  document.write(fileContents);
  document.close();
});
