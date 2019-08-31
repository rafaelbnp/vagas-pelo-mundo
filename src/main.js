import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import FlagIcon from 'vue-flag-icon';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import router from '@/router';

library.add(faGlobe);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// TODO: package.json: see what should go in dependencies and devDependencies

Vue.config.productionTip = false;
Vue.use(VueRouter); // TODO: do we really need vue-router?
Vue.use(FlagIcon);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
