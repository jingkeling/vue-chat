<template>
  <div class="rank-container">
    <van-list
      class="rank-van-list"
      v-model="loading"
      :finished="finished"
      :offset="10"
      @load="onLoad"
    >
      <!--用vantui的vanlist加载自己做的行-->
      <div v-for="(obj,index) in list" :key="index" class="rank-card van-hairline--bottom">
        <div class="rank-card-img">
          <img :src='obj.imgUrl' height="100%" width="100%">
        </div>
        <div class="rank-card-content">
          <div class="van-ellipsis" style="font-size: 18px">{{obj.title}}</div>
          <div class="van-ellipsis" style="color: #999;">{{obj.title}}</div>
          <div style="position: absolute;bottom: 0px;">
            <span style="color: #999;" class="fa fa-youtube-play"></span>
            &nbsp;
            <span style="color: #999;">{{numFormat(obj.play)}}</span>
            &nbsp;&nbsp;&nbsp;
            <span style="color: #999;" class="fa fa-drivers-license-o"></span>
            &nbsp;
            <span style="color: #999;">{{numFormat(obj.view)}}</span>
          </div>
        </div>
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
        list: [
          /* {title: '【初音未来】V家101 超人气偶像MIKU个人直拍视频',imgUrl: require('../../../assets/image/girl/girl1.jpg'),play: 165000, view: 840},
           {title: '【第五人格手书】',imgUrl: require('../../../assets/image/girl/girl2.jpg'),play: 372000, view: 958},
           {title: '【认真推荐】那些神展开的4月新番',imgUrl: require('../../../assets/image/girl/girl3.jpg'),play: 940000, view: 587}*/

        ]


      }
    },
    mounted() {

    },
    methods: {
      onLoad() {
        setTimeout(() => {

          this.list.push({title: '《崩坏3》全新动画短片「女王降临」',imgUrl: require('../../../assets/image/rank/rank1.jpg'),play: 165000, view: 840});
          this.list.push({title: '【C菌】法国顶级团队打造神作!【底特律: 变人】实况, 更新第13集',imgUrl: require('../../../assets/image/rank/rank2.jpg'),play: 372000, view: 958});
          this.list.push({title: '【逗鱼时刻】第156期 我的老父亲',imgUrl: require('../../../assets/image/rank/rank3.jpg'),play: 940000, view: 587});
          this.list.push({title: '那些万恶之源的电影片段出处，你知道几个？',imgUrl: require('../../../assets/image/rank/rank4.jpg'),play: 75100, view: 115});
          this.list.push({title: '起小点TOP10 VOL403 剑姬无双剑舞锋不可当',imgUrl: require('../../../assets/image/rank/rank5.jpg'),play: 15800, view: 840});
          /*    this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl6.jpg'),play: 200000, view: 961});
              this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl7.jpg'),play: 165000, view: 250});
              this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl8.jpg'),play: 750000, view: 134});
              this.list.push({title: '烤面筋鬼畜',imgUrl: require('../../../assets/image/girl/girl9.jpg'),play: 1685000, view: 668});
  */

          this.loading = false;
          if (this.list.length >= 50) {
            this.finished = true;
          }
        }, 500);
      },
      //格式化数字
      numFormat(num){
        if (num/10000 >= 1) {
          num = num / 1000 +"万";
        }
        return num;
      }


    }
  }
</script>

<style scoped>

  .rank-container{
    z-index: -1;
    position: fixed;
    width: 100%;
    top: 116px;
    bottom: 50px;
    left: 0;
    /*// TODO: 明天测试看是不是因为border-bottom让滚动条出现了，滚动条一旦出现，就会滚动检查;没有border-bottom就没有撑起来没有滚动条 */
    border-bottom: 1px solid #ffffff;/* // MARK: 不知道为什么加顶部、底部就能触发初始化滚动检查*/
    background-color: #f8f8f8;
    overflow-y: auto;
    /*box-sizing: border-box;*/

  }



  .rank-card{
    position: relative;
    height: 100px;
    width: 100%;
    margin: 5px 0;
    background-color: #ffffff;
  }


  .rank-card-img{
    position: absolute;
    width: 120px;
    height: 80px;
    margin: 10px;
  }

  .rank-card-content{
    position: absolute;
    left: 140px;
    right: 20px;
    height: 80px;
    margin: 10px;
  }


</style>
