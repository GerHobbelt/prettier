"use strict";

module.exports = {
  applyElasticBreaks: require("./apply-elastic-breaks"),
  docPrinter: require("./doc-printer"),
  hasType: require("./has-type"),
  identity: i => i,
  includesAssignment: require("./includes-assignment"),
  indentVarAssignment: require("./indent-var-assignment"),
  isRequireBlock: require("./is-require-block"),
  requireBlockKinds: new Set(["const", "var"]),
  preVarBreakInstruction: {
    type: "if-break",
    breakContents: "",
    flatContents: ","
  },
  postVarBreakInstruction: {
    type: "if-break",
    breakContents: `${" ".repeat("var".length - 1)}, `,
    flatContents: ""
  },
  postConstBreakInstruction: {
    type: "if-break",
    breakContents: `${" ".repeat("const".length - 1)}, `,
    flatContents: ""
  },
  paddingBreakInstruction: {
    type: "if-break",
    breakContents: "",
    flatContents: " "
  }
};

module.exports.postLetBreakInstruction = module.exports.postVarBreakInstruction;
