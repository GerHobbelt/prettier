"use strict";

const chalk = require("chalk");
const stringWidth = require("string-width");
const bundler = require("./bundler");
const bundleConfigs = require("./config");
const util = require("./util");

// Errors in promises should be fatal.
const loggedErrors = new Set();
process.on("unhandledRejection", err => {
  if (loggedErrors.has(err)) {
    // No need to print it twice.
    process.exit(1);
  }
  throw err;
});

const OK = chalk.reset.inverse.bold.green(" DONE ");
const FAIL = chalk.reset.inverse.bold.red(" FAIL ");

function fitTerminal(input) {
  const columns = process.stdout.columns || 80;
  const WIDTH = columns - stringWidth(OK) + 1;
  if (input.length < WIDTH) {
    input += Array(WIDTH - input.length).join(chalk.dim("."));
  }
  return input;
}

async function createBundle(bundleConfig) {
  const { output } = bundleConfig;
  process.stdout.write(fitTerminal(output));

  try {
    await bundler(bundleConfig, output);
  } catch (error) {
    process.stdout.write(`${FAIL}\n\n`);
    handleError(error);
  }

  process.stdout.write(`${OK}\n`);
}

function handleError(error) {
  loggedErrors.add(error);
  console.error(error);
  throw error;
}

async function preparePackage() {
  const pkg = await util.readJson("package.json");
  pkg.bin = "./bin-prettier.js";
  pkg.engines.node = ">=4";
  delete pkg.dependencies;
  delete pkg.devDependencies;
  pkg.scripts = {
    prepublishOnly:
      "node -e \"assert.equal(require('.').version, require('..').version)\""
  };
  pkg.name = "prettier-elastic";
  pkg.prettierVersion = pkg.version;
  pkg.description = "Prettier (code formatter) with elastic vars formatting";
  pkg.repository = "medikoo/prettier-elastic";
  delete pkg.homepage;
  await util.writeJson("dist/package.json", pkg);

  await util.copyFile("./README.md", "./dist/README.md");
}

async function run() {
  await util.asyncRimRaf("dist");

  console.log(chalk.inverse(" Building packages "));
  for (const bundleConfig of bundleConfigs) {
    await createBundle(bundleConfig);
  }

  await preparePackage();
}

run();
