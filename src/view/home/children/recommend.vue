<template>
    <div class="recommend-container">

      <!--轮播图-->
       <div class="recommend-swiper">
         <van-swipe :autoplay="3000">
           <van-swipe-item v-for="(image, index) in images" :key="index">
             <img :src="image" width="100%" height="130px" style="border-radius: 8px"/>
           </van-swipe-item>

         </van-swipe>
       </div>


      <!--主内容-->
      <div class="recommend-recommend">
        <div v-for="(obj, index) in liveArr" class="recommend-block">
          <div style="width: 100%;height: 120px;" @click="changePage">
            <img :src="obj.imageurl" width="100%" height="100%" style="border-top-left-radius: 6px;border-top-right-radius: 6px;">
          </div>
          <div class="recommend-block-title van-ellipsis" style="">{{obj.title}}</div>
          <div class="recommend-block-categories van-ellipsis" style="">
            <div style="display: inline-block">{{obj.categories}}</div>
            <div style="display: inline-block;position: absolute;right: 20px;">
              <span class="fa fa-ellipsis-v" style="font-size: 17px;color: #c1c2c4;"></span>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
      data(){
        return {
          images: [
            require("../../../assets/image/swiper/swiper1.jpg"),
            require("../../../assets/image/swiper/swiper2.jpg"),
            require("../../../assets/image/swiper/swiper3.jpg"),
            require("../../../assets/image/swiper/swiper4.jpg")
          ],
          liveArr: [
            {imageurl: require("../../../assets/image/recommend/recommend3.jpg"),title:"UZI：跟我单挑想啥呢？劫：我错了，冠军！",categories: "英雄联盟"},
            {imageurl: require("../../../assets/image/recommend/recommend2.jpg"),title:"【大忽悠】《底特律：变人》一：人活着就是为了女儿",categories: "游戏"},
            {imageurl: require("../../../assets/image/recommend/recommend1.jpg"),title:"【小仙若】激昂壮志【爱宕待命中(*/ω＼*)",categories: "二次元"},
            {imageurl: require("../../../assets/image/recommend/recommend4.jpg"),title:"电影最TOP 101：闪闪发光的老戏骨们！盘点最经典老年电影",categories: "电影"},
            {imageurl: require("../../../assets/image/recommend/recommend5.jpg"),title:"起小点TOP10 VOL403 剑姬无双剑舞锋不可当",categories: "英雄联盟"},
            {imageurl: require("../../../assets/image/recommend/recommend1.jpg"),title:"面筋哥来啦！可带劲了",categories: "视频唱见"},
            {imageurl: require("../../../assets/image/recommend/recommend1.jpg"),title:"面筋哥来啦！可带劲了",categories: "视频唱见"},
            {imageurl: require("../../../assets/image/recommend/recommend1.jpg"),title:"ASMR哄睡，超困的小圆脸QWQ",categories: "浅野菌子"},


          ],

        }
      },
      mounted() {

      },
      methods: {
        changePage() {
          this.$router.push({name: "video"});
        }
      }
    }
</script>

<style scoped>

  .recommend-container{
    position: fixed;
    top: 115px;
    bottom: 50px;
    width: 100%;
    overflow-y: auto;
    z-index: -1;
    background-color: #f6f6f6;

  }
  .recommend-swiper{
    position: relative;
    height: 130px;
    width: 100%;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 0 7px;
  }


  .recommend-recommend{
    position: relative;
    width: 100%;
    font-size: 0;

  }

  .recommend-block {
    position: relative;
    display: inline-block;
    width: 50%;
    /*border: 1px solid #eeeeee;*/
    box-sizing: border-box;
    padding: 5px 7px;

  }
  .recommend-block-title{
    font-size: 13px;
    font-weight: 600;
    box-sizing: border-box;
    padding: 1px 7px;
    background-color: #ffffff;
    height: 28px;
    line-height: 28px;
  }
  .recommend-block-categories{
    height: 25px;
    font-size: 11px;
    box-sizing: border-box;
    padding: 5px 7px;
    background-color: #ffffff;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    color: #a5a5a5;

  }






</style>
