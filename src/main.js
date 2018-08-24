import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import HelloPage from './components/HelloWorld'
import WelcomePage from './components/Inbox'
import 'identicon.js'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: '/', components: {
      default: WelcomePage
    }
  },
  {
    path: '/test', component: HelloPage
  }
];

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
