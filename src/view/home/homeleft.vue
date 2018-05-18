<template>
    <div class="home-left-contain van-hairline--right">
      <!--左侧栏头部-->
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
        <!--退出登录-->
        <div class="header-signout" @click="signout">
          <i class="fa fa-sign-out"></i>
        </div>

      </div>
      <!--左侧栏下面-->
      <div class="home-left-content">
        <van-panel class="van-panel" v-for="obj in panels" :title="obj.title" :desc="obj.desc" :status="obj.status" :key="obj.title">
        </van-panel>
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
      data() {
        return{
          panels: [{title: '首页', desc: '个人信息首页', status: '0'},
            {title: '历史记录', desc: '个人历史信息', status: '0'},
            {title: '离线缓存', desc: '个人离线缓存', status: '0'},
            {title: '我的收藏', desc: '个人收藏', status: '0'}]
        }
      },
      methods:{
        /*左侧栏*/
        pickup(){
          this.$parent.showLeftDetail(false);
        },
        /*登出*/
        signout() {
          this.deleteCookie("username");
          this.$router.push({name:'login'})
        },
        deleteCookie(key){
            let date = new Date();
            let utcTime = date.toUTCString();
            document.cookie = key+"=; expires=" + utcTime;
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
    position: relative;
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
  .home-left-content{
    position: absolute;
    width: 100%;
    height: 700px;
  }
  van-panel{
    border: 0;
  }
  /*登出*/
  .header-signout{
    position: absolute;
    top: 90px;
    right: 20px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
  }

</style>
