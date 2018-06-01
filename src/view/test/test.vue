<template>
  <div class="test-container">
    <!--video-->
    <video
      id="theVideo"
      class="video-player"
      @click="playOrPause()"
      preload="auto" :src='this.GLOBAL_MSG.env.SERVER_URI + "/girl.mp4"'
      poster="./videoindex.png"
      webkit-playsinline="true"
      playsinline="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint">
    </video>

    <!--返回按钮-->
    <div class="test-back" @click="goback">
      <i class="fa fa-chevron-left"></i>
    </div>
    <transition class="slide-fade">
      <div v-show="showPasue" class="test-pasue">
        <i class="fa fa-youtube-play"></i>
      </div>
    </transition>
    <!--进度条-->
    <div class="video-slider">
      <van-slider v-model="timeline" @change="onChange" :value="timeline" bar-height="7px" />
    </div>
  </div>
</template>

<script>

  import {Toast} from 'vant'
    export default {
      data(){
        return {
          video:'',
          showPasue: true,
          timeline: 0
        }
      },
      mounted(){
        this.video = document.getElementById("theVideo");
        setInterval(this.getVideoTime, 1500);
      },
      methods: {

        geVideo(){
          let url = "http://cn-sxxa-dx-v-03.acgvideo.com/vg7/9/7d/6689771-1-hd.mp4?expires=1489820100&platform=pc&ssig=QUB9WZ97u8YujcGAlcTxNg&oi=1855518653&nfa=iCnd1wqqoAsXLyv+e2tfVA==&dynamic=1";
        },
        playOrPause() {
          // Toast("流量有限，暂不提供视频");
          // this.video.paused ? this.video.play() : this.video.pause();
          if (this.video.paused) {
            this.video.play();
            this.showPasue = false;
          } else {
            this.video.pause();
            this.showPasue = true;
          }
        },
        goback() {
          this.$router.go(-1);
        },
        getVideoTime() {
          let duration = this.video.duration;
          let curTime = this.video.currentTime;
          let time = (curTime/ duration) * 100;
          // Toast(time);
          this.timeline = time;
          // Toast(this.value)
        },
        //手动移动滑块改变时间
        onChange(value) {
          // this.$toast('当前值：' + value);
          let duration = this.video.duration;
          let curTime = (value / 100) * duration;
          this.video.currentTime = curTime;

        }

      }
    }
</script>

<style scoped>

  .test-container {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .video-player{
    position: fixed;
    bottom: 0;
    width: 100%;
    /*height: 100%;*/
    object-fit: contain;
  }
  .test-back{
    position: fixed;
    left: 0;
    right: 0;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 23px;
    background-color: rgba(0, 0, 0, 0.05);
    color: #f7f7f7;
  }
  .test-pasue{
    position: absolute;
    width: 60px;
    height: 60px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 60px;
    pointer-events: none;
    color: #f1f1f1;
  }
  .video-slider{
    position: fixed;
    width: 100%;
    bottom: 20px;
  }


</style>
