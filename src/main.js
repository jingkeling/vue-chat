// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ws from './components/ws/index';
import store from './store';

import vant from 'vant';
import 'vant/lib/vant-css/index.css';
import 'font-awesome/css/font-awesome.css'


Vue.use(vant);

Vue.use(ws);
Vue.use(iView);
Vue.prototype.doConnect = function () {

}

new Vue({
  el: '#app',
  router,
  store,
  // render:h => h(App)
  components: {myapp: App},
  template: '<myapp/>'
});
