"use strict";

const ENABLE_COVERAGE = !!process.env.CI;

module.exports = {
  setupFiles: ["<rootDir>/tests_config/run_spec.js"],
  snapshotSerializers: ["<rootDir>/tests_config/raw-serializer.js"],
  testRegex: "jsfmt\\.spec\\.js$|__tests__/.*\\.js$",
  collectCoverage: ENABLE_COVERAGE,
  collectCoverageFrom: ["src/**/*.js", "index.js", "!<rootDir>/node_modules/"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/doc-debug.js",
    "<rootDir>/src/clean-ast.js",
    "<rootDir>/src/deprecated.js"
  ],
  testPathIgnorePatterns: [
    "tests/new_react", 
    "tests/more_react",
    "tests_integration/__tests__/the-following-tests-all-hang-forever-on-my-machine.js",
    "tests_integration/__tests__/debug-check.js",
    "tests_integration/__tests__/debug-print-doc.js",
    "tests_integration/__tests__/list-different.js",
    "tests_integration/__tests__/multiple-patterns.js",
    "tests_integration/__tests__/syntax-error.js"
  ]
};
