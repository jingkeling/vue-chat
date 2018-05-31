<template>
    <div class="message-header">
      <div class="contact-ico" @click="changePage('contact')">
        <van-icon name="contact" />
      </div>
      消息
      <!--更多-->
      <div class="message-more">
        <i class="fa fa-ellipsis-v"></i>
      </div>
    </div>
</template>

<script>
    export default {
      name: "messageheader",
      methods: {
        changePage(msg) {
          this.$router.push({name: msg});

        }
      }
    }
</script>

<style scoped>

  .message-header{
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    background: #fa7198;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    font-size: 15px;

  }

  .contact-ico{
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 100%;
    font-size: 17px;
    text-align: center;
    line-height: 55px;
  }

  .message-more{
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    font-size: 17px;
    color: #ffffff;
    line-height: 50px;
    text-align: center;
  }

</style>
