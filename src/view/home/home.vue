<template>
  <div>
    <home-header :homeInfo="homeInfo"></home-header>
    <van-tabs class="home-tabs" v-model="active" @click="changeTab" swipeable sticky>
      <van-tab class="123" v-for="obj in tabsArr" :title="obj.title" :key="obj.id">
        <router-view></router-view>
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
          avator: "https://pic-1253206304.cos.ap-shanghai.myqcloud.com/v2-56f6752d75c79ebe836149de4550282a_hd.jpg",
          sex: 1,
          nickname: "不明身份的大魔王",
          money: 100,
          zan: 100
        },
        active: 1,
        tabsArr:[{id: '1', title: "直播",tabName: "live"},{id:'2', title: "推荐", tabName: "recommend"}, {id:'3', title: "追番", tabName: "cartoon"}]
      }
    },
    methods:{
      changeTab(index, title) {
        let tabName = this.tabsArr[index]['tabName'];
        this.$router.push({name: tabName});
      }
    }

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
