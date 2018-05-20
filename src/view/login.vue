<template>
  <div class="index">
    <div class="login-header">
      登录
      <div class="login-forget">
        忘记密码
      </div>
    </div>
    <!--用户名栏-->
    <div class="login-img">
      <img :src="'/static/img/login/login_'+bgimgurl+'.jpg'" width="100%" height="100%">
    </div>
    <div class="login-wrapper">
      <div class="login-row van-hairline--bottom">
        <div class="login-user-ico">
          <i class="fa fa-user-o"></i>
        </div>
        <van-field
          @click="changeImage('user')"
          class="login-user-input"
          center
          v-model="username"
          placeholder="请输入用户名"
          icon="clear"
          @click-icon="username = ''"
        >
        </van-field>
      </div>
      <!--密码栏-->
      <div class="login-row van-hairline--bottom">
        <!--密码栏图标-->
        <div class="login-user-ico" @click="showPassword">
          <van-icon :name="passwordIcoName" />
        </div>
        <van-field
          :type="passwordType"
          @click="changeImage('password')"
          class="login-user-input"
          center
          v-model="password"
          placeholder="请输入密码"
          icon="clear"
          @click-icon="password = ''"
        >
        </van-field>
      </div>
      <div class="login-buttom">
        <div class="login-register">注册</div>
        <div class="login-loginin" @click="login">登录</div>
      </div>

    </div>

  </div>
</template>

<script>
  import {Toast} from 'vant'
  import {mapActions} from 'vuex';
  import VanNode from "vant/packages/utils/node";
  export default {
    components: {VanNode},
    data() {
      return {
        username: '',
        password: "",
        bgimgurl: "user",
        passwordType: "password",
        passwordIcoName: "password-not-view"


      }
    },
    computed: {


    },
    mounted(){
      //判断是不是有cookie登录信息
      this.autoLogin();
    },
    methods: {
      changeImage(msg){
        this.bgimgurl = msg;
      },
      login() {
        let $this = this;
        if (this.username == null || this.username === "") {
             return;
        }
        const formData = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.password);
        const url = "http://192.168.1.110:8082/user/login";
        let request = new Request(url, {
          method: 'POST',
          credentials: 'include',
          body: formData
        });
        fetch(request).then(response => {
          return response.json();
        }).then(data => {
          //登录成功储存登录信息并跳转
          $this.setCookie("username", this.username);
          $this.setCookie("avator", data.avator);
          $this.setMyInfo({userInfo: data});
          $this.$router.push({name: 'index'});
        }).catch(e => {
          Toast("登录失败: 账户或密码错误")
        });

      },
      ...mapActions([
        'setMyInfo', 'connectWS'
      ]),
      setCookie(key, value){
        document.cookie = key + "=" + value;
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
      deleteCookie(key){
        document.cookie = key+"=; s"
      },
      // TODO: 最好改成用导航守卫做的
      autoLogin(){
        const username = this.getCookie('username');
        const avator = this.getCookie('avator');
        if (username == null || avator == null) { return;}
        this.setMyInfo({userInfo: {username, avator}});
        this.$router.push({name: 'index'});

      },
      showPassword(){
        //显示隐藏密码、更替密码栏图标
        if (this.passwordType === "password") {
          this.passwordType = "text";
          this.passwordIcoName = "password-view"
        } else {
          this.passwordType = "password";
          this.passwordIcoName = "password-not-view";
        }

      }

    }
  }
</script>

<style scoped>

  .index {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #f7f7f7;

  }
  .login-header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: rgb(250, 113, 152);
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    font-size: 17px;
    font-weight: bold;
  }
  .login-forget{
    position: absolute;
    height: 100%;
    width: 90px;
    right: 0;
    top: 0;
    font-size: 12px;
    font-weight: normal;

  }
  .login-img{
    position: fixed;
    top: 50px;
    height: 95px;
    width: 100%;
  }
  .login-wrapper{
    position: fixed;
    top: 145px;
    width: 100%;
    height: 94px;
  }
  .login-row{
    position: relative;
    width: 100%;
  }

  .login-user-input{
    display: inline-block;
    position: absolute;
    right: 0;
    width: 85%;

  }


  .login-user-ico{
    display: inline-block;
    width: 15%;
    left: 0;
    line-height: 44px;
    text-align: center;
    background-color: #ffffff;

  }

  .login-buttom{
    position: relative;
    width: 100%;
    height: 60px;
    padding: 5px 0;
    display: flex;
    justify-content: center;

  }
  .login-buttom > div{
    height: 40px;
    width: 150px;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    user-select: none;
  }

  .login-register{
    background-color: #ffffff;
    margin-right: 10px;
  }
  .login-loginin{
    color: #ffffff;
    background-color: #f2a4ba;
    margin-left: 10px;

  }

  /*TODO: 触摸事件  */
/*
  .login-loginin:hover{
    border-radius:5px;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: orangePulse;
  }

  @keyframes orangePulse {
    from { background-color: #a14200; box-shadow: 0 0 9px #000; }
    50% { background-color: #ff5c00; box-shadow: 0 0 18px #ff5c00; }
    to { background-color: #7b3d00; box-shadow: 0 0 9px #000; }
  }
*/







</style>
