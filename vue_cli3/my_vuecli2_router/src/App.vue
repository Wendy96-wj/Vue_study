<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" replace>关于</router-link> -->
 
    <!-- <button @click="honmeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home" >首页</router-link>
    <router-link to="/about" >关于</router-link>
    <!-- <router-link v-bind:to="'/user/'+userId" >用户</router-link> -->
    <!-- <router-link to="/profile" >档案</router-link> -->
    <!-- <router-link :to="{path:'/profile',query:{name:'wendy',age:'23',height:'1.88'}}" >档案</router-link> -->

    <button @click="userClick">用户</button>
    <button @click="proflieClick">档案</button>
    <!-- <router-view></router-view> -->

    <keep-alive exclude="Profile"><router-view/></keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId:'100'
    }
  },
  methods:{
    honmeClick() {
      // 通过代码的方式修改路由 vue-router
      this.$router.push('/home')
      // this.$router.replace('/home')
      console.log("honmeClick");
      
    },
    aboutClick() {
      this.$router.push('/about')
      // this.$router.replace('/about')
      console.log("aboutClick");
    },

    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    proflieClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'wendy',
          age:'23',
          height:'1.88'
        } 
      })
    }
  },
  
}
</script>

<style>
  .active{
    color: red
  }
  /* .router-link-active{
    color: red
  } */
</style>






/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */