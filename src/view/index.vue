<template>
  <div class="layout">

    <div>
    <router-view/>
    </div>

    <!--底部导航-->
    <van-tabbar v-model="active" v-show="show">
      <van-tabbar-item icon="shop" @click="changePage('home')">主页</van-tabbar-item>
      <van-tabbar-item icon="chat" @click="changePage('message')">消息</van-tabbar-item>
      <van-tabbar-item icon="records" @click="changePage('test')" info="5">实验室</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" @click="changePage('mine')" dot>我的</van-tabbar-item>
    </van-tabbar>

  </div>

</template>
<script>
  import footer from '../components/footer';

  export default {
    components:{
      footer
    },
    data() {
      return {
        active: 0,
        show: true
      };
    },
    mounted(){
      this.changePage("home");

    },
    created() {

    },
    computed: {

    },
    methods: {
      //翻页
      changePage(pageName){
        this.$router.push({name: pageName});
      }
    }

  }
</script>

<style>




</style>
