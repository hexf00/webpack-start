const path = require("path");

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        publicPath: './dist/', //与import函数配合使用，只能在浏览器环境使用
        path: path.join(__dirname, 'dist')
    }
}