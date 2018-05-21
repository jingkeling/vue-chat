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
