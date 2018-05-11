<template>
    <div class="test-container">
      <video
        id="theVideo"
        class="video-player"
        @click="playOrPause()"
        preload="auto" src="http://192.168.1.109:8082/girl.mp4"
        webkit-playsinline="true"
        playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint">
      </video>

    </div>
</template>

<script>
    export default {
      data(){
        return {
          video:''
        }
      },
      mounted(){
        this.video = document.getElementById("theVideo");
      },
      methods: {

        geVideo(){
          let url = "http://cn-sxxa-dx-v-03.acgvideo.com/vg7/9/7d/6689771-1-hd.mp4?expires=1489820100&platform=pc&ssig=QUB9WZ97u8YujcGAlcTxNg&oi=1855518653&nfa=iCnd1wqqoAsXLyv+e2tfVA==&dynamic=1";
        },
        playOrPause() {
          this.video.paused ? this.video.play() : this.video.pause();
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

</style>
