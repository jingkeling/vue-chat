<template>
  <div :class="bgvalue">
    <span style="font-size: 50px;color: #232529">prohub</span>
    <span style="font-family: cursive;font-size: 14px;">为你的所爱而来</span>
    <span style="font-family: cursive;font-size: 14px;">为你的发现停留</span>
    <br>
    <br>
    <div>
      <i-input size="large" style="width: 230px;opacity: 0.5" placeholder="" v-model="name">
        <span slot="prepend"><Icon type="person" style="width: 11px"></Icon></span>
      </i-input>
      <br>
      <i-input size="large" style="width:230px;opacity: 0.5" placeholder="" v-model="password">
        <span slot="prepend"><Icon type="key" style="width: 11px"></Icon></span>
      </i-input>
      <br>
      <Button type="ghost" @click="login" long>
        <Icon type="arrow-right-a" size="18"></Icon>
      </Button>
    </div>
    <span class="copyright">
      2017-2018 &copy; kolin
    </span>
  </div>
</template>

<script>

  import {mapActions} from 'vuex';
  export default {
    data() {
      return {
        name: 'keling',
        password: "",

      }
    },
    computed: {
      bgvalue: function () {
        // return "index bg-image"+Math.floor(Math.random()*5 + 1)
        return "index bg-image1"
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
  .bg-image1 {
    background-image: url(../assets/image/login/login1.jpg);
  }
  .bg-image2 {
    background-image: url(../assets/image/login/login2.jpg);
  }
  .bg-image3 {
    background-image: url(../assets/image/login/login3.jpg);
  }
  .bg-image4 {
    background-image: url(../assets/image/login/login4.jpg);
  }
  .bg-image5 {
    background-image: url(../assets/image/login/login5.jpg);
  }
  .bg-image6 {
    background-image: url(../assets/image/login/login6.jpg);
  }
  .copyright {
    position: absolute;
    bottom: 0px;
  }

</style>
