import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
    state:{
        name:'juny'
    },
    mutations:{
        updateName(state) {
            state.name = "wangxiao"
        }
    },
    actions:{},
    getters:{}
}

const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { id: 110, name: 'wendy', age: 23 },
            { id: 111, name: 'zhangsan', age: 20 },
            { id: 112, name: 'lisi', age: 19 },
            { id: 113, name: 'joe', age: 30 },
        ],
        info:{height: 163, name: 'wendy', age: 23}
    },
    mutations: {
        // 方法
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        // 携带参数count
        // 1.普通接收方式
        incrementCount(state,count){
            state.counter += count
        },

        // 2.特殊接收方式
        // incrementCount(state,payload){
        //     state.counter += payload.count
        // },


        addStudent(state,stu){
            state.students.push(stu)
        },

        updateInfo(state){
            state.info.name = "lemon"
        }
    },
    actions: {
        // context: 上下文
        // aupdateInfo (context,payload) {
        //     setTimeout(()=> {
        //         context.commit('updateInfo')
        //         console.log(payload);
        //         payload.success()
        //     },1000)
        // }

        aupdateInfo (context,payload) {
            return new Promise((resolve,reject)=>{
                setTimeout(()=> {
                    context.commit('updateInfo')

                    console.log(payload);
                    resolve("1111")
                },1000)
            })
        }
    },

    // 相当于state的计算属性
    getters: {
        // counter的两倍
        powerCounter(state) {
            return state.counter * state.counter
        },

        // 判断年龄大于20的学生
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },

        // 判断年龄大于20的学生数量
        more20stuLength(state, getters) {
            return getters.more20stu.length
        },

        // 动态传入age进行判断年龄大于传入的age的学生
        moreAgeStu (state){
            return  (age) => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
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




