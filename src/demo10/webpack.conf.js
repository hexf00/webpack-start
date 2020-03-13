const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    entry: {
        app: './index.ts',
        page: './page.ts'
    },
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
        // minimize:true,
        minimizer: [
            // new TerserPlugin({
            //     test:/\.ts$/
            //     // sourceMap: false
            //     // cache:false
            // }),

        ],
        splitChunks: {
            //initial、async、all
            chunks: 'all',
            name: "common"
        }
    },
    // 开启后才能看到
    devtool: 'source-map',
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
        }),
            new TerserPlugin({
                test:/\.js$/
                // sourceMap: false
                // cache:false
            }),

        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true

            // assetNameRegExp: /\.css$/g,
            // cssProcessor:require('cssnano'),
            // cssProcessorOptions:{
            //     discardComments:{
            //         removeAll:true
            //     }
            // },
            // canPrint:true
        })
    ]
}