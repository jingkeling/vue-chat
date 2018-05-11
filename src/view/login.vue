<template>
  <div :class="bgvalue">
    <div>
      <i-input size="large" style="width: 230px;opacity: 0.5" placeholder="" v-model="name">
        <span slot="prepend"><Icon type="person" style="width: 11px"></Icon></span>
      </i-input>
      <br>
      <Button type="ghost" @click="login" long>
        <Icon type="arrow-right-a" size="18"></Icon>
      </Button>
    </div>
    <div class="login-img">
      <img src="../assets/image/login/lu.jpg" width="100%" height="100%" alt="">
    </div>

  </div>
</template>

<script>

  import {mapActions} from 'vuex';
  import VanNode from "vant/packages/utils/node";
  export default {
    components: {VanNode},
    data() {
      return {
        name: '',
        password: "",

      }
    },
    computed: {
      bgvalue: function () {
        return "index"
      }

    },
    mounted(){
      //判断是不是有cookie登录信息
      this.autoLogin();
    },
    methods: {
      login() {
        let $this = this;
        if (this.name == null || this.name === "") {
             return;
        }
        const formData = new FormData();
        formData.append("username", this.name);
        const url = "http://192.168.1.109:8082/user/login";
        let request = new Request(url, {
          method: 'POST',
          credentials: 'include',
          body: formData
        });
        fetch(request).then(response => {
          return response.json();
        }).then(data => {

          //登录成功储存登录信息并跳转
          $this.setCookie("username", this.name);
          $this.setCookie("avator", data.avator);
          $this.setMyInfo({userInfo: data});

          $this.$router.push({name: 'index'});
        }).catch(e => {
          console.log(e);
          alert("不能登录")
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

  }
  .login-img{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(3px) brightness(40%);
  }



</style>
