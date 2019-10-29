module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8001",
        /*pathRewrite: {
          "^/\\api": ""
        }*/
      }
    }
  },
  transpileDependencies: ["vuetify"],
  publicPath: "/static"
};
