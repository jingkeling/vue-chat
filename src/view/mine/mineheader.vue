<template>
  <div class="mine-header">
    <div class="mine-wrapper">
      <!--头像-->
      <div class="mine-avator">
        <img class="mine-img" width="64" height="64" :src="mineInfo.avator">
      </div>
      <div class="mine-content">
        <div class="mine-title">
          <div class="mine-name">{{mineInfo.nickname}}</div>
          <div v-if="mineInfo.sex == 1" class="fa fa-mars"></div>
          <div v-else class="fa fa-venus"></div>
          &nbsp;
          <div style="display: inline-block;border: 1px solid #ffffff;border-radius: 3px;font-size: 7px;vertical-align: top;box-sizing: border-box;padding: 2px;">正式会员</div>

        </div>
        <div class=""></div>
        <div class="mine-description">
          <div class="mine-money">K币: {{mineInfo.money}}</div>
          &nbsp;
          &nbsp;
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
    <!--右上角图标-->
    <div class="mine-header-ico">


      <div>
        <i class="fa fa-thumbs-o-up"></i>
      </div>
      <div>
        <i class="fa fa-qrcode"></i>
      </div>
      <div>
        <i class="fa fa-tags"></i>
      </div>

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
    height: 125px;
    background-color: rgb(250, 113, 152);
    box-sizing: border-box;

  }
  .mine-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 45px 12px 10px 15px ;

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

  .mine-header-ico {
    position: fixed;
    right: 0;
    top: 0;
    width: 100px;
    height: 40px;
    color: #ffffff;
    font-size: 0;

  }
  .mine-header-ico > div {
    display: inline-block;
    width: 30px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: top;
    font-size: 18px;

  }


</style>
