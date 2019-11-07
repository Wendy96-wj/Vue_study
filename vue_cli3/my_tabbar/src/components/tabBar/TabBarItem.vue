<template>
  <div class="tab-bar-item">
    <div v-if="isActive"><slot name="item.icon"></slot></div>
    <div v-else><slot name="item.icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item.text"></slot></div>   
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
      return{
          isActive:false
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
  width: 30px;
  height: 30px;
  margin-top: 2px;
  vertical-align: middle;
}
.active{
    color: #f60;
}
</style>
