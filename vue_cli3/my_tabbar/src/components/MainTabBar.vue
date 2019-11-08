<template>
  <tab-bar>
    <TabBarItem path="/home" activeColor="#f60">
      <img slot="item.icon" src="~assets/images/tabbar/indexno.png" alt="" />
      <img slot="item.icon-active" src="~assets/images/tabbar/indexsel.png" alt=""/>
      <div slot="item.text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="#f60">
      <img slot="item.icon" src="~assets/images/tabbar/fbsel.png" alt="" />
      <img slot="item.icon-active" src="~assets/images/tabbar/fbsel.png" alt="" />
      <div slot="item.text">分类</div>
    </TabBarItem>
    <TabBarItem path="/shopcar" activeColor="#f60">
      <img slot="item.icon" src="~assets/images/tabbar/scno.png" alt="" />
      <img slot="item.icon-active" src="~assets/images/tabbar/scsel.png" alt="" />
      <div slot="item.text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="#f60">
      <img slot="item.icon" src="~assets/images/tabbar/myno.png" alt="" />
      <img slot="item.icon-active" src="~assets/images/tabbar/mysel.png" alt="" />
      <div slot="item.text">我的</div>
    </TabBarItem>
  </tab-bar>
</template>
<script>

import TabBar from './tabBar/TabBar'
import TabBarItem from './tabBar/TabBarItem'

export default {
  name: "MaintabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>

</style>