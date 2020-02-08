const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require ('rollup-plugin-terser')

module.exports = [
  { entry: "rollup", output: "output" },
  { entry: "rollup-dce", output: "dce-output" },
  { entry: "rollup-esm", output: "esm-output" }
].reduce((configs, { entry, output }) => {
  for (const minimize of [false, true]) {
    configs.push({
      input: `./${output}/Main/index.js`,
      output: {
        file: `dist/${entry}-bundle${minimize ? ".min" : ""}.js`
      },
      plugins: [commonjs()].concat(minimize ? [terser()] : []),
    });
  }
  return configs;
}, []);
