<template>
  <div id="app">
    <tab-bar>
      <TabBarItem>
        <img slot="item.icon" src="./assets/images/tabbar/indexno.png" alt="">
        <img slot="item.icon" src="./assets/images/tabbar/indexsel.png" alt="">
        <div slot="item.text">首页</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item.icon" src="./assets/images/tabbar/fbsel.png" alt="">
        <img slot="item.icon" src="./assets/images/tabbar/fbsel.png" alt="">
        <div slot="item.text">分类</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item.icon" src="./assets/images/tabbar/scno.png" alt="">
        <img slot="item.icon" src="./assets/images/tabbar/scsel.png" alt="">
        <div slot="item.text">购物车</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item.icon" src="./assets/images/tabbar/myno.png" alt="">
        <img slot="item.icon" src="./assets/images/tabbar/mysel.png" alt="">
        <div slot="item.text">我的</div>
      </TabBarItem>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabBar/TabBar'
import TabBarItem from './components/tabBar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import './assets/css/base.css';
  
</style>
