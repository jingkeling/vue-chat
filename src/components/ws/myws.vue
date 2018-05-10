<template>
  <div></div>
</template>

<script>
  // TODO: 怎么保持ws一直连接
  import {mapActions, mapGetters} from 'vuex'
  import reconnectingwebsocket from 'reconnectingwebsocket';

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
            this.ws = new WebSocket("ws://192.168.1.109:8082/websocket/1995");
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
        // alert('connect success!');
      },

      //获取服务端的消息(别人发消息来了)
      onMessage(e) {
        let chatInfo = JSON.parse(e.data);
        this.getMessage({chatInfo}) // MARK: 为什么要剥一层{},不直接传参数对象?因为它实际上是{chatInfo: chatInfo}
      },

      //断线重连
      onError(e) {
        this.myAlert();
      },
      onClose(e) {
        this.myAlert();

      },
      //点击发送
      doSend() {
        if (this.ws.readyState == this.ws.OPEN) {
          let msg = "11";
          this.ws.send(msg);//调用后台handleTextMessage方法
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
       * 把服务端的消息存进vuex
       */
      ...mapActions([
        'getMessage'
      ]),
      myAlert(){
        Toast.loading({
          mask: true,
          message: '加载中...'
        });
      },
    },
    watch: {

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
