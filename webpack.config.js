'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');

module.exports = {
    entry: "./app.jsx",
    output: {
        filename: 'bundle.js'
    },

    watch: NODE_ENV == 'development',

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : false,

    plugins:[
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

    module:{
        rules:[{
            test:/\.jsx$/,
            exclude: /(node_modules)/,
            use:[
                {
                  loader:'babel-loader'  
                }
            ]
        }]
    }
};