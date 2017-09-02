import baseConfig from "./rollup.base.config.js";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import globals from "rollup-plugin-node-globals";
import json from "rollup-plugin-json";

const filepath = process.env.filepath;
const filename = filepath.replace(/.+\//, "");
const basename = filename.replace(/\..+/, "");

export default Object.assign(baseConfig, {
  input: "dist/" + filepath,
  output: {
    file: "website/static/lib/" + filename,
    format: "iife"
  },
  plugins: [json(), resolve({ preferBuiltins: true }), commonjs(), globals()],
  strict: false,
  moduleName: basename.replace(/.+-/, ""),
  external: ["assert", "fs", "module"]
});
