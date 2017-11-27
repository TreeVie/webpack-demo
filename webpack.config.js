var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // 入口文件
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    // 导出配置
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },{
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },{
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};