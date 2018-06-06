<template>
  <div>
    <home-header :homeInfo="homeInfo"></home-header>
    <van-tabs class="home-tabs" v-model="active" @click=""  sticky>
      <van-tab class="keling" v-for="obj in tabsArr" :title="obj.title" :key="obj.id">
        <component :is="currTab"></component>
      </van-tab>
    </van-tabs>
    <!--SIGN: 把路由放在这里，而不是放在van-tabs方便些(主要是放van-tab里组件样式不好写)-->
    <!--别用路由用动态组件-->


  </div>
</template>

<script>

  import header from './homeheader'
  import live from './children/live';
  import rank from './children/rank';
  import recommend from './children/recommend';

  export default {
    name: "message",
    components:{
      'home-header': header,
      recommend,
      live,
      rank,
    },
    data() {
      return {
        homeInfo: {
          avator: "https://pic-1253206304.cos.ap-shanghai.myqcloud.com/v2-56f6752d75c79ebe836149de4550282a_hd.jpg",
          sex: 1,
          nickname: "不明身份的大魔王",
          money: 100,
          zan: 100,
        },
        tabsArr:[{id: '1', title: "直播",tabName: "live"}, {id:'2', title: "推荐", tabName: "recommend"}, {id:'3', title: "排行榜", tabName: "rank"}],
        active: 1,
        currTab: "recommend"

      }
    },
    watch:{
      //检测激活的标签，就跳转
      active (val, oldVal) {
        let tabName = this.tabsArr[val]['tabName'];
        this.currTab = tabName;


      }
    },
    created() {

    },
    mounted(){
      // this.active = 0


    },
    methods:{
      /*切换页面*/
      changeTab(index, title) {
        let tabName = this.tabsArr[index]['tabName'];
        // this.$router.push({name: tabName});
        alert("当前组件是" + tabName)
        this.currTab = tabName;
      }
    }

    }
</script>

<style scoped>
  .home-tabs{
    position: fixed;
    z-index: -1;
    width: 100%;
    top: 70px;
    left: 0;
  }

</style>
