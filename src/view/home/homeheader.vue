<template>
    <div class="home-header">
      <div class="home-header-wrapper" @click="showLeftDetail(true)">
          <i class="fa fa-navicon"></i>
          <!--头像-->
          <div class="home-header-avator">
            <img class="home-header-img" width="36" height="36" :src="homeInfo.avator" alt="">
          </div>
          <div class="home-header-title">
            <div class="home-header-name">{{homeInfo.nickname}}</div>
          </div>
      </div>
      <div class="home-header-more">
        <i class="fa fa-battery-4"></i>
        <i class="fa fa-search"></i>
      </div>
      <transition name="slide-fade">
      <home-left v-if="leftDetailShow" :homeInfo="homeInfo"></home-left>
      </transition>
    </div>
</template>

<script>

  import { Toast } from 'vant';
  import left from './homeleft';

  export default {
    name: "homeheader",
    props:{
      homeInfo:{}
    },
    components:{
      'home-left': left
    },
    data(){
      return{
        leftDetailShow: false,
      }
    },
    methods:{
      showLeftDetail(boolean){
        Toast(boolean ? "出来": "收起");
        this.leftDetailShow = boolean;
      }
    }
  };
</script>

<style scoped>

  .home-header{
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 70px;
    background: rgb(250, 113, 152);
    padding: 18px 0 18px 30px;
    color: #ffffff;
  }
  .home-header-wrapper{
    display: inline-block;
  }
  .home-header-avator{
    display: inline-block;

  }
  .home-header-img{
    border-radius: 50%;
  }
  .home-header-title{
    display: inline-block;
    vertical-align: top;
    margin-left: 13px;
    margin-top: 10px;
  }
  .home-header-name{
    font-size: 15px;
  }

  .fa-navicon {
    position: absolute;
    left: 0;
    top: 30px;
    font-size: 17px;
  }


  .home-header-more{
    position: absolute;
    right: 0;
    top: 20px;
    margin-top: 5px;
  }
  .fa-battery-4{
    margin: 5px;
  }
  .fa-search{
    margin: 5px;

  }

  /*左侧栏动画*/
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-200px);
    opacity: 0;
  }

</style>
