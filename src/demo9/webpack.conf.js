const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './index.ts',
    mode: "development",
    output: {
        filename: '[name].js',
        publicPath: './dist/', //与import函数配合使用，只能在浏览器环境使用
        path: path.join(__dirname, 'dist')
    },
    // 必须存在，否则TS报错
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    optimization: {
        splitChunks: {
            //initial、async、all
            chunks: 'all',
            // name:"common"
        }
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './dist/',
                    }
                },
                    'css-loader'
                ],
            }, {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader'
                }],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}