import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCodeHighlight from 'vue-code-highlight';
import 'prism-es6/components/prism-markup-templating';
import Piio from 'piio-images-vue'
Vue.use(Piio)
Vue.use(VueCodeHighlight)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
