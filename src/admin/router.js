import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import About from './pages/About';
import Works from './pages/Works';
import Reviews from './pages/Reviews';

const routes = [
  {
    path: '/about',
    components: About
  },
  {
    path: '/works',
    components: Works
  },
  {
    path: '/reviews',
    components: Reviews
  }
];

export default new VueRouter({ routes, mode: 'history' });
