import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import About from './pages/About';
import Works from './pages/Works';
import Reviews from './pages/Reviews';

const routes = [
  {
    path: '/',
    component: About
  },
  {
    path: '/works',
    component: Works
  },
  {
    path: '/reviews',
    component: Reviews
  }
];

export default new VueRouter({
    routes,
    // mode: 'history'
});
