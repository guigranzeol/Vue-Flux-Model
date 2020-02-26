import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from '@/store/index.js';
import ViaCep from 'vue-viacep'
import VuejsClipper from 'vuejs-clipper'

Vue.use(VuejsClipper)
Vue.use(ViaCep);


Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
