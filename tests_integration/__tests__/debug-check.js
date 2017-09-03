"use strict";

console.log('debug-check 0');

const runPrettier = require("../runPrettier");

test("doesn't crash when --debug-check is passed", () => {
  console.log('debug-check 1 before');
  const result = runPrettier("cli/with-shebang", [
    "issue1890.js",
    "--debug-check"
  ], null);
  console.log('debug-check 1', result);

  expect(result.stdout).toEqual("issue1890.js\n");
  expect(result.stderr).toEqual("");
  expect(result.status).toEqual(0);

  console.log('debug-check 1 end');
});

test("checks stdin with --debug-check", () => {
  console.log('debug-check 2 before');
  const result = runPrettier("cli/with-shebang", ["--debug-check"], {
    input: "0"
  });
  console.log('debug-check 2', result);

  expect(result.stdout).toEqual("(stdin)\n");
  expect(result.stderr).toEqual("");
  expect(result.status).toEqual(0);

  console.log('debug-check 2 end');
});
