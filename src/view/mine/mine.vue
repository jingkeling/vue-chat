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
            mineInfo: {avator:"http://i4.bvimg.com/626277/b64fb0792f2fd0ab.jpg",sex: 1,nickname: "不明身份的大魔王",money: 100, zan: 100}

          }
      }
    }
</script>

<style scoped>

</style>
