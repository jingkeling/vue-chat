<template>
    <div class="video-container">
      <div class="video-header">
        <img src="../../assets/image/recommend/recommend1.jpg" width="100%" height="100%" alt="">


        <div style="position: absolute;left: 6px;top: 5px;width: 30px;text-align: center" @click="changePage">
          <i class="fa fa-angle-left" style="font-size: 30px;color: #ffffff;"></i>
        </div>
        <div style="position: absolute;right: 15px;top: 5px;">
          <i class="fa fa-ellipsis-v" style="font-size: 20px;color: #ffffff;"></i>
        </div>
        <div style="position: absolute;right: 15px;bottom: 5px;">
          <i class="fa fa-youtube-play" style="font-size: 50px;color: #ffffff;"></i>
        </div>
      </div>

      <!--主体部分-->
      <div class="video-body">
        <van-tabs v-model="active" :line-width="50" swipeable style="width: 100%;height: 100%;">
          <van-tab class="video-tab" v-for="(obj, index) in tabArr" :key="index" :title="obj.title ==='评论'? commentNum : obj.title">
            <!--<div slot="title">
              <van-icon name="more-o" />自定义选项
            </div>-->
            <component :is="obj.tabName"></component>


          </van-tab>
        </van-tabs>

      </div>
    </div>
</template>

<script>
  import  introduct from './children/introduct';
  import comment from './children/comment';
    export default {
      name: "video",
      components:{
        introduct,
        comment
      },
      data(){
        return {
          active: 0,
          tabArr: [{title:"详情",tabName: "introduct" }, {title: "评论", number: 22, tabName: "comment"}],

        };
      },
      computed:{
        //给评加上数量
        commentNum() {
          let string = "评论 " + this.tabArr[1].number;
          return string;

        }
      },
      methods:{
        changePage(){
          this.$router.go(-1);
        },
      }
    }
</script>

<style>
  .video-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-header{
    position: relative;
    width: 100%;
    height: 200px;
  }

  .video-body{
    position: fixed;
    top: 200px;
    bottom: 0;
    width: 100%;
    /*overflow-y: auto;*/


  }
  /*主要给tab设置正确的高度，下面的内容都放这里*/
  .video-tab{
    position: absolute;
    width: 100%;
    top: 45px;/*如果是0，就会占了切换的tab标签*/
    bottom: 0;
    /*background-color: #00c000;*/
  }






</style>
