const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};

const common = {
    entry: {
        index: ['babel-polyfill', './app/app.jsx'],
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-redux',
            'react-intl',
            'redux',
            'redux-promise',
            'redux-thunk',
            'redux-logger'
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                // TODO: for own project replace to /node_modules/
                // Exclude app.jsx for npm as we use a module in node_modules that is JSX.
                // babel-loader is excluding it so it doesn't read it,
                // we make an exception for that package in that regex (whitelist or blacklist)
                // For more details please see issues - https://github.com/babel/babel-loader/issues/530
                exclude: /node_modules\/(?!(app)\/).*/,
                include: PATHS.app
            },
            {
                test: /\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules\/(?!(app)\/).*/,
                include: PATHS.app
            }
        ]
    },
    externals: {
        'jquery': 'jQuery'
    }
};

if (TARGET === 'dev' || TARGET === 'fast-start' || !TARGET) {
    module.exports = common;
}

if (TARGET === 'prod' || TARGET === 'staging') {
    module.exports = merge(common, {
        optimization: {
            minimize: true,
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: false
                })
            ],
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'initial',
                        name: 'vendor',
                        test: 'vendor',
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        ]
    });
}
