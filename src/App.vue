<template>
  <div id="app">
    <transition name="slide-left">
      <router-view/>
    </transition>
    <div class="pointapp"></div>
    <!--<div @parentconnect="wsconnecta"></div>-->
    <!--<ws></ws>-->
  </div>

</template>

<script>
  import {mapActions, mapGetters} from 'vuex'


  export default {
    data() {
      return {
      }
    },
    computed: {

      /**
       * 从vuex中取出状态
       */
      ...mapGetters([
        'showChat', 'showMyInfo','showIsConnect'
      ])
    },

/*    methods: {
      /!**
       * 以下是websocket方法
       *!/
      wsconnecta() {
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
        // alert('connect success!');
      },

      //获取服务端的消息(别人发消息来了)
      onMessage(e) {
        let chatInfo = JSON.parse(e.data);
        this.getMessage({chatInfo}) // MARK: 为什么要剥一层{},不直接传参数对象?因为它实际上是{chatInfo: chatInfo}
      },

      //断线重连
      onError(e) {
      },
      onClose(e) {

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
      /!**
       * 把服务端的消息存进vuex
       *!/
      ...mapActions([
        'getMessage'
      ]),

    },*/



    mounted() {

    }
  }
</script>

<style>

  .pointapp{
    position: fixed;
    bottom: 60px;
    right: 0;
    width: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 0.53);
    border-radius: 20px;
    z-index: 5;
  }

</style>
