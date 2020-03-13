// custom-loader

// 使用npm install ./src/demo6 --save-dev 安装会建立快捷方式
// 使用cnpm install 不会建立快捷方式

// 改变了代码会导致sourceMap混乱，所以需要借助sourceMap的工具来改代码

var loaderUtils = require("loader-utils");

module.exports = function (content) {
    console.log("this.cacheable", this.cacheable)
    if (this.cacheable) {
        this.cacheable()
    }
    console.log("自定义loader被加载，配置为：", loaderUtils.getOptions(this))
    return "console.log('223');\n" + content
}