
const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/index.jsx",

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/static/",
    },

    watch: NODE_ENV === "development",

    devtool: NODE_ENV === "development" ? "cheap-inline-module-source-map" : false,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "eslint-loader",
                    },
                ],
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

if (NODE_ENV === "production") {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJSPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true,
            },
        }),
    );
}
