run_spec(__dirname, ["flow", "typescript"]);
run_spec(__dirname, ["flow", "typescript"], { trailingComma: "all" });
run_spec(__dirname, ["flow", "typescript"], { arrowFnParens: "callbacks" });
run_spec(__dirname, ["flow", "typescript"], { arrowParens: "always" });
