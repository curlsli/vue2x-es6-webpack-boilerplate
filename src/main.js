import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './components/app/app.vue';
import routes from './router/routes';

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes, 
})

Vue.use(VueResource)

// 创建和挂载根实例。
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

