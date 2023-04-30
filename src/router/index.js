import { createRouter, createWebHashHistory } from 'vue-router';
import VideoMainPage from '@/views/VideoMainPage.vue';
import CornPage from '@/views/CornPage.vue';
import WheatPage from '@/views/WheatPage.vue';
import ContactPage from '@/views/ContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: VideoMainPage,
  },
  {
    path: '/corn',
    name: 'cornPage',
    component: CornPage,
  },
  {
    path: '/wheat',
    name: 'WheatPage',
    component: WheatPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
