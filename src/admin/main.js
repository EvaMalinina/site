// import '../styles/main.pcss';
import Vue from 'vue';
import App from './App.vue'
import SimpleVueValidation from 'simple-vue-validator';
import router from './router';
// import {store} from './store';

Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  router,
  // store,
  render: h => h(App)
})