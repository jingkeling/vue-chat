<template>
  <div class="layout">
      <div class="header">
        Tencent
      </div>

      <div class="index">
        <div v-for="obj in indexData">
          <div class="index-row" @click="changePage(obj.page)" >
            <div class="row-backgroud">
              <img :src="obj.rowBgImage" width="100%" height="100%">
            </div>
            <div class="index-demo">
              <div class="row-name">{{obj.rowName}}</div>
              <div class="row-tips">{{obj.rowTips}}</div>
            </div>
          </div>
        </div>

      </div>
    <!--底部导航-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>

    <ws></ws>
    <!--<router-view></router-view>-->
  </div>

</template>
<script>

  import { Dialog} from 'vant';

  export default {
    data() {
      return {
        isCollapsed: false,
        active: 0,
        indexData: [
          {rowName: "机器人",rowTips: "尽情调戏机器人吧",rowBgImage: "http://i4.bvimg.com/626277/b64fb0792f2fd0ab.jpg",page:"chathub"},
          {rowName: "群聊",rowTips: "请文明发言",rowBgImage: "http://i4.bvimg.com/626277/b64fb0792f2fd0ab.jpg",page:"chathub"}
        ]

      };
    },
    computed: {

    },
    methods: {
      //翻页
      changePage(pageName){
        this.$router.push({name: pageName})
      }
    }

  }
</script>

<style>
  .header {
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #ffffff;
    font-size: 23px;
    font-weight: bolder;
    background-color: rgba(50, 55, 58, 1);
    filter: blur(1px);
  }
  .index {
    width: 100%;
    height: 800px;
    border-bottom: 1px solid #b2b2b2;
    text-align: center;
    line-height: 40px;
  }
  .index-row{
    position: relative;
    display: inline-block;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #d6d6d6;

  }
  .index-demo{
    display: inline-block;
    width: 60%;
    height: 100%;
  }
  .row-name{
    width: 100%;
    height: 50%;
    font-size: 20px;
    text-align: left;

  }
  .row-tips{
    width: 100%;
    height: 50%;
    text-align: left;

  }
  .row-backgroud{
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    margin: 10px;
  }


</style>
