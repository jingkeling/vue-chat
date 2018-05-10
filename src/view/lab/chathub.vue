<template>
  <div>
    <div class="sidebar">

    </div>
    <div class="container">
      <!--一行-->
      <div class="chatRow">
        <div>
          <img class="user_image" src="../../assets/image/chathub/user1.jpeg" width="50" style="border-radius: 50%" alt="">
        </div>
        <div class="arrow"></div>
        <div>
          <div class="chatName">柯铃</div>
          <div class="chatContent">
            大家玩得开心
          </div>
        </div>
      </div>
      <!--每人消息一整行-->
      <div v-for="(obj,key) in showChat" :class="['chatRow',obj.username === showMyInfo.username?'chatRow-me':null]">
        <!--用户头像-->
        <div>
          <img class="user_image" :src="obj.avator" width="50" style="border-radius: 50%" alt="">
        </div>
        <div :class="['arrow',obj.username === showMyInfo.username?'arrow-me':null]"></div>
        <div>
          <!--用户名-->
          <div :class="['chatName',obj.username === showMyInfo.username?'chatName-me':null]">{{obj.username}}</div>
          <div :class="['chatContent',obj.username === showMyInfo.username?'chatContent-me':null]">
            {{obj.message}}
          </div>
        </div>
      </div>

    </div>
    <div style="position: absolute;top: 85%;left: 20%;">
      <i-input style="width:488px;" v-model="message" placeholder="请输入..."></i-input>
      <Button type="primary" @click="mychat">发送</Button>
    </div>
   <!-- <div style="position: absolute;top: 90%;left: 20%;">
      <i-input style="width:488px;" v-model="messageyou" placeholder="请输入..."></i-input>
      <Button type="primary" @click="youchat">模拟别人发送</Button>
    </div>-->
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "chathub",
        data(){
          return {
            message:'',
            messageyou: ''
          }
        },
        computed: {
          ...mapGetters([
            'showChat','showMyInfo'
          ])
        },
        methods:{
          //直接向服务发送
          mychat() {
            // this.objs.push({message:this.message,image,username:"01"});//
            let myInfo = this.showMyInfo;
            this.sendMyChat(myInfo);
          },
          //模拟别人发送的
          youchat() {
            this.objs.push({message:"模拟别人发送的",username:"msg",avator: 'msg'});
          },
          sendMyChat(myInfo) {
            let username = myInfo.username;
            let avator = myInfo.avator;
            let message = this.message;
            let chatInfo = {
              username,
              avator,
              message
            };
            let url = "http://192.168.19.250:8082/chat/sendMessage";
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            let request = new Request(url, {
              headers,
              method: 'POST',
              body: JSON.stringify(chatInfo),
              credentials: 'include'
            });
            fetch(request).then(function (res) {
              return res.text();
            }).then(function (data) {
              console.log(data);
            }).catch(function (e) {
              console.log(e);
            })
          },
          getUsername(){
            return document.cookie.split(";")[0].split("=")[1];
          }
        }

    }

</script>

<style>

  body {
    background-color: #f2f3ff;
  }

  .container {
    position: absolute;
    left: 20%;
    width: 550px;
    height: 80%;
    background-color: #d6d6d6;
    overflow: auto;/*让它出现滚动条*/
    border: 2px solid #a6a6a6;
    border-radius: 10px;


  }
  .chatRow {
    margin-top: 10px;
    display: flex;
    align-items: flex-start;

    width: 100%;
  }
  .chatRow-me {
    flex-direction: row-reverse;
  }
  /*聊天内容div*/
  .chatContent {
    background-color: #fff;
    padding: 10px;
    max-width: 250px;
    min-height: 30px;
    border-radius: 6px;
    background-color: rgba(137, 198, 40, 0.9);
  }
  /*
          .chatContent-you::after {
              content: '';
              left: -100%;
              position: relative;
              border-width: 15px; !*尖的尺寸*!
              border-style: solid;
              border-color: transparent rgba(137, 198, 40, 0.7) transparent transparent ;!*给颜色谁三角形就在哪边*!

          }*/

  .chatContent-me{

  }

  .user_image {
    margin-top: 25px;
  }

  /*小箭头*/
  .arrow {
    border-width: 8px; /*尖的尺寸*/
    border-style: solid;
    /*border-color: transparent rgba(137, 198, 40, 0.7) transparent transparent ;!*给颜色谁三角形就在哪边*!*/
    margin-top: 47px;
    border-color: transparent rgba(137, 198, 40, 0.9) transparent transparent ;/*给颜色谁三角形就在哪边*/

  }
  .arrow-me {
    border-color: transparent transparent transparent rgba(137, 198, 40, 0.9);/*给颜色谁三角形就在哪边*/
  }

  .chatName {
    margin-top: 20px;
    color: #a6a6a6;
    font-family: "微软雅黑", "Microsoft Yahei";
    font-size: 13px;
  }
  .chatName-me {
    text-align: right;

  }

  /*--------左侧-------*/
  .sidebar {
    position: absolute;
    width: 18%;
    height: 693px;
    background: #ffffff;
    border-radius: 10px;
  }
</style>

