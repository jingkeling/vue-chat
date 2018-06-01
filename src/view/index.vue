<template>
  <div class="layout">

    <div>
    <router-view/>
    </div>

    <!--底部导航-->
    <van-tabbar v-model="active" v-show="show">
      <van-tabbar-item icon="home" @click="changePage('home')" dot>主页</van-tabbar-item>
      <van-tabbar-item icon="chat" @click="changePage('message')" info="3">消息</van-tabbar-item>
      <van-tabbar-item icon="shop" @click="changePage('test')">实验室</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="changePage('mine')">我的</van-tabbar-item>
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
