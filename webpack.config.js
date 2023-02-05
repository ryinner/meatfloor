const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        "app": "./src/Frontend/index.js",
    },
    output: {
        clean: false,
        path: path.resolve(__dirname, "public/"),
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
    devtool: "eval-cheap-source-map",
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false
        }),
        new HtmlWebpackPlugin({
            title: "Meatfloor",
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify({
                API_URL: (process.env.NODE_ENV === "production" ? 'http://a90686jj.beget.tech/' : 'http://meatfloor/')
            })
        })
    ],
    devServer: {
        static:  path.join(__dirname, "public"),
        historyApiFallback: {
            index: "index.html"
        },
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        host: 'localhost',
        compress: true,
        port: 3000,
    },
};