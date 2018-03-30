var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: '/',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 8060
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //check for all js files
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
              presets: ['react', 'es2015']
            }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' },
                { loader: 'css-loader' }]
            },
        ]
    }
}