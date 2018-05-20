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
        <div class="home-header-ico1">
          <i class="fa fa-area-chart"></i>
        </div>
        <div class="home-header-ico2">
          <i class="fa fa-battery-4"></i>
        </div>
        <div class="home-header-ico3" @click="search">
          <i class="fa fa-search"></i>
        </div>
      </div>
      <!--左侧-->
      <transition name="slide-fade">
      <home-left v-if="leftDetailShow" :homeInfo="homeInfo"></home-left>
      </transition>
      <!--遮罩-->
      <div v-show="showzz" class="home-header-zz"></div>
      <!--底部弹出-->
      <van-popup class="home-popup" v-model="showSearch" :position="right1">
        <div class="home-popup-content"></div>
      </van-popup>
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
        showzz: false,
        showSearch: false,
        right1:'bottom'
      }
    },
    methods:{
      showLeftDetail(boolean){
        // Toast(boolean ? "出来": "收起");
        this.leftDetailShow = boolean;
        this.showzz = boolean;
      },
      search() {
        this.showSearch = true;
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
    height: 70px;
    width: 100px;
    right: 5px;
    top: 0;
    text-align: center;
    line-height: 70px;
  }
  .home-header-more > div{
    display: inline-block;
    height: 100%;
    width: 30px;
  }


  /*左侧栏动画*/
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-200px);
    opacity: 0;
  }

  /*遮罩*/
  .home-header-zz{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.42);
  }

  .home-popup{
    position: fixed;
    width: 100%;
    height: 95%;
  }

  .home-popup-content{

  }

</style>
