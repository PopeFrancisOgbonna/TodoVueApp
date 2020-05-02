import Vue from 'vue'
import Home from '../pages/Home.vue'
import bootstrap from'bootstrap/dist/css/bootstrap.min.css';

Vue.use(bootstrap);


Vue.config.productionTip = false

new Vue({
  render: h => h(Home),
}).$mount('#app')
