const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const webpack = require('webpack');

module.exports = function(env) {
    console.log(env);
    return {
        entry: {
            'index': './src/demo/index.js'
        },
        output: {
            filename: 'js/[name]-[chunkhash].js',
            path: path.resolve(__dirname, './build'),
            chunkFilename: '[name].[chunkhash:4].child.js'
        },
        module: {
            rules: [{
                test: /(\.jsx|\.js)$/i,
                use: [{
                    loader: 'babel-loader'
                }]
                // exclude: /node_modules/
            },
            {
                test: /(\.scss|\.sass)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            module: false,
                            minimize: true
                        }
                    }, {
                        loader: 'postcss-loader',
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }]
                })
            },
            {
                test: /(\.less)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }]
                })
            },
            {
                test: /(\.png|\.jpg|\.jpeg|\.gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100
                    }
                }]
            }]
        },
        resolve: {
            alias: {
                'src': path.resolve(__dirname, 'src'),
                'section': path.resolve(__dirname, 'src/demo/section'),
                'img': path.resolve(__dirname, 'src/demo/img'),
                'modules': path.resolve(__dirname, 'node_modules/islider.js/build'),
                'model': path.resolve(__dirname, 'src/demo/model')
            }
        },
        plugins: [
            new CleanWebpackPlugin(['./build']),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || 'development'),
                'isDev': JSON.stringify(env.isDev || 'true')
            }),
            new ExtractTextPlugin('style.css'),
            new HtmlWebpackPlugin({
                template: './src/demo/index.html',
                filename: './index.html',
                chunks: ['index']
            })
        ],
        devServer: {
            host: '0.0.0.0',
            port: 9822,
            proxy: {
                "/": "http://localhost:8009"
            }
        }
    }
}
