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
        name: 'keling',
        password: "",

      }
    },
    computed: {
      bgvalue: function () {
        return "index"
      }

    },
    methods: {
      login() {
        const formData = new FormData();
        formData.append("username", this.name);
        const url = "http://192.168.19.250:8082/user/login";
        let request = new Request(url, {
          method: 'POST',
          credentials: 'include',
          body: formData
        });
        fetch(request).then(response => {
          return response.json();
        }).then(data => {
          this.setMyInfo({userInfo: data});
          this.$router.push({name: 'index'});
        }).catch(e => {
          console.log(e);
          alert("不能登录")
        });

      },
      ...mapActions([
        'setMyInfo'
      ])
    }
  }
</script>

<style scoped>

  .index {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
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
