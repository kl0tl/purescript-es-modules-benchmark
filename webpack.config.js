const { resolve, join } = require('path');

module.exports =
  [
    { entry: `webpack${process.env.WEBPACK_VERSION}`, output: "output" },
    { entry: `webpack${process.env.WEBPACK_VERSION}-dce`, output: "dce-output" },
    { entry: `webpack${process.env.WEBPACK_VERSION}-esm`, output: "esm-output" }
  ].reduce((configs, { entry, output }) => {
    for (const minimize of [false, true]) {
      configs.push({
        mode: "production",
        entry: {
          [entry]: resolve(__dirname, join(output, "Main", "index.js")),
        },
        output: {
          path: resolve(__dirname, "dist"),
          filename: `[name]-bundle${minimize ? ".min" : ""}.js`
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              sideEffects: false
            }
          ]
        },
        optimization: {
          minimize
        }
      });
    }
    return configs;
  }, []);
