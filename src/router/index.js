/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import VueRouter from 'vue-router';
import MenuPage from '../views/MenuPage';
import SiteMenu from '../views/SiteMain';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: MenuPage,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage'),
  },
  {
    path: '/contact',
    name: 'contact',
    // component: SiteHeader,
  },
  {
    path: '/fastfood/:id',
    name: 'fastfood',
    component: () => import('../views/AboutPage'),
  },
  {
    path: '/korzina',
    name: 'Korzina',
    component: () => import('../views/KorzinaView'),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: SiteMenu },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
