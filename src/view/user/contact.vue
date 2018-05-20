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
          <van-cell v-for="item in list" :key="item" :title="item + ''">
            <!--// TODO: 联系人 -->
          </van-cell>
        </van-list>
      </div>
    </div>
</template>

<script>
  import contactheader from './contactheader'

  export default {
    data() {
      return{
        list: [],
        loading: false,
        finished: false,
        offset: 1,
      }
    },
    created(){
      // TODO: 查询所有用户
    },
    components:{
      'contact-header': contactheader
    },
    methods:{
      onLoad() {

        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          this.loading = false;

          if (this.list.length >= 100) {
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

</style>
