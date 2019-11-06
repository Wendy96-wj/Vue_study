<template>
  <div>
    <h2>我是首页哈哈哈</h2>
    <p>我是首页的内容哈哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
</style>

