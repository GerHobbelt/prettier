"use strict";

const booleanOptionNames = [
  "use-tabs",
  "semi",
  "single-quote",
  "bracket-spacing",
  "braces-spacing",
  "break-property",
  "arrow-parens",
  "array-expand",
  "break-before-else",
  "flatten-ternaries",
  "align-object-properties",
  "space-empty-fn",
  "space-before-function-paren",
  "jsx-single-quote",
  "jsx-bracket-same-line",
  // Deprecated in 0.0.10
  "flow-parser",
  "require-pragma"
];

const stringOptionNames = [
  "print-width",
  "tab-width",
  "parser",
  "trailing-comma"
];

const defaultOptions = {
  "bracket-spacing": true,
  semi: true,
  parser: "babylon"
};

const options = {
  boolean: [
    "write",
    "stdin",
    // The supports-color package (a sub sub dependency) looks directly at
    // `process.argv` for `--no-color` and such-like options. The reason it is
    // listed here is to avoid "Ignored unknown option: --no-color" warnings.
    // See https://github.com/chalk/supports-color/#info for more information.
    "color",
    "list-different",
    "help",
    "version",
    "debug-print-doc",
    "debug-check",
    "with-node-modules"
  ].concat(booleanOptionNames),
  string: [
    "cursor-offset",
    "range-start",
    "range-end",
    "stdin-filepath",
    "config",
    "config-precedence",
    "find-config-path",
    "ignore-path"
  ].concat(stringOptionNames),
  default: {
    color: true,
    "ignore-path": ".prettierignore",
    "config-precedence": "cli-override"
  },
  alias: {
    help: "h",
    version: "v",
    "list-different": "l"
  },
  unknown: param => {
    if (param.startsWith("-")) {
      console.warn(`Ignored unknown option: ${param}\n`);
      return false;
    }
  }
};

const usage = `
Usage: prettier [opts] [filename ...]

Available options:
  --write                  Edit the file in-place. (Beware!)
  --list-different or -l   Print filenames of files that are different from Prettier formatting.
  --config                 Path to a prettier configuration file (.prettierrc, package.json, prettier.config.js).
  --config-precedence <cli-override|file-override|prefer-file>
                           Defines how config file should be evaluated in combination of CLI options
                           cli-override  | default config => config file => CLI options
                           file-override | default config => CLI options => config file
                           prefer-file   | default config => config file (if config file is found) or
                                           default config => CLI options (if no config file is found)
                           Defaults to cli-override
  --no-config              Do not look for a configuration file.
  --find-config-path <path>
                           Finds and prints the path to a configuration file for a given input file.
  --ignore-path <path>     Path to a file containing patterns that describe files to ignore.
                           Defaults to ./.prettierignore.
  --require-pragma
                           Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.
  --stdin                  Read input from stdin.
  --stdin-filepath         Path to the file used to read from stdin.
  --print-width <int>      Specify the length of line that the printer will wrap on. Defaults to 80.
  --tab-width <int>        Specify the number of spaces per indentation-level. Defaults to 2.
  --use-tabs               Indent lines with tabs instead of spaces.
  --no-semi                Do not print semicolons, except at the beginning of lines which may need them.
  --single-quote           Use single quotes instead of double quotes.
  --jsx-single-quote       Use single quotes instead of double quotes for JSX attributes.
  --bracket-spacing        Print spaces between [brackets].
  --no-braces-spacing      Do not print spaces between {braces}.
  --break-property         Allow object properties to break lines.
  --arrow-parens           Always put parentheses on arrow function arguments.
  --array-expand           Expand arrays into one item per line.
  --flatten-ternaries      Format ternaries in a flat style.
  --break-before-else      Put 'else' clause in a new line.
  --jsx-bracket-same-line  Put > on the last line instead of at a new line.
  --trailing-comma <none|es5|all>
                           Print trailing commas wherever possible when multi-line. Defaults to none.
                           You can customize with a comma separated list. 'all' is equivalent to:
                           'array,object,import,export,arguments'
  --align-object-properties
                           Align colons in multiline object literals. Does nothing if object has computed property names.
  --no-space-empty-fn      Omit space before empty function body. Defaults to false.
  --space-before-function-paren
                           Put a space before function parenthesis. Defaults to false.
  --parser <flow|babylon|typescript|postcss|json|graphql>
                           Specify which parse to use. Defaults to babylon.
  --cursor-offset <int>    Print (to stderr) where a cursor at the given position would move to after formatting.
                           This option cannot be used with --range-start and --range-end
  --range-start <int>      Format code starting at a given character offset.
                           The range will extend backwards to the start of the first line containing the selected statement.
                           This option cannot be used with --cursor-offset.
                           Defaults to 0.
  --range-end <int>        Format code ending at a given character offset (exclusive).
                           The range will extend forwards to the end of the selected statement.
                           This option cannot be used with --cursor-offset.
                           Defaults to Infinity.
  --no-color               Do not colorize error messages.
  --with-node-modules      Process files inside 'node_modules' directory.
  --version or -v          Print Prettier version.

`.slice(1); // remove leading line break

module.exports = {
  booleanOptionNames,
  stringOptionNames,
  defaultOptions,
  options,
  usage
};
