<template>
  <div class="contact-header" @click="">
    <div class="addresslist">
      <van-icon name="add-o" />
    </div>
    联系人
    <!--更多-->
    <div class="contact-back" @click="changePage('message')">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      changePage(msg) {
        this.$router.push({name: msg});
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

  .contact-header{
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

  .addresslist{
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 100%;
    font-size: 17px;
    text-align: center;
    line-height: 55px;
  }

  .contact-back{
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    font-size: 17px;
    color: #ffffff;
    line-height: 55px;
    text-align: center;
  }

</style>
