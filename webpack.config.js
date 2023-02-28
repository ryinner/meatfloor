const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        "app": "./src/Frontend/index.js",
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, "public/assets/"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    stats: {
        errorDetails: true,
        chunks: false,
        assets: false,
        modules: false
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/i,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/Frontend/"),
        },
        extensions: [".js", ".vue", ".json"]
    },
    optimization: {
        emitOnErrors: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    format: {
                        comments: false,
                    }
                },
                extractComments: false,
            }),
        ],
    },
    devtool: "hidden-cheap-source-map",
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false
        })
    ]
};