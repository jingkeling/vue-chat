<template>
  <div>
    <!--下面的所有内容都放这-->
    <div class="introduct-body-header van-hairline--bottom">
      <!--作者头像-->
      <div class="introduct-body-avator">
        <img src="../../../assets/image/girl/girl.jpg" width="100%" height="100%" style="border-radius: 50%;border: 2px solid #bdbdbd;">
      </div>
      <div style="display: inline-block;height: 100%;vertical-align: top;">
        <!--作者名称-->
        <div class="introduct-body-nickname" style="margin-top: 4px;font-size: 14px;">大妥妥妥妥滴</div>
        <!--作者粉丝数-->
        <div class="introduct-body-fans" style="margin-top: 4px;font-size: 11px;color: #b0b0b0;">62个粉丝</div>
      </div>
      <!--添加关注-->
      <div class="introduct-body-followbut">
        <span style="font-size: 20px;vertical-align: top">+</span>
        关注
      </div>

    </div>
    <div class="introduct-body-title" style="position: relative;">
      <div :class="{ 'van-ellipsis': more }" style="font-size: 15px;font-weight: 500;padding: 3px 30px 3px 10px;line-height: 25px;">[小仙若]激昂壮志【爱宕待命中(*/ω＼*),1234567890123456</div>
      <div @click="showMore" style="position:absolute;right: 5px;top: 1px;height: 25px;width: 25px;text-align: center;line-height: 25px;color: #dcdcdc;">
        <span :class="['fa', more?'fa-chevron-down':'fa-chevron-up']" style=""></span>
      </div>
    </div>

    <!--播放量-->
    <div style="position: relative;">
      <div style="position: relative;">
        <div style="display: inline-block;padding-left: 10px;">
          <span class="fa fa-youtube-play"></span>
          &nbsp;
          <span>1.4万</span>
        </div>
        <div style="display: inline-block;padding-left: 10px;">
          <span class="fa fa-drivers-license-o"></span>
          &nbsp;
          <span>540</span>
        </div>
        <div style="display: inline-block;padding-left: 10px;">
          <span>05-31</span>
        </div>
      </div>
      <div></div>
    </div>
    <!--简介-->
    <div class="">
    </div>

  </div>
</template>

<script>
    export default {
      name: "introduct",
      data() {
        return{
          more: false
        }
      },
      methods:{
        showMore() {
          const boolean = this.more;
          this.more = (boolean ? false : true);


        }
      }
    }
</script>

<style scoped>

  .introduct-body-header{
    position: relative;
    width: 100%;
    height: 50px;
  }
  .introduct-body-avator{
    display: inline-block;
    height: 42px;
    width: 42px;
    margin: 4px 10px;

  }

  /*关注按钮*/
  .introduct-body-followbut{
    position: absolute;
    right: 10px;
    width: 60px;
    height: 27px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
    background-color: #fd7195;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(225, 232, 245, 0.61);

    top: 0;
    bottom: 0;
    margin: auto 0;


  }

</style>
