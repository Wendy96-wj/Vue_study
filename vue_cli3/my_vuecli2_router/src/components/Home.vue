<template>
  <div>
    <h2>我是首页哈哈哈</h2>
    <p>我是首页的内容哈哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
    <!-- <keep-alive><router-view/></keep-alive> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      message:'你好啊！',
      path:'/home/news'
    }
  },
  // 创建组件时会回调的
  created() {
    // console.log('created');
    // document.title = "首页";
  },

  // template挂载到DOM中会回调的
  mounted() {
    // console.log('mounted');
    
  },

  // 当界面发生刷新的时候会回调的
  updated() {
    // console.log('updated');
    
  },

  // 销毁页面
  destroyed() {

  },

  // 页面活动状态
  activated() {
    this.$router.push(this.path)
  },

  // 可以记录状态
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  },

};
</script>

<style scoped>
</style>

