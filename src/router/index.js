import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
import storePage from '../views/storePage.vue'
import macPage from '../views/macPage.vue'
import iphonePage from '../views/iphonePage.vue'
import ipadPage from '../views/ipadPage.vue'
import watchPage from '../views/watchPage.vue'
import tvPage from '../views/tvPage.vue'
import airpodPage from '../views/airpodPage.vue'
import airpodProdoctPage from '../views/airpodProdoctPage.vue'
import pagenotfound from '../views/pageNotFound.vue'
const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage,
    props: true,
  },
  {
    path: '/store',
    name: 'StorePage',
    component: storePage,
    props: true,
  },
  {
    path: '/mac',
    name: 'MacPage',
    component: macPage,
    props: true,
  },
  {
    path: '/iphone',
    name: 'iphonePage',
    component: iphonePage,
    props: true,
  },
  {
    path: '/ipad',
    name: 'ipadPage',
    component: ipadPage,
    props: true,

  },
  {
    path: '/watch',
    name: 'watchPage',
    component: watchPage,
    props: true,
  },
  {
    path: '/tv',
    name: 'tvPage',
    component: tvPage,
    props: true,
  },
  {
    path: '/airpod',
    name: 'airpodpage',
    component: airpodPage,
    props: true,
  },
  {
    path: '/airpod/:id',
    name: 'airpodProdoctPage',
    component: airpodProdoctPage,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: '404page',
    component: pagenotfound,
  }
  // {
  //   path: '/test',
  //   name: 'testPage',
  //   component: testPage,
  //   props: true,
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
