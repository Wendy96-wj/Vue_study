<template>
    <div>
        <h2>我是用户界面啦啦啦</h2>
        <p>我是用户的详情信息啦啦啦啦</p>
        <!-- <h2>{{$route.params.userId}}</h2> -->
        <h2>{{userId}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    export default {
        name:"User",
        computed:{
            userId() {
                return this.$route.params.userId
            }
        },
        methods:{
            btnClick() {
                // 所有的组件都继承着Vue的原型 （可以看router的源码）
                console.log(this.$router);
                console.log(this.$route);
                this.test();
                
            }
        }
    }
</script>

<style scoped>

</style>

