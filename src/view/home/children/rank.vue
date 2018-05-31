<template>
  <div class="rank-container">
    <van-list
      class="rank-van-list"
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <!--<van-cell v-for="item in list" :key="item" :title="item.title">
        <div class="rank-card">
          <img src="../../../assets/image/chathub/girl1.jpg" width="100%"  alt="">
        </div>
      </van-cell>-->
      <div v-for="(obj,index) in list" :key="index" class="rank-card van-hairline--bottom">
        <div ></div>
        <img :src='obj.imgUrl' height="100%">
      </div>
    </van-list>
  </div>
</template>

<script>
  export default {
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

          this.list.push({title: '1、烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpg')});
          this.list.push({title: '2、烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpg')});
          this.list.push({title: '3、烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpg')});
          this.list.push({title: '4、烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpg')});
          this.list.push({title: '5、烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpg')});
          this.list.push({title: '5、烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpg')});
          this.list.push({title: '5、烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpg')});
          this.list.push({title: '5、烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpg')});
          this.list.push({title: '5、烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl1.jpg')});


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

  .rank-container{
    z-index: -1;
    position: fixed;
    width: 100%;
    top: 115px;
    bottom: 50px;
    border-top: 1px solid #eeeeee;
    background-color: #f8f8f8;
    overflow-y: auto;

  }



  .rank-card{
    height: 100px;
    width: 100%;
    margin-bottom: 5px;
    background-color: #ffffff;
  }


</style>
