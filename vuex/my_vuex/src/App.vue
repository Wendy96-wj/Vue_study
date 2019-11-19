<template>
  <div id="app">
    <!-- 演示modules里的内容 -->
    <h2>------------演示modules里的内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>


    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>--------------App内容：getters相关信息-------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>大于20岁的学生：{{$store.getters.more20stu}}</h2>
    <h2>大于20岁的学生人数：{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(25)}}</h2>

    <h2>--------------App内容：info对象的内容是否是响应式的-------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: "App",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "Hello Wendy！"
      // counter:0
    };
  },
  methods: {
    addition() {
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count){
      // payload: 负载
      // 1.普通的提交风格
      this.$store.commit("incrementCount",count)

      // 2.特殊的提交风格
      // this.$store.commit({
      //   type:'incrementCount',
      //   count
      // })
    },
    addStudent(){
      const stu = {id:114,name:'sun',age:24}
      this.$store.commit("addStudent",stu)
    },
    updateInfo() {
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aupdateInfo',"我是dispatch")

      // this.$store.dispatch('aupdateInfo',{
      //   message:"我是携带的信息",
      //   success:() =>{
      //     console.log('我已经完成了');
          
      //   }
      // })

      // dispatch : 含有异步操作，例如向后台提交数据
      //  commit ： 同步操作

      this.$store.dispatch('aupdateInfo','我是携带的信息').then(res=>{
        console.log("里面完成了");  
        console.log(res);
        
      })
    },

    updateName(){
      this.$store.commit("updateName","wangxiao")
    }
  },
  // computed:{
  //   more20stu() {
  //     return this.$store.state.students.filter(s=> s.age > 20)
  //   }
  // }
};
</script>

<style>
</style>
