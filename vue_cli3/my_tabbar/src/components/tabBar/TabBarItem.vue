<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item.icon"></slot></div>
    <div v-else><slot name="item.icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item.text"></slot></div>   
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"black"
    }
  },
  data() {
    return{
      // isActive:false,
    }
  },
  computed:{
    isActive() {
      // 拿到处于活跃状态下的path，与当前传过来的path是否相等
      return this.$route.path.indexOf(this.path) !==-1 ? true:false
    },
    activeStyle() {
      // 动态获取字体颜色
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick() {
      this.$router.replace(this.path)
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 10px;
}

.tab-bar-item img {
  width: 22px;
  height: 22px;
  margin-top: 6px;
  margin-bottom: 3px;
  vertical-align: middle;
}
/* .active{
    color: #f60;
} */
</style>
