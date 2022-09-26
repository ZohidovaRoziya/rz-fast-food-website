/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import VueRouter from 'vue-router';
import SiteHeader from '../views/SiteHeader';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: SiteHeader,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage'),
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SiteHeader,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
