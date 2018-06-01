<template>
    <div class="video-container">
      <div class="video-header">
        <img src="../../assets/image/recommend/recommend1.jpg" width="100%" height="100%" alt="">


        <div style="position: absolute;left: 15px;top: 5px;" @click="changePage">
          <i class="fa fa-angle-left" style="font-size: 30px;color: #ffffff;"></i>
        </div>
        <div style="position: absolute;right: 15px;top: 5px;">
          <i class="fa fa-ellipsis-v" style="font-size: 20px;color: #ffffff;"></i>
        </div>
        <div style="position: absolute;right: 15px;bottom: 5px;">
          <i class="fa fa-youtube-play" style="font-size: 50px;color: #ffffff;"></i>
        </div>
      </div>

      <div class="video-body"></div>
    </div>
</template>

<script>
    export default {
        name: "video",
      methods:{
        changePage(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style>
  .video-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-header{
    position: relative;
    width: 100%;
    height: 200px;
  }

  .video-body{
    position: fixed;
    top: 200px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;


  }




</style>
