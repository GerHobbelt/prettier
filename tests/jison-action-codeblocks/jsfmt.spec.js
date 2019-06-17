// const defaultOptions = {
//   // Source type ("script" or "module") for different semantics
//   sourceType: "script",
//   // Source filename.
//   sourceFilename: undefined,
//   // Line from which to start counting source. Useful for
//   // integration with other tools.
//   startLine: 1,
//   // When enabled, await at the top level is not considered an
//   // error.
//   allowAwaitOutsideFunction: false,
//   // When enabled, a return at the top level is not considered an
//   // error.
//   allowReturnOutsideFunction: false,
//   // When enabled, import/export statements are not constrained to
//   // appearing at the top of the program.
//   allowImportExportEverywhere: false,
//   // TODO
//   allowSuperOutsideMethod: false,
//   // An array of plugins to enable
//   plugins: [],
//   // TODO
//   strictMode: null,
//   // Nodes have their start and end characters offsets recorded in
//   // `start` and `end` properties (directly on the node, rather than
//   // the `loc` object, which holds line/column data. To also add a
//   // [semi-standardized][range] `range` property holding a `[start,
//   // end]` array with the same numbers, set the `ranges` option to
//   // `true`.
//   //
//   // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
//   ranges: false,
//   // Adds all parsed tokens to a `tokens` property on the `File` node
//   tokens: false,
//   // Recognize JISON action block variables, e.g. `#1` or `@id`
//   jisonVariables: false,
// };

run_spec(__dirname, ["babylon"], {
	parserOptions: {
		jisonVariables: true		
	}
});
