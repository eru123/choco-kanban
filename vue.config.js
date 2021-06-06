module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
  css: {
    extract: true,
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = require("./project.json").appName;
      return args;
    });
  },
  pwa: {
    name: require("./project.json").appName,
    themeColor: "#f1f1f1",
    msTileColor: "#f1f1f1",
    assetsVersion: require("./package.json").version,
  },
  // devServer: {
  //   public: "localhost:8080",
  //   disableHostCheck: true,
  // },
};
