<template>
    <div class="home-left-contain">
      <div class="home-left-wrapper">
        <!--头像-->
        <div class="home-left-avator">
          <img class="home-left-img" width="64" height="64" :src="homeInfo.avator" alt="">
        </div>
        <div class="home-left-title">
          <div class="home-left-name">{{homeInfo.nickname}}</div>
          <div class="home-left-description">
            <span class="home-left-money">K币: {{homeInfo.money}}</span>
            &nbsp;&nbsp;
            <span class="home-left-zan">赞: {{homeInfo.zan}}</span>
          </div>
        </div>
      </div>
    <div class="home-right" @click="pickup">

    </div>
  </div>
</template>

<script>
    export default {
      props:{
        homeInfo:{}
      },
      methods:{
        pickup(){
          this.$parent.showLeftDetail(false);
        }
      }
    }
</script>

<style scoped>
  .home-left-contain{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 70%;
    height: 100%;
    background: rgba(35, 37, 41, 0.39);
  }
  .home-left-wrapper{
    width: 100%;
    height: 140px;
    background-color: rgb(250, 113, 152);
    padding: 20px 0 10px 20px;
  }
  .home-left-avator{
    display: inline-block;
  }
  .home-left-img{
    border-radius: 50%;
  }
  .home-left-description{
    color: rgba(255, 255, 255, 0.71);
  }
  .home-right{
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 30%;
  }

</style>
