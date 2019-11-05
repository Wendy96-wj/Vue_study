const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/main.js',  // 入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 动态的获取路径  (绝对路径)
        filename: 'bundle.js',
        publicPath: 'dist/'   // 把图片打包后的绝对路径
    }, // 出口
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责将css文件进行加载  
                //  需要加载npm install style-loader --save-dev
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时， 是从右向左读
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }

                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',//'file-loader',
                        options: {
                            // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
                            // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
                            // npm install --save-dev file-loader
                            limit: 8192,
                            name: 'img/[name].[hash:8].[ext]'
                        },


                    }
                ]
            },
            {
                test: /\.js$/,
                // exclude:排除
                // include：包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve: {
        // alias:别名
        extensions:['.js','.css','.vue'],  // 写了这个就可以省略扩展名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new webpack.BannerPlugin('最终版权归Wendy所有'),
        new HtmlWebpackPlugin({
            template:'index.html'
        }) ,// npm install html-webpack-plugin --save-dev
       
    ]
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