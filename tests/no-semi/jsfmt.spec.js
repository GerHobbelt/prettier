run_spec(__dirname, ["flow"]);
run_spec(__dirname, ["flow"], { semi: false });
run_spec(__dirname, ["babylon"], { arrowFnParens: "avoid", semi: false });
