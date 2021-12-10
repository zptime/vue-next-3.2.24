const path = require("path");

// 导出配置信息
module.exports = {
  mode: "development",
  // 入口文件
  entry: "./src/main.js",
  // 打包导出文件
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式
        // 写法一：loader的写法（语法糖）
        // loader: "css-loader",

        // 写法二
        // use: "css-loader",

        // 写法三
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // plugins: [require("autoprefixer")],
                plugins: [require("postcss-preset-env")],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
    ],
  },
};
