import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('Piio',  require('./components/piio/piio.vue').default);

new Vue({
  render: h => h(App)
}).$mount('#app')
