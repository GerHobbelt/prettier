run_spec(__dirname, ["babylon", "typescript"], { arrowParens: "avoid" });
run_spec(__dirname, ["babylon", "typescript"], { arrowFnParens: "callbacks" });
run_spec(__dirname, ["babylon", "typescript"], { arrowParens: "always" });
