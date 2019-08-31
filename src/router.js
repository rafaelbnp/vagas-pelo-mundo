import VueRouter from 'vue-router';
import Form from '@/components/Form.vue';
import Table from '@/components/Table.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Table },
    { path: '/new', component: Form }
  ]
});
