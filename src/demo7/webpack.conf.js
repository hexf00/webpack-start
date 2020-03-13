const path = require("path");

module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        publicPath: './dist/', //与import函数配合使用，只能在浏览器环境使用
        path: path.join(__dirname, 'dist')
    },
    // 必须存在，否则报错
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: 'ts-loader'
            }, {
                loader: 'demo6',
                options: {
                    "test": 2321312312,
                }
            }],
        }]
    }
}