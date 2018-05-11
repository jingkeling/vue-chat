<template>
  <div class="layout">
      <div class="header">
        Tencent
      </div>



    <router-view/>

    <!--底部导航-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" @click="changePage('home')">推荐</van-tabbar-item>
      <van-tabbar-item icon="chat" dot @click="changePage('message')">消息</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">实验室</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" @click="changePage('mine')" dot>我的</van-tabbar-item>
    </van-tabbar>

    <ws></ws>

    <!--<router-view></router-view>-->
  </div>

</template>
<script>

  export default {
    data() {
      return {
        active: 0,


      };
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
  .header {
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #ffffff;
    font-size: 23px;
    font-weight: bolder;
    background-color: rgba(50, 55, 58, 1);
    filter: blur(1px);
  }



</style>
