<template>
  <div class="mine-header">
    <div class="mine-wrapper">
      <div class="mine-avator">
        <img class="mine-img" width="64" height="64" :src="mineInfo.avator" alt="">
      </div>
      <div class="mine-content">
        <div class="mine-title">
          <div class="mine-name">{{mineInfo.nickname}}</div>
          <div v-if="mineInfo.sex == 1" class="fa fa-mars"></div>
          <div v-else class="fa fa-venus" ></div>
        </div>
        <div class=""></div>
        <div class="mine-description">
          <div class="mine-money">K币: {{mineInfo.money}}</div>
          <div class="mine-zan">赞: {{mineInfo.zan}}</div>
        </div>
      </div>
    </div>

    <!--header背景图-->
    <!-- <div class="mine-background">
       <img :src="mineInfo.avator" width="100%" height="100%">
     </div>-->
    <div class="mine-profile" @click="showProfile">
      <span>我的资料</span>
      <i class="fa fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        mineInfo:{}
      },
      data(){
        return{
          profileShow: false
        }
      },
      methods:{
        showProfile(){
          this.profileShow = true;
        }
      }
    }
</script>

<style scoped>

  .mine-header {
    position: fixed;
    width: 100%;
    height: 130px;

  }
  .mine-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(250, 113, 152);
    padding: 45px 12px 5px 24px ;
  }

  .mine-avator{
    display: inline-block;
    vertical-align: top;
  }
  .mine-img{
    border-radius: 50%;
  }
  .mine-content{
    margin-left: 10px;
    display: inline-block;
    vertical-align: top;
    color: rgba(255, 255, 255, 0.89);

  }
  .mine-name{
    font-size: 18px;
  }
  .mine-description{

  }
  .mine-money{
    display: inline-block;
  }
  .mine-zan{
    display: inline-block;
  }
  .mine-profile {
    color: #ffffff;
    position: absolute;
    right: 12px;
    top: 65px;
    border-radius: 14px;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 2px 4px;

  }
  .mine-background{
    position: absolute;
    width: 100%;
    height: 100%;
  }


</style>
