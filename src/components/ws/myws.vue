<template>
  <div></div>
</template>

<script>
  // TODO: 怎么保持ws一直连接
  import {mapActions, mapGetters} from 'vuex'
  import {Toast} from 'vant';


  export default {
    data() {
      return {
        ws: null
      }
    },
    created() {
      //判断是不是连接了，没连接再连接


      this.doRun()
    },

    methods: {
      /**
       * 以下是websocket方法
       */
      doRun(){
        const username = this.getCookie("username");
        alert("开始连接：" + username);
        try {
          if ('WebSocket' in window) {
            const uri = this.GLOBAL_MSG.env.WS_URI;
            this.ws = new WebSocket(uri+"/websocket/"+username);
            console.log("用户" + username + "正在使用websocket");

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
        console.log('connect success!');
      },

      //获取服务端的消息(别人发消息来了)
      onMessage(e) {
        let chatInfo = JSON.parse(e.data);
        this.getMessage({chatInfo}) // MARK: 为什么要剥一层{},不直接传参数对象?因为它实际上是{chatInfo: chatInfo}
      },

      //断线重连
      onError(e) {
        console.log("连接错误");
      },
      onClose(e) {
        console.log("连接关闭");
      },
      //点击发送
      doSend(chatInfo) {
        if (this.ws.readyState == this.ws.OPEN) {
          this.ws.send(JSON.stringify(chatInfo));//调用后台handleTextMessage方法
        } else {
          alert("连接断开，发送失败");
        }
      },
      //点击关闭
      doClose() {
        this.ws.close();
      },
      getCookie(key){
        const cookie = document.cookie;
        if (cookie === "" || cookie === undefined || cookie == null) { return null; }
        const arr = cookie.split("; ");
        let result = null;
        arr.forEach(value => {
          const split = value.split("=");
          if (split[0] === key && split[1] !== "") { result = split[1]; }
        });
        return result;
      },
      /**
       * 把服务端的消息存进vuex
       */
      ...mapActions([
        'getMessage','connectWS','isOnline'
      ]),
      myAlert(){
        Toast.loading({
          mask: true,
          message: '加载中...'
        });
      },
    },
    watch: {
      //方法二、子组件通过vuex+watch触发父组件方法
      showIsConnect(newValue, oldValue){
        if (newValue != oldValue && newValue) {
          // this.doRun();
        }
      }
    },
    computed: {

      /**
       * 从vuex中取出状态
       */
      ...mapGetters([
        'showChat','showMyInfo','showIsConnect','showIsOnline'
      ])
    }
  }
</script>


<style scoped>

</style>
