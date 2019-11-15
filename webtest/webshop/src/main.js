import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import {request} from './api/request'
import axios from 'axios'
import Qs from 'qs'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


let data = {
  // 'action': 'sort',
  // 'fs': 'alltwo'
  'action': 'servCity'
}

axios({
  // headers: {
  //   'deviceCode': 'A95ZEF1-47B5-AC90BF3'
  // },
  method: 'post',
  url: '/api/city.php',
  data: Qs.stringify(data)
}).then(res=>{
  console.log(res);
})
