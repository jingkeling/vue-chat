import Vue from 'vue';
import vuex from 'vuex'


Vue.use(vuex);


export default new vuex.Store({
  modules: {

    //专门聊天的模块
    modChat:{

      //状态
      state: {
        chatArr:[],
        myChat:{}
      },
      mutations:{
        _getMessage(state, {chatInfo}){
          state.chatArr.push(chatInfo);
        },

      },
      actions: {
        //这个由websocket的onMessage事件里触发(目前自己的消息，不管事谁的都只能通过websocket获取)
        getMessage(context, {chatInfo}) {
          context.commit('_getMessage',{chatInfo})
        }
      },
      getters: {
        showChat(state) {
          return state.chatArr;
        },
        sendMyChat(state) {
          return state.myChat;
        }
      }
    },
    modUser:{
      state: {
        myInfo:{}
      },
      mutations:{
        //设置自己的登录信息
        _setMyInfo(state,{userInfo}) {
          state.myInfo = userInfo;
        }
      },
      actions: {
        setMyInfo(context,{userInfo}){
          context.commit("_setMyInfo", {userInfo})
        }
      },
      getters: {
        showMyInfo(state){
          return state.myInfo;
        }
      }

    },
    modWebsocket:{
      state:{
        isConnect: 0,
        isOnline: false
      },
      mutations: {
        _connectWS(state){
          state.isConnect += 1;
          alert(state.isConnect)
        },
        _isOnline(state, {isOnline}){
          state.isOnline = isOnline;
        },

      },
      actions: {
        connectWS(context) {
          context.commit('_connectWS');
        },
        isOnline(context, {isOnline}) {
          context.commit('_isOnline', {isOnline});
        }
      },
      getters: {
        showIsConnect(state) {
          return state.isConnect;
        },
        showIsOnline(state) {
          return state.isOnline;
        }
      }
    }
  }



})
