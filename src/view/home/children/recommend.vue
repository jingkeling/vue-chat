<template>
    <div class="recommend-container">
      <van-list
        class="recommend-van-list"
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <!--<van-cell v-for="item in list" :key="item" :title="item.title">
          <div class="recommend-card">
            <img src="../../../assets/image/chathub/girl1.jpeg" width="100%"  alt="">
          </div>
        </van-cell>-->
        <div v-for="(obj,index) in list" :key="index" class="recommend-card van-hairline--bottom">
          <div class="recommend-card-img">
            <img :src='obj.imgUrl' height="100%">
          </div>
          <div class="recommend-card-content">
              <div class="van-ellipsis" style="font-size: 20px">{{obj.title}}</div>
              <div class="van-ellipsis" style="color: #999;">{{obj.title}}</div>
              <div style="position: absolute;bottom: 0px;">
                <span style="color: #999;" class="fa fa-youtube-play"></span>
                &nbsp;
                <span style="color: #999;">16.5万</span>
                &nbsp;&nbsp;&nbsp;
                <span style="color: #999;" class="fa fa-drivers-license-o"></span>
                &nbsp;
                <span style="color: #999;">827</span>
              </div>
          </div>
        </div>
      </van-list>
    </div>
</template>

<script>
    export default {
      name: "recommend",
      data(){
        return {
          loading: false,
          finished: false,
          list: []


        }
      },
      methods: {
        onLoad() {
          setTimeout(() => {

            this.list.push({title: '【初音未来】V家101 超人气偶像MIKU个人直拍视频',imgUrl: require('../../../assets/image/girl/girl1.jpeg')});
            this.list.push({title: '【第五人格手书】',imgUrl: require('../../../assets/image/girl/girl1.jpeg')});
            this.list.push({title: '【认真推荐】那些神展开的4月新番',imgUrl: require('../../../assets/image/girl/girl1.jpeg')});
            this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpeg')});
            this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpeg')});
            this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpeg')});
            this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpeg')});
            this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpeg')});
            this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpeg')});


            this.loading = false;
            if (this.list.length >= 5) {
              this.finished = true;
            }
          }, 500);
        }
      }
    }
</script>

<style scoped>

  .recommend-container{
    z-index: -1;
    position: fixed;
    width: 100%;
    top: 115px;
    bottom: 50px;
    background-color: #f8f8f8;
    overflow-y: auto;

  }



  .recommend-card{
    position: relative;
    height: 100px;
    width: 100%;
    margin: 5px;
    background-color: #ffffff;
  }


  .recommend-card-img{
    position: absolute;
    width: 80px;
    height: 80px;
    margin: 10px;
  }

  .recommend-card-content{
    position: absolute;
    left: 110px;
    right: 20px;
    height: 80px;
    margin: 10px 0;
  }


</style>
