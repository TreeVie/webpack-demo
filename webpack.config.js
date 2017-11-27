var path = require('path');

module.exports = {
    // 入口文件
    entry:'./src/index.js',
    // 导出配置
    output:{
        filename:'bundle.js',
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
    }
};