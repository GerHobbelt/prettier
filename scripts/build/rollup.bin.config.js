import baseConfig from "./rollup.base.config.js";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import replace from "rollup-plugin-replace";

export default Object.assign(baseConfig, {
  input: "bin/prettier.js",
  output: {
    file: "dist/bin/prettier.js",
    format: "cjs"
  },
  banner: "#!/usr/bin/env node",
  plugins: [
    replace({
      "#!/usr/bin/env node": ""
    }),
    json(),
    resolve({ preferBuiltins: true }),
    commonjs()
  ],
  external: ["fs", "readline", "path", "module", "assert", "util", "events"]
});
