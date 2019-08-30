import VueRouter from 'vue-router';
import Table from './components/Table.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Table },
    // { path: '/register', component: Register },
    // { path: '/login', component: Login }
  ]
});

export default router;
