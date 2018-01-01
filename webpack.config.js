
const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const common = {
    entry: "./src/index.jsx",

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/static/",
    },
    resolve: {
        extensions: ["*", ".webpack.js", ".web.js", ".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: ["babel-loader", "eslint-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },

};

const devConfig = {
    devtool: "cheap-inline-module-source-map",
    devServer: {
        port: 9000,
        historyApiFallback: true,
    },
};

const productionConfig = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true,
            },
        }),
        // new HtmlWebpackPlugin({
        //     title: "User app",
        // }),
    ],
};

module.exports = (env) => {
    if (env === "production") {
        return Object.assign(
            {},
            common,
            productionConfig,
        );
    }

    return Object.assign(
        {},
        common,
        devConfig,
    );
};
