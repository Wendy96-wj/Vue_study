const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')


module.exports = webpackMerge(baseConfig,{
    devServer:{
        contentBase:'./dist', //当前文件夹
        inline:true,  // 实时监听(页面实时刷新)
        // port:'',  // 端口号
    }
})
