// 1.使用common.js的模块化规范
const {add, mul} = require('./js/mathUtils.js')
console.log(add(20,30));
console.log(mul(20,30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info"
console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
// 安装loader的依赖 npm install --save-dev css-loader
require('./css/normal.css')

// 4.依赖less文件
// npm install --save-dev less-loader less
require('./css/special.less')
document.writeln('<h2>你好啊，webpack！</h2>')

// 5.使用Vue进行开发
// npm install vue --save  配置Vue
import Vue from 'vue'
// import App from './vue/app.js'

import App from './Vue/App'
// 安装npm install vue-loader vue-template-compiler --save-dev
// 可能发生的错误：
/**
 ** ERROR in ./src/Vue/App.vue
    vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
    @ ./src/main.js 9:11-35
 **
 **
 ** 解决方法：vue-loader 14.0版本以上需要配置一个插件，目前版本15.7.2  改为 13.0.0低版本
 */
const app = new Vue({
    el:"#app",
    template:'<App/>',
    components:{
        App
    }
})

// const app = new Vue({
//     el:"#app",
//     template:`
//     <div>
//         <h2>{{message}}</h2>
//         <button @click="btnClick">按钮</button>
//         <h2>{{name}}</h2>
//     </div>`,
//     data:{
//         message:'Hello Wendy!'
//     },
//     methods:{
//         btnClick(){

//         }
//     }
// })


