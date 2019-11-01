const path = require('path')

module.exports = {
    entry :'./src/main.js',  // 入口
    output:{
        path:path.resolve(__dirname,'dist'), // 动态的获取路径  (绝对路径)
        filename:'bundle.js'
    }  // 出口
}

// npm init 初始化 会生成package.json 文件
// npm install
// webpack 打包

// npm run build 可以打包webpack相关的东西  要先在package.json 文件中↓  优先找本地的webpack
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "build":"webpack"
//   },


//  npm install webpack@3.6.0 --save-dev 在相应文件中  安装本地webpack