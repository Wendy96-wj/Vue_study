<template>
  <div>
    <h2>我是Profile呵呵呵</h2>
    <p>我是Profile的内容呵呵呵呵</p>
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
//   created() {
//     console.log("created");
//     document.title = "档案";
//   }
};
</script>

<style scoped>
</style>




