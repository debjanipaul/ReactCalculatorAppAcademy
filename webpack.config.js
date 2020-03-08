// Webpack uses this to work with directories
const path = require('path');
module.exports = {
    entry: './app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist', 'app', 'assets', 'javascripts'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: [/\.css?$/],
                loader: 'style-loader!css-loader',
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    mode: 'development'
};