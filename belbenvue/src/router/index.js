import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Eksempelkomponent

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Legg til flere ruter her, f.eks.:
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
