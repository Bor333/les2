const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundlerAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const { resolve } = require('path');

module.exports = {
    entry: './js/index.js',
    // mode: 'development',
   // watch: true,
    output: {
        filename: 'main.[contenthash]bundler.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            // {
            //     test: /\.(css)$/i,
            //     use: [ MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
                test: /\.(s[ac]ss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // new BundlerAnalyzer()
    ],
    devServer: {
        port: 3000
    }
}

// resolve(__dirname, 'index.html')