<template>
  <div>
    <message-header></message-header>
    <div class="message-index">
      <div v-for="obj in indexData">
        <div class="index-row van-hairline--bottom" @click="changePage(obj.page)" >
          <div class="row-backgroud">
            <img :src="obj.rowBgImage" width="100%" height="100%">
          </div>
          <div class="message-index-demo">
            <div class="row-name">{{obj.rowName}}</div>
            <div class="row-tips">{{obj.rowTips}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import header from './messageheader';

  export default {
    name: "home",
    components:{
      'message-header': header
    },
    data() {
      return {
        indexData: [
          { rowName: "群聊",rowTips: "畅所欲言吧", rowBgImage: "http://i4.bvimg.com/626277/b64fb0792f2fd0ab.jpg", page: "chathub"},
          { rowName: "机器人", rowTips: "自动重连待完善，刷新页面需重新登录", rowBgImage: "http://i4.bvimg.com/626277/b64fb0792f2fd0ab.jpg", page: "chathub"}
        ]
      }
    },
    methods: {
      changePage(pageName){
        this.$router.push({name: pageName})
      }
    }
  }
</script>

<style scoped>

  .message-index {
    position: fixed;
    top: 50px;
    left: 0;
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

  }
  .message-index-demo{
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
