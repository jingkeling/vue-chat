<template>
  <div>
    <home-header :homeInfo="homeInfo"></home-header>
    <van-tabs class="home-tabs" v-model="active" swipeable sticky>
      <van-tab v-for="obj in tabsArr" :title="obj.title" :key="obj.id">
        内容 {{ obj.title }}
        <!--// TODO: 这里用子路由做，推荐那个用图片轮播-->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import header from './homeheader'

  export default {
        name: "message",
      components:{
        'home-header': header
      },

    data() {
      return {
        homeInfo: {
          avator: "http://i4.bvimg.com/626277/b64fb0792f2fd0ab.jpg",
          sex: 1,
          nickname: "不明身份的大魔王",
          money: 100,
          zan: 100
        },
        active: 1,
        tabsArr:[{id:'1', title:"直播"},{id:'2', title: "推荐"}, {id:'3', title: "追番"}]
      }
    },

    }
</script>

<style scoped>
  .home-tabs{
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 70px;
    left: 0;
  }

</style>
