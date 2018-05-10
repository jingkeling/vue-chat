<template>
  <div></div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'


  export default {
    data() {
      return {
        ws: null
      }
    },
    created() {
      this.doRun()
    },
    methods: {
      /**
       * 以下是websocket方法
       */
      doRun(){
        try {
          if ('WebSocket' in window) {
            this.ws = new WebSocket("ws://192.168.19.250:8082/websocket/1995");
            console.log("正在使用websocket");
          }
        } catch (e) {
          alert('捕捉new WebSocket异常');
          return;
        }
        this.ws.onopen = this.onOpen;
        this.ws.onmessage = this.onMessage;
        this.ws.onerror = this.onError;
        this.ws.onclose = this.onClose;
      },
      //
      onOpen(e) {
        alert('connect success!');
      },

      //获取服务端的消息(别人发消息来了)
      onMessage(e) {
        let chatInfo = JSON.parse(e.data);
        this.getMessage({chatInfo})
      },

      onError(e) {
        alert("error " + e);
      },

      onClose(e) {
        alert("connect closed:" + e.code);
      },
      //点击发送
      doSend() {
        if (ws.readyState == ws.OPEN) {
          var msg = document.getElementById("inputMsg").value;
          ws.send(msg);//调用后台handleTextMessage方法
          alert("发送成功!");
        } else {
          alert("连接失败!");
        }
      },
      //点击关闭
      doClose() {
        this.ws.close();
      },
      /**
       * 操作vuex中的方法
       */
      ...mapActions([
        'getMessage'
      ])
    },
    computed: {

      /**
       * 从vuex中取出状态
       */
      ...mapGetters([
        'showChat','showMyInfo'
      ])
    }
  }
</script>




<style scoped>

</style>
