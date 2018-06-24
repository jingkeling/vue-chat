<template>
  <div></div>
</template>

<script>

  /**
   * 服务器地址
   */
  const SERVER_ROOT = "192.168.31.133:8085/chathub";
  const SERVER_URI = "http://" + SERVER_ROOT;
  const WS_URI = "WS://" + SERVER_ROOT;

  const env = {
    SERVER_URI,
    WS_URI
  };

  /*
   * 全局变量文件
   */
  export default {
    env
  }

</script>

<style scoped>

</style>
