const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};

const common = {
    entry: [
        'babel-polyfill', './app/app.jsx'
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                include: PATHS.app
            },
            {
                test: /\.jsx$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                include: PATHS.app
            }
        ]
    },
    externals: {
        'jquery': 'jQuery'
    },
};

if (TARGET === 'dev' || TARGET === 'fast-start' || !TARGET) {
    module.exports = common;
}

if (TARGET === 'prod' || TARGET === 'staging') {
    module.exports = merge(common, {
        plugins: [
            new UglifyJSPlugin({
                exclude: [/\.min\.js$/gi],
                mangle: true,
                output: {
                    comments: false,
                }
            }),
            new webpack.DefinePlugin({
                'process.env':{
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        ]
    });
}
