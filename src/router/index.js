/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import VueRouter from 'vue-router';
import SiteMain from '../views/SiteMain';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: SiteMain,
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
    // component: SiteHeader,
  },
  {
    path: '/fastfood/:id',
    name: 'fastfood',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutPage'),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: SiteMain },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
