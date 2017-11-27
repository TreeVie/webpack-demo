var path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.[hash:8].js',
        path:path.resolve(__dirname,'dist')
    }
};