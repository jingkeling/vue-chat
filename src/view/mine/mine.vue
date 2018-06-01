<template>
  <div style="position: fixed;left: 0;top: 0;width: 100%;height: 100%;background-color: #f6f6f6">
    <mine-header :mineInfo="mineInfo"></mine-header>

    <!--颈部-->
    <div class="mine-neck">
      <div class="mine-neck-block">
        <span style="display: block;">43</span>
        <span style="display: block;">动态</span>
      </div>
      <div class="mine-neck-block">
        <span style="display: block;">100</span>
        <span style="display: block;">关注</span>
      </div>
      <div class="mine-neck-block">
        <span style="display: block;">12</span>
        <span style="display: block;">粉丝</span>
      </div>
    </div>
    <!--内容-->
    <div class="mine-row-list">

      <!--第一行-->
      <div class="mine-row-title van-hairline--bottom">
        创作中心
      </div>
      <div class="mine-row-content">
        <div class="mine-row-content-block">
          <i class="fa fa-home" style="color: #fa7198;"></i>
          <span>首页创作</span>
        </div>
        <div class="mine-row-content-block">
          <i class="fa fa-play-circle" style="color: #ffc02b;"></i>
          <span>稿件管理</span>
        </div>
        <div class="mine-row-content-block">
          <!--<i class="fa fa-rmb" style="color: #ffc02b;"></i>-->
          <van-icon name="balance-pay" style="color: #ffc02b" />
          <span>创作激励</span>
        </div>
        <div class="mine-row-content-block">
          <i class="fa fa-pencil-square" style="color: #fa7198;"></i>
          <span>征稿公告</span>
        </div>
      </div>

      <!--第二行-->
      <div class="mine-row-title van-hairline--bottom">
        个人中心
      </div>
      <div class="mine-row-content">
        <div class="mine-row-content-block">
          <i class="fa fa-cloud-download" style="color: #2dbce9;"></i>
          <span>离线缓存</span>
        </div>
        <div class="mine-row-content-block">
          <van-icon name="underway" style="color: #2dbce9" />
          <span>历史记录</span>
        </div>
        <div class="mine-row-content-block">
          <i class="fa fa-star" style="color: #fa7198;"></i>
          <span>我的收藏</span>
        </div>
        <div class="mine-row-content-block">
          <i class="fa fa-eye" style="color: #fa7198;"></i>
          <span>我的关注</span>
        </div>
      </div>
      <div class="mine-row-content">
        <div class="mine-row-content-block">
          <i class="fa fa-play-circle" style="color: #2dbce9;"></i>
          <span>稍后再看</span>
        </div>
        <div class="mine-row-content-block">
          <i class="fa fa-credit-card-alt" style="color: #ffc02b;"></i>
          <span>B币钱包</span>
        </div>
        <div class="mine-row-content-block">
          <i class="fa fa-shopping-bag" style="color: #fa7198;"></i>
          <span>会员购中心</span>
        </div>
        <div class="mine-row-content-block">
          <i class="fa fa-video-camera" style="color: #ffc02b;"></i>
          <span>直播中心</span>
        </div>
      </div>

      <!--第三行-->
      <div class="mine-row-title van-hairline--bottom">
        创作中心
      </div>
      <div class="mine-row-content">
        <div class="mine-row-content-block">
          <i class="fa fa-user-secret" style="color: #fa7198;"></i>
          <span>大会员</span>
        </div>
        <div class="mine-row-content-block">
          <i class="fa fa-eercast" style="color: #2dbce9;"></i>
          <span>看视频免流量</span>
        </div>
        <div class="mine-row-content-block">
          <i class="fa fa-phone-square" style="color: #2dbce9;"></i>
          <span>我的客服</span>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

  import header from './mineheader'
    export default {
        name: "my",
      components:{
          "mine-header": header
      },
      data() {
          return{
            mineInfo: {avator:"https://pic-1253206304.cos.ap-shanghai.myqcloud.com/v2-56f6752d75c79ebe836149de4550282a_hd.jpg",sex: 1,nickname: "不明身份的大魔王",money: 100, zan: 100}

          }
      }
    }
</script>

<style scoped>

  .mine-neck{
    position: fixed;
    left: 0;
    top: 125px;/*取决于head高*/
    width: 100%;
    height: 55px;
    background-color: #ffffff;


    display: flex;
    justify-content: space-around;
  }

  .mine-neck-block{
    height: 100%;
    width: 50px;
    padding: 7px 0 0 0;
  }
  .mine-neck-block > span {
    text-align: center;
    height: 20px;
    font-size: 13px;
  }

  .mine-row-list{
    position: absolute;
    top: 180px;
    bottom: 50px;
    left: 0;
    width: 100%;
    overflow-y: auto;

  }


  .mine-row-title{
    position: relative;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    background-color: #ffffff;
    padding-left: 15px;
    margin-top: 10px;

  }

  .mine-row-content{
    position: relative;
    width: 100%;
    height: 85px;
    bottom: 0;/*自适应高度*/
    font-size: 0;
    background-color: #ffffff;

    display: flex;
  }
  .mine-row-content-block{
    width: 25%;
    height: 85px;
    text-align: center;

  }

  .mine-row-content-block > i {
    display: block;
    font-size: 30px;
    color: #fa7198;
    margin: 12px 0 10px 0;

  }
  .mine-row-content-block > span {
    display: block;
    font-size: 10px;
    height: 30px;

  }




</style>
