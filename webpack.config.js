"use strict";

module.exports = {
    entry: { "src/build/bundle": "./src/main.jsx" },
    output: {
        filename: '[name].js'
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
};