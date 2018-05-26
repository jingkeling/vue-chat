<template>
  <mine-header :mineInfo="mineInfo"></mine-header>
</template>

<script>

  import header from './mineheader'
    export default {
        name: "my",
      components:{
          "mine-header": header
      },
      data() {
          return{
            mineInfo: {avator:"https://pic-1253206304.cos.ap-shanghai.myqcloud.com/v2-56f6752d75c79ebe836149de4550282a_hd.jpg",sex: 1,nickname: "不明身份的大魔王",money: 100, zan: 100}

          }
      }
    }
</script>

<style scoped>

</style>
