const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        interfaceA: './src/js/interfaceA.js',
        interfaceB: './src/js/interfaceB.js'
    },
    output: {
        filename: '[name].bundle.js', 
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/, 
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/interfaceA.html',
            filename: 'index.html',
            chunks: ['interfaceA'] 
        }),
        new HtmlWebpackPlugin({
            template: './src/interfaceB.html',
            filename: 'interfaceB.html',
            chunks: ['interfaceB'] 
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/favicon.ico', to: 'favicon.ico' } // Copie le favicon à la racine de dist/
            ]
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
        port: 8080
    }
};
