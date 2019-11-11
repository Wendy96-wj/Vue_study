import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/mouduleA'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
    counter: 1000,
    students: [
        { id: 110, name: 'wendy', age: 23 },
        { id: 111, name: 'zhangsan', age: 20 },
        { id: 112, name: 'lisi', age: 19 },
        { id: 113, name: 'joe', age: 30 },
    ],
    info:{height: 163, name: 'wendy', age: 23}
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a:moduleA
    }

})

// 3.导出store对象
export default store


// 对象的解构
const obj = {
    name:'Wendy',
    age:23,
    height:1.88
}

const {name,height,age} = obj;
console.log(name);




