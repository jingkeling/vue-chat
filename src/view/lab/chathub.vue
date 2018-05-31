<template>
  <div>
    <div class="chat-header">
      <!--返回-->
      <div class="chat-back" @click="goBack">
        <van-icon name="arrow-left"/>
      </div>
      群聊
      <!--更多-->
      <div class="chat-more">
        <i class="fa fa-address-book-o"></i>
      </div>
    </div>
    <div class="chat-container">
      <!--一行-->
      <div class="chatRow">
        <div>
          <img class="user_image" src="../../assets/image/chathub/user1.jpeg" width="50" style="border-radius: 50%" alt="">
        </div>
        <div class="arrow"></div>
        <div>
          <div class="chatName">kolin</div>
          <div class="chatContent">
            大家玩得开心
          </div>
        </div>
      </div>
      <!--每人消息一整行-->
      <div v-for="(obj,key) in showChat" :class="['chatRow',obj.username === showMyInfo.username?'chatRow-me':null]">
        <!--用户头像-->
        <div>
          <img class="user_image" :src="obj.avator" :onerror="errorSrc" width="50" height="50" style="border-radius: 50%" alt="">
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

    <!--发送按钮-->
    <div class="chat-input">
      <van-cell-group>
        <van-field
          center
          v-model="message"
          placeholder="请输入聊天内容"
          icon="clear"
          @click-icon="message = ''"
        >
          <van-button slot="button" size="small" type="primary" @click="mychat">发送</van-button>
        </van-field>
      </van-cell-group>
    </div>
   <!-- <div style="position: absolute;top: 90%;left: 20%;">
      <i-input style="width:488px;" v-model="messageyou" placeholder="请输入..."></i-input>
      <Button type="primary" @click="youchat">模拟别人发送</Button>
    </div>-->
    <ws></ws>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "chathub",
        data(){
          return {
            message:'',
            messageyou: '',
            errorSrc: "this.src='https://i.loli.net/2018/05/20/5b015b314f012.jpg';" //错误图片
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
          /**
           * 利用http发送聊天消息
           * @param myInfo
           */
          sendMyChat(myInfo) {
            let $this = this;
            let username = myInfo.username;
            // HERE: 没必要登录信息，前端刷新就没有，由后端管理
            /*if (username ==null || username ==="") {
              $this.$router.push({name: "login"})
            }*/
            let avator = myInfo.avator;
            let message = this.message;
            let chatInfo = {
              username,
              avator,
              message
            };
            const url = this.GLOBAL_MSG.env.SERVER_URI + "/chat/sendMessage";
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
              alert("sendMessage请求catch到了异常: 断网");
              $this.$router.push({name: "login"});
              console.log(e);
            });
            this.message = '';
          },
          /**
           * 从cookie获取登录信息
           */
          getUsername(){
            return document.cookie.split(";")[0].split("=")[1];
          },
          /**
           * 路由退回
           */
          goBack() {
            this.$router.go(-1);
          }
        }

    }

</script>

<style scoped>

  body {
    background-color: #32373a;
  }

  .chat-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fa7198;
    color: #ffffff;
    line-height: 50px;
    text-align: center;
    font-size: 15px;
  }

  .chat-container {
    position: fixed;
    width: 100%;
    bottom: 50px;
    top: 50px;
    background-color: #f6f6f6;
    overflow-y: auto;/*让它出现滚动条*/
    border-radius: 0;


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
    background-color: rgba(255, 255, 255, 0.9);
    /*background-color: rgba(137, 198, 40, 0.9);*/
    box-shadow: 0 0 3px #b5b5b5;

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
    z-index: 1;
    border-color: transparent rgba(255, 255, 255, 0.9) transparent transparent ;/*给颜色谁三角形就在哪边*/
  }
  .arrow-me {
    z-index: 1;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.9);/*给颜色谁三角形就在哪边*/
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

  .chat-input{
    width: 100%;
    position: fixed;
    bottom: 0;
  }

  .chat-back{
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    bottom: 0;
    height: 100%;
    color: #ffffff;
    font-size: 17px;
    text-align: center;
    line-height: 55px;
  }
  .chat-more{
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
  }

</style>

