import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'

// import instance_ from './api/index';
// Vue.prototype.instance = instance_  //axios实例

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url:'https://szapi.bendibao.com/bdfwjk/v2/sortPost.php',
//   // url:'http://123.207.32.32:8080/home/multidata',
//   // url:'https://szapi.bendibao.com/bdfwjk/v2/qrcode.php?scene=889',
//   method:'POST',
//   data:{
//     action: 'sort',
//     fs: 'alltwo'
//   }

// }).then(res=>{
//   console.log(res);

// })

// 1.普通请求
// axios({
//   url: '/api/qrcode.php',
//   // 专门针对get请求的参数拼接
//   params: {
//     scene: 889
//   }
// }).then(res => {
//   console.log(res);

// })

// axios.get('/api/qrcode.php?scene=889')
//   .then(res => {
//     console.log(res)
//   })


// // 2.axios发送并发请求
// axios.all([axios({
//   url: '/api/qrcode.php',
//   // 专门针对get请求的参数拼接
//   params: {
//     scene: 889
//   }
// }), axios({
//   url: '/api/qrcode.php',
//   // 专门针对get请求的参数拼接
//   params: { scene: 889 }
// })]).then(res => {
//   console.log(res);
// })

// axios.all([axios({
//   url: '/api/qrcode.php',
//   // 专门针对get请求的参数拼接
//   params: {
//     scene: 889
//   }
// }), axios({
//   url: '/api/qrcode.php',
//   // 专门针对get请求的参数拼接
//   params: { scene: 889 }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// let data = {
//   'action': 'sort',
//   'fs': 'alltwo'
// }

// axios({
//   // headers: {
//   //   'deviceCode': 'A95ZEF1-47B5-AC90BF3'
//   // },
//   method: 'post',
//   url: '/api/sortPost.php',
//   data: Qs.stringify(data)
// }).then(res=>{
//   console.log(res);
// })

// 4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL:'https://szapi.bendibao.com/bdfwjk/v2',
//   timeout:5000,
// })

// instance1({
//   url: '/qrcode.php',
//   // 专门针对get请求的参数拼接
//   params: {
//     scene: 889
//   }
// }).then(res=>{
//   console.log("------------");
//   console.log(res);
//   console.log("------------");
// })


// 5.封装request模块
import {request} from './api/request'

// request({
//   url:'/sortPost.php',
//   data: Qs.stringify(data),
//   method: 'post',
// }, res =>{
//   console.log(res);
  
// }, err =>{
//   console.log(err);

// })


// request({
//   baseConfig: {

//   },
//   success:function(res) {

//   },
//   failure: function(err) {

//   }
// })

let data = {
  'action': 'sort',
  'fs': 'alltwo'
}

request({
  url:'/sortPost.php',
  data: Qs.stringify(data),
  method: 'post',
}).then(res=>{
  console.log(res);
  
}).catch(err=>{
  console.log(err);
  
})