<template>
  <div class="layout">

    <!--TODO: 调整下各个模块高度-->
    <div>
    <router-view/>
    </div>

    <!--底部导航-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" @click="changePage('home')">主页</van-tabbar-item>
      <van-tabbar-item icon="chat" @click="changePage('message')">消息</van-tabbar-item>
      <van-tabbar-item icon="records" @click="changePage('test')" info="5">实验室</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" @click="changePage('mine')" dot>我的</van-tabbar-item>
    </van-tabbar>

    <!--<ws></ws>-->

  </div>

</template>
<script>

  export default {
    data() {
      return {
        active: 0,


      };
    },
    mounted(){
      this.changePage('home')
    },
    computed: {

    },
    methods: {
      //翻页
      changePage(pageName){
        this.$router.push({name: pageName})
      }
    }

  }
</script>

<style>




</style>
