import Vue from 'vue'
import Router from 'vue-router'

import login from '../view/login';

import index from '../view/index';
import home from '../view/home/home';
import message from '../view/message/message';
import discovery from '../view/discovery/discovery';
import chathub from '../view/lab/chathub';

import video from '../view/video/video';
import mine from '../view/mine/mine';
import test from '../view/test/test';

import {Toast} from 'vant';

import store from '../store';


Vue.use(Router);


const router = new Router({
  routes: [
    //设置自动跳转，地址为空时自动跳转home页面
    {
      path: '',
      redirect: '/login'
    },
    //
    {
      path: "/index",
      name: 'index',
      component: index,
      children: [
        {path: 'video', component: video, name: 'video'},
        {path: 'home', component: home, name: 'home'},
        {path: 'message', component: message, name: 'message'},
        {path: 'discovery', component: discovery, name: 'discovery'},
        {path: 'mine', component: mine, name: 'mine'},
      ]
    },
    {
      path: '/chathub',
      component: chathub,
      name: 'chathub'
    },
    //欢迎页
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    //测试页面
    {
      path: '/test',
      component: test
    }
  ]
});

/**
 * 导航守卫
 */
router.beforeEach((to, from, next) => {
  const nextRouter = ['index', 'chathub'];
  next();

});
router.afterEach((to, from) => {
  // Toast('切换页面了'+ Math.random().toFixed(2));
  Toast(store.getters.showMyInfo.username);

});
export default router;
