// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function(creatElement){
    //  1.普通用法：creatElement('标签',{'标签属性'},[''])
    // return creatElement('h2',{class:'box'},['hello world'])
    // <h2 class="box">{{hello world}}</h2> 

    // return creatElement('h2',
    //   {class:'box'},
    //   ['hello world',creatElement('button',['按钮'])]
    // )

    // 2.传入组件对象
    return creatElement(App)
  }
})



// template -> ast -> render -> vdom -> ui