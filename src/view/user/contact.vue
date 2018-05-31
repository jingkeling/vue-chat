<template>
    <div>
      <!--头-->
      <contact-header></contact-header>
      <!--联系人列表-->
      <div class="contact-list">
        <van-list
          class="contact-van-list"
          v-model="loading"
          :finished="finished"
          :offset="offset"
          @load="onLoad"
        >
          <div class="contact-row van-hairline--bottom" v-for="(obj, index) in contactArr" :key="index" :title="obj + ''">
            <!---联系人头像-->
            <div class="contact-row-avator">
              <img :src="obj.avator" width="100%" height="100%">
            </div>
            <!--练习人标题-->
            <div class="contact-row-title">
              {{obj.nickname}}
            </div>

          </div>
        </van-list>
      </div>
    </div>
</template>

<script>
  import contactheader from './contactheader'
  /*首字母随机头像*/
  import avatar from 'vue-avatar'


  export default {
    data() {
      return{
        list: [],
        loading: false,
        finished: false,
        offset: 1,
        contactArr: [
          {avator: require('../../assets/image/girl/girl.jpg') , nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl1.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl2.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl3.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl4.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl5.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl6.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl7.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl8.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl9.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl10.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl11.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl12.jpg'), nickname: 'keling'},
          {avator: require('../../assets/image/girl/girl13.jpg'), nickname: 'keling'}
          ]
      }
    },
    created(){
      // TODO: 查询所有用户（用户量少）

    },
    components:{
      'contact-header': contactheader,
      avatar
    },
    methods:{
      onLoad() {

        //生成随机头像
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.contactArr.push(this.contactArr[0]);
          }
          this.loading = false;
          if (this.contactArr.length >= 100) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style scoped>

  .contact-list{
    position: fixed;
    left: 0;
    top: 50px;
    bottom: 50px;
    width: 100%;
  }
  .contact-van-list{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    bottom: 0;
    overflow-y: auto;
  }
  .contact-row{
    position: relative;
    height: 70px;
    width: 100%;


  }

  .contact-row-avator{
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 5px;


  }

  .contact-row-title{
    display: inline-block;
    vertical-align: top;
    text-align: center;
    line-height: 30px;
    font-size: 15px;

  }

</style>
