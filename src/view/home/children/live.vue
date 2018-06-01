<template>
  <div class="live-container">

    <van-search placeholder="搜索房间或主播" v-model="value" backgroud="#ffffff" style="margin: 4px 0;"/>



    <!--标题-->
    <div class="live-row-title">
      <div style="position: absolute;display: inline-block; left: 0;padding: 0 10px;font-size: 15px;font-weight: 600">明星直播</div>
      <div style="position: absolute;display: inline-block; right: 0;padding: 0 10px;color: #b3b3b3;">更多排行 ></div>
    </div>
    <!--明星直播-->
    <div class="live-star-top">
      <div v-for="(obj , index) in starArr" :key="index" class="live-star-block">
        <div style="position: relative;width: 70px;height: 70px;">
          <img :src="obj.avator" width="100%" style="border-radius: 50%;border: 2px solid #f25e43;">
        </div>
        <div style="position: relative;width: 100%;height: 40px;text-align: center;margin: 0;" class="live-star-block">
          <div class="van-ellipsis" style="font-size: 15px;font-weight: 500;margin-top:4px;">{{obj.nickname}}</div>
          <div class="van-ellipsis" style="color: #b5b5b5;">{{numFormat(obj.star)}}</div>
        </div>
      </div>
    </div>
    <!--标题-->
    <div class="live-row-title">
      <div style="position: relative;display: inline-block;margin-left: 12px;vertical-align: top">
        <span class="fa fa-video-camera" style="color: #f8948b;font-size: 14px"></span>
      </div>
      <div style="position: relative;display: inline-block;;margin: 0 3px;font-size: 15px;font-weight: 600">推荐直播</div>
      <div style="position: absolute;display: inline-block; right: 0;padding: 0 10px;color: #b3b3b3;">当前共有<span style="color: #f8948b;">10942</span>个直播 ></div>
    </div>
    <!--主内容-->
    <div class="live-recommend">
      <div v-for="(obj, index) in liveArr" class="live-block">
        <div style="width: 100%;height: 120px;">
          <img :src="obj.imageurl" width="100%" height="100%" style="border-top-left-radius: 6px;border-top-right-radius: 6px;">
        </div>
        <div class="live-block-title van-ellipsis" style="">{{obj.title}}</div>
        <div class="live-block-categories van-ellipsis" style="">
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
        value: "",
        starArr:[
          {avator: require("../../../assets/image/girl/girl.jpg"),nickname:"小天不是受", star: 557000},
          {avator: require("../../../assets/image/girl/girl1.jpg"),nickname:"某幻君", star: 557000},
          {avator: require("../../../assets/image/girl/girl2.jpg"),nickname:"A路人", star: 557000},
          {avator: require("../../../assets/image/girl/girl3.jpg"),nickname:"瞬间爆炸型人格", star: 557000},
          {avator: require("../../../assets/image/girl/girl4.jpg"),nickname:"神奇", star: 557000},
          {avator: require("../../../assets/image/girl/girl5.jpg"),nickname:"神奇", star: 557000},
          {avator: require("../../../assets/image/girl/girl6.jpg"),nickname:"神奇", star: 557000},
          {avator: require("../../../assets/image/girl/girl7.jpg"),nickname:"神奇", star: 557000},
        ],
        liveArr: [
          {imageurl: require("../../../assets/image/live/live7.jpg"),title:"小熊熊才不是小孩纸，才不会双马尾",categories: "小熊萝莉"},
          {imageurl: require("../../../assets/image/live/live6.jpg"),title:"【滚】第五rua格",categories: "两仪滚"},
          {imageurl: require("../../../assets/image/live/live8.jpg"),title:"女友视角❤❤❤",categories: "優しい七酱"},
          {imageurl: require("../../../assets/image/live/live5.jpg"),title:"这里怎么有一只小兔几！",categories: "扎双马尾的丧尸"},
          {imageurl: require("../../../assets/image/live/live9.jpg"),title:"ASMR哄睡，超困的小圆脸QWQ",categories: "浅野菌子"},
          {imageurl: require("../../../assets/image/live/live2.jpg"),title:"面筋哥来啦！可带劲了",categories: "视频唱见"},

        ],


      };
    },
    methods: {
      //格式化数字
      numFormat(num){
        if (num/10000 >= 1) {
          num = num / 1000 +"万";
        }
        return num+"关注";
      }

    }
  }
</script>

<style scoped>
  .live-container{
    position: fixed;
    left: 0;
    top: 115px;
    bottom: 50px;
    width: 100%;
    z-index: -1;/*会把首页左侧侧拉挡住*/
    overflow-y: auto;
    background-color: #f6f6f6;

  }

  .live-row-title{

    position: relative;
    width: 100%;
    height: 25px;
    line-height: 25px;
    padding: 4px 0;
    margin: 6px 0;


  }

  .live-star-top{
    position: relative;
    width: 100%;
    height: 120px;
    white-space: nowrap;
    overflow-x: auto;
    /*overflow-y: hidden;*/

  }
  .live-star-block{

    width: 75px;
    height: 100%;
    display: inline-block;
    margin: 0 10px;
  }

  .live-recommend{
    position: relative;
    width: 100%;
    font-size: 0;

  }

  .live-block {
    position: relative;
    display: inline-block;
    width: 50%;
    /*border: 1px solid #eeeeee;*/
    box-sizing: border-box;
    padding: 5px 7px;

  }
  .live-block-title{
    font-size: 13px;
    font-weight: 600;
    box-sizing: border-box;
    padding: 1px 7px;
    background-color: #ffffff;
    height: 28px;
    line-height: 28px;
  }
  .live-block-categories{
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
